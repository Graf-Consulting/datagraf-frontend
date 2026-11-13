"use client";

import { useState } from "react";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { useAuth } from "./AuthProvider";
import MenuHeader from "./MenuHeader";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function MainLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { user } = useAuth();
  // Abaixo do breakpoint md (celulares e iPad mini em pé) a sidebar fica sempre recolhida
  const isMobile = useMediaQuery("(max-width: 767px)");
  const collapsed = isCollapsed || isMobile;

  // A sidebar é fixed. O conteúdo ocupa a mesma faixa do container do header (max-w-6xl = 72rem,
  // centralizado): a direita sempre alinha com o header; a esquerda também, a menos que a sidebar
  // esteja no caminho. Nesse caso o conteúdo começa após a sidebar e encolhe para caber.
  const contentOffset = !user
    ? ""
    : `pr-[max(0px,calc((100%_-_72rem)/2))] ${
        collapsed
          ? "pl-[max(4rem,calc((100%_-_72rem)/2))]"
          : "pl-[max(16rem,calc((100%_-_72rem)/2))]"
      }`;

  return (
    <>
      <MenuHeader />
      <div className="flex min-h-[calc(100vh-64px)]">
        <Sidebar
          isCollapsed={collapsed}
          canToggle={!isMobile}
          onToggle={() => setIsCollapsed(!isCollapsed)}
        />
        {/* div, não main: cada página já renderiza o próprio <main> */}
        <div
          className={`min-w-0 flex-1 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${contentOffset}`}
        >
          {children}
        </div>
      </div>
      {!user && <Footer />}
    </>
  );
}
