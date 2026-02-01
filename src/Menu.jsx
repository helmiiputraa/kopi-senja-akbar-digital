import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  ShoppingBag,
  Star,
  Plus,
  Minus,
  Coffee,
  Menu as MenuIcon,
  X,
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  ChevronDown,
} from "lucide-react";

// Custom TikTok Icon
const TikTok = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
  </svg>
);

// --- DATA MENU (52 ITEMS) ---
const MENU_ITEMS = [
  // --- KATEGORI: COFFEE (12 Items) ---
  {
    id: 1,
    name: "Kopi Senja Gula Aren",
    category: "coffee",
    price: 18000,
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    name: "Americano Ice",
    category: "coffee",
    price: 15000,
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 3,
    name: "Cappuccino Hot",
    category: "coffee",
    price: 20000,
    rating: 4.7,
    img: "https://134081240.cdn6.editmysite.com/uploads/1/3/4/0/134081240/N6QQAT2N5MYACH3UH25KBC7X.jpeg",
  },
  {
    id: 4,
    name: "Manual Brew V60",
    category: "coffee",
    price: 22000,
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 5,
    name: "Caramel Macchiato",
    category: "coffee",
    price: 24000,
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1691723247105-57e32577dc72?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Espresso Single",
    category: "coffee",
    price: 12000,
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 7,
    name: "Mochaccino",
    category: "coffee",
    price: 23000,
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 8,
    name: "Hazelnut Latte",
    category: "coffee",
    price: 24000,
    rating: 4.8,
    img: "https://www.texanerin.com/content/uploads/2023/03/hazelnut-latte-1200-image.jpg",
  },
  {
    id: 9,
    name: "Vietnam Drip",
    category: "coffee",
    price: 16000,
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1599398054066-846f28917f38?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 10,
    name: "Affogato",
    category: "coffee",
    price: 22000,
    rating: 4.8,
    img: "https://static01.nyt.com/images/2021/08/15/magazine/affogato/affogato-mediumSquareAt3X-v2.jpg",
  },
  {
    id: 11,
    name: "Piccolo Latte",
    category: "coffee",
    price: 18000,
    rating: 4.4,
    img: "https://images.unsplash.com/photo-1610632380989-680fe40816c6?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 12,
    name: "Cold Brew Botol",
    category: "coffee",
    price: 25000,
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=300&q=80",
  },

  // --- KATEGORI: NON-COFFEE (10 Items) ---
  {
    id: 13,
    name: "Matcha Latte",
    category: "non-coffee",
    price: 22000,
    rating: 4.9,
    img: "https://cdn.loveandlemons.com/wp-content/uploads/2023/06/iced-matcha-latte.jpg",
  },
  {
    id: 14,
    name: "Chocolate Cream",
    category: "non-coffee",
    price: 20000,
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 15,
    name: "Red Velvet Latte",
    category: "non-coffee",
    price: 21000,
    rating: 4.8,
    img: "https://jesseatsandtravels.com/wp-content/uploads/2024/01/2-DSC_1721-500x500.jpg",
  },
  {
    id: 16,
    name: "Taro Milk",
    category: "non-coffee",
    price: 20000,
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 17,
    name: "Mango Smoothie",
    category: "non-coffee",
    price: 23000,
    rating: 4.7,
    img: "https://cdn.loveandlemons.com/wp-content/uploads/2023/05/mango-smoothie.jpg",
  },
  {
    id: 18,
    name: "Strawberry Shake",
    category: "non-coffee",
    price: 23000,
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 19,
    name: "Cookies & Cream",
    category: "non-coffee",
    price: 24000,
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 20,
    name: "Charcoal Latte",
    category: "non-coffee",
    price: 22000,
    rating: 4.5,
    img: "https://mindfulavocado.com/wp-content/uploads/2017/05/charcoal_latte_002.jpg",
  },
  {
    id: 21,
    name: "Klepon Latte",
    category: "non-coffee",
    price: 21000,
    rating: 4.6,
    img: "https://awsimages.detik.net.id/community/media/visual/2019/11/22/955bf176-427d-487c-8cd2-a8481a051a8c.jpeg?w=600&q=90",
  },
  {
    id: 22,
    name: "Avocado Choco",
    category: "non-coffee",
    price: 25000,
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&fit=crop&w=300&q=80",
  },

  // --- KATEGORI: TEA (10 Items) ---
  {
    id: 23,
    name: "Lychee Tea",
    category: "tea",
    price: 18000,
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 24,
    name: "Lemon Tea Fresh",
    category: "tea",
    price: 15000,
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 25,
    name: "Earl Grey Milk Tea",
    category: "tea",
    price: 20000,
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 26,
    name: "Peach Tea",
    category: "tea",
    price: 18000,
    rating: 4.6,
    img: "https://www.eatingwell.com/thmb/S4mEBHCn_c3y0U17S9dWEubvW1Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/peach-iced-tea-hero-1x1-15009_preview_maxWidth_4000_maxHeight_4000_ppi_300_quality_100-0d9f432284a447fc9151868c5acf6c7e.jpg",
  },
  {
    id: 27,
    name: "Jasmine Tea Hot",
    category: "tea",
    price: 10000,
    rating: 4.4,
    img: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 28,
    name: "Thai Tea Original",
    category: "tea",
    price: 18000,
    rating: 4.7,
    img: "https://image.jualteh.com/s3/productimages/webp/co22536/p407308/w600-h600/9e623c35-cd53-48c6-875b-e2b139408e0c.jpg",
  },
  {
    id: 29,
    name: "Green Tea Original",
    category: "tea",
    price: 16000,
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 30,
    name: "Mint Tea",
    category: "tea",
    price: 15000,
    rating: 4.3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8K5kNTk8WOO5vD0jA-SpkTrOS_mhrXzepUw&s",
  },
  {
    id: 31,
    name: "Chamomile Hot",
    category: "tea",
    price: 17000,
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 32,
    name: "Oolong Tea",
    category: "tea",
    price: 14000,
    rating: 4.4,
    img: "https://artfultea.com/cdn/shop/files/O-JapaneseOolong_cup_3738.jpg?v=1751141328&width=1946",
  },

  // --- KATEGORI: SNACK (10 Items) ---
  {
    id: 33,
    name: "Croffle Original",
    category: "snack",
    price: 15000,
    rating: 4.8,
    img: "https://cms.dearbuttergroup.com/media/product/product_1653376062.png",
  },
  {
    id: 34,
    name: "Kentang Goreng",
    category: "snack",
    price: 12000,
    rating: 4.5,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/83/French_Fries.JPG",
  },
  {
    id: 35,
    name: "Roti Bakar Coklat",
    category: "snack",
    price: 15000,
    rating: 4.6,
    img: "https://img-global.cpcdn.com/steps/700e2b3cdd503d12/400x400cq80/photo.jpg",
  },
  {
    id: 36,
    name: "Mix Platter",
    category: "snack",
    price: 25000,
    rating: 4.7,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCR0PovQ-Bc5nlTc4KNLq4LJUkzuWaiKF8lw&s",
  },
  {
    id: 37,
    name: "Onion Rings",
    category: "snack",
    price: 15000,
    rating: 4.4,
    img: "https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 38,
    name: "Churros Gula",
    category: "snack",
    price: 18000,
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1624371414361-e670edf4898d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 39,
    name: "Dimsum Ayam",
    category: "snack",
    price: 16000,
    rating: 4.6,
    img: "https://cdn1-production-images-kly.akamaized.net/ld1MHA6YdjloiULxAT11j0JL-lw=/0x0:1095x1095/500x500/filters:quality(75):strip_icc()/kly-media-production/medias/5215600/original/051344300_1746861142-WhatsApp_Image_2025-05-10_at_14.09.31.jpeg",
  },
  {
    id: 40,
    name: "Pisang Goreng Keju",
    category: "snack",
    price: 15000,
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 41,
    name: "Risoles Mayo",
    category: "snack",
    price: 12000,
    rating: 4.4,
    img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 42,
    name: "Nachos Keju",
    category: "snack",
    price: 20000,
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=300&q=80",
  },

  // --- KATEGORI: HOT PLATE / MAKANAN BERAT (10 Items) ---
  {
    id: 43,
    name: "Nasi Goreng Senja",
    category: "hot-plate",
    price: 25000,
    rating: 4.9,
    img: "https://takestwoeggs.com/wp-content/uploads/2025/03/Overhead-plate-Nasi-Goreng-Indonesian-Fried-Rice.jpg",
  },
  {
    id: 44,
    name: "Chicken Steak Crispy",
    category: "hot-plate",
    price: 30000,
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 45,
    name: "Mie Hotplate Sapi",
    category: "hot-plate",
    price: 28000,
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 46,
    name: "Rice Bowl Teriyaki",
    category: "hot-plate",
    price: 28000,
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 47,
    name: "Spaghetti Bolognese",
    category: "hot-plate",
    price: 26000,
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1622973536968-3ead9e780960?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 48,
    name: "Beef Blackpepper",
    category: "hot-plate",
    price: 35000,
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 49,
    name: "Chicken Katsu Curry",
    category: "hot-plate",
    price: 29000,
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 50,
    name: "Kwetiau Goreng",
    category: "hot-plate",
    price: 24000,
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 51,
    name: "Nasi Gila Spesial",
    category: "hot-plate",
    price: 25000,
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 52,
    name: "Fish & Chips",
    category: "hot-plate",
    price: 32000,
    rating: 4.6,
    img: "https://dinnerthendessert.com/wp-content/uploads/2024/02/fish-and-chips-1x1-1.jpg",
  },
];

