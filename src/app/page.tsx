"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroCarouselLogo from "@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo";
import MediaAbout from "@/components/sections/about/MediaAbout";
import FeatureCardSix from "@/components/sections/feature/FeatureCardSix";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import MetricCardFourteen from "@/components/sections/metrics/MetricCardFourteen";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactText from "@/components/sections/contact/ContactText";
import FooterMedia from "@/components/sections/footer/FooterMedia";

export default function HomePage() {
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

      {/* Hero Section */}
      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="GOOD HEALTH CLINIC"
          description="Your Trusted Partner for Better Health – Expert treatment for thyroid problems, stomach infections and general health issues with caring doctors and modern diagnosis."
          buttons={[
            {
              text: "Book Appointment",
              href: "/contact",
            },
            {
              text: "WhatsApp Consultation",
              href: "https://wa.me/919555696123",
            },
          ]}
          slides={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/mature-doctor-wearing-face-mask-while-talking-patient-medical-clinic_637285-8985.jpg",
              imageAlt: "Professional doctor at Good Health Clinic",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/team-doctors-standing-corridor_107420-84841.jpg",
              imageAlt: "Medical team at Good Health Clinic",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/diverse-medical-staff-working-reception-counter-filling-checkup-report-papers-making-appointments-nurse-receptionist-doing-registration-work-hospital-waiting-room_482257-51640.jpg",
              imageAlt: "Modern clinic interior",
            },
          ]}
          autoplayDelay={4000}
          showDimOverlay={true}
        />
      </div>

      {/* About Section */}
      <div id="about" data-section="about">
        <MediaAbout
          title="About Good Health Clinic"
          description="Good Health Clinic provides quality healthcare and personalized treatment for patients. We focus on accurate diagnosis and patient-friendly treatment for thyroid disorders, stomach infections and other medical conditions. Our clinic believes in genuine diagnosis, affordable treatment, experienced doctors, and patient care and comfort."
          tag="Our Mission"
          imageSrc="http://img.b2bpic.net/free-photo/team-doctors-standing-corridor_107420-84841.jpg"
          imageAlt="Good Health Clinic medical team"
          buttons={[
            {
              text: "Learn More",
              href: "/services",
            },
          ]}
          useInvertedBackground={false}
        />
      </div>

      {/* Services Section */}
      <div id="services" data-section="services">
        <FeatureCardSix
          title="Our Services"
          description="Comprehensive healthcare services tailored to your needs"
          tag="Medical Services"
          textboxLayout="default"
          useInvertedBackground={false}
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
        />
      </div>

      {/* Testimonials Section */}
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

      {/* Metrics Section */}
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

      {/* FAQ Section */}
      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about our clinic and services"
          tag="Help"
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          faqs={[
            {
              id: "1",
              title: "What are your clinic hours?",
              content: "Monday – Saturday: 9:00 AM – 1:30 PM, 5:00 PM – 9:00 PM. Sunday: Emergency only. We're open six days a week with extended evening hours for your convenience.",
            },
            {
              id: "2",
              title: "How do I book an appointment?",
              content: "You can book an appointment through our website, by calling +91 9555696123, or via WhatsApp. We offer flexible scheduling to accommodate your busy lifestyle.",
            },
            {
              id: "3",
              title: "Do you offer online consultations?",
              content: "Yes, we provide online consultations via WhatsApp for initial consultations. For comprehensive examinations, we recommend visiting our clinic in person.",
            },
            {
              id: "4",
              title: "What insurance do you accept?",
              content: "We accept most major health insurance plans. Please contact us directly at info@goodhealthclinic.com for specific insurance inquiries.",
            },
            {
              id: "5",
              title: "How experienced are your doctors?",
              content: "Our doctors have 15+ years of combined medical experience in thyroid disorders, gastrointestinal conditions, and general healthcare. All are fully qualified and registered medical professionals.",
            },
            {
              id: "6",
              title: "What medical tests are available?",
              content: "We offer blood tests, thyroid function tests, complete health checkups, ultrasounds, and other diagnostic services using modern medical equipment.",
            },
          ]}
        />
      </div>

      {/* Contact Section */}
      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to take control of your health? Book your appointment today and experience compassionate, professional healthcare at Good Health Clinic."
          animationType="reveal-blur"
          buttons={[
            {
              text: "Book Appointment",
              href: "/contact",
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

      {/* Footer Section */}
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