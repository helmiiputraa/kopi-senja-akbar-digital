import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Untuk pindah halaman
import { Coffee, User, MapPin, ChevronRight } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [table, setTable] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !table) return alert("Mohon isi nama dan nomor meja!");

    // Simpan data ke LocalStorage sementara
    localStorage.setItem("customerName", name);
    localStorage.setItem("tableNumber", table);

    // Pindah ke halaman Menu (Nanti kita buat)
    navigate("/menu");
  };

  return (
    <div className="min-h-screen bg-stone-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-64 bg-amber-900 rounded-b-[3rem] z-0"></div>

      {/* Card Form */}
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md relative z-10 border border-stone-100">
        <div className="text-center mb-8">
          <div className="bg-amber-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
            <img
              src="/LogoKopiSenja.png"
              alt="Kopi Senja Logo"
              className="h-16 w-16 object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold text-stone-900">Selamat Datang!</h1>
          <p className="text-stone-500 text-sm">
            Silakan isi data sebelum memesan.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input Nama */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-stone-700 ml-1">
              Nama Pemesan
            </label>
            <div className="relative">
              <User className="absolute left-4 top-3.5 h-5 w-5 text-stone-400" />
              <input
                type="text"
                placeholder="Contoh: Budi"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                required
              />
            </div>
          </div>

          {/* Input Nomor Meja */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-stone-700 ml-1">
              Nomor Meja
            </label>
            <div className="relative">
              <MapPin className="absolute left-4 top-3.5 h-5 w-5 text-stone-400" />
              <select
                value={table}
                onChange={(e) => setTable(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                required
              >
                <option value="">Pilih Nomor Meja</option>
                {[...Array(20)].map((_, i) => (
                  <option key={i} value={i + 1}>
                    Meja {i + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Tombol Submit */}
          <button
            type="submit"
            className="w-full bg-amber-800 text-white py-3.5 rounded-xl font-bold text-lg hover:bg-amber-900 transition-all shadow-lg hover:shadow-amber-900/20 flex items-center justify-center gap-2"
          >
            Mulai Pesan <ChevronRight className="h-5 w-5" />
          </button>
        </form>
      </div>

      {/* Copyright */}
      <div className="absolute bottom-6 text-stone-400 text-xs">
        © 2025 Kopi Senja Digital
      </div>
    </div>
  );
};

export default Login;
