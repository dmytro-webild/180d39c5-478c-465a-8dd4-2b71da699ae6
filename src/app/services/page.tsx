"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import FeatureCardSix from "@/components/sections/feature/FeatureCardSix";
import MetricCardFourteen from "@/components/sections/metrics/MetricCardFourteen";
import ContactText from "@/components/sections/contact/ContactText";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import Link from "next/link";

export default function ServicesPage() {
  const navItems = [
    { name: "Home", id: "/" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  const footerColumns = [
    {
      title: "Quick Links",
      items: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      items: [
        { label: "Thyroid Treatment", href: "/services" },
        { label: "Stomach Treatment", href: "/services" },
        { label: "General Consultation", href: "/services" },
        { label: "Medical Tests", href: "/services" },
      ],
    },
    {
      title: "Contact",
      items: [
        { label: "📞 +91 9555696123", href: "tel:+919555696123" },
        { label: "💬 WhatsApp Chat", href: "https://wa.me/919555696123" },
        { label: "📧 info@goodhealthclinic.com", href: "mailto:info@goodhealthclinic.com" },
        { label: "📍 Location", href: "#" },
      ],
    },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="mediumLarge"
      sizing="large"
      background="blurBottom"
      cardStyle="soft-shadow"
      primaryButtonStyle="flat"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple brandName="Good Health Clinic" navItems={navItems} />
      </div>

      <div id="services" data-section="services">
        <FeatureCardSix
          features={[
            {
              id: 1,
              title: "Thyroid Treatment",
              description: "Diagnosis and treatment for thyroid disorders including hormone imbalance and thyroid gland problems. Early consultation helps proper treatment planning.",
              imageSrc: "http://img.b2bpic.net/free-photo/doctor-otologist-examining-ear-infection-patient-with-otoscope-covid-19-pandemic-health-specialist-using-otology-instrument-consultation-checkup-visit-appointment_482257-45644.jpg",
              imageAlt: "Thyroid treatment and diagnosis",
            },
            {
              id: 2,
              title: "Stomach Infection Treatment",
              description: "Treatment for gastric infection, acidity, digestive issues and food poisoning with expert care and modern diagnostic techniques.",
              imageSrc: "http://img.b2bpic.net/free-photo/doctor-sitting-sofa-holding-patient-hand_23-2148352067.jpg",
              imageAlt: "Stomach infection treatment",
            },
            {
              id: 3,
              title: "General Health Consultation",
              description: "Comprehensive treatment for fever, weakness, body pain, and infection treatment with professional medical guidance.",
              imageSrc: "http://img.b2bpic.net/free-photo/senior-medic-sick-patient-attending-health-checkup-visit-cabinet-receiving-prescription-paper-buy-treatment-medication-after-appointment-disease-report-consultation_482257-46469.jpg",
              imageAlt: "General health consultation",
            },
            {
              id: 4,
              title: "Medical Tests & Diagnosis",
              description: "Advanced blood tests, thyroid tests, and complete health checkups using modern diagnostic equipment.",
              imageSrc: "http://img.b2bpic.net/free-photo/doctor-nurse-examining-x-ray_107420-64799.jpg",
              imageAlt: "Medical diagnostic equipment",
            },
          ]}
          title="Our Services"
          description="Comprehensive healthcare services tailored to your needs"
          tag="Medical Services"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardFourteen
          title="Trusted by Hundreds of Patients"
          tag="Our Impact"
          tagAnimation="slide-up"
          metrics={[
            {
              id: "1",
              value: "500+",
              description: "Happy patients treated with care and professional expertise",
            },
            {
              id: "2",
              value: "15+",
              description: "Years of combined medical experience and expertise",
            },
            {
              id: "3",
              value: "98%",
              description: "Patient satisfaction rate from clinic reviews",
            },
            {
              id: "4",
              value: "24/7",
              description: "Emergency support available for critical medical situations",
            },
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to take control of your health? Book your appointment today and experience compassionate, professional healthcare at Good Health Clinic."
          animationType="reveal-blur"
          buttons={[
            {
              text: "Book Appointment",
              href: "#appointment-form",
            },
            {
              text: "Call us now",
              href: "tel:+919555696123",
            },
          ]}
          background={{
            variant: "plain",
          }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/composition-with-doctor-s-accesories_23-2147652320.jpg"
          imageAlt="Good Health Clinic Footer"
          logoText="Good Health Clinic"
          copyrightText="© 2025 Good Health Clinic. All rights reserved."
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}