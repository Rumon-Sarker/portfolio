// DarkModeContext.tsx
import { createContext, useContext, useEffect, useState } from "react";

import type { PropsWithChildren } from "react";

type Ctx = { isDarkMode: boolean; toggleDarkMode: () => void };
const DarkModeContext = createContext<Ctx | null>(null);

export function DarkModeProvider({ children }: PropsWithChildren) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const dark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggleDarkMode = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const ctx = useContext(DarkModeContext);
  if (!ctx) throw new Error("useDarkMode must be used inside DarkModeProvider");
  return ctx;
}
