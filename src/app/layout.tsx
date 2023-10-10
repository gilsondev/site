import clsx from "clsx";
import "./globals.css";
import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import GAnalytics from "@/components/ganalytics";
import { ThemeProvider } from "./providers";
import { calculateExperienceYearsFromToday } from "@/lib/utils";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Gilson Filho - Fullstack Engineer",
  description: "Site do desenvolvedor Gilson Filho",
  metadataBase: new URL("https://gilsondev.in"),
  openGraph: {
    type: "website",
    title: "Gilson Filho - Fullstack Engineer",
    description: `Atuo há ${calculateExperienceYearsFromToday()} anos em projetos públicos e em startups, trabalhando 
    com tecnologia desde jovem. Crio soluções como Sistemas Desktop, Sistemas Web, 
    APIs, Web Scraping e Data Pipelines. Meu objetivo é impulsionar o crescimento 
    das empresas, criar produtos inovadores e contribuir para políticas públicas através do Software Livre.
    `,
    siteName: "Gilson Filho",
    images: [
      {
        url: "/avatar.png",
        width: 800,
        height: 600,
        alt: "Gilson Filho",
        type: "image/png",
      },
      {
        url: "/avatar.png",
        width: 1800,
        height: 1600,
        alt: "Gilson Filho",
        type: "image/png",
      },
    ],
    locale: "pt-BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={clsx(merriweather.className, "bg-gray-100 dark:bg-gray-800")}
      >
        <GAnalytics />
        <ThemeProvider attribute="class" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
