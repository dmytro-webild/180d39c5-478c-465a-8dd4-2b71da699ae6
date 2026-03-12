"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import FeatureCardSix from "@/components/sections/feature/FeatureCardSix";
import ContactText from "@/components/sections/contact/ContactText";
import FooterMedia from "@/components/sections/footer/FooterMedia";

export default function GalleryPage() {
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
      {/* Navbar */}
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Good Health Clinic"
          navItems={navItems}
        />
      </div>

      {/* Gallery Section - Clinic Infrastructure */}
      <div id="gallery-infrastructure" data-section="gallery-infrastructure">
        <FeatureCardSix
          title="Our Facility"
          description="Modern medical infrastructure designed for patient comfort and care"
          tag="Clinic Gallery"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: 1,
              title: "Modern Waiting Area",
              description: "Clean, comfortable, and welcoming waiting rooms designed for patient comfort. We maintain the highest standards of hygiene and provide a calm environment for patients.",
              imageSrc: "http://img.b2bpic.net/free-photo/diverse-medical-staff-working-reception-counter-filling-checkup-report-papers-making-appointments-nurse-receptionist-doing-registration-work-hospital-waiting-room_482257-51640.jpg?_wi=2",
              imageAlt: "Modern clinic waiting area",
            },
            {
              id: 2,
              title: "Advanced Diagnostic Equipment",
              description: "State-of-the-art medical equipment for accurate diagnosis. Our facility is equipped with modern diagnostic tools including ultrasound, blood testing, and other medical instruments.",
              imageSrc: "http://img.b2bpic.net/free-photo/doctor-nurse-examining-x-ray_107420-64799.jpg?_wi=3",
              imageAlt: "Medical diagnostic equipment",
            },
            {
              id: 3,
              title: "Patient Care Areas",
              description: "Spacious consultation rooms and patient care areas designed to provide privacy and comfort. Each room is equipped with modern medical facilities for comprehensive healthcare.",
              imageSrc: "http://img.b2bpic.net/free-photo/caring-nurse-consoling-mature-woman-waiting-room-medical-clinic_637285-9085.jpg",
              imageAlt: "Professional patient care area",
            },
          ]}
        />
      </div>

      {/* CTA Section */}
      <div id="gallery-cta" data-section="gallery-cta">
        <ContactText
          text="Experience our state-of-the-art facility. Book a visit to Good Health Clinic today and see our commitment to excellence firsthand."
          animationType="reveal-blur"
          buttons={[
            {
              text: "Schedule a Visit",
              href: "/contact",
            },
            {
              text: "Contact Us",
              href: "tel:+919555696123",
            },
          ]}
          background={{
            variant: "plain",
          }}
          useInvertedBackground={false}
        />
      </div>

      {/* Footer Section */}
      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/composition-with-doctor-s-accesories_23-2147652320.jpg?_wi=5"
          imageAlt="Good Health Clinic Footer"
          logoText="Good Health Clinic"
          copyrightText="© 2025 Good Health Clinic. All rights reserved."
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}