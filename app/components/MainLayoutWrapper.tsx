"use client";

import { useState } from "react";
import MenuHeader from "./MenuHeader";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function MainLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      <MenuHeader />
      <div className="flex min-h-[calc(100vh-64px)]">
        <Sidebar 
          isCollapsed={isCollapsed}
          onToggle={() => setIsCollapsed(!isCollapsed)}
        />
        <main className={`flex-1 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]`}>
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}