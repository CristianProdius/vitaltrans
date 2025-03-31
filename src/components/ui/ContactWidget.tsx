"use client";

import { useState } from "react";
// If you don't want react-icons, remove and use your own icons or text:
import { AiOutlineWhatsApp, AiOutlinePhone } from "react-icons/ai";
import { FaViber } from "react-icons/fa";

/**
 * A floating contact widget with a plus (+) button.
 * When clicked, the menu with WhatsApp, Viber, and Phone link appears.
 */
export default function ContactWidget() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex flex-col items-end gap-2">
      {/* The Menu: fades and slides in/out. We use 'opacity-0' and 'translate-y-2' for closed state, etc. */}
      <div
        className={`flex flex-col w-48 bg-white border border-gray-200 rounded-md shadow-lg py-2
          transition-all duration-300 
          ${
            menuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-2 pointer-events-none"
          }`}
      >
        <MenuLink
          href="https://web.whatsapp.com/send?phone=37376061466&text="
          label="WhatsApp"
          Icon={AiOutlineWhatsApp}
        />
        <MenuLink
          href="viber://chat?number=+373 7 606 14 66"
          label="Viber"
          Icon={FaViber}
        />
        <MenuLink
          href="tel:+373 7 606 14 66"
          label="Call: +373 7 606 14 66"
          Icon={AiOutlinePhone}
        />
      </div>

      {/* The Floating Button */}
      <button
        onClick={() => setMenuOpen((prev) => !prev)}
        className={`relative flex items-center justify-center w-12 h-12 rounded-full text-white
          bg-[#1e3a8a] shadow-md text-2xl font-bold transition-transform duration-300
          hover:bg-blue-700 focus:outline-none 
          ${menuOpen ? "rotate-45" : "rotate-0"}`}
        aria-label="Open or close contact menu"
      >
        +
      </button>
    </div>
  );
}

/**
 * A small helper component for each link row.
 * It receives an icon, label, and href.
 */
function MenuLink({
  href,
  label,
  Icon,
}: {
  href: string;
  label: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
    >
      <Icon size={18} className="mr-2 text-gray-600" />
      <span className="text-sm">{label}</span>
    </a>
  );
}
