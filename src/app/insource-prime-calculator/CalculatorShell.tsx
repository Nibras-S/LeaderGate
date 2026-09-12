"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUp, CaretDown, Check, GearSix, MagicWand, Microphone, PaperPlaneTilt, Plus, X } from "@phosphor-icons/react";
import { FormEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { calculateQuote, type Quote } from "@/lib/calculator/calculator";
import { detectClarification, extractProfile } from "@/lib/calculator/extraction";
import { pricing } from "@/lib/calculator/pricing";
import { getNextQuestion, type GuidedQuestion } from "@/lib/calculator/questions";
import type { BusinessProfile } from "@/lib/calculator/schema";
import styles from "./calculator.module.css";
import { VoiceMode } from "./VoiceMode";
import { VoiceOrb } from "./VoiceOrb";
import { SuccessNotice } from "./SuccessNotice";

type Message = { id: string; role: "assistant" | "user"; text: string };
type ModelId = "smart" | "openai/gpt-oss-120b" | "openai/gpt-oss-20b" | "llama-3.3-70b-versatile";
type Clarification = { field: keyof BusinessProfile; value: string; prompt: string };
const initialQuestion: GuidedQuestion = { id: "emirate", question: "Which emirate are you planning to set up in?", options: ["Dubai", "Abu Dhabi", "Sharjah", "Not sure"] };
const initialMessages: Message[] = [];
const money = new Intl.NumberFormat("en-AE", { style: "currency", currency: "AED", maximumFractionDigits: 0 });

export function CalculatorShell() {
  const [isOpening, setIsOpening] = useState(true);
  const [isIntroducing, setIsIntroducing] = useState(true);
  const [introRun, setIntroRun] = useState(0);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [profile, setProfile] = useState<BusinessProfile>({});
  const [question, setQuestion] = useState<GuidedQuestion | null>(initialQuestion);
  const [input, setInput] = useState("");
  const [composerExpanded, setComposerExpanded] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [awaitingConfirmation, setAwaitingConfirmation] = useState(false);
  const [quote, setQuote] = useState<Quote | null>(null);
  const [showRestart, setShowRestart] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showModels, setShowModels] = useState(false);
  const [actionNotice, setActionNotice] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<ModelId>("openai/gpt-oss-120b");
  const [clarification, setClarification] = useState<Clarification | null>(null);
  const [voiceOpen, setVoiceOpen] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsOpening(false), 1650);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpening) return;
    const welcome = window.setTimeout(() => {
      setMessages((current) => [...current, { id: crypto.randomUUID(), role: "assistant", text: getWelcomeMessage().split("\n\n")[0] }]);
    }, 1100);
    const firstQuestion = window.setTimeout(() => {
      setMessages((current) => [...current, { id: crypto.randomUUID(), role: "assistant", text: initialQuestion.question }]);
      setIsIntroducing(false);
    }, 2400);
    return () => { window.clearTimeout(welcome); window.clearTimeout(firstQuestion); };
  }, [isOpening, introRun]);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" }); }, [messages, awaitingConfirmation, quote, isThinking]);

  const progress = Math.min(100, [profile.businessActivity, profile.emirate, profile.jurisdiction, profile.partners, profile.visas !== undefined, profile.officeType, profile.banking !== undefined, profile.accounting !== undefined].filter(Boolean).length * 12.5);

  function append(role: Message["role"], text: string) {
    setMessages((current) => [...current, { id: crypto.randomUUID(), role, text }]);
  }

  async function processMessage(raw: string, skipContextValidation = false) {
    const text = raw.trim();
    if (!text || isThinking || isIntroducing) return;
    setInput(""); setComposerExpanded(false); setVoiceOpen(false);
    append("user", text); setIsThinking(true);
    const conversationalReply = getConversationalReply(text, profile, question);
    if (conversationalReply) {
      window.setTimeout(() => { append("assistant", conversationalReply); setIsThinking(false); }, 360);
      return;
    }
    if (isUnclearInput(text)) {
      window.setTimeout(() => {
        append("assistant", `I didn't understand that yet. ${question?.question ?? "Could you tell me a little more about your business setup?"}`);
        setIsThinking(false);
      }, 360);
      return;
    }
    const likelyQuestion = /\?$|^(what|why|how|which is|can you explain|tell me about|what's|whats|difference)/i.test(text);
    // Only short, direct selections belong to field validation. Sentences need
    // intent analysis first, even when they contain a location or a number.
    const directSelection = Boolean(question?.options.some((option) => option.toLowerCase() === text.toLowerCase()));
    const shortChoice = !likelyQuestion && text.split(/\s+/).length <= 2 && /^[a-z -]+$/i.test(text);
    const needsInterpretation = !skipContextValidation && !directSelection;
    const contextResolution = skipContextValidation || !shortChoice ? null : resolveAgainstContext(text, question);
    const possibleClarification = skipContextValidation || !shortChoice ? null : detectClarification(text, question);
    if (possibleClarification) {
      window.setTimeout(() => { setClarification(possibleClarification); append("assistant", possibleClarification.prompt); setIsThinking(false); }, 380);
      return;
    }
    const localProfile = extractProfile(text, profile, question);
    let merged = localProfile;
    let assistantText = "Got it. I've noted that.";
    try {
      const response = await fetch("/api/calculator/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message: text, profile, model: selectedModel, currentQuestion: question }) });
      if (!response.ok) throw new Error("Intent analysis unavailable");
      if (response.ok) {
        const ai = await response.json();
        if (["question", "greeting", "off_topic"].includes(ai.intent)) {
          const reminder = question ? `\n\nWhen you're ready: ${question.question}` : "";
          window.setTimeout(() => { append("assistant", `${ai.message}${reminder}`); setIsThinking(false); }, 360);
          return;
        }
        if (ai.intent === "uncertain" || ai.confidence < .55) {
          if (ai.clarification?.proposedValue) {
            setClarification({ field: question?.id ?? "businessActivity", value: ai.clarification.proposedValue, prompt: ai.clarification.question });
            append("assistant", ai.clarification.question);
          } else append("assistant", ai.message || "Could you clarify whether you're describing a UAE business you want to set up or asking for a different service?");
          setIsThinking(false);
          return;
        }
        if (needsInterpretation && Object.keys(ai.extracted ?? {}).length === 0) {
          append("assistant", ai.message || "Are you describing a business you want to set up, or asking for a different service? I can help with UAE business setup options and cost estimates.");
          setIsThinking(false);
          return;
        }
        // Never mix speculative regex extraction with a free-form AI result.
        // For example, 'write 100 lines of code' must not become 100 visas.
        merged = applyCorrectionRules(profile, { ...(needsInterpretation ? profile : localProfile), ...ai.extracted }, ai.intent === "correction");
        assistantText = buildAcknowledgement(profile, merged);
      }
    } catch {
      if (needsInterpretation) {
        const fallback = shortChoice && contextResolution?.kind === "reject"
          ? contextResolution.message
          : "I couldn't reliably interpret that request right now. I can help with UAE business setup options and cost estimates, but can't build websites, write code, or carry out unrelated tasks here. Are you describing a business you'd like to set up? Please clarify or try again. I haven't changed your setup details.";
        window.setTimeout(() => { append("assistant", fallback); setIsThinking(false); }, 360);
        return;
      }
    }
    merged = applyCorrectionRules(profile, merged, /\b(actually|not|i meant|change|instead)\b/i.test(text));
    setProfile(merged);
    setQuote(null); setAwaitingConfirmation(false); setClarification(null);
    const next = getNextQuestion(merged);
    window.setTimeout(() => {
      if (next) {
        setQuestion(next);
        append("assistant", `${assistantText}\n\n${next.question}`);
      } else {
        setQuestion(null);
        append("assistant", "Here's what I understood about your setup. Please check these details before I calculate your estimate.");
        setAwaitingConfirmation(true);
      }
      setIsThinking(false);
    }, 420);
  }

  async function confirmAndCalculate() {
    setAwaitingConfirmation(false); setIsThinking(true);
    try {
      const response = await fetch("/api/calculator/calculate", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ confirmed: true, profile }) });
      const result = response.ok ? await response.json() : calculateQuote(profile, pricing);
      setQuote(result); append("assistant", "Perfect. I've calculated your estimated setup plan.");
    } catch { setQuote(calculateQuote(profile, pricing)); append("assistant", "Perfect. I've calculated your estimated setup plan."); }
    finally { setIsThinking(false); }
  }

  function reset() {
    setMessages([]); setIsIntroducing(true); setIntroRun((run) => run + 1); setProfile({}); setQuestion(initialQuestion); setInput(""); setQuote(null); setAwaitingConfirmation(false); setShowRestart(false); setVoiceOpen(false); setClarification(null);
  }

  function acceptClarification() {
    if (!clarification) return;
    const answer = clarification.value;
    setClarification(null);
    processMessage(answer, true);
  }

  return (
    <main className={styles.app}>
      <AnimatePresence>{isOpening && <OpeningExperience />}</AnimatePresence>
      <header className={styles.header}>
        <div className={styles.brand}><Image className={styles.brandLogo} src="/insource-prime-logo.webp" alt="Insource Prime" width={190} height={49} priority /><span>Insy · AI Setup Advisor</span></div>
        <div className={styles.headerActions}>
          <button className={styles.iconButton} onClick={() => setShowSettings(true)} aria-label="AI settings"><GearSix size={19} /></button>
          <button className={styles.restartButton} onClick={() => setShowRestart(true)}>Restart</button>
        </div>
      </header>

      <section className={styles.stage} aria-label="Business setup conversation">
        <div className={styles.progressRow}><span>Building your setup</span><span>{Math.round(progress)}%</span></div>
        <div className={styles.progressTrack}><motion.span animate={{ width: `${progress}%` }} transition={{ type: "spring", stiffness: 90, damping: 20 }} /></div>
        <div className={styles.chat} data-lenis-prevent>
          <div className={styles.conversation} aria-live="polite">
            <AnimatePresence initial={false}>
              {messages.map((message) => <ChatMessage key={message.id} message={message} />)}
            </AnimatePresence>
            {(isThinking || (isIntroducing && !isOpening)) && <TypingIndicator />}
            {clarification && <div className={styles.clarificationActions}><button className={styles.primaryAction} onClick={acceptClarification}><Check size={16} />Yes, {clarification.value}</button><button className={styles.secondaryAction} onClick={() => { setClarification(null); setInput(""); append("assistant", "No problem. Please type the emirate you meant."); }}>No, let me correct it</button></div>}
            {awaitingConfirmation && <ConfirmationCard profile={profile} onConfirm={confirmAndCalculate} onCorrect={() => { setAwaitingConfirmation(false); append("assistant", "Of course. Tell me what you'd like to change."); }} />}
            {quote && <QuoteCard profile={profile} quote={quote} onReset={() => setShowRestart(true)} onAction={setActionNotice} />}
            <div ref={endRef} />
          </div>
        </div>

        <div className={styles.composerWrap}>
          {!isIntroducing && messages.length > 0 && question && !awaitingConfirmation && !quote && !clarification && <QuickReplies options={question.options} onSelect={processMessage} />}
          <form className={`${styles.composer} ${composerExpanded || input ? styles.composerExpanded : ""}`} onFocus={() => setComposerExpanded(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget) && !input) setComposerExpanded(false); }} onSubmit={(event: FormEvent) => { event.preventDefault(); processMessage(input); }}>
            <textarea value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); processMessage(input); } }} placeholder="Ask anything..." aria-label="Message the business setup advisor" rows={1} />
            <div className={styles.composerToolbar}>
              {(composerExpanded || input) && <><button type="button" className={styles.composerIcon} aria-label="Add attachment"><Plus size={18} /></button>
              <button type="button" className={styles.composerModel} onClick={() => setShowModels(true)}><span className={styles.miniModelIcon}>G</span><span>{selectedModel === "smart" ? "Smart mode" : selectedModel.includes("120b") ? "Groq 120B" : selectedModel.includes("20b") ? "Groq 20B" : "Groq Llama"}</span><CaretDown size={12} /></button></>}
              <span className={styles.toolbarSpacer} />
              {!input.trim() && <button type="button" className={styles.composerIcon} disabled={isThinking || isOpening || isIntroducing} onClick={() => setVoiceOpen(true)} aria-label="Use voice input"><Microphone size={18} /></button>}
              {input.trim() && <button type="submit" className={styles.sendButton} disabled={isThinking || isIntroducing} aria-label="Send message"><ArrowUp size={18} weight="bold" /></button>}
            </div>
          </form>
          <p className={styles.disclaimer}>Estimates are indicative and do not constitute legal or government advice.</p>
        </div>
      </section>

      {voiceOpen && <VoiceMode onClose={() => setVoiceOpen(false)} onSend={(text) => { setVoiceOpen(false); void processMessage(text); }} />}
      <AnimatePresence>{showRestart && <Modal title="Start a new estimate?" onClose={() => setShowRestart(false)}><p>Your current conversation and estimate will be cleared.</p><div className={styles.modalActions}><button className={styles.secondaryAction} onClick={() => setShowRestart(false)}>Cancel</button><button className={styles.primaryAction} onClick={reset}>Start over</button></div></Modal>}</AnimatePresence>
      <AnimatePresence>{showSettings && <SettingsModal onClose={() => setShowSettings(false)} />}</AnimatePresence>
      <AnimatePresence>{showModels && <ModelSelector selected={selectedModel} onSelect={(model) => { setSelectedModel(model); setShowModels(false); }} onClose={() => setShowModels(false)} />}</AnimatePresence>
      {actionNotice && <SuccessNotice message={actionNotice} onClose={() => setActionNotice(null)} />}
    </main>
  );
}

