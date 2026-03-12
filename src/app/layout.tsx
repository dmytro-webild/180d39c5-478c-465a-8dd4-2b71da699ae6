import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import { Lato } from "next/font/google";
import "./globals.css";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";

const halant = Halant({
  variable: "--font-halant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Good Health Clinic - Thyroid & Stomach Treatment in Delhi",
  description: "Professional healthcare for thyroid disorders, stomach infections, and general health. Expert doctors, modern diagnosis, and patient-friendly treatment.",
  keywords: "thyroid treatment, stomach infection treatment, medical clinic, general health consultation, healthcare",
  openGraph: {
    title: "Good Health Clinic - Your Trusted Healthcare Partner",
    description: "Quality healthcare and personalized treatment for thyroid problems, stomach infections, and general health issues.",
    type: "website",
    siteName: "Good Health Clinic",
    images: [
      {
        url: "http://img.b2bpic.net/free-photo/mature-doctor-wearing-face-mask-while-talking-patient-medical-clinic_637285-8985.jpg",
        alt: "Good Health Clinic - Professional Medical Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Good Health Clinic - Your Trusted Healthcare Partner",
    description: "Quality healthcare and personalized treatment for thyroid problems, stomach infections, and general health issues.",
    images: [
      "http://img.b2bpic.net/free-photo/mature-doctor-wearing-face-mask-while-talking-patient-medical-clinic_637285-8985.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body
          className={`${halant.variable} ${inter.variable} ${lato.variable} antialiased`}
        >
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
          }}
        />
        </body>
      </ServiceWrapper>
    </html>
  );
}