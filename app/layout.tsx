import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Azimah Tech - Your Trusted Event Services Marketplace",
  description: "Azimah Tech connects you with the best event service providers across Saudi Arabia. Find catering, furniture rentals, camping equipment, and professional transportation for your events. Available in 24+ cities.",
  keywords: ["Azimah Tech", "event services", "marketplace", "Saudi Arabia", "KSA", "catering", "furniture rental", "transportation", "event planning", "عزيمة"],
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
