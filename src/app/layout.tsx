import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fahadkhan.dev"),
  title: "Fahad Khan | Software Engineer",
  description: "Premium personal portfolio of Fahad Khan, Software Engineer and Developer.",
  keywords: ["Software Engineer", "Frontend Developer", "Backend Developer", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Fahad Khan" }],
  creator: "Fahad Khan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fahadkhan.dev",
    title: "Fahad Khan | Software Engineer",
    description: "Premium personal portfolio of Fahad Khan, Software Engineer and Developer.",
    siteName: "Fahad Khan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fahad Khan | Software Engineer",
    description: "Premium personal portfolio of Fahad Khan, Software Engineer and Developer.",
    creator: "@fahadkhan",
  },
  alternates: {
    canonical: "https://fahadkhan.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Fahad Khan",
              url: "https://fahadkhan.dev",
              jobTitle: "Software Engineer",
              sameAs: [
                "https://github.com/theonlyfahad-dev",
                "https://linkedin.com/in/fahadkhandevops"
              ]
            })
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