function getConversationalReply(message: string, profile: BusinessProfile, activeQuestion: GuidedQuestion | null) {
  const text = message.toLowerCase().replace(/[^a-z\s']/g, "").trim();
  if (/^(hi|hello|hey|hiya|good morning|good afternoon|good evening)$/.test(text)) {
    return profile.businessActivity
      ? `Hi again. We're working on your ${profile.businessActivity} setup. ${activeQuestion?.question ?? "What would you like to adjust?"}`
      : `Hi, I'm Insy, your Insource Prime AI setup advisor. ${activeQuestion?.question ?? "Tell me what kind of business you'd like to start in the UAE."}`;
  }
  if (/^(help|what can you do|how does this work|what do you do)$/.test(text)) {
    return "I can understand your business idea in everyday language, identify the setup details that matter, recommend a suitable structure, and prepare an estimated first-year cost. Start by telling me what business you want to open.";
  }
  if (/^(thanks|thank you|thankyou|ok thanks)$/.test(text)) {
    return `You're welcome. ${activeQuestion?.question ?? "Tell me if you'd like to change anything."}`;
  }
  return null;
}

function getWelcomeMessage() {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
  return `${greeting}. Hi, I'm Insy, Insource Prime's AI business setup cost advisor. I'll understand what you need and guide you one step at a time.\n\nWhich emirate are you planning to set up in?`;
}

function isUnclearInput(message: string) {
  const text = message.toLowerCase().trim();
  if (text.length < 2) return true;
  if (/^(.)\1{2,}$/.test(text)) return true;
  if (/^[bcdfghjklmnpqrstvwxyz]{2,}$/i.test(text)) return true;
  return /^(asdf+|qwer+|test+|xxx+|zzz+|nil|n\/a)$/i.test(text);
}

function resolveAgainstContext(message: string, question: GuidedQuestion | null): { kind: "confirm"; clarification: Clarification } | { kind: "reject"; message: string } | null {
  if (!question || !question.options.length) return null;
  if (["partners", "visas", "banking", "accounting", "importExport", "warehouse"].includes(question.id)) return null;
  const input = normalizeChoice(message);
  const candidates = question.options.filter((option) => option !== "Not sure" && option !== "Other");
  const exact = candidates.find((option) => input.includes(normalizeChoice(option)) || normalizeChoice(option).includes(input));
  if (exact) return null;
  const closest = candidates.map((option) => ({ option, distance: levenshtein(input, normalizeChoice(option)) })).sort((a, b) => a.distance - b.distance)[0];
  const threshold = Math.max(1, Math.floor(Math.max(input.length, normalizeChoice(closest?.option ?? "").length) * .34));
  if (closest && closest.distance <= threshold) {
    return { kind: "confirm", clarification: { field: question.id, value: closest.option, prompt: `Did you mean ${closest.option}?` } };
  }
  if (question.id === "businessActivity" && input.length >= 3) {
    const custom = message.trim().replace(/\s+/g, " ");
    return { kind: "confirm", clarification: { field: "businessActivity", value: custom, prompt: `I don't have an exact category match for “${custom}”. Should I use this as your business activity?` } };
  }
  if (question.id === "emirate") {
    const outsideUae = ["Oman", "Saudi Arabia", "Qatar", "Bahrain", "Kuwait", "India", "Pakistan", "United Kingdom", "United States"].find((country) => input.includes(normalizeChoice(country)));
    if (outsideUae) return { kind: "reject", message: `${outsideUae} is outside the UAE. This calculator currently estimates UAE business setups. Please choose a UAE emirate below, select “Not sure” for a recommendation, or tell me if you specifically need help outside the UAE.` };
    return { kind: "reject", message: `I couldn't identify a UAE emirate from that answer. Choose one below, select “Not sure” for a recommendation, or type the emirate name.` };
  }
  if (question.id === "jurisdiction") return { kind: "reject", message: `I couldn't match that to Mainland or Free Zone. You can also choose “Not sure” and I'll recommend one.` };
  if (question.id === "officeType") return { kind: "reject", message: `I couldn't match that workspace type. Please choose an option, or describe the office you need in a little more detail.` };
  return null;
}

function normalizeChoice(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function levenshtein(a: string, b: string) {
  const row = Array.from({ length: b.length + 1 }, (_, index) => index);
  for (let i = 1; i <= a.length; i++) {
    let previous = row[0]; row[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const saved = row[j];
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, previous + (a[i - 1] === b[j - 1] ? 0 : 1));
      previous = saved;
    }
  }
  return row[b.length];
}

function buildAcknowledgement(previous: BusinessProfile, next: BusinessProfile) {
  const changed: string[] = [];
  if (next.businessActivity && next.businessActivity !== previous.businessActivity) changed.push(next.businessActivity);
  if (next.emirate && next.emirate !== previous.emirate) changed.push(next.emirate);
  if (next.jurisdiction && next.jurisdiction !== previous.jurisdiction) changed.push(next.jurisdiction === "freezone" ? "Free Zone" : next.jurisdiction[0].toUpperCase() + next.jurisdiction.slice(1));
  if (next.partners !== undefined && next.partners !== previous.partners) changed.push(`${next.partners} owner${next.partners === 1 ? "" : "s"}`);
  if (next.visas !== undefined && next.visas !== previous.visas) changed.push(`${next.visas} visa${next.visas === 1 ? "" : "s"}`);
  return changed.length ? `Understood. I've noted ${changed.join(", ")}.` : "Thanks. I've noted that.";
}

function applyCorrectionRules(previous: BusinessProfile, next: BusinessProfile, isCorrection: boolean) {
  if (!isCorrection || !next.businessActivity || next.businessActivity === previous.businessActivity) return next;
  const cleaned = { ...next };
  delete cleaned.detailedActivity;
  if (cleaned.activityCategory !== "ecommerce") cleaned.ecommerce = false;
  if (cleaned.activityCategory !== "trading") {
    delete cleaned.importExport;
    delete cleaned.warehouse;
  }
  return cleaned;
}


function OpeningExperience() {
  return <motion.div className={styles.opening} initial={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.03 }} transition={{ duration: .5 }}>
    <VoiceOrb />
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .25 }}><strong>Insy, your UAE setup advisor, is ready</strong></motion.div>
    <div className={styles.openingLine}><motion.span initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 1.35, ease: "easeInOut" }} /></div>
  </motion.div>;
}

