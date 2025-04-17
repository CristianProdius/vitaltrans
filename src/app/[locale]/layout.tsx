// app/[locale]/layout.tsx
"use server";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import ContactWidget from "@/components/ui/ContactWidget";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  // load your translations for this locale
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
      <ContactWidget />
    </NextIntlClientProvider>
  );
}

// (optional) pre‑generate all locale routes:
export async function generateStaticParams() {
  return routing.locales.map((loc) => ({ locale: loc }));
}
