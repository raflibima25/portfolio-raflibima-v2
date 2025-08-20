"use client";

import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Contact, FolderOpen, HomeIcon, Menu, User, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import ThemeToggle from "./theme-toggle";

interface MenuItemType {
  title: string;
  icon: React.ReactNode;
  href: string;
}

const menuItems: MenuItemType[] = [
  {
    title: "Home",
    icon: <HomeIcon />,
    href: "#",
  },
  {
    title: "About",
    icon: <User />,
    href: "#about",
  },
  {
    title: "Projects",
    icon: <FolderOpen />,
    href: "#projects",
  },
  {
    title: "Contact",
    icon: <Contact />,
    href: "#contact",
  },
];

export function HoverTitle({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>{children}</TooltipTrigger>
          <TooltipContent side="right" sideOffset={20}>
            <div className="text-xs font-medium">{title}</div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}

export default function NavbarMenu() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <div
      className={cn(
        "fixed top-40 z-999 transition-all duration-300 lg:left-5",
        openMenu ? "left-2 lg:left-5" : " -left-15"
      )}
    >
      <Card className=" p-4 shadow-lg relative rounded bg-hli text-slate-100">
        <div
          className="absolute p-1 -top-3 -right-3 border border-border bg-background text-foreground rounded-full lg:hidden"
          onClick={() => setOpenMenu(false)}
        >
          <X className="h-4 w-4" />
        </div>
        <div
          className={cn(
            "absolute top-[50%] transform -translate-y-[50%] -right-10 p-1 bg-hli rounded-md cursor-pointer lg:hidden",
            openMenu ? "opacity-0" : "opacity-100"
          )}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <Menu />
        </div>
        <CardContent className="p-0">
          <div className="flex flex-col gap-5">
            {menuItems.map((item, i) => (
              <HoverTitle title={item.title} key={i}>
                <div className="">
                  <a href={item.href}>{item.icon}</a>
                </div>
              </HoverTitle>
            ))}
            <ThemeToggle />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