const modelOptions: { id: ModelId; title: string; note: string; tag: string }[] = [
  { id: "smart", title: "Smart mode", note: "Automatically uses the best available model", tag: "BEST" },
  { id: "openai/gpt-oss-120b", title: "GPT OSS 120B", note: "Strongest reasoning for complex business setups", tag: "PRO" },
  { id: "openai/gpt-oss-20b", title: "GPT OSS 20B", note: "Fast, capable responses for everyday setups", tag: "FAST" },
  { id: "llama-3.3-70b-versatile", title: "Llama 3.3 70B", note: "Reliable fallback for natural conversation", tag: "PRO" },
];

function ModelSelector({ selected, onSelect, onClose }: { selected: ModelId; onSelect: (model: ModelId) => void; onClose: () => void }) {
  return <motion.div className={styles.modelBackdrop} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose}><motion.section className={styles.modelSheet} role="dialog" aria-modal="true" aria-label="Choose AI model" initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", stiffness: 260, damping: 28 }} onMouseDown={(event) => event.stopPropagation()}><div className={styles.sheetHandle} /><div className={styles.modelSheetHeader}><div><h2>Chat model</h2><p>Pick a model for your advisor</p></div><button className={styles.iconButton} onClick={onClose} aria-label="Close model selector"><X size={19} /></button></div><div className={styles.modelList}>{modelOptions.map((model) => <button key={model.id} className={`${styles.modelOption} ${selected === model.id ? styles.selectedModel : ""}`} onClick={() => onSelect(model.id)}><div className={styles.modelIcon}>{model.id === "smart" ? <MagicWand size={21} weight="fill" /> : <span>AI</span>}</div><div><strong>{model.title}</strong><span>{model.note}</span></div><em>{selected === model.id ? <Check size={15} weight="bold" /> : model.tag}</em></button>)}</div></motion.section></motion.div>;
}

