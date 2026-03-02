"use client"

import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import AboutMetric from '@/components/sections/about/AboutMetric';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Award, Coffee, Flame, Globe, Heart, Mail, Star, TrendingUp, Users } from "lucide-react";

export default function LandingPage() {
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
            { name: "About", id: "about" },
            { name: "Menu", id: "products" },
            { name: "Our Story", id: "story" },
            { name: "Visit Us", id: "contact" },
            { name: "Reviews", id: "testimonials" },
            { name: "Coffees", id: "/coffees" },
            { name: "Bagels", id: "/bagels" }
          ]}
          button={{ text: "Order Now", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Freshly Roasted Coffee"
          description="Welcome to Artisan Coffee Co., where we believe in the perfect cup. Every bean is carefully selected, roasted to perfection, and prepared with passion by our experienced baristas."
          tag="Premium Artisan Coffee"
          tagIcon={Coffee}
          tagAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          imageSrc="http://img.b2bpic.net/free-photo/rustic-chandelier-made-bulbs-ropes-dining-table-vintage-kitchen_181624-9173.jpg?_wi=1"
          imageAlt="Warm, inviting coffee shop interior with specialty coffee equipment"
          imagePosition="right"
          mediaAnimation="slide-up"
          buttons={[
            { text: "Visit Our Shop", href: "contact" },
            { text: "View Menu", href: "products" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="story" data-section="story">
        <AboutMetric
          title="Our Passion for Coffee Drives Everything We Do—From Bean Selection to Your Cup"
          metrics={[
            { icon: Flame, label: "Years Roasting", value: "12+" },
            { icon: Globe, label: "Origins Sourced", value: "8" },
            { icon: Users, label: "Daily Customers", value: "500+" },
            { icon: Award, label: "Coffee Awards", value: "7" }
          ]}
          metricsAnimation="blur-reveal"
          useInvertedBackground={false}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Signature Blends & Single Origins"
          description="Explore our carefully curated selection of premium coffee offerings, from rich espresso blends to bright single-origin pour overs."
          tag="Featured Products"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="blur-reveal"
          products={[
            {
              id: "1",              brand: "Artisan Coffee Co.",              name: "Signature Espresso Blend",              price: "$16.99",              rating: 5,
              reviewCount: "324",              imageSrc: "http://img.b2bpic.net/free-photo/young-man-working-with-coffee-machine-bar-counter-restaurant-barista-apron-white-shirt-making-coffee-by-coffee-machine-cafe-boy-working-as-barista-coffee-shop_574295-4942.jpg?_wi=1",              imageAlt: "Perfect espresso shot with crema"
            },
            {
              id: "2",              brand: "Artisan Coffee Co.",              name: "Ethiopian Pour Over",              price: "$18.99",              rating: 5,
              reviewCount: "287",              imageSrc: "http://img.b2bpic.net/free-photo/aerial-view-person-making-drip-coffee_53876-30607.jpg?_wi=1",              imageAlt: "Beautiful pour over coffee preparation"
            },
            {
              id: "3",              brand: "Artisan Coffee Co.",              name: "Artisan Latte Blend",              price: "$15.99",              rating: 4,
              reviewCount: "401",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-cup-coffee-latte-art-woman-hand-coffee-shop-cafe_1150-10238.jpg?_wi=1",              imageAlt: "Perfect latte with latte art"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          buttons={[
            { text: "Shop All Beans", href: "contact" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Why Coffee Lovers Choose Us"
          description="By the Numbers"
          tag="Our Impact"
          tagIcon={TrendingUp}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          animationType="blur-reveal"
          metrics={[
            { id: "1", value: "100%", description: "Ethically Sourced Beans" },
            { id: "2", value: "24hr", description: "Freshness Guarantee" },
            { id: "3", value: "4.9★", description: "Customer Rating" },
            { id: "4", value: "15min", description: "Average Service Time" }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="Loved by Our Community"
          description="Hear from regular customers who have made Artisan Coffee Co. part of their daily ritual."
          tag="Customer Love"
          tagIcon={Heart}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="blur-reveal"
          showRating={true}
          testimonials={[
            {
              id: "1",              name: "Sarah Martinez",              handle: "@coffeeaddict_sf",              testimonial: "The best espresso in San Francisco! The baristas know exactly how I like my drink and the atmosphere is incredibly welcoming.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/alone-specialist-handsome-daydreaming-collar_1262-870.jpg",              imageAlt: "Sarah Martinez"
            },
            {
              id: "2",              name: "James Chen",              handle: "@techlifesf",              testimonial: "I've tried coffees all over the world, but nothing compares to their single-origin pour overs. Absolute perfection.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-businesswoman-portrait-office_1262-1506.jpg?_wi=1",              imageAlt: "James Chen"
            },
            {
              id: "3",              name: "Emma Wilson",              handle: "@emmaw.writes",              testimonial: "My favorite spot to write and work. Great coffee, excellent WiFi, and the team treats you like family.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-businesswoman-portrait-office_1262-1506.jpg?_wi=2",              imageAlt: "Emma Wilson"
            },
            {
              id: "4",              name: "Marcus Johnson",              handle: "@marcus.photography",              testimonial: "The craftsmanship in every cup is evident. This is artisanal coffee done right. Worth every penny!",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-businessman-suit-looking-camera-meeting_1163-4654.jpg",              imageAlt: "Marcus Johnson"
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get In Touch"
          tagIcon={Mail}
          tagAnimation="slide-up"
          title="Join Our Coffee Community"
          description="Subscribe to our newsletter for exclusive blends, brewing tips, and updates on new offerings. Or visit us in person at our San Francisco location—we'd love to meet you!"
          background={{ variant: "rotated-rays-animated-grid" }}
          useInvertedBackground={false}
          inputPlaceholder="your@email.com"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime from our emails."
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