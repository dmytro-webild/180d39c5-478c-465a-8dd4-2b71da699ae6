"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import MediaAbout from "@/components/sections/about/MediaAbout";
import MetricCardFourteen from "@/components/sections/metrics/MetricCardFourteen";
import ContactText from "@/components/sections/contact/ContactText";
import FooterMedia from "@/components/sections/footer/FooterMedia";

export default function AboutPage() {
  const navItems = [
    { name: "Home", id: "/" },
    { name: "About", id: "/about" },
    { name: "Services", id: "/services" },
    { name: "Testimonials", id: "/testimonials" },
    { name: "Contact", id: "/contact" },
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

      <div id="about" data-section="about">
        <MediaAbout
          title="Our Commitment to Your Health"
          description="At Good Health Clinic, we are dedicated to providing comprehensive, compassionate, and professional healthcare services. With years of expertise in thyroid disorders, gastrointestinal conditions, and general health management, our team of experienced doctors is committed to your well-being. We believe in combining accurate diagnosis with affordable, patient-centered treatment to ensure every patient receives the care they deserve."
          tag="About Us"
          imageSrc="http://img.b2bpic.net/free-photo/team-doctors-standing-corridor_107420-84841.jpg?_wi=3"
          imageAlt="Good Health Clinic medical team"
          buttons={[{ text: "Our Services", href: "/services" }]}
          useInvertedBackground={false}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardFourteen
          title="Our Growing Impact in the Community"
          tag="Success Metrics"
          tagAnimation="slide-up"
          metrics={[
            {
              id: "1",
              value: "500+",
              description: "Patients treated with genuine care and expertise",
            },
            {
              id: "2",
              value: "15+",
              description: "Years of collective medical experience",
            },
            {
              id: "3",
              value: "98%",
              description: "Patient satisfaction and positive feedback",
            },
            {
              id: "4",
              value: "24/7",
              description: "Emergency support for urgent medical needs",
            },
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Learn more about how Good Health Clinic can support your health journey. Contact us today to schedule a consultation with our experienced medical team."
          animationType="reveal-blur"
          buttons={[
            { text: "Get In Touch", href: "/contact" },
            { text: "Call: +91 9555696123", href: "tel:+919555696123" },
          ]}
          background={{ variant: "plain" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/composition-with-doctor-s-accesories_23-2147652320.jpg?_wi=2"
          imageAlt="Good Health Clinic Footer"
          logoText="Good Health Clinic"
          copyrightText="© 2025 Good Health Clinic. All rights reserved."
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}