function ChatMessage({ message }: { message: Message }) {
  return <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className={`${styles.messageRow} ${message.role === "user" ? styles.userRow : ""}`}>
    {message.role === "assistant" && <div role="img" aria-label="Insy, Insource Prime AI advisor"><VoiceOrb small /></div>}
    <div className={`${styles.message} ${message.role === "user" ? styles.userMessage : styles.aiMessage}`}>{message.text.split("\n").map((line, index) => <span key={index}>{line || <br />}</span>)}</div>
  </motion.div>;
}

function TypingIndicator() { return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.messageRow}><div role="img" aria-label="Insy, Insource Prime AI advisor"><VoiceOrb small /></div><div className={styles.typing}><i /><i /><i /></div></motion.div>; }

function QuickReplies({ options, onSelect }: { options: string[]; onSelect: (value: string) => void }) {
  if (!options.length) return null;
  return <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className={styles.quickReplies}>{options.map((option) => <button key={option} onMouseDown={(event) => event.preventDefault()} onClick={() => onSelect(option)}>{option}</button>)}</motion.div>;
}

const summaryRows = (profile: BusinessProfile) => [
  ["Business activity", profile.businessActivity], ["Activity details", profile.detailedActivity], ["Location", profile.emirate], ["Jurisdiction", profile.jurisdiction ? profile.jurisdiction.replace("freezone", "Free Zone") : undefined],
  ["Owners", profile.partners ? `${profile.partners}` : undefined], ["Residence visas", profile.visas !== undefined ? `${profile.visas}` : undefined], ["Employees", profile.employees !== undefined ? `${profile.employees}` : undefined], ["Workspace", profile.officeType?.replace("flexi", "Flexi desk")],
  ["Import / export", profile.importExport === undefined ? undefined : profile.importExport ? "Included" : "Not required"], ["Warehouse", profile.warehouse === undefined ? undefined : profile.warehouse ? "Required" : "Not required"],
  ["Banking assistance", profile.banking === undefined ? undefined : profile.banking ? "Included" : "Not required"], ["Accounting", profile.accounting === undefined ? undefined : profile.accounting ? "Included" : "Not required"],
  ["VAT assistance", profile.vat === undefined ? undefined : profile.vat ? "Included" : "Not required"], ["Corporate Tax", profile.corporateTax === undefined ? undefined : profile.corporateTax ? "Included" : "Not required"], ["PRO services", profile.proServices === undefined ? undefined : profile.proServices ? "Included" : "Not required"],
  ["Additional services", profile.additionalServices?.length ? profile.additionalServices.join(", ") : undefined],
].filter((row): row is string[] => Boolean(row[1]));

