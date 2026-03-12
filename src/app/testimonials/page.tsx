"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import MetricCardFourteen from "@/components/sections/metrics/MetricCardFourteen";
import ContactText from "@/components/sections/contact/ContactText";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import Link from "next/link";

export default function TestimonialsPage() {
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

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="Doctor explained my thyroid problem clearly and treatment was very effective. I'm grateful for the professional care and attention I received at Good Health Clinic."
          rating={5}
          author="Patient Testimonial"
          avatars={[
            {
              src: "http://img.b2bpic.net/free-photo/smiling-woman-holding-pen_1098-898.jpg",
              alt: "Patient 1",
            },
            {
              src: "http://img.b2bpic.net/free-photo/nurses-getting-ready-work-day_23-2149309983.jpg",
              alt: "Patient 2",
            },
            {
              src: "http://img.b2bpic.net/free-photo/young-woman-with-mug-her-hand_23-2150656213.jpg",
              alt: "Patient 3",
            },
            {
              src: "http://img.b2bpic.net/free-photo/medium-shot-nurse-wearing-stethoscope_23-2149741227.jpg",
              alt: "Patient 4",
            },
            {
              src: "http://img.b2bpic.net/free-photo/pretty-blond-woman-keeping-arm-chest-green-polo-t-shirt-looking-cheery-front-view_176474-71823.jpg",
              alt: "Patient 5",
            },
            {
              src: "http://img.b2bpic.net/free-photo/smiling-doctor-listening-patient_23-2147896651.jpg",
              alt: "Patient 6",
            },
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
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
          imageSrc="http://img.b2bpic.net/free-photo/composition-with-doctor-s-accesories_23-2147652320.jpg?_wi=4"
          imageAlt="Good Health Clinic Footer"
          logoText="Good Health Clinic"
          copyrightText="© 2025 Good Health Clinic. All rights reserved."
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}