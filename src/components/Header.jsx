"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/Navbar-Menu";
import { cn } from "@/utils/cn";
import ThemeToggle from "@/components/ThemeToggle";

function Header({ className }) {
  const [active, setActive] = useState(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-xl mx-auto z-50", className)}
    >
      <div className="fixed z-50 right-2 top-2 ">
        <ThemeToggle />
      </div>

      <Menu setActive={setActive}>
        <HoveredLink href="/">
          <MenuItem
            setActive={setActive}
            active={active}
            item={"Home"}
          ></MenuItem>
        </HoveredLink>
        <HoveredLink href="/movies">
          <MenuItem
            setActive={setActive}
            active={active}
            item={"Movies"}
          ></MenuItem>
        </HoveredLink>

        <HoveredLink href="/contact">
          <MenuItem
            active={active}
            setActive={setActive}
            item="Contact Us"
          ></MenuItem>
        </HoveredLink>
      </Menu>
    </div>
  );
}

export default Header;
