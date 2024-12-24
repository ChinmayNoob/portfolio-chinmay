"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { BiPhone, BiUser } from "react-icons/bi";
import { RiAwardFill, RiSuitcase3Line, RiToolsFill } from "react-icons/ri";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "About",
      link: "https://portfolio-chinmay-sawant.vercel.app/#about",
      icon: <BiUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "https://portfolio-chinmay-sawant.vercel.app/#projects",
      icon: (
        <RiSuitcase3Line className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Skills",
      link: "https://portfolio-chinmay-sawant.vercel.app/#skills",
      icon: (
        <RiToolsFill className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Achievements",
      link: "https://portfolio-chinmay-sawant.vercel.app/#achievements",
      icon: (
        <RiAwardFill className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },

    // {
    //   name: "Contact",
    //   link: "https://portfolio-chinmay-sawant.vercel.app/#contacts",
    //   icon: <BiPhone className="h-4 w-4 text-neutral-500 dark:text-white" />,
    // },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
