"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import MediaAbout from "@/components/sections/about/MediaAbout";
import ContactText from "@/components/sections/contact/ContactText";
import FooterMedia from "@/components/sections/footer/FooterMedia";

export default function ContactPage() {
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

      {/* Contact Information Section */}
      <div id="contact-info" data-section="contact-info">
        <MediaAbout
          title="Get In Touch With Us"
          description="We're here to help you with any questions or concerns. Reach out to Good Health Clinic through any of our convenient contact methods and our friendly staff will assist you promptly."
          tag="Contact Information"
          imageSrc="http://img.b2bpic.net/free-photo/composition-with-doctor-s-accesories_23-2147652320.jpg?_wi=6"
          imageAlt="Contact Good Health Clinic"
          buttons={[
            {
              text: "Call Now",
              href: "tel:+919555696123",
            },
          ]}
          useInvertedBackground={false}
        />
      </div>

      {/* Main Contact CTA Section */}
      <div id="contact-cta" data-section="contact-cta">
        <ContactText
          text="Have a medical concern? Need to schedule an appointment? Contact Good Health Clinic today and let our experienced doctors provide you with the best healthcare solutions."
          animationType="reveal-blur"
          buttons={[
            {
              text: "WhatsApp Us",
              href: "https://wa.me/919555696123",
            },
            {
              text: "Email Us",
              href: "mailto:info@goodhealthclinic.com",
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
          imageSrc="http://img.b2bpic.net/free-photo/composition-with-doctor-s-accesories_23-2147652320.jpg?_wi=7"
          imageAlt="Good Health Clinic Footer"
          logoText="Good Health Clinic"
          copyrightText="© 2025 Good Health Clinic. All rights reserved."
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}