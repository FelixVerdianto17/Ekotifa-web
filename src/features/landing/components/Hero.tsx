import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    // FIX: pt-24 md:pt-28 ditambahkan agar Hero turun dan memberi ruang untuk Navbar pill
    <section id="hero" className="w-full bg-white px-4 pb-12 pt-24 md:px-6 md:pt-28">
      
      {/* Container Utama - Menggunakan border radius besar ala sampul majalah */}
      <div className="relative flex min-h-[85vh] w-full flex-col justify-between overflow-hidden rounded-[2rem] md:rounded-[2.5rem]">
        <img 
          src="/images/Hero.jpg" 
          alt="Pemandangan Alam Ekotifa" 
          className="absolute inset-0 h-full w-full object-cover"
        />
        
        {/* Gradient Overlay: Agar teks putih tetap terbaca meski gambarnya terang */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

        {/* Top Content: Headline & CTA */}
        <div className="relative z-10 flex flex-col items-start px-6 pt-16 md:px-16 md:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start gap-6"
          >
            {/* Headline */}
            <h1 className="max-w-5xl text-5xl font-medium tracking-tighter text-white sm:text-6xl md:text-8xl lg:leading-[1.05]">
              Jelajahi Perjalanan <br className="hidden md:block" /> Alam Luar Biasa
            </h1>
            
            {/* CTA Button */}
            <Link 
              to="/about"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition-all hover:scale-105 active:scale-95"
            >
              Mulai Petualangan 
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* Bottom Content: Subtitle & Tags */}
        <div className="relative z-10 mt-auto flex flex-col items-end justify-between gap-8 px-6 pb-8 md:flex-row md:items-end md:px-16 md:pb-12">
          
          {/* Subtitle Deskripsi */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full max-w-xl md:w-1/2"
          >
            <p className="text-base leading-relaxed text-white/90 md:text-lg">
              Temukan pemandangan spektakuler dan terhubung kembali dengan alam melalui perjalanan terkurasi kami. Nikmati pemandangan luar biasa dan benamkan dirimu dalam kegiatan konservasi alam bersama Ekotifa.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}