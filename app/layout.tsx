import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Azimah Tech - Your Trusted Event Services Marketplace",
  description: "Azimah Tech connects you with the best event service providers across Saudi Arabia. Find catering, furniture rentals, and camping equipment for your events. Available in 24+ cities.",
  keywords: ["Azimah Tech", "event services", "marketplace", "Saudi Arabia", "KSA", "catering", "furniture rental", "camping", "event planning", "عزيمة"],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
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