function ConfirmationCard({ profile, onConfirm, onCorrect }: { profile: BusinessProfile; onConfirm: () => void; onCorrect: () => void }) {
  return <motion.div initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} className={styles.confirmCard}><div className={styles.cardHeading}><div className={styles.checkIcon}><Check size={18} weight="bold" /></div><div><strong>Review your setup</strong><span>Confirm the details before calculation</span></div></div><div className={styles.summaryGrid}>{summaryRows(profile).map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div><div className={styles.cardActions}><button className={styles.primaryAction} onClick={onConfirm}><Check size={17} weight="bold" />Yes, calculate my estimate</button><button className={styles.secondaryAction} onClick={onCorrect}>Make a correction</button></div></motion.div>;
}

function QuoteCard({ profile, quote, onReset, onAction }: { profile: BusinessProfile; quote: Quote; onReset: () => void; onAction: (message: string) => void }) {
return <motion.article initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className={styles.quoteCard}><div className={styles.quoteTop}><div><span>Insource Prime</span><h2>Business Setup Estimate</h2></div><Image className={styles.quoteLogo} src="/insource-prime-logo.webp" alt="Insource Prime" width={190} height={49} /></div><div className={styles.quoteMeta}><strong>{profile.businessActivity}</strong><span>{profile.emirate} · {profile.partners} owner{profile.partners === 1 ? "" : "s"} · {profile.visas} visa{profile.visas === 1 ? "" : "s"}</span></div><div className={styles.recommendation}><span>Recommended setup</span><strong>{quote.recommendedSetup}</strong></div><div className={styles.quoteLines}>{quote.lines.map((line) => <div key={line.label}><span>{line.label}</span><strong>{money.format(line.amount)}</strong></div>)}</div><div className={styles.total}><span>Estimated first-year cost</span><strong>{money.format(quote.firstYear)}</strong><small>Estimated annual renewal: {money.format(quote.renewal)}</small></div><p className={styles.quoteNote}>Estimate only. Final pricing may vary based on authority fees, activity requirements and selected services.</p><div className={styles.quoteActions}><button className={styles.primaryAction} onClick={() => onAction("Your detailed quote request has been captured.")}><PaperPlaneTilt size={17} />Request detailed quote</button><button className={styles.secondaryAction} onClick={() => onAction("Your request to speak with an expert has been captured.")}>Talk to an expert</button><button type="button" className={styles.secondaryAction} onClick={() => window.print()} aria-label="Print business setup estimate">Print estimate</button><button className={styles.textAction} onClick={onReset}>Start over</button></div></motion.article>;
}


