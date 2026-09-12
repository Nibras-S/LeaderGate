"use client";

import { useEffect, useRef } from "react";
import { Check, X } from "@phosphor-icons/react";
import styles from "./success-notice.module.css";

export function SuccessNotice({ message, onClose }: { message: string; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const element = dialog.current;
    const previous = document.activeElement as HTMLElement | null;
    element?.showModal();
    return () => { element?.close(); previous?.focus(); };
  }, []);

  return <dialog ref={dialog} className={styles.notice} aria-labelledby="request-success-title" aria-describedby="request-success-description"
    onCancel={(event) => { event.preventDefault(); onClose(); }}
    onClick={(event) => {
      if (event.target !== event.currentTarget) return;
      const bounds = event.currentTarget.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
    }}>
    <button className={styles.close} onClick={onClose} aria-label="Close confirmation"><X size={18} /></button>
    <div className={styles.successIcon} aria-hidden="true"><Check size={30} weight="bold" /></div>
    <h2 id="request-success-title">Request received</h2>
    <p id="request-success-description">{message} The Insource Prime team will contact you shortly.</p>
    <button className={styles.done} onClick={onClose} autoFocus>Done</button>
  </dialog>;
}
