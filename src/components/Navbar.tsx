import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // FIX: Array menu sekarang memiliki properti `isPage` 
  // agar sistem tahu mana yang pindah halaman, mana yang scroll ID
  const navLinks = [
    { name: "About Us", target: "/about", isPage: true }, // Arahkan langsung ke halaman About
    { name: "Program", target: "program", isPage: false },
    { name: "Jangkauan", target: "jangkauan", isPage: false },
    { name: "Explore", target: "eksplorasi", isPage: false },
    { name: "Karir", target: "/career", isPage: true }, // Halaman Karir Baru
  ];

  // FIX: Logika routing yang disempurnakan (Scroll vs Page Navigation)
  const handleNavClick = (link: { target: string; isPage: boolean }) => {
    if (link.isPage) {
      // Jika ini adalah halaman terpisah, gunakan router navigate
      navigate(link.target);
      window.scrollTo(0, 0);
    } else {
      // Jika ini adalah section di beranda (homepage)
      if (pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(link.target);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const element = document.getElementById(link.target);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header 
      className={cn(
        "fixed left-0 right-0 top-0 z-50 flex justify-center transition-all duration-500 pointer-events-none",
        isScrolled ? "pt-4 md:pt-6" : "pt-0"
      )}
    >
      <nav
        className={cn(
          "pointer-events-auto flex items-center justify-between transition-all duration-500 ease-out backdrop-blur-md",
          isScrolled
            ? "w-[95%] max-w-4xl rounded-full border border-zinc-200/60 bg-white/80 px-6 py-3 shadow-xl shadow-black/5" 
            : "w-full max-w-full rounded-none border-b border-white/20 bg-white/40 px-6 py-5 md:px-12" 
        )}
      >
        <Link 
          to="/" 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center transition-transform hover:scale-105 active:scale-95"
        >
          <img 
            src="/images/logo.jpg" 
            alt="Logo Ekotifa" 
            className="h-7 w-auto object-contain md:h-8" 
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, idx) => (
            <button
              key={idx}
              onClick={() => handleNavClick(link)}
              className={cn(
                "text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300",
                isScrolled ? "text-zinc-600 hover:text-black" : "text-zinc-800 hover:text-primary"
              )}
            >
              {link.name}
            </button>
          ))}
          
          <Button 
            className="h-11 rounded-full bg-zinc-950 px-8 text-[10px] font-bold uppercase tracking-widest text-white shadow-md transition-all hover:scale-105 hover:bg-zinc-800 active:scale-95"
          >
            Hubungi Kami
          </Button>
        </div>

        <div className="group flex cursor-pointer flex-col gap-1.5 p-2 md:hidden">
          <div className="h-0.5 w-6 rounded-full bg-zinc-900 transition-all"></div>
          <div className="h-0.5 w-4 rounded-full bg-zinc-900 transition-all group-hover:w-6"></div>
        </div>
      </nav>
    </header>
  );
}