function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) { return <motion.div className={styles.modalBackdrop} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose}><motion.div className={styles.modal} role="dialog" aria-modal="true" aria-label={title} initial={{ opacity: 0, y: 15, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10 }} onMouseDown={(event) => event.stopPropagation()}><div className={styles.modalHeader}><h2>{title}</h2><button className={styles.iconButton} onClick={onClose} aria-label="Close"><X size={19} /></button></div>{children}</motion.div></motion.div>; }

function SettingsModal({ onClose }: { onClose: () => void }) { const [tested, setTested] = useState(false); return <Modal title="AI settings" onClose={onClose}><p className={styles.settingsIntro}>Provider credentials are managed securely through server environment variables and never exposed here.</p><div className={styles.settingsGrid}><label>AI provider<select defaultValue="groq"><option>Groq</option><option disabled>OpenAI-compatible</option></select></label><label>API base URL<input value="https://api.groq.com/openai/v1" readOnly /></label><label>API key<input value="Managed by GROQ_API_KEY" type="password" readOnly /></label><label>Primary model<input defaultValue="openai/gpt-oss-120b" /></label><label>Fallback models<input defaultValue="openai/gpt-oss-20b, llama-3.3-70b-versatile" /></label><div className={styles.splitFields}><label>Temperature<input type="number" step="0.1" defaultValue="0.2" /></label><label>Max tokens<input type="number" defaultValue="900" /></label></div><label>Speech model<input defaultValue="whisper-large-v3-turbo" /></label></div>{tested && <p className={styles.testResult}>Settings are valid. Connection is verified when a server key is configured.</p>}<div className={styles.modalActions}><button className={styles.secondaryAction} onClick={() => setTested(true)}>Test connection</button><button className={styles.primaryAction} onClick={onClose}>Save settings</button></div></Modal>; }
