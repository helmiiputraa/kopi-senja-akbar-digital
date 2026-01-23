import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Receipt,
  CreditCard,
  Banknote,
  CheckCircle,
  ChevronRight,
  QrCode,
  Home,
  ShoppingBag,
  Menu as MenuIcon,
  X,
  Coffee,
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
} from "lucide-react";

// --- COMPONENT NAVBAR ---
const Navbar = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

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
            <span className="font-bold text-xl text-amber-900">Kopi Senja</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigate("/")}
              className="text-stone-600 hover:text-amber-800 font-medium transition-colors"
            >
              Beranda
            </button>
            <button
              onClick={() => navigate("/menu")}
              className="text-stone-600 hover:text-amber-800 font-medium transition-colors"
            >
              Menu
            </button>
            <button className="relative p-2 text-amber-800 transition-colors">
              <ShoppingBag className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
          <div className="md:hidden flex items-center gap-4">
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
            <button
              onClick={() => navigate("/menu")}
              className="block w-full text-left px-3 py-3 text-base font-medium text-stone-600 hover:bg-stone-50 rounded-md"
            >
              Menu
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

// --- COMPONENT FOOTER (UPDATED: Versi Besar & Lega) ---
const Footer = () => {
  return (
    <footer className="bg-stone-100 text-stone-600 pt-16 pb-12 border-t border-stone-200 mt-auto">
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
              <span className="font-bold text-lg text-amber-900">
                Kopi Senja
              </span>
            </div>
            <p className="text-base leading-relaxed text-stone-500">
              Menghadirkan pengalaman ngopi modern dengan cita rasa lokal yang
              autentik.
            </p>
            <div className="flex gap-3 pt-2">
              <div className="bg-white p-2.5 rounded-full shadow-sm">
                <Instagram className="w-5 h-5 text-stone-400" />
              </div>
              <div className="bg-white p-2.5 rounded-full shadow-sm">
                <Facebook className="w-5 h-5 text-stone-400" />
              </div>
            </div>
          </div>
          {/* Kolom 2 */}
          <div>
            <h3 className="text-stone-900 font-bold text-lg mb-6">
              Hubungi Kami
            </h3>
            <ul className="space-y-4 text-base text-stone-600">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-700 mt-1" />
                <span>
                  Jl. Raya Banaran, Sekaran, Kec. Gn. Pati, Kota Semarang, Jawa
                  Tengah 50229
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-700" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-700" />
                <span>halo@kopisenja.com</span>
              </li>
            </ul>
          </div>
          {/* Kolom 3 */}
          <div>
            <h3 className="text-stone-900 font-bold text-lg mb-6">Jam Buka</h3>
            <ul className="space-y-4 text-base text-stone-600">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-700 mt-1" />
                <div>
                  <span className="block text-stone-900 font-bold">
                    Senin - Jumat
                  </span>
                  <span>08.00 - 22.00 WIB</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-700 mt-1" />
                <div>
                  <span className="block text-stone-900 font-bold">
                    Sabtu - Minggu
                  </span>
                  <span>08.00 - 24.00 WIB</span>
                </div>
              </li>
            </ul>
          </div>
          {/* Kolom 4 */}
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

// --- MAIN PAGE: ORDER SUMMARY ---
const OrderSummary = () => {
  const navigate = useNavigate();

  // Load cart dari localStorage
  const [cartData, setCartData] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const customerName = localStorage.getItem("customerName") || "Pelanggan";
  const tableNumber = localStorage.getItem("tableNumber") || "-";

  const [paymentMethod, setPaymentMethod] = useState("qris");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Hitung Total Items untuk Badge Navbar
  const totalItems = cartData.reduce((total, item) => total + item.quantity, 0);

  // Hitung Harga
  const subtotal = cartData.reduce((total, item) => total + item.totalPrice, 0);
  const tax = subtotal * 0.1;
  const serviceFee = 2000;
  const grandTotal = subtotal + tax + serviceFee;

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans">
      <Navbar cartCount={totalItems} />

      {/* --- CONTENT AREA --- */}
      <div className="flex-1 pt-24 pb-12 px-4">
        {/* KONDISI: KERANJANG KOSONG */}
        {cartData.length === 0 ? (
          <div className="max-w-md mx-auto text-center py-12 animate-fade-in">
            <div className="w-40 h-40 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
              <ShoppingBag className="w-20 h-20 text-amber-800 opacity-50" />
            </div>
            <h2 className="text-3xl font-bold text-stone-800 mb-3">
              Keranjang Kosong
            </h2>
            <p className="text-stone-500 mb-8 leading-relaxed">
              Sepertinya kamu belum memesan apapun.
              <br />
              Yuk, lihat menu kami yang menyegarkan!
            </p>
            <button
              onClick={() => navigate("/menu")}
              className="bg-amber-800 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-900 transition shadow-lg hover:shadow-amber-900/20 transform hover:-translate-y-1"
            >
              Lihat Menu
            </button>
          </div>
        ) : (
          /* KONDISI: ADA ISI KERANJANG (CHECKOUT) */
          <div className="max-w-4xl mx-auto">
            {/* Modal Sukses */}
            {showSuccess && (
              <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity animate-fade-in">
                <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center animate-bounce-slow">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-stone-800 mb-2">
                    Pembayaran Berhasil!
                  </h2>
                  <p className="text-stone-500 mb-6">
                    Terima kasih <b>{customerName}</b>! Pesananmu akan segera
                    diantar ke <b>Meja {tableNumber}</b>.
                  </p>
                  <div className="bg-stone-50 p-4 rounded-xl border border-stone-100 mb-6">
                    <p className="text-xs text-stone-400 uppercase font-bold mb-1">
                      Total Bayar
                    </p>
                    <p className="text-2xl font-bold text-amber-800">
                      Rp {grandTotal.toLocaleString("id-ID")}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      localStorage.removeItem("cart");
                      navigate("/");
                    }}
                    className="w-full bg-amber-800 text-white py-3.5 rounded-xl font-bold hover:bg-amber-900 transition flex items-center justify-center gap-2"
                  >
                    <Home className="w-5 h-5" /> Kembali ke Beranda
                  </button>
                </div>
              </div>
            )}

            <div className="flex flex-col lg:flex-row gap-8">
              {/* --- KOLOM KIRI: DAFTAR PESANAN --- */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <button
                    onClick={() => navigate(-1)}
                    className="p-2 bg-white border border-stone-200 rounded-full hover:bg-stone-50 transition"
                  >
                    <ArrowLeft className="w-5 h-5 text-stone-600" />
                  </button>
                  <h1 className="text-2xl font-bold text-stone-800">
                    Ringkasan Pesanan
                  </h1>
                </div>

                <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 mb-6">
                  {/* Info User */}
                  <div className="flex justify-between items-center pb-6 border-b border-stone-100 mb-6">
                    <div>
                      <p className="text-xs text-stone-400 font-bold uppercase tracking-wider">
                        Pemesan
                      </p>
                      <p className="font-bold text-lg text-stone-800">
                        {customerName}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-stone-400 font-bold uppercase tracking-wider">
                        Meja
                      </p>
                      <p className="font-bold text-lg text-amber-800">
                        #{tableNumber}
                      </p>
                    </div>
                  </div>

                  {/* List Item */}
                  <div className="space-y-6">
                    {cartData.map((item, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-20 h-20 bg-stone-100 rounded-xl overflow-hidden shrink-0">
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h4 className="font-bold text-stone-800 text-base">
                              {item.name}
                            </h4>
                            <p className="font-bold text-stone-800">
                              Rp {item.totalPrice.toLocaleString("id-ID")}
                            </p>
                          </div>
                          <p className="text-sm text-stone-500 mt-1">
                            {item.quantity}x @ Rp{" "}
                            {item.price.toLocaleString("id-ID")}
                          </p>

                          {/* Detail Opsi */}
                          <div className="mt-2 text-xs text-stone-500 bg-stone-50 p-2 rounded-lg space-y-1 inline-block w-full">
                            {item.options?.sugar && (
                              <p>• {item.options.sugar}</p>
                            )}
                            {item.options?.spicy && (
                              <p>• {item.options.spicy}</p>
                            )}
                            {item.options?.extras?.length > 0 && (
                              <p>• + {item.options.extras.join(", ")}</p>
                            )}
                            {item.notes && (
                              <p className="italic text-amber-700 mt-1">
                                "{item.notes}"
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* --- KOLOM KANAN: PEMBAYARAN --- */}
              <div className="w-full lg:w-96">
                <div className="bg-white p-6 rounded-3xl shadow-lg border border-stone-100 sticky top-24">
                  <h3 className="font-bold text-stone-800 mb-4 text-lg">
                    Rincian Pembayaran
                  </h3>

                  {/* Metode Bayar */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <button
                      onClick={() => setPaymentMethod("qris")}
                      className={`p-3 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${
                        paymentMethod === "qris"
                          ? "border-amber-600 bg-amber-50 text-amber-900"
                          : "border-stone-100 hover:border-amber-200"
                      }`}
                    >
                      <QrCode className="w-6 h-6" />
                      <span className="text-xs font-bold">QRIS</span>
                    </button>
                    <button
                      onClick={() => setPaymentMethod("cash")}
                      className={`p-3 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${
                        paymentMethod === "cash"
                          ? "border-amber-600 bg-amber-50 text-amber-900"
                          : "border-stone-100 hover:border-amber-200"
                      }`}
                    >
                      <Banknote className="w-6 h-6" />
                      <span className="text-xs font-bold">Tunai</span>
                    </button>
                  </div>

                  {/* QR Code Preview */}
                  {paymentMethod === "qris" && (
                    <div className="bg-stone-900 p-4 rounded-xl mb-6 flex flex-col items-center text-center text-white">
                      <div className="bg-white p-2 rounded-lg mb-2">
                        <QrCode className="w-20 h-20 text-black" />
                      </div>
                      <p className="text-xs font-mono opacity-80">
                        NMID: KOPISENJA123
                      </p>
                    </div>
                  )}

                  {/* Total */}
                  <div className="space-y-2 mb-6 text-sm border-t border-stone-100 pt-4">
                    <div className="flex justify-between text-stone-500">
                      <span>Subtotal</span>
                      <span>Rp {subtotal.toLocaleString("id-ID")}</span>
                    </div>
                    <div className="flex justify-between text-stone-500">
                      <span>Pajak (10%)</span>
                      <span>Rp {tax.toLocaleString("id-ID")}</span>
                    </div>
                    <div className="flex justify-between text-stone-500">
                      <span>Biaya Layanan</span>
                      <span>Rp {serviceFee.toLocaleString("id-ID")}</span>
                    </div>
                    <div className="flex justify-between font-bold text-xl text-stone-800 pt-2 border-t border-stone-100 mt-2">
                      <span>Total</span>
                      <span>Rp {grandTotal.toLocaleString("id-ID")}</span>
                    </div>
                  </div>

                  <button
                    onClick={handlePayment}
                    disabled={isProcessing}
                    className="w-full bg-amber-800 text-white py-4 rounded-2xl font-bold text-lg hover:bg-amber-900 transition flex items-center justify-center gap-2 shadow-xl shadow-amber-900/20 disabled:opacity-70 active:scale-95 transform duration-200"
                  >
                    {isProcessing ? (
                      <span className="animate-pulse">Memproses...</span>
                    ) : paymentMethod === "qris" ? (
                      "Bayar Sekarang"
                    ) : (
                      "Buat Pesanan"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default OrderSummary;