// --- COMPONENTS ---
const Navbar = ({ cart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Menghitung total items untuk badge
  const totalItems = cart
    ? cart.reduce((total, item) => total + item.quantity, 0)
    : 0;

  const handleCartClick = () => {
    navigate("/order-summary", { state: { cart: cart } });
  };

  return (
    <nav className="fixed top-0 w-full bg-stone-50/90 backdrop-blur-md shadow-sm z-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src="/LogoKopiSenja.png"
              alt="Kopi Senja Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="font-bold text-xl text-[#C4A574]">Kopi Senja</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigate("/")}
              className="text-stone-600 hover:text-[#C4A574] font-medium transition-colors"
            >
              Beranda
            </button>
            <button className="text-[#C4A574] font-bold border-b-2 border-[#C4A574] pb-0.5 transition-colors">
              Menu
            </button>

            {/* Tombol Keranjang di Navbar (Sudah Aktif) */}
            <button
              onClick={handleCartClick}
              className="relative p-2 text-stone-600 hover:text-[#C4A574] transition-colors"
            >
              <ShoppingBag className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
          <div className="md:hidden flex items-center gap-4">
            {/* Tombol Keranjang Mobile */}
            <button
              onClick={handleCartClick}
              className="relative text-stone-600"
            >
              <ShoppingBag className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600"
            >
              {isOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <MenuIcon className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <button
              onClick={() => navigate("/")}
              className="block w-full text-left px-3 py-3 text-base font-medium text-stone-600 hover:bg-stone-50 rounded-md"
            >
              Beranda
            </button>
            <button className="block w-full text-left px-3 py-3 text-base font-bold text-[#C4A574] bg-[#C4A574]/10 rounded-md">
              Menu
            </button>
            <button
              onClick={() => navigate("/")}
              className="block w-full text-left px-3 py-3 text-base font-medium text-stone-600 hover:bg-stone-50 rounded-md"
            >
              Tentang Kami
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-stone-100 text-stone-600 pt-16 pb-12 border-t border-stone-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
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
              Menghadirkan pengalaman ngopi modern.
            </p>
            <div className="flex gap-3 pt-2">
              <div className="bg-white p-2.5 rounded-full shadow-sm">
                <Instagram className="w-5 h-5 text-stone-400" />
              </div>
              <div className="bg-white p-2.5 rounded-full shadow-sm">
                <TikTok className="w-5 h-5 text-stone-400" />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-stone-900 font-bold text-lg mb-6">
              Hubungi Kami
            </h3>
            <ul className="space-y-4 text-base text-stone-600">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C4A574] mt-1" />
                <span>
                  Jl. Raya Banaran, Sekaran, Kec. Gn. Pati, Kota Semarang, Jawa
                  Tengah 50229
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C4A574]" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C4A574]" />
                <span>halo@kopisenja.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-stone-900 font-bold text-lg mb-6">Jam Buka</h3>
            <ul className="space-y-4 text-base text-stone-600">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C4A574] mt-1" />
                <div>
                  <span className="block text-stone-900 font-bold">
                    Senin - Jumat
                  </span>
                  <span>08.00 - 22.00 WIB</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C4A574] mt-1" />
                <div>
                  <span className="block text-stone-900 font-bold">
                    Sabtu - Minggu
                  </span>
                  <span>08.00 - 24.00 WIB</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="h-56 w-full rounded-2xl overflow-hidden shadow-md border border-stone-200 bg-white p-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4186.50236579137!2d110.39242279999999!3d-7.0506356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b3a1e3a1529%3A0x4cda1f81771c5e97!2sUniversitas%20Negeri%20Semarang%20(UNNES)!5e1!3m2!1sid!2sid!4v1764355883136!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "0.75rem" }}
              allowFullScreen=""
              loading="lazy"
              className="w-full h-full object-cover"
            ></iframe>
          </div>
        </div>
        <div className="border-t border-stone-200 pt-8 text-center">
          <p className="text-sm text-stone-500">
            © 2025 Kopi Senja Digital. Dibuat dengan ❤️ oleh Akbar Digital.
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- MODAL DETAIL PRODUK ---
const ProductDetailModal = ({ product, isOpen, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState("");

  // State untuk Minuman
  const [sugarLevel, setSugarLevel] = useState("Normal Sugar");
  const [drinkExtras, setDrinkExtras] = useState([]);

  // State untuk Makanan
  const [spicyLevel, setSpicyLevel] = useState("Tidak Pedas");
  const [foodExtras, setFoodExtras] = useState([]);

  // Reset state setiap kali produk berubah
  useEffect(() => {
    if (isOpen) {
      setQuantity(1);
      setNotes("");
      setSugarLevel("Normal Sugar");
      setDrinkExtras([]);
      setSpicyLevel("Tidak Pedas");
      setFoodExtras([]);
    }
  }, [isOpen, product]);

  if (!isOpen || !product) return null;

  // Cek apakah produk ini kategori Minuman atau Makanan
  const isDrink = ["coffee", "non-coffee", "tea"].includes(product.category);

  const handleDrinkExtraChange = (extra) => {
    if (drinkExtras.includes(extra)) {
      setDrinkExtras(drinkExtras.filter((e) => e !== extra));
    } else {
      setDrinkExtras([...drinkExtras, extra]);
    }
  };

  const handleFoodExtraChange = (extra) => {
    if (foodExtras.includes(extra)) {
      setFoodExtras(foodExtras.filter((e) => e !== extra));
    } else {
      setFoodExtras([...foodExtras, extra]);
    }
  };

  const handleConfirm = () => {
    // Hitung harga tambahan
    const extrasPrice = isDrink
      ? drinkExtras.length * 4000
      : foodExtras.length * 3000;

    const finalItem = {
      ...product,
      quantity,
      notes,
      // Simpan detail sesuai kategori
      options: isDrink
        ? { sugar: sugarLevel, extras: drinkExtras }
        : { spicy: spicyLevel, extras: foodExtras },
      totalPrice: product.price * quantity + extrasPrice,
    };
    onAddToCart(finalItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
        {/* Kolom Kiri: Gambar */}
        <div className="w-full md:w-1/2 bg-stone-100 relative flex items-center justify-center p-8">
          <img
            src={product.img}
            alt={product.name}
            className="w-full max-w-sm object-contain drop-shadow-xl rounded-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 left-4 md:hidden p-2 bg-white rounded-full shadow-md"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Kolom Kanan: Detail & Form */}
        <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-2xl md:text-3xl font-bold text-stone-800">
              {product.name}
            </h2>
            <button
              onClick={onClose}
              className="hidden md:block p-2 hover:bg-stone-100 rounded-full transition"
            >
              <X className="w-6 h-6 text-stone-500" />
            </button>
          </div>

          <p className="text-stone-500 mb-6 text-sm flex items-center gap-2">
            <span className="bg-[#C4A574]/20 text-[#C4A574] px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide">
              {product.category.replace("-", " ")}
            </span>
            (Belum Ada Rating)
          </p>
          <p className="text-2xl font-bold text-[#C4A574] mb-6">
            Rp {product.price.toLocaleString("id-ID")}
          </p>

          {/* --- LOGIKA KONTEN POPUP --- */}

          {isDrink ? (
            /* TAMPILAN UNTUK MINUMAN */
            <>
              {/* Opsi Tambahan Minuman */}
              <div className="mb-6">
                <h3 className="font-bold text-stone-700 mb-3">
                  Topping / Extra
                </h3>
                <div className="space-y-2">
                  {[
                    "Whipping Cream (+4k)",
                    "Extra Shot (+4k)",
                    "Oat Milk (+4k)",
                  ].map((opt) => (
                    <label
                      key={opt}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        className="w-5 h-5 rounded border-stone-300 text-[#C4A574] focus:ring-[#C4A574]"
                        onChange={() => handleDrinkExtraChange(opt)}
                      />
                      <span className="text-stone-600 group-hover:text-[#C4A574] transition">
                        {opt}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sugar Level */}
              <div className="mb-6">
                <h3 className="font-bold text-stone-700 mb-3">Sugar Level</h3>
                <div className="grid grid-cols-3 gap-2">
                  {["Normal", "Less", "No Sugar"].map((level) => (
                    <button
                      key={level}
                      onClick={() => setSugarLevel(level)}
                      className={`py-2 rounded-lg text-sm font-medium border ${
                        sugarLevel === level
                          ? "bg-[#C4A574] text-white border-[#C4A574]"
                          : "bg-white text-stone-600 border-stone-200 hover:border-[#C4A574]"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            /* TAMPILAN UNTUK MAKANAN */
            <>
              {/* Opsi Tambahan Makanan */}
              <div className="mb-6">
                <h3 className="font-bold text-stone-700 mb-3">Add-on / Saus</h3>
                <div className="space-y-2">
                  {[
                    "Extra Cheese (+3k)",
                    "Extra Sauce (+3k)",
                    "Telur Mata Sapi (+3k)",
                  ].map((opt) => (
                    <label
                      key={opt}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        className="w-5 h-5 rounded border-stone-300 text-[#C4A574] focus:ring-[#C4A574]"
                        onChange={() => handleFoodExtraChange(opt)}
                      />
                      <span className="text-stone-600 group-hover:text-[#C4A574] transition">
                        {opt}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Spicy Level */}
              <div className="mb-6">
                <h3 className="font-bold text-stone-700 mb-3">Tingkat Pedas</h3>
                <div className="grid grid-cols-4 gap-2">
                  {["Tidak Pedas", "Sedang", "Pedas", "Pedas Mampus"].map(
                    (level) => (
                      <button
                        key={level}
                        onClick={() => setSpicyLevel(level)}
                        className={`py-2 rounded-lg text-xs font-medium border ${
                          spicyLevel === level
                            ? "bg-[#C4A574] text-white border-[#C4A574]"
                            : "bg-white text-stone-600 border-stone-200 hover:border-[#C4A574]"
                        }`}
                      >
                        {level}
                      </button>
                    ),
                  )}
                </div>
              </div>
            </>
          )}

          {/* Catatan (Selalu Ada) */}
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <label className="font-bold text-stone-700">
                Catatan (opsional)
              </label>
              <span className="text-xs text-stone-400">{notes.length}/150</span>
            </div>
            <textarea
              className="w-full border border-stone-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C4A574] bg-stone-50"
              rows="2"
              placeholder={
                isDrink
                  ? "Contoh: Es dikit aja kak..."
                  : "Contoh: Jangan pakai bawang..."
              }
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              maxLength={150}
            ></textarea>
          </div>

          {/* Footer Modal */}
          <div className="mt-auto pt-6 border-t border-stone-100 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 bg-stone-100 rounded-full px-4 py-2">
              <button
                onClick={() => quantity > 1 && setQuantity((q) => q - 1)}
                className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm text-stone-600 hover:text-[#C4A574] disabled:opacity-50"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-bold text-lg w-6 text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-8 h-8 flex items-center justify-center bg-[#C4A574] rounded-full shadow-sm text-white hover:bg-[#B69565]"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={handleConfirm}
              className="flex-1 bg-[#C4A574] text-white py-3 rounded-xl font-bold hover:bg-[#B69565] transition shadow-lg"
            >
              + Rp{" "}
              {(
                product.price * quantity +
                (isDrink ? drinkExtras.length * 4000 : foodExtras.length * 3000)
              ).toLocaleString("id-ID")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN PAGE: MENU ---
const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState(() => {
    // Load cart dari localStorage saat component mount
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [customerName, setCustomerName] = useState("Pelanggan");
  const [tableNumber, setTableNumber] = useState("-");

  // State Sorting
  const [sortOrder, setSortOrder] = useState("az");
  const [isSortOpen, setIsSortOpen] = useState(false); // State untuk Toggle Dropdown

  // State Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Hook untuk navigasi antar halaman
  const navigate = useNavigate();

  // Simpan cart ke localStorage setiap kali berubah
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const name = localStorage.getItem("customerName");
    const table = localStorage.getItem("tableNumber");
    if (name) setCustomerName(name);
    if (table) setTableNumber(table);
  }, []);

  const openProductDetail = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const getTotalItem = () =>
    cart.reduce((total, item) => total + item.quantity, 0);
  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.totalPrice, 0);

  // --- LOGIC FILTER & SORT ---
  const filteredMenu = MENU_ITEMS.filter((item) => {
    const matchCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  }).sort((a, b) => {
    if (sortOrder === "az") return a.name.localeCompare(b.name);
    if (sortOrder === "za") return b.name.localeCompare(a.name);
    if (sortOrder === "low-high") return a.price - b.price;
    if (sortOrder === "high-low") return b.price - a.price;
    return 0;
  });

  const categories = [
    { id: "all", label: "Semua Produk" },
    { id: "coffee", label: "Coffee" },
    { id: "non-coffee", label: "Non Coffee" },
    { id: "tea", label: "Tea" },
    { id: "snack", label: "Snack" },
    { id: "hot-plate", label: "Hot Plate" },
  ];

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans">
      <Navbar cart={cart} />

      {/* POPUP MODAL */}
      <ProductDetailModal
        isOpen={isModalOpen}
        product={selectedProduct}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={handleAddToCart}
      />

      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* SIDEBAR KIRI */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 sticky top-24">
              <h2 className="font-bold text-xl text-stone-800 mb-6">
                Kategori
              </h2>
              <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`text-left px-5 py-3 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                      activeCategory === cat.id
                        ? "bg-[#C4A574] text-white shadow-md"
                        : "text-stone-500 hover:bg-stone-50 hover:text-stone-800"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* KONTEN KANAN */}
          <div className="flex-1">
            {/* HEADER KONTEN (BAGIAN YANG DIPERBAIKI) */}
            <div className="mb-8">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h1 className="font-bold text-3xl md:text-4xl text-stone-900 mb-1">
                    Halo, <span className="text-[#C4A574]">{customerName}</span>
                  </h1>
                  <p className="text-stone-500 text-sm md:text-base">
                    Pilih menu favorit Anda dari{" "}
                    <span className="font-semibold text-stone-700">
                      {filteredMenu.length} pilihan
                    </span>{" "}
                    yang tersedia
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg md:text-xl font-bold text-[#C4A574]">
                    Meja {tableNumber}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 w-full md:w-auto mb-8">
              {/* SORTING DROPDOWN */}
              <div className="relative">
                <button
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="hidden md:flex items-center gap-2 bg-stone-50 border border-stone-200 px-4 py-3 rounded-xl text-sm font-medium text-stone-600 hover:bg-stone-100 transition"
                >
                  <span>Urutkan</span>
                  <ChevronDown className="h-4 w-4" />
                </button>

                {isSortOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-stone-100 rounded-xl shadow-xl p-1 z-20">
                    <button
                      onClick={() => {
                        setSortOrder("az");
                        setIsSortOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 rounded-lg text-sm ${
                        sortOrder === "az"
                          ? "bg-[#C4A574]/10 text-[#C4A574]"
                          : "hover:bg-stone-50"
                      }`}
                    >
                      Nama A - Z
                    </button>
                    <button
                      onClick={() => {
                        setSortOrder("za");
                        setIsSortOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 rounded-lg text-sm ${
                        sortOrder === "za"
                          ? "bg-[#C4A574]/10 text-[#C4A574]"
                          : "hover:bg-stone-50"
                      }`}
                    >
                      Nama Z - A
                    </button>
                    <button
                      onClick={() => {
                        setSortOrder("low-high");
                        setIsSortOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 rounded-lg text-sm ${
                        sortOrder === "low-high"
                          ? "bg-[#C4A574]/10 text-[#C4A574]"
                          : "hover:bg-stone-50"
                      }`}
                    >
                      Harga Terendah
                    </button>
                    <button
                      onClick={() => {
                        setSortOrder("high-low");
                        setIsSortOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 rounded-lg text-sm ${
                        sortOrder === "high-low"
                          ? "bg-[#C4A574]/10 text-[#C4A574]"
                          : "hover:bg-stone-50"
                      }`}
                    >
                      Harga Tertinggi
                    </button>
                  </div>
                )}
              </div>

              {/* SEARCH BAR */}
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" />
                <input
                  type="text"
                  placeholder="Cari kopi, snack..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 pl-12 pr-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-stone-400 transition-all"
                />
              </div>
            </div>

            {filteredMenu.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-stone-200">
                <p className="text-stone-400">Produk tidak ditemukan.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredMenu.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 hover:shadow-lg transition-all group"
                  >
                    <div
                      className="aspect-square bg-stone-100 rounded-xl mb-4 overflow-hidden relative cursor-pointer"
                      onClick={() => openProductDetail(item)}
                    >
                      <div className="absolute top-2 right-2 z-10 bg-white/80 backdrop-blur-sm px-1.5 py-0.5 rounded text-[10px] font-bold flex items-center gap-1">
                        <Star className="w-3 h-3 text-[#C4A574] fill-[#C4A574]" />{" "}
                        {item.rating}
                      </div>
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-white text-stone-800 px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                          Lihat Detail
                        </span>
                      </div>
                    </div>

                    <h3 className="font-bold text-stone-800 text-sm md:text-base mb-1 truncate">
                      {item.name}
                    </h3>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-stone-900 font-bold text-sm md:text-base">
                        Rp {item.price.toLocaleString("id-ID")}
                      </p>
                      <button
                        onClick={() => openProductDetail(item)}
                        className="p-2 bg-[#C4A574]/10 text-[#C4A574] rounded-lg hover:bg-[#C4A574] hover:text-white transition shadow-sm"
                      >
                        <Plus className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {getTotalItem() > 0 && (
        <div className="fixed bottom-8 right-8 z-50 animate-bounce-slow">
          <div className="bg-stone-900 text-white p-4 rounded-2xl shadow-2xl border border-stone-700 flex items-center gap-4 cursor-pointer hover:bg-stone-800 transition">
            <div>
              <p className="text-[10px] text-stone-400 uppercase font-bold">
                Total
              </p>
              <p className="text-lg font-bold">
                Rp {getTotalPrice().toLocaleString("id-ID")}
              </p>
            </div>
            <button
              onClick={() => navigate("/order-summary")}
              className="bg-white text-stone-900 px-5 py-2 rounded-xl font-bold text-sm hover:bg-stone-200 transition"
            >
              Checkout ({getTotalItem()})
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Menu;
