"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

interface Language {
  code: string;
  name: string;
}

interface ChangeEvent {
  target: {
    value: string;
  };
}

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const languages: Language[] = [
    { code: "en", name: "English" },
    { code: "ro", name: "Română" },
    { code: "ru", name: "Русский" },
  ];

  function handleChange(e: ChangeEvent): void {
    const newLocale = e.target.value;
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <select
      onChange={handleChange}
      value={locale}
      className="bg-white border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  );
}
