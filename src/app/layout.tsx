import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "../components/providers/AuthProvider";
import { QueryContextWrapper } from "@/components/QueryContextWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Verdi",
  description: "Transform your vision into reality",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <QueryContextWrapper>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </QueryContextWrapper>
    </AuthProvider>
  );
}
