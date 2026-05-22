"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Star, Umbrella, Users, Waves } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="large"
        background="circleGradient"
        cardStyle="gradient-radial"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "Resort",
          id: "#resort",
        },
        {
          name: "Dining",
          id: "#dining",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Sea Edge Resort"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Sea Edge Resort"
      description="Experience Luxury & Family Fun by the Red Sea. All-inclusive resort with aqua park, private beach, pools, entertainment, and unforgettable hospitality."
      buttons={[
        {
          text: "Book Your Stay",
          href: "#contact",
        },
        {
          text: "Call Now",
          href: "tel:+20691234567",
        },
        {
          text: "WhatsApp Us",
          href: "https://wa.me/201234567890",
        },
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-shot-volvo-zone-alicante-spain_181624-57759.jpg",
          imageAlt: "Beach resort luxury view",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/happy-parents-their-daughter-rubber-ring-are-swimming-pool_1268-23288.jpg",
          imageAlt: "Resort pool family fun",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/blending-futuristic-building-seamlessly-into-desert-landscape_23-2151248305.jpg",
          imageAlt: "Resort dining sunset view",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/family-running-beach_23-2147648799.jpg",
          imageAlt: "Aqua park water slides",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/san-diego-dawn-early-morning-with-palm-tree-silhouette_649448-2514.jpg",
          imageAlt: "Resort spa relaxation",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/floating-breakfast-amazing-hotel-villa-blue-swimming-pool_343596-1120.jpg",
          imageAlt: "Gourmet restaurant dining",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Unrivaled Hospitality"
      metrics={[
        {
          icon: Star,
          label: "Google Rating",
          value: "4.3/5",
        },
        {
          icon: Users,
          label: "Happy Guests",
          value: "8,000+",
        },
        {
          icon: Umbrella,
          label: "Private Beach",
          value: "Direct Access",
        },
        {
          icon: Waves,
          label: "Aqua Park",
          value: "30+ Slides",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="resort" data-section="resort">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Resort Highlights"
      description="Discover world-class amenities designed for families and couples seeking the ultimate Red Sea escape."
      accordionItems={[
        {
          id: "1",
          title: "Private Beach & Water Sports",
          content: "Exclusive access to crystal clear waters with snorkeling, diving, and sandy lounging areas.",
        },
        {
          id: "2",
          title: "Aqua Park & Swimming Pools",
          content: "Thrilling slides for kids and adults, plus climate-controlled pools for year-round fun.",
        },
        {
          id: "3",
          title: "Gourmet Dining Experiences",
          content: "From international buffets to specialty Italian and Mexican restaurants, there's a taste for every palate.",
        },
        {
          id: "4",
          title: "Entertainment & Kids Club",
          content: "Professional animation teams, evening shows, and supervised kids activities every day.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/corporate-woman-suit-standing-with-confidence-beige-suit-with-working-documents-outdoors_1258-194031.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="rooms" data-section="rooms">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "r1",
          name: "Deluxe Ocean View",
          price: "From $180/night",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-interior-design-interior_23-2151929572.jpg",
        },
        {
          id: "r2",
          name: "Family Suite",
          price: "From $250/night",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-couple-playing-with-their-baby-bedroom_23-2147923003.jpg",
        },
        {
          id: "r3",
          name: "Presidential Suite",
          price: "From $450/night",
          imageSrc: "http://img.b2bpic.net/free-photo/chair-bed-around-swimming-pool-hotel_74190-6669.jpg",
        },
        {
          id: "r4",
          name: "Standard Garden View",
          price: "From $120/night",
          imageSrc: "http://img.b2bpic.net/free-photo/white-modern-clean-house-blue_1203-5089.jpg",
        },
        {
          id: "r5",
          name: "Honeymoon Suite",
          price: "From $320/night",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-bora-travel-tree-bungalow_1253-341.jpg",
        },
        {
          id: "r6",
          name: "Terrace Room",
          price: "From $150/night",
          imageSrc: "http://img.b2bpic.net/free-photo/photo-outdoor-pool-palm-trees-exotic-landscape-with-forest-lake_197531-9178.jpg",
        },
      ]}
      title="Rooms & Suites"
      description="Find your perfect sanctuary with stunning sea views and modern luxury interiors."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Sarah J.",
          role: "Family Travel",
          company: "Verified Guest",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cute-cheerful-female-with-shining-smile-attractive-look-wears-summer-dress-hat-demonstrates-perfect-tanned-skin-poses-coastline-with-positive-expression-people-vacation-concept_273609-3265.jpg",
        },
        {
          id: "t2",
          name: "Mark L.",
          role: "Couple",
          company: "Verified Guest",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/romantic-young-stylish-hipster-couple-love-tropical-beach-vacation_285396-1136.jpg",
        },
        {
          id: "t3",
          name: "Elena M.",
          role: "Family",
          company: "Verified Guest",
          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/young-family-with-little-daugher-vacation-by-ocean_1303-15495.jpg",
        },
        {
          id: "t4",
          name: "David K.",
          role: "Professional",
          company: "Verified Guest",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/positive-caucasian-business-male-taking-off-face-mask-virus-protection-show-his-smile-with-cheerful-get-well-fight-spread-covid-19-epidemic-health-ideas-concept_609648-1061.jpg",
        },
        {
          id: "t5",
          name: "Anna P.",
          role: "Senior",
          company: "Verified Guest",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-caucasian-brunette-girl-wears-white-sundress-walking-backyard-house-good-weather_197531-32543.jpg",
        },
      ]}
      title="Guest Experiences"
      description="What our guests are saying about their Red Sea holiday."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "TripAdvisor Winner",
        "Booking Gold",
        "Travel Weekly",
        "EcoGreen Resort",
        "Global Hospitality",
        "Red Sea Awards",
        "Family Choice",
      ]}
      title="Trusted by Travelers"
      description="Recognized for excellence in hospitality across global platforms."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Is the aqua park included?",
          content: "Yes, guests have unlimited access to the aqua park included in all-inclusive stays.",
        },
        {
          id: "f2",
          title: "Do you offer airport transfers?",
          content: "We provide airport transfers for all direct bookings. Please provide flight details when reserving.",
        },
        {
          id: "f3",
          title: "Are there family rooms available?",
          content: "We offer dedicated family suites with interconnecting rooms and amenities for all ages.",
        },
        {
          id: "f4",
          title: "What dining options exist?",
          content: "We have 5 specialty restaurants and a main buffet, all included in the all-inclusive package.",
        },
      ]}
      title="Common Questions"
      description="Everything you need to know for your perfect vacation."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      title="Plan Your Perfect Vacation"
      description="Contact us today for direct booking offers and personal assistance."
      buttonText="Send Inquiry"
      tag="Contact Us"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Resort",
          items: [
            {
              label: "Rooms",
              href: "#rooms",
            },
            {
              label: "Dining",
              href: "#resort",
            },
            {
              label: "Activities",
              href: "#resort",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms & Conditions",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "FAQ",
              href: "#faq",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Sea Edge Resort. All Rights Reserved."
      bottomRightText="Sharm El Sheikh, Red Sea"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
