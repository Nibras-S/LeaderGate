"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, Check, Printer, Briefcase, Code, Storefront, Truck, Megaphone, ForkKnife, Buildings, DotsThree } from "@phosphor-icons/react";
import { calculateQuote, type Quote } from "@/lib/calculator/calculator";
import { pricing } from "@/lib/calculator/pricing";
import type { BusinessProfile } from "@/lib/calculator/schema";
import styles from "./form.module.css";

const steps = ["Activity", "Location", "Team", "Workspace", "Services"];
const activities = [
  { value: "consulting", label: "Consulting", note: "Advisory & professional services", icon: Briefcase },
  { value: "technology", label: "Technology", note: "Software, IT & development", icon: Code },
  { value: "ecommerce", label: "E-commerce", note: "Online shops & digital retail", icon: Storefront },
  { value: "trading", label: "Trading", note: "Products, wholesale & distribution", icon: Truck },
  { value: "marketing", label: "Marketing", note: "Creative, media & advertising", icon: Megaphone },
  { value: "food", label: "Food & hospitality", note: "Restaurants, cafés & catering", icon: ForkKnife },
  { value: "construction", label: "Construction", note: "Building & contracting", icon: Buildings },
  { value: "other", label: "Something else", note: "Describe your business idea", icon: DotsThree },
] as const;
const emirates = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"];
const workspaces = [
  { value: "none", label: "No dedicated office", note: "Office costs excluded; eligibility requires confirmation." },
  { value: "flexi", label: "Flexi desk", note: "A shared desk allowance for a Free Zone setup." },
  { value: "small", label: "Small office", note: "An allowance for your own office space." },
  { value: "physical", label: "Physical office", note: "Dedicated premises for your operations." },
  { value: "warehouse", label: "Warehouse", note: "An allowance for storage and distribution." },
] as const;
const services = [
  { key: "banking", label: "Bank account assistance", note: "Support with your business banking application." },
  { key: "accounting", label: "Accounting support", note: "Include an accounting service allowance." },
  { key: "vat", label: "VAT registration assistance", note: "Include registration support if needed." },
  { key: "corporateTax", label: "Corporate Tax assistance", note: "Include support with tax registration." },
  { key: "proServices", label: "PRO services", note: "Government documentation and liaison support." },
] as const;
const titles = ["What business are you planning?", "Where would you like to set up?", "Who is joining your business?", "What space will you need?", "A little extra support?", "Review your setup"];
const descriptions = ["Select the activity closest to your idea.", "Choose a location and setup type for your estimate.", "Include the owners and residence visas you expect to need.", "Choose the workspace allowance to include.", "Select any services you want included. These are optional.", "Check your answers before calculating. You can go back and change anything."];
const money = new Intl.NumberFormat("en-AE", { style: "currency", currency: "AED", maximumFractionDigits: 0 });

