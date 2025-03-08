"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useState, useRef, useEffect } from "react";
import { IconLanguage, IconChevronDown } from "@tabler/icons-react";

interface Language {
  code: string;
  name: string;
}

interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: Language[] = [
    { code: "en", name: "EN" },
    { code: "ro", name: "RO" },
    { code: "ru", name: "RU" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsLangMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleLanguageChange(code: string): void {
    router.replace(pathname, { locale: code });
    setIsLangMenuOpen(false);
  }

  const currentLang = languages.find((lang) => lang.code === locale)?.name;

  return (
    <div className={`relative lang-selector ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
        className={`flex items-center space-x-1 text-sm font-medium px-3 py-1 rounded-md transition-colors ${
          isScrolled || pathname === "/contact"
            ? "text-[#1e3a8a]"
            : "text-white"
        }`}
      >
        <IconLanguage size={18} />
        <span>{currentLang}</span>
        <IconChevronDown
          size={14}
          className={`transition-transform ${
            isLangMenuOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isLangMenuOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`block w-full text-left px-4 py-2 text-sm ${
                locale === lang.code
                  ? "bg-[#1e3a8a]/10 text-[#1e3a8a] font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
