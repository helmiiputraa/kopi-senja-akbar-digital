import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // <--- Import useNavigate
import {
  ShoppingCart,
  Menu,
  X,
  Coffee,
  Star,
  ChevronRight,
  MapPin,
  Wifi,
  Wind,
  Zap,
  Car,
  Smartphone,
  CreditCard,
  Phone,
  Mail,
  Clock,
  Instagram,
} from "lucide-react";

// Custom TikTok Icon (Lucide tidak punya TikTok)
const TikTok = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
  </svg>
);

// --- 1. Komponen Navbar (UPDATE: Navigasi Aktif) ---
const Navbar = () => {
  const navigate = useNavigate(); // <--- Hook Navigasi
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    
    { name: "Fasilitas", href: "#features" },
    { name: "Menu", href: "#menu-highlight" },
    { name: "Testimoni", href: "#testimonials" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-stone-50/90 backdrop-blur-md shadow-sm z-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Klik ke Home */}
          <div
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo(0, 0)}
          >
            <img
              src="/LogoKopiSenja.png"
              alt="Kopi Senja Logo"
              className="h-10 w-10 object-contain"
            />
            <span 
              className="font-bold text-xl text-[#C4A574]"
              style={{
                textShadow: '-1px -1px 0 #E8D9C5, 1px -1px 0 #E8D9C5, -1px 1px 0 #E8D9C5, 1px 1px 0 #E8D9C5'
              }}
            >Kopi Senja</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-stone-600 hover:text-[#C4A574] font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}

            {/* Tombol CTA -> Ke Login */}
            <button
              onClick={() => navigate("/login")}
              className="bg-[#C4A574] text-white px-5 py-2 rounded-full font-medium hover:bg-[#B69565] transition-colors shadow-lg"
            >
              Pesan Sekarang
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-[#C4A574]"
            >
              {isOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-3 text-base font-medium text-stone-600 hover:text-[#C4A574] hover:bg-stone-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => navigate("/login")}
              className="w-full mt-4 bg-[#C4A574] text-white py-3 rounded-lg font-bold shadow-md"
            >
              Mulai Pesan
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

// --- 2. Komponen Hero (UPDATE: Layout Split dengan Carousel) ---
const Hero = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroCards = [
    {
      id: 1,
      img: "/card-coffee.png",
      title: "Kopi Senja",
      subtitle: "Signature Coffee",
    },
    {
      id: 2,
      img: "/card-croffle.png",
      title: "Croffle",
      subtitle: "Snack Favorit",
    },
    {
      id: 3,
      img: "/card-outdoor.png",
      title: "Outdoor Area",
      subtitle: "Suasana Nyaman",
    },
    {
      id: 4,
      img: "/card-indoor.png",
      title: "Indoor Cozy",
      subtitle: "Ruang AC & WiFi",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroCards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroCards.length) % heroCards.length);
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero-bg.png')`,
        }}
      >
        {/* Gradient Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-4rem)]">
          
          {/* Left Content - Text */}
          <div className="space-y-6 py-12 lg:py-0">
            <p className="text-[#C4A574] font-semibold tracking-wider uppercase text-sm">
              Coffee Shop & Eatery
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
              Kopi<br />
              <span className="text-[#C4A574]">Senja</span>
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-md">
              Pesan makanan dan minuman favoritmu langsung dari meja. Cukup scan, pilih menu, dan bayar.
            </p>
            
            <div className="flex flex-row gap-3 sm:gap-4">
              <button
                onClick={() => navigate("/login")}
                className="inline-flex items-center justify-center gap-2 bg-[#C4A574] hover:bg-[#B69565] text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg"
              >
                <span>Order Sekarang</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate("/login")}
                className="inline-flex items-center justify-center gap-2 bg-white/90 hover:bg-white text-amber-800 px-6 py-3 rounded-full font-bold transition-all"
              >
                <span>Lihat Menu</span>
              </button>
            </div>
          </div>

          {/* Right Content - Cards Carousel */}
          <div className="relative">
            {/* Cards Container */}
            <div className="flex gap-4 overflow-hidden">
              {heroCards.map((card, index) => (
                <div
                  key={card.id}
                  className={`flex-shrink-0 w-40 sm:w-48 rounded-2xl overflow-hidden transition-all duration-500 ${
                    index === currentSlide 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-70 scale-95'
                  }`}
                  style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                  }}
                >
                  <div className="relative h-52 sm:h-64">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Card Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    
                    {/* Card Text */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-xs text-white/70 uppercase tracking-wide">
                        {card.subtitle}
                      </p>
                      <h3 className="text-white font-bold text-sm sm:text-base">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-all"
              >
                <ChevronRight className="w-5 h-5 rotate-180" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              
              {/* Slide Indicator */}
              <span className="ml-auto text-white/50 font-medium">
                0{currentSlide + 1}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 3. Komponen Fasilitas & Fitur ---
const Features = () => {
  const features = [
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Free High-Speed Wifi",
      desc: "Koneksi stabil untuk nugas atau mabar.",
    },
    {
      icon: <Wind className="w-6 h-6" />,
      title: "Ruangan Full AC",
      desc: "Sejuk dan nyaman, bebas asap rokok di area indoor.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Stopkontak Tiap Meja",
      desc: "Laptop dan HP lowbat? Colokan tersedia banyak.",
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Parkir Luas",
      desc: "Area parkir aman untuk motor dan mobil.",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Order via QR Code",
      desc: "Pesan langsung dari meja tanpa perlu antre.",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Pembayaran Digital",
      desc: "Terima QRIS, E-Wallet, dan Transfer Bank.",
    },
  ];

  return (
    <section
      id="features"
      className="py-12 md:py-16 bg-white border-b border-stone-100 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
            Fasilitas & Fitur
          </h2>
          <p className="text-stone-500 mt-2 text-sm sm:text-base">
            Kenyamanan Anda adalah prioritas kami
          </p>
        </div>

        {/* Grid Layout: 2 Kolom Mobile, 2-3 Kolom Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-stone-100 hover:border-[#C4A574]/50 hover:shadow-lg transition-all duration-300 bg-stone-50/50 hover:bg-white"
            >
              <div className="bg-[#C4A574]/20 p-2.5 sm:p-3 rounded-lg text-[#C4A574] shrink-0 text-sm sm:text-base">
                {item.icon}
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-stone-800 text-sm sm:text-base lg:text-lg mb-1">
                  {item.title}
                </h3>
                <p className="hidden md:block text-stone-500 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 4. Komponen Preview Menu (UPDATE: Navigasi Aktif) ---
const MenuHighlight = () => {
  const navigate = useNavigate(); // <--- Hook Navigasi

  const bestSellers = [
    {
      id: 1,
      name: "Kopi Senja Gula Aren",
      price: "Rp 18.000",
      img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      name: "Croffle Original",
      price: "Rp 15.000",
      img: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      name: "Manual Brew V60",
      price: "Rp 22.000",
      img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <section id="menu-highlight" className="py-16 md:py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 mb-2 md:mb-3">
            Menu Terfavorit
          </h2>
          <p className="text-stone-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
            Pilihan pelanggan setia Kopi Senja bulan ini. Cita rasa terbaik yang
            wajib kamu coba.
          </p>
        </div>

        {/* Grid Menu */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 mb-12 md:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-xs sm:max-w-full">
            {bestSellers.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 hover:-translate-y-2"
              >
                <div className="h-40 sm:h-52 md:h-64 overflow-hidden relative">
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-[#C4A574] text-white text-xs font-bold px-3 py-1 sm:py-1.5 rounded-full z-10 shadow-sm">
                    Best Seller
                  </div>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>
                <div className="p-4 sm:p-6 md:p-8 text-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-stone-900 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-[#C4A574] font-bold text-base sm:text-lg md:text-xl">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tombol Lihat Semua Menu -> Login */}
        <div className="text-center">
          <button
            onClick={() => navigate("/login")}
            className="inline-flex items-center gap-2 bg-[#C4A574] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-[#B69565] transition-all hover:scale-105 shadow-lg"
          >
            Lihat Semua Menu
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

// --- 5. Komponen Testimoni ---
const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Wijaya",
      role: "Mahasiswi",
      text: "Website-nya gampang banget dipake. Gak perlu install aplikasi lagi, tinggal scan QR langsung pesen. Mantap!",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 2,
      name: "Budi Santoso",
      role: "Freelancer",
      text: "Suka banget sama fitur filternya. Cari kopi yang non-dairy jadi cepet banget. UI-nya juga bersih.",
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 3,
      name: "Dina Permata",
      role: "Karyawan Swasta",
      text: "Biasanya males pesen kalau antriannya panjang. Pake web ini tinggal duduk, klik-klik, pesanan dateng.",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 text-center mb-8 md:mb-16">
          Kata Mereka
        </h2>

        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full max-w-xs sm:max-w-full">
            {reviews.map((item) => (
              <div
                key={item.id}
                className="bg-stone-50 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-stone-100 hover:border-[#C4A574]/50 transition-colors relative"
              >
                <div className="absolute top-4 right-5 sm:top-6 sm:right-8 text-4xl sm:text-6xl text-[#C4A574]/30 font-serif leading-none">
                  "
                </div>

                <div className="flex gap-1 text-[#C4A574] mb-4 sm:mb-6">
                  {[...Array(5)].map((_, n) => (
                    <Star
                      key={n}
                      size={14}
                      fill="currentColor"
                      className="sm:w-[18px] sm:h-[18px]"
                    />
                  ))}
                </div>

                <p className="text-stone-600 mb-6 sm:mb-8 italic relative z-10 text-sm sm:text-base md:text-lg leading-relaxed">
                  "{item.text}"
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white shadow-sm shrink-0"
                  />
                  <div className="min-w-0">
                    <h4 className="font-bold text-stone-900 text-sm sm:text-base truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs text-stone-500 uppercase tracking-wide font-semibold">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 7. Footer ---
const Footer = () => {
  return (
    <footer className="bg-stone-100 text-stone-600 pt-16 pb-12 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Kolom 1 */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/LogoKopiSenja.png"
                alt="Kopi Senja Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="font-bold text-lg text-[#C4A574]">
                Kopi Senja
              </span>
            </div>
            <p className="text-base leading-relaxed text-stone-500">
              Menghadirkan pengalaman ngopi modern dengan cita rasa lokal yang
              autentik.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="text-stone-400 hover:text-[#C4A574] transition-colors bg-white p-2.5 rounded-full shadow-sm hover:shadow-md"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-stone-400 hover:text-[#C4A574] transition-colors bg-white p-2.5 rounded-full shadow-sm hover:shadow-md"
              >
                <TikTok className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Kolom 2 */}
          <div>
            <h3 className="text-stone-900 font-bold text-lg mb-6">
              Hubungi Kami
            </h3>
            <ul className="space-y-4 text-base text-stone-600">
              <li className="flex items-start gap-3">
                <div className="bg-white p-2 rounded-full shadow-sm shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#C4A574]" />
                </div>
                <span>
                  Jl. Raya Banaran, Sekaran, Kec. Gn. Pati, Kota Semarang, Jawa
                  Tengah 50229
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-full shadow-sm shrink-0">
                  <Phone className="w-4 h-4 text-[#C4A574]" />
                </div>
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-full shadow-sm shrink-0">
                  <Mail className="w-4 h-4 text-[#C4A574]" />
                </div>
                <span>halo@kopisenja.com</span>
              </li>
            </ul>
          </div>

          {/* Kolom 3 */}
          <div>
            <h3 className="text-stone-900 font-bold text-lg mb-6">Jam Buka</h3>
            <ul className="space-y-4 text-base text-stone-600">
              <li className="flex items-start gap-3">
                <div className="bg-white p-2 rounded-full shadow-sm shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-[#C4A574]" />
                </div>
                <div>
                  <span className="block text-stone-900 font-bold">
                    Senin - Jumat
                  </span>
                  <span>08.00 - 22.00 WIB</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-white p-2 rounded-full shadow-sm shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-[#C4A574]" />
                </div>
                <div>
                  <span className="block text-stone-900 font-bold">
                    Sabtu - Minggu
                  </span>
                  <span>08.00 - 24.00 WIB</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Maps Embed */}
          <div className="h-56 w-full rounded-2xl overflow-hidden shadow-md border border-stone-200 bg-white p-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4186.50236579137!2d110.39242279999999!3d-7.0506356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b3a1e3a1529%3A0x4cda1f81771c5e97!2sUniversitas%20Negeri%20Semarang%20(UNNES)!5e1!3m2!1sid!2sid!4v1764355883136!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "0.75rem" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover"
            ></iframe>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-stone-200 pt-8 text-center">
          <p className="text-sm text-stone-500">
            © 2025 Kopi Senja Digital. Dibuat dengan ❤️ oleh Akbar Digital.
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- APP UTAMA ---
function LandingPage() {
  return (
    <div className="bg-stone-50 min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Features />
      <MenuHighlight />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default LandingPage;
