"use client"; // this is a client component
import React, { Suspense } from "react";
import { useTheme } from "next-themes";
import { BiAdjust } from "react-icons/bi";

export default function ThemeToggle() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      {currentTheme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          className="bg-slate-100 p-2 rounded-xl"
        >
          <BiAdjust size={25} color="black" />
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          className="bg-slate-100 p-2 rounded-xl"
        >
          <BiAdjust size={25} color="black"/>
        </button>
      )}
    </>
  );
}
