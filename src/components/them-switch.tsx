"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { FaMoon } from "react-icons/fa6";

export function ThemeToggler() {
  const { setTheme, theme } = useTheme();

  const handleClick = () => {
    console.log(theme);
    if (theme === "dark") return setTheme("lite");
    setTheme("dark");
  };

  return (
    <Button variant={"ghost"} size={"icon"} onClick={handleClick}>
      <FaMoon />
    </Button>
  );
}
