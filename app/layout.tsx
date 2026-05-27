import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "宮本優聖 | ポートフォリオ",
    template: "%s | 宮本優聖",
  },
  description: "山梨県出身のWeb開発者・宮本優聖のポートフォリオサイトです。",
  openGraph: {
    title: "宮本優聖 | ポートフォリオ",
    description: "山梨県出身のWeb開発者・宮本優聖のポートフォリオサイトです。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}