import { ThemeToggler } from "@/components/them-switch";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="sticky left-0 top-0 z-20 border-b bg-secondary p-2 text-primary">
      <div className="flex items-center justify-between rounded-full bg-primary/30 px-2">
        <Button variant={"ghost"} size={"icon"}>
          <FaMagnifyingGlass />
        </Button>

        <div className="text-lg font-bold text-primary">Logo</div>

        <ThemeToggler />
      </div>
    </div>
  );
};

export default Header;
