"use client";

import { motion } from "framer-motion";

interface LoadingScreenProps {
  message?: string;
}

export default function LoadingScreen({ message = "Carregando..." }: LoadingScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0E0E0E]"
    >
      {/* Gradient sutil de fundo */}
      <div className="absolute inset-0 opacity-30" style={{
        background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(70, 119, 130, 0.1) 0%, transparent 70%)"
      }} />

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Logo pulsando */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 bg-gradient-to-br from-[#4DA0B2] to-[#467782] rounded-2xl flex items-center justify-center shadow-lg shadow-[#467782]/30"
        >
          <span className="text-white font-bold text-2xl">OD</span>
        </motion.div>

        {/* Spinner */}
        <div className="relative w-10 h-10">
          <div className="absolute inset-0 rounded-full border-2 border-[#1C2536]" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#467782] animate-spin" />
        </div>

        {/* Mensagem */}
        <p className="text-sm text-[#64748B] font-medium tracking-wide">
          {message}
        </p>
      </div>
    </motion.div>
  );
}