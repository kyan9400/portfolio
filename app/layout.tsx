import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alhassan Alfarran | Software & DevOps Engineer (Web & AI Systems)",
  description:
    "Portfolio focused on web architecture, backend systems, AI-integrated products, and DevOps delivery—CI/CD, containers, and production operations.",
  metadataBase: new URL("https://portfolio-kyan9400s-projects.vercel.app"),
  openGraph: {
    title: "Alhassan Alfarran | Software & DevOps Engineer (Web & AI Systems)",
    description:
      "Software and DevOps engineer building web, AI, and reliable delivery pipelines.",
    url: "https://portfolio-kyan9400s-projects.vercel.app",
    type: "website"
  }
};

const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem("theme");
    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    var isDark = stored === "dark" || (!stored && prefersDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-bg text-text">{children}</body>
    </html>
  );
}