export function FormCalculator() {
  const [step, setStep] = useState(0);
  const [profile, setProfile] = useState<BusinessProfile>({});
  const [quote, setQuote] = useState<Quote | null>(null);
  const [error, setError] = useState("");
  const heading = useRef<HTMLHeadingElement>(null);
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) { mounted.current = true; return; }
    heading.current?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [step, quote]);

  function update(patch: Partial<BusinessProfile>) {
    setProfile((current) => ({ ...current, ...patch }));
    setError("");
  }
  const needsDetails = ["other", "ecommerce", "trading"].includes(profile.activityCategory ?? "");
  function next(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step === 0 && (!profile.businessActivity || (needsDetails && !profile.detailedActivity?.trim()))) { setError("Please choose an activity and describe what your business will do."); return; }
    if (step === 1 && (!profile.emirate || !profile.jurisdiction)) { setError("Please select an emirate and setup type."); return; }
    if (step === 2 && (!Number.isInteger(profile.partners) || (profile.partners ?? 0) < 1 || !Number.isInteger(profile.visas) || (profile.visas ?? -1) < 0)) { setError("Enter the number of owners and visas. Use 0 if no visas are needed."); return; }
    if (step === 3 && !profile.officeType) { setError("Please choose a workspace option."); return; }
    setError("");
    if (step === steps.length) setQuote(calculateQuote(profile, pricing));
    else setStep((current) => current + 1);
  }
  const rows = [
    ["Business activity", profile.businessActivity],
    ...(profile.detailedActivity ? [["Activity details", profile.detailedActivity]] : []),
    ["Emirate", profile.emirate],
    ["Setup type", profile.jurisdiction === "freezone" ? "Free Zone" : profile.jurisdiction === "mainland" ? "Mainland" : undefined],
    ["Owners", profile.partners?.toString()],
    ["Residence visas", profile.visas?.toString()],
    ["Workspace", workspaces.find((item) => item.value === profile.officeType)?.label],
    ["Services", services.filter((item) => profile[item.key]).map((item) => item.label).join(", ") || "None selected"],
  ];

  return <main className={styles.page}>
    <header className={styles.header}><Image src="/insource-prime-logo.webp" alt="Insource Prime" width={190} height={49} priority /></header>
    <div className={styles.layout}>
      <aside className={styles.intro}>
        <span className={styles.eyebrow}>YOUR NEXT CHAPTER, PLANNED.</span>
        <h1>A clear start.<br />A clearer cost.</h1>
        <p>Turn your business idea into a setup estimate. A few simple choices, one transparent breakdown.</p>
        <ol className={styles.steps}>{steps.map((label, index) => <li key={label} aria-current={!quote && index === step ? "step" : undefined} className={index <= step ? styles.reached : ""}><span>{index < step || quote ? <Check size={15} weight="bold" /> : index + 1}</span>{label}</li>)}</ol>
        <div className={styles.asideNote}><Check size={18} /><div><strong>No sign-up needed</strong><span>Review your estimate instantly.</span></div></div>
      </aside>
      <section className={styles.card} aria-label="Business setup form">
        {quote ? <div className={styles.result}>
          <div className={styles.resultBrand}><Image src="/insource-prime-logo.webp" alt="Insource Prime" width={155} height={40} /><span>YOUR SETUP ESTIMATE</span></div>
          <h2 ref={heading} tabIndex={-1}>Your next step, in numbers.</h2>
          <p>{quote.recommendedSetup} · {profile.businessActivity}</p>
          <div className={styles.amount}><span>Estimated first-year cost</span><strong>{money.format(quote.firstYear)}</strong><small>Estimated annual renewal: {money.format(quote.renewal)}</small></div>
          <dl className={styles.costs}>{quote.lines.map((line) => <div key={line.label}><dt>{line.label}</dt><dd>{money.format(line.amount)}</dd></div>)}</dl>
          <h3>Your selections</h3><dl className={styles.review}>{rows.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
          <p className={styles.disclaimer}>Indicative estimate based on our configured pricing, not an official quote. Activity approvals, emirate-specific fees, actual rent and authority requirements may change the total. This is not legal or government advice.</p>
          <div className={styles.actions}><button type="button" className={styles.back} onClick={() => { setQuote(null); setStep(5); }}>Edit answers</button><button type="button" className={styles.primary} onClick={() => window.print()}><Printer size={18} />Print estimate</button></div>
          <button type="button" className={styles.restart} onClick={() => { setProfile({}); setQuote(null); setStep(0); setError(""); }}>Start a new estimate</button>
        </div> : <>
          <div className={styles.progressLabel}><span>{step < 5 ? `STEP ${step + 1} OF 5` : "READY TO CALCULATE"}</span><span>{step < 5 ? steps[step] : "Review"}</span></div>
          <progress className={styles.progress} value={step} max={5} aria-label="Completed steps" />
          <div key={step} className={styles.stepContent}>
            <h2 ref={heading} tabIndex={-1}>{titles[step]}</h2><p className={styles.description}>{descriptions[step]}</p>
            <form onSubmit={next}>
              {step === 0 && <fieldset><legend className={styles.srOnly}>Business activity</legend><div className={styles.options}>{activities.map(({ value, label, note, icon: Icon }) => <label key={value} className={styles.option}><input type="radio" name="activity" required checked={profile.activityCategory === value} onChange={() => update({ businessActivity: label, activityCategory: value, detailedActivity: undefined, ecommerce: value === "ecommerce" })} /><Icon size={23} /><span><strong>{label}</strong><small>{note}</small></span></label>)}</div>{needsDetails && <label className={styles.field}>What will your business do or sell?<textarea required maxLength={600} placeholder="For example, selling clothing online" value={profile.detailedActivity ?? ""} onChange={(event) => update({ detailedActivity: event.target.value })} /></label>}</fieldset>}
              {step === 1 && <><label className={styles.field}>Preferred emirate<select required value={profile.emirate ?? ""} onChange={(event) => update({ emirate: event.target.value })}><option value="" disabled>Select an emirate</option>{emirates.map((place) => <option key={place}>{place}</option>)}</select></label><fieldset className={styles.group}><legend>Setup type</legend><div className={styles.options}>{[{ value: "freezone", label: "Free Zone", note: "Estimate a free-zone licence and registration package." }, { value: "mainland", label: "Mainland", note: "Estimate a mainland trade licence and registration." }].map((item) => <label key={item.value} className={styles.option}><input type="radio" name="jurisdiction" required checked={profile.jurisdiction === item.value} onChange={() => update({ jurisdiction: item.value as "freezone" | "mainland", ...(item.value === "mainland" && profile.officeType === "flexi" ? { officeType: undefined } : {}) })} /><span><strong>{item.label}</strong><small>{item.note}</small></span></label>)}</div></fieldset><p className={styles.hint}>Not sure? You can calculate both options by editing your answers later. Suitability depends on your activity and authority requirements.</p></>}
              {step === 2 && <div className={styles.numberFields}><label className={styles.field}>Number of owners<input type="number" min={1} max={100} step={1} required placeholder="e.g. 1" value={profile.partners ?? ""} onChange={(event) => update({ partners: event.target.value === "" ? undefined : Number(event.target.value) })} /><small>Include yourself and any other shareholders.</small></label><label className={styles.field}>Residence visas required<input type="number" min={0} max={100} step={1} required placeholder="e.g. 0" value={profile.visas ?? ""} onChange={(event) => update({ visas: event.target.value === "" ? undefined : Number(event.target.value) })} /><small>Include owner and employee visas. Enter 0 for none.</small></label></div>}
              {step === 3 && <fieldset><legend className={styles.srOnly}>Workspace</legend><div className={styles.stack}>{workspaces.filter((item) => item.value !== "flexi" || profile.jurisdiction === "freezone").map((item) => <label key={item.value} className={styles.option}><input type="radio" name="workspace" required checked={profile.officeType === item.value} onChange={() => update({ officeType: item.value, officeRequired: item.value !== "none", warehouse: item.value === "warehouse" })} /><span><strong>{item.label}</strong><small>{item.note}</small></span></label>)}</div></fieldset>}
              {step === 4 && <fieldset><legend className={styles.srOnly}>Optional services</legend><div className={styles.stack}>{services.map((item) => <label key={item.key} className={styles.option}><input type="checkbox" checked={Boolean(profile[item.key])} onChange={(event) => update({ [item.key]: event.target.checked })} /><span><strong>{item.label}</strong><small>{item.note}</small></span></label>)}</div><p className={styles.hint}>No extras needed? Leave these unchecked and continue.</p></fieldset>}
              {step === 5 && <dl className={styles.review}>{rows.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>}
              {error && <p role="alert" className={styles.error}>{error}</p>}
              <div className={styles.actions}>{step > 0 ? <button type="button" className={styles.back} onClick={() => { setStep((current) => current - 1); setError(""); }}><ArrowLeft size={17} />Back</button> : <span className={styles.secure}>Your idea. Your pace.</span>}<button type="submit" className={styles.primary}>{step === 5 ? "Calculate my estimate" : "Continue"}<ArrowRight size={18} /></button></div>
            </form>
          </div>
          <p className={styles.footnote}>No obligation · No contact details required</p>
        </>}
      </section>
    </div>
    <footer className={styles.footer}>Insource Prime · UAE business setup planning<span>Estimates are indicative and subject to confirmation.</span></footer>
  </main>;
}
