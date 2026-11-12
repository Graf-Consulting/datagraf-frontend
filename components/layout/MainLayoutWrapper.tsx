"use client";

import { useState } from "react";
import { useAuth } from "./AuthProvider";
import MenuHeader from "./MenuHeader";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function MainLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { user } = useAuth();

  // A sidebar é fixed, então o conteúdo precisa de margem para não ficar por baixo dela
  const contentOffset = user ? (isCollapsed ? "ml-16" : "ml-64") : "";

  return (
    <>
      <MenuHeader />
      <div className="flex min-h-[calc(100vh-64px)]">
        <Sidebar isCollapsed={isCollapsed} onToggle={() => setIsCollapsed(!isCollapsed)} />
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
