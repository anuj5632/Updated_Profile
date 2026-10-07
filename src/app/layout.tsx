import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anuj Chandrakar | Backend Engineer",
  description: "Portfolio of Anuj Chandrakar, a backend engineer and AI systems builder.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en"><body>{children}</body></html>
  );
}
