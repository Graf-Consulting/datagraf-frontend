"use client";
import { useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { NativMark } from "./NativMark";

interface LoadingScreenProps {
  message?: string;
}

const noopSubscribe = () => () => {};

export default function LoadingScreen({ message = "Carregando..." }: LoadingScreenProps) {
  // true só no cliente: o portal precisa de document.body
  const mounted = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );

  if (!mounted) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-base"
      style={{ margin: 0, padding: 0, top: 0, left: 0, right: 0, bottom: 0 }}
    >
      {/* Gradient sutil de fundo */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(70, 119, 130, 0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Logo pulsando */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-16 w-16 rounded-[22%] shadow-lg shadow-accent/30"
        >
          <NativMark className="h-full w-full" />
        </motion.div>

        {/* Spinner */}
        <div className="relative h-10 w-10">
          <div className="absolute inset-0 rounded-full border-2 border-surface-muted" />
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-accent" />
        </div>

        {/* Mensagem */}
        <p className="text-sm font-medium tracking-wide text-fg-subtle">{message}</p>
      </div>
    </motion.div>,
    document.body,
  );
}
