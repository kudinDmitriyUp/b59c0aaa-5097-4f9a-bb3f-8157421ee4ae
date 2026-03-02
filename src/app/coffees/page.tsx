"use client"

import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Coffee, Mail } from "lucide-react";

export default function CoffeesPage() {
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

      <div id="coffees" data-section="coffees">
        <ProductCardTwo
          title="Our Premium Coffee Collection"
          description="Discover our bestselling coffees, from smooth espresso blends to refreshing cold brews. Each coffee is carefully sourced and roasted to perfection."
          tag="Bestsellers"
          tagIcon={Coffee}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="blur-reveal"
          products={[
            {
              id: "1",              brand: "Artisan Coffee Co.",              name: "Espresso",              price: "$4.99",              rating: 5,
              reviewCount: "189",              imageSrc: "http://img.b2bpic.net/free-photo/young-man-working-with-coffee-machine-bar-counter-restaurant-barista-apron-white-shirt-making-coffee-by-coffee-machine-cafe-boy-working-as-barista-coffee-shop_574295-4942.jpg?_wi=2",              imageAlt: "Perfect espresso shot with crema"
            },
            {
              id: "2",              brand: "Artisan Coffee Co.",              name: "Cappuccino",              price: "$5.99",              rating: 5,
              reviewCount: "276",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-cup-coffee-latte-art-woman-hand-coffee-shop-cafe_1150-10238.jpg?_wi=2",              imageAlt: "Cappuccino with latte art"
            },
            {
              id: "3",              brand: "Artisan Coffee Co.",              name: "Americano",              price: "$4.49",              rating: 5,
              reviewCount: "142",              imageSrc: "http://img.b2bpic.net/free-photo/aerial-view-person-making-drip-coffee_53876-30607.jpg?_wi=2",              imageAlt: "Americano coffee"
            },
            {
              id: "4",              brand: "Artisan Coffee Co.",              name: "Matcha Latte",              price: "$6.99",              rating: 5,
              reviewCount: "203",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-cup-coffee-latte-art-woman-hand-coffee-shop-cafe_1150-10238.jpg?_wi=3",              imageAlt: "Matcha latte with creamy foam"
            },
            {
              id: "5",              brand: "Artisan Coffee Co.",              name: "Chaga Tea",              price: "$5.49",              rating: 5,
              reviewCount: "98",              imageSrc: "http://img.b2bpic.net/free-photo/aerial-view-person-making-drip-coffee_53876-30607.jpg?_wi=3",              imageAlt: "Chaga tea blend"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          buttons={[
            { text: "Shop All Coffees", href: "contact" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get In Touch"
          description="Have questions about our coffees? Want to place an order or learn more about our sourcing practices? Fill out the form and we'll get back to you shortly."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true }
          ]}
          textarea={{ name: "message", placeholder: "Tell us about your coffee preferences...", rows: 5, required: true }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/rustic-chandelier-made-bulbs-ropes-dining-table-vintage-kitchen_181624-9173.jpg?_wi=2"
          imageAlt="Coffee shop interior"
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