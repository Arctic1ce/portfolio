import type { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: "/santa_hat_favicon.png",
    shortcut: "/santa_hat_favicon.png",
    apple: "/santa_hat_favicon.png",
  },
};

export default function XmasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
