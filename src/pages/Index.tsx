import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { toast } from "sonner";
import { X } from "lucide-react";
import {FaMapSigns,FaBuilding,FaMotorcycle, FaTaxi, FaWifi, FaParking, FaSnowflake, FaUtensils, FaCoffee, FaDumbbell, FaSwimmingPool, FaConciergeBell, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from "/kk.jpeg";

import hero1 from "@/assets/hero-1.jpeg";
import hero2 from "@/assets/hero-2.jpeg";
import hero3 from "@/assets/presidential-balcony.jpg";
import deluxeBalcony from "@/assets/deluxe-balcony.jpeg";
import deluxeBalcony2 from "@/assets/deluxe-balcony-2.jpg";
import deluxeBalcony3 from "@/assets/deluxe-balcony-3.jpeg";
import deluxeBalcony4 from "@/assets/deluxe-balcony-4.jpg";
import deluxeBalcony5 from "@/assets/deluxe-balcony-5.jpg";
import executiveBalcony from "@/assets/executive-balcony.jpeg";
import executiveBalcony2 from "@/assets/executive-balcony-2.jpeg";
import executiveBalcony3 from "@/assets/executive-balcony-3.jpeg";
import executiveBalcony4 from "@/assets/executive-balcony-4.jpeg";
import executiveBalcony5 from "@/assets/executive-balcony-5.jpg";
import familyBalcony from "@/assets/family-balcony.jpg";
import familyBalcony2 from "@/assets/family-balcony-2.jpg";
import familyBalcony3 from "@/assets/family-balcony-3.jpg";
import familyBalcony4 from "@/assets/family-balcony-4.jpg";
import familyBalcony5 from "@/assets/family-balcony-5.jpg";
import presidentialBalcony from "@/assets/presidential-balcony.jpg";
import presidentialBalcony2 from "@/assets/presidential-balcony-2.jpg";
import presidentialBalcony3 from "@/assets/presidential-balcony-3.jpg";
import presidentialBalcony4 from "@/assets/presidential-balcony-4.jpg";
import presidentialBalcony5 from "@/assets/presidential-balcony-5.jpg";
import standardRoom from "@/assets/standard-room.jpg";
import standardRoom2 from "@/assets/standard-room-2.jpg";
import standardRoom3 from "@/assets/standard-room-3.jpg";
import standardRoom4 from "@/assets/standard-room-4.jpg";
import standardRoom5 from "@/assets/standard-room-5.jpg";
import economyRoom from "@/assets/economy-room.jpg";
import economyRoom2 from "@/assets/economy-room-2.jpg";
import economyRoom3 from "@/assets/economy-room-3.jpg";
import economyRoom4 from "@/assets/economy-room-4.jpg";
import economyRoom5 from "@/assets/economy-room-5.jpg";

import RoomCarousel from "@/components/RoomCarousel";

const Index = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // Preloader Component
  const Preloader = ({ onComplete }: { onComplete: () => void }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(onComplete, 500);
            return 100;
          }
          return prev + 2;
        });
      }, 30);

      return () => clearInterval(interval);
    }, [onComplete]);

    return (
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center"
        style={{
          background: "linear-gradient(180deg, hsl(240, 25%, 6%), hsl(240, 43%, 10%))",
        }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
            Kousthubam Grand Suites
          </h1>
          <p className="text-xl text-muted-foreground mb-8">Welcome to Luxury</p>

          <div className="w-64 h-2 bg-secondary rounded-full overflow-hidden mx-auto">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: "var(--gradient-purple-gold)",
              }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <p className="text-foreground mt-4 text-sm">{progress}%</p>
        </motion.div>
      </motion.div>
    );
  };

  // Navigation Component
  const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
      }
    };

    const navItems = [
      { label: "Home", id: "hero" },
      { label: "Rooms", id: "rooms" },
      { label: "Amenities", id: "amenities" },
      { label: "Tours", id: "tours" },
      { label: "Gallery", id: "gallery" },
      { label: "Contact", id: "contact" },
    ];

    return (
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-card/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => scrollToSection("hero")}
            >
               <img
    src={logo}
    alt="Kousthubam Grand Suites Logo"
    className="w-10 h-10 rounded-full"
  />
  <span className="text-xl font-bold text-yellow-500 tracking-wide">
  Kousthubam Grand Suites</span>
              </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-accent transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
              <a
                href="https://jkglobalitsolutions.github.io/kousthubam-website-dynamic-link/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full  text-primary-foreground hover-glow-purple px-4 py-2 rounded-md transition-all duration-300 inline-block text-center"
                style={{
    backgroundColor: "#5E13DE",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    textDecoration: "none"
  }}
  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#7427FF")}
  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#5E13DE")}
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-4"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-foreground hover:text-accent transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://jkglobalitsolutions.github.io/kousthubam-website-dynamic-link/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full  text-primary-foreground hover-glow-purple px-4 py-2 rounded-md transition-all duration-300 inline-block text-center"
                style={{
    backgroundColor: "#5E13DE",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    textDecoration: "none"
  }}
  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#7427FF")}
  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#5E13DE")}
              >
                Book Now
              </a>
            </motion.div>
          )}
        </div>
      </motion.nav>
    );
  };

  // Hero Component
  const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
      {
        image: hero1,
        title: "Welcome to Luxury",
        subtitle: "Experience Elegance at Kousthubam Grand Suites",
      },
      {
        image: hero2,
        title: "Unparalleled Comfort",
        subtitle: "Where Sophistication Meets Hospitality",
      },
{
        image: hero3,
        title: "Welcoming Guests from Around the World",
        subtitle: "Safe, comfortable stay with services tailored for international travellers.",
      },


    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }, [slides.length]);

    const scrollToSection = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    return (
      <section id="hero" className="relative h-screen w-full overflow-hidden">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1 : 1.1,
            }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        ))}

        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.h1
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold mb-4 gradient-text"
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p
              key={`subtitle-${currentSlide}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl md:text-2xl text-foreground mb-8"
            >
              {slides[currentSlide].subtitle}
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection("rooms")}
                className="text-primary-foreground hover-glow-purple text-lg px-8 py-6 rounded-md transition-all duration-300"
                style={{
    backgroundColor: "#5E13DE",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
  }}
  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#7427FF")}
  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#5E13DE")}
              >
                Explore Rooms
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-6 rounded-md transition-all duration-300 border"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-accent w-8" : "bg-foreground/50"
              }`}
            />
          ))}
        </div>
      </section>
    );
  };

  // About Component
  const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              About Kousthubam Grand Suites
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Located in the spiritual heart of Tiruvannamalai, Kousthubam Grand Suites offers
              an exceptional blend of modern luxury and traditional hospitality. Our premium
              accommodations are designed to provide guests with an unforgettable experience,
              combining elegant interiors with world-class amenities.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're visiting for spiritual enlightenment, business, or leisure, our
              dedicated team ensures every moment of your stay is filled with comfort and
              sophistication. Experience the perfect harmony of luxury and serenity at
              Kousthubam Grand Suites.
            </p>
          </motion.div>
        </div>
      </section>
    );
  };

  // Rooms Component
  const Rooms = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const rooms = [
      {
        id: 1,
        name: "luxury Room with Balcony",
        images: [deluxeBalcony, deluxeBalcony2, deluxeBalcony3, deluxeBalcony4, deluxeBalcony5],
        price: "₹3,000",
        description: "Spacious room with king-size bed, modern amenities, and a private balcony with city views.",
        features: ["King Bed", "Balcony", "AC", "Wi-Fi", "TV", "Mini Bar"],
      },
      {
        id: 2,
        name: "Executive Suite with Balcony",
        images: [executiveBalcony, executiveBalcony2, executiveBalcony3, executiveBalcony4, executiveBalcony5],
        price: "₹3,000",
        description: "Premium suite with separate living area, work desk, and stunning panoramic balcony views.",
        features: ["Queen Bed", "Balcony", "Living Area", "Work Desk", "Premium Amenities"],
      },
      {
        id: 3,
        name: "Party Hall",
        images: [familyBalcony, familyBalcony2, familyBalcony3, familyBalcony4, familyBalcony5],
        price: "₹1,000",
        description: "Perfect for families with multiple rooms, spacious layout, and a large private balcony.",
        features: ["2 Bedrooms", "Balcony", "Living Room", "Kitchenette", "Family Friendly"],
      },
      // {
      //   id: 4,
      //   name: "Presidential Suite with Balcony",
      //   images: [presidentialBalcony, presidentialBalcony2, presidentialBalcony3, presidentialBalcony4, presidentialBalcony5],
      //   price: "₹12,000",
      //   description: "Ultimate luxury suite with grand interiors, premium furnishings, and expansive balcony.",
      //   features: ["Master Suite", "Grand Balcony", "Luxury Bath", "Butler Service", "VIP Amenities"],
      // },
      // {
      //   id: 5,
      //   name: "Standard Room",
      //   images: [standardRoom, standardRoom2, standardRoom3, standardRoom4, standardRoom5],
      //   price: "₹3,000",
      //   description: "Comfortable and cozy room with all essential amenities for a pleasant stay.",
      //   features: ["Double Bed", "AC", "Wi-Fi", "TV", "Bathroom", "Room Service"],
      // },
      // {
      //   id: 6,
      //   name: "Economy Room",
      //   images: [economyRoom, economyRoom2, economyRoom3, economyRoom4, economyRoom5],
      //   price: "₹2,000",
      //   description: "Budget-friendly option with comfortable bed and basic amenities for value-conscious travelers.",
      //   features: ["Single/Double Bed", "AC", "Wi-Fi", "Clean & Cozy", "Daily Housekeeping"],
      // },
    ];

    return (
      <section id="rooms" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Our Rooms & Suites
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our selection of elegantly designed rooms and suites, each crafted
              to provide maximum comfort and luxury.
            </p>
          </motion.div>

          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="overflow-hidden bg-card border border-border hover-glow-purple rounded-lg">
                  <div className="relative">
                    <RoomCarousel images={room.images} roomName={room.name} />
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold z-10">
                      {room.price}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-foreground text-xl font-semibold mb-2">{room.name}</h3>
                    <p className="text-muted-foreground mb-4">
                      {room.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {room.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <a
                      href="https://jkglobalitsolutions.github.io/kousthubam-website-dynamic-link/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-primary-foreground hover-glow-purple px-4 py-2 rounded-md transition-all duration-300 inline-block text-center"
                      style={{
    backgroundColor: "#5E13DE",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    textDecoration: "none"
  }}
  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#7427FF")}
  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#5E13DE")}
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Amenities Component
  const Amenities = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const amenities = [
      { icon: FaWifi, title: "High-Speed Wi-Fi", description: "Complimentary high-speed internet throughout the property" },
      { icon: FaParking, title: "Free Parking", description: "Secure parking facilities for all guests" },
      { icon: FaSnowflake, title: "Air Conditioning", description: "Climate-controlled rooms for optimal comfort" },
      { icon: FaMapSigns, title: "Guide Available", description: "Experienced guides available for local sightseeing." },
      { icon: FaCoffee, title: "Coffee Day", description: "Coffee Day Coffee Available not Cafe" },
      { icon: FaTaxi, title: "Cab Available", description: "24/7 Cab available" },
      { icon: FaBuilding, title: "Decorative Hall", description: "Spacious hall for events & parties" },
      { icon: FaMotorcycle, title: "Rental Bike", description: "Bike rental available" }

    ];

    return (
      <section id="amenities" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              World-Class Amenities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Indulge in our comprehensive range of facilities designed to make your stay
              comfortable and memorable.
            </p>
          </motion.div>

          <div
  ref={ref}
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto"
>
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="bg-card border border-border rounded-lg p-6 text-center hover-glow-purple group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                  style={{
                    background: "var(--gradient-purple-gold)",
                  }}
                >
                  <amenity.icon className="text-3xl text-primary-foreground" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {amenity.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {amenity.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Tours Component
  const Tours = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const tours = [
      {
        id: 1,
        name: "Arunachaleswarar Temple",
        distance: "4 km",
        description: "Ancient Hindu temple dedicated to Lord Shiva, one of the Pancha Bhoota Stalas representing fire.",
        highlights: ["Spiritual significance", "Ancient architecture", "Daily rituals"],
      },
      {
        id: 2,
        name: "Girivalam Path",
        distance: "1.3 km circuit",
        description: "Sacred circumambulation path around Arunachala Hill, walked by thousands of devotees.",
        highlights: ["Spiritual walk", "Scenic views", "Temple stops"],
      },
      {
        id: 3,
        name: "Ramana Maharshi Ashram",
        distance: "1.3 km",
        description: "Peaceful ashram of the renowned sage Ramana Maharshi, a center for meditation and self-inquiry.",
        highlights: ["Meditation center", "Peaceful atmosphere", "Spiritual teachings"],
      },
      {
        id: 4,
        name: "Sathanur Dam",
        distance: "18 km",
        description: "Beautiful reservoir with scenic views, perfect for picnics and nature photography.",
        highlights: ["Scenic beauty", "Water activities", "Photography"],
      },
      {
        id: 4,
        name: "Yogi Ram Suratkumar Ashram",
        distance: "18 km",
        description: "Yogi Ramsuratkumar Ashram, Tiruvannamalai: a peaceful spiritual refuge dedicated to the saint Yogi Ramsuratkumar, offering meditation, devotional gatherings, and selfless seva.",
        highlights: ["Peace", "Free food", "Temple", "spiritual devotees", "Mountain View"],
      },
    ];

    return (
      <section id="tours" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Nearby Attractions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the spiritual and natural wonders around Tiruvannamalai during your stay.
            </p>
          </motion.div>

          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tours.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="bg-card border border-border hover-glow-gold h-full rounded-lg p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-foreground text-2xl font-semibold">{tour.name}</h3>
                    <span className="text-accent font-semibold text-sm bg-accent/10 px-3 py-1 rounded-full">
                      {tour.distance}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {tour.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">Highlights:</p>
                    <ul className="space-y-1">
                      {tour.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-2 h-2 rounded-full bg-accent mr-2" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Gallery Component
  const Gallery = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const images = [
      hero1,
      hero2,
      deluxeBalcony,
      executiveBalcony,
      familyBalcony,
      presidentialBalcony,
      standardRoom,
      standardRoom2,
      standardRoom3,
    ];

    return (
      <section id="gallery" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Gallery
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Glimpse into the luxury and elegance that awaits you at Kousthubam Grand Suites.
            </p>
          </motion.div>

          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="relative h-64 overflow-hidden rounded-lg cursor-pointer group"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-foreground font-semibold">Kousthubam Grand Suites</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Contact Component
  const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      toast.success("Thank you! We'll get back to you soon.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    };

    return (
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Contact Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions or need assistance? We're here to help make your stay exceptional.
            </p>
          </motion.div>

          <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-card border border-border rounded-lg p-6 hover-glow-purple">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "var(--gradient-purple-gold)" }}>
                    <FaMapMarkerAlt className="text-xl text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Address</h3>
                    <p className="text-muted-foreground">
                     No.25, Swarnaboomi Layout,<br />
                      Tiruvannamalai, Tamil Nadu 606603<br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 hover-glow-purple">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "var(--gradient-purple-gold)" }}>
                    <FaPhone className="text-xl text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Phone</h3>
                    <p className="text-muted-foreground">
                      +91 8248804817<br />
                      +91 8667646584
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 hover-glow-purple">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "var(--gradient-purple-gold)" }}>
                    <FaEnvelope className="text-xl text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      kousthubamgrandsuites@gmail.com<br />
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="rounded-lg overflow-hidden h-64 border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62534.40889046823!2d79.03682647910155!3d12.230423900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac3a66bfd8f859%3A0x6cb7e7692a96a89f!2sArunachaleswarar%20Temple!5e0!3m2!1sen!2sin!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 bg-background border border-border text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 bg-background border border-border text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-background border border-border text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 bg-background border border-border text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-ring min-h-32 resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full  text-primary-foreground hover-glow-purple px-4 py-3 rounded-md transition-all duration-300 font-medium"
                  style={{
    backgroundColor: "#5E13DE",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
  }}
  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#7427FF")}
  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#5E13DE")}
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

  // Footer Component
  const Footer = () => {
    return (
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Kousthubam Grand Suites
              </h3>
              <p className="text-muted-foreground">
                Experience luxury and comfort in the heart of Tiruvannamalai.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#rooms" className="text-muted-foreground hover:text-accent transition-colors">
                    Rooms & Suites
                  </a>
                </li>
                <li>
                  <a href="#amenities" className="text-muted-foreground hover:text-accent transition-colors">
                    Amenities
                  </a>
                </li>
                <li>
                  <a href="#tours" className="text-muted-foreground hover:text-accent transition-colors">
                    Nearby Tours
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-secondary hover:bg-primary transition-colors flex items-center justify-center">
                  <FaFacebook className="text-foreground" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-secondary hover:bg-primary transition-colors flex items-center justify-center">
                  <FaInstagram className="text-foreground" />
                </a>
                {/* <a href="#" className="w-10 h-10 rounded-full bg-secondary hover:bg-primary transition-colors flex items-center justify-center">
                  <FaTwitter className="text-foreground" />
                </a> */}
                {/* <a href="#" className="w-10 h-10 rounded-full bg-secondary hover:bg-primary transition-colors flex items-center justify-center">
                  <FaLinkedin className="text-foreground" />
                </a> */}
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-muted-foreground">
              © 2025 Kousthubam Grand Suites. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen">
          <Navigation />
          <Hero />
          <About />
          <Rooms />
          <Amenities />
          <Tours />
          <Gallery />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
