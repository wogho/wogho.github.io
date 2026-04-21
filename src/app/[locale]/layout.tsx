import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ThemeProvider } from "next-themes";
import { routing } from "@/i18n/routing";
import { LazyMotionProvider } from "@/components/providers/lazy-motion-provider";
import { ErrorBoundary } from "@/components/error-boundary";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export function generateStaticParams() {
  return [{ locale: "ko" }, { locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // 현재 locale을 next-intl에 명시적으로 설정 → getMessages()가 올바른 언어 로드
  setRequestLocale(locale);

  const messages = await getMessages({ locale });

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
    >
      <NextIntlClientProvider locale={locale} messages={messages}>
        <ErrorBoundary>
          <LazyMotionProvider>
            {children}
            <Analytics />
            <SpeedInsights />
          </LazyMotionProvider>
        </ErrorBoundary>
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}
