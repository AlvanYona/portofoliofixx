"use client";
import Image from "next/image";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sidebar untuk Desktop */}
      <div className="hidden md:flex fixed right-0 top-0 h-screen w-16 bg-white text-[#FFB400] flex-col items-center py-4 shadow-lg">
        <div className="flex flex-col gap-6 h-full">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="group relative px-4 cursor-pointer">
              <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
                <Image src={link.icon} alt={link.label} width={24} height={24} />
              </div>
              <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-bottom scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Navbar untuk Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white shadow-lg flex justify-around items-center py-3 border-t z-50">
        {navLinks.map((link, index) => (
          <a key={index} href={link.href} className="group relative flex flex-col items-center">
            <div className="h-10 w-10 flex items-center justify-center rounded-full hover:text-blue-500">
              <Image src={link.icon} alt={link.label} width={24} height={24} />
            </div>
          </a>
        ))}
      </div>

      
    </>
  );
};

// Daftar Link Navigasi
const navLinks = [
  { href: "#Hero", icon: "/home.png", label: "Home" },
  { href: "#AboutMe", icon: "/aboutme.png", label: "About Me" },
  { href: "#Skill", icon: "/skill.svg", label: "Skill" },
  { href: "#Portofolio", icon: "/porto.png", label: "Portofolio" },
  { href: "#Experience", icon: "/egg.svg", label: "Experience" },
  { href: "#Review", icon: "/review.png", label: "Review" },
];

export default Navbar;
