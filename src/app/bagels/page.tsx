"use client";

import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Croissant } from "lucide-react";

export default function BagelsPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="mediumSmall"
      sizing="mediumLargeSizeLargeTitles"
      background="blurBottom"
      cardStyle="gradient-radial"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Artisan Coffee Co."
          navItems={[
            { name: "Home", id: "/" },
            { name: "Coffees", id: "/coffees" },
            { name: "Bagels", id: "/bagels" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Order Now", href: "contact" }}
        />
      </div>

      <div id="bagels" data-section="bagels">
        <ProductCardTwo
          title="Fan Favorite Bagels"
          description="Indulge in our bestselling bagels, freshly baked daily. From classic cream cheese to our signature salmon bagel, each one is crafted with premium ingredients."
          tag="Bestsellers"
          tagIcon={Croissant}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="blur-reveal"
          products={[
            {
              id: "1",              brand: "Artisan Coffee Co.",              name: "Salmon Bagel",              price: "$8.99",              rating: 5,
              reviewCount: "342",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AN51bjLT2H1DJy7cFepO8qMgO7/uploaded-1772445675642-eu470ff5.jpg",              imageAlt: "Fresh salmon bagel with cream cheese"
            },
            {
              id: "2",              brand: "Artisan Coffee Co.",              name: "California Bagel",              price: "$9.49",              rating: 5,
              reviewCount: "298",              imageSrc: "http://img.b2bpic.net/free-photo/sandwich-with-lettuce-tomato-cheese_1441-1508.jpg",              imageAlt: "California bagel with avocado and veggies"
            },
            {
              id: "3",              brand: "Artisan Coffee Co.",              name: "Cream Cheese Bagel",              price: "$4.99",              rating: 5,
              reviewCount: "451",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-bagel-cream-cheese_1441-1510.jpg",              imageAlt: "Classic cream cheese bagel"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          buttons={[
            { text: "Shop All Bagels", href: "contact" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Special Orders & Catering"
          description="Planning an event or want to order in bulk? We'd love to help! Contact us for custom bagel platters, catering options, and special requests."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true }
          ]}
          textarea={{ name: "message", placeholder: "Tell us about your bagel order or catering needs...", rows: 5, required: true }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/rustic-chandelier-made-bulbs-ropes-dining-table-vintage-kitchen_181624-9173.jpg?_wi=3"
          imageAlt="Coffee shop interior with bagels"
          mediaAnimation="slide-up"
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Artisan Coffee Co."
          leftLink={{ text: "Privacy Policy", href: "#" }}
          rightLink={{ text: "Visit Us: 123 Valencia St, SF", href: "https://maps.google.com" }}
        />
      </div>
    </ThemeProvider>
  );
}
