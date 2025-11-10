import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Azimah Tech - Bringing People Together Through Events",
  description: "Azimah Tech (عزيمة - Gathering) - The premier event marketplace connecting event providers with customers across Saudi Arabia. Find and book tickets for concerts, conferences, workshops, and more.",
  keywords: ["Azimah Tech", "events", "marketplace", "Saudi Arabia", "KSA", "tickets", "booking", "عزيمة"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
