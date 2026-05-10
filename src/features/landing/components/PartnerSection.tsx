import { motion } from 'framer-motion';

// Data Logo Partner (Kamu bisa ganti dengan logo asli nanti)
const partnerLogos = [
  { id: 1, name: "Endless Worlds", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Placeholder_logo.svg" },
  { id: 2, name: "Green Earth", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Placeholder_logo.svg" },
  { id: 3, name: "Eco Travel Co.", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Placeholder_logo.svg" },
  { id: 4, name: "Sustainable Tourism Fund", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Placeholder_logo.svg" },
  { id: 5, name: "Wilderness Protect", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Placeholder_logo.svg" },
  { id: 6, name: "Culture Heritage Hub", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Placeholder_logo.svg" },
];

// Duplikasi data agar pergerakannya tidak putus-putus
const duplicatedLogos = [...partnerLogos, ...partnerLogos];

export default function PartnerSection() {
  return (
    <section className="w-full py-20 bg-[#FDFDFD] overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative">
        
        {/* Header Section */}
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">
              Trusted By
            </h2>
            <h3 className="text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
              Kolaborator & <span className="italic text-zinc-400 font-medium">Mitra Kami</span>
            </h3>
          </motion.div>
        </div>

        {/* Infinite Marquee Container */}
        <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex flex-none gap-20 py-8"
            animate={{
              x: ["0%", "-50%"], // Gerak dari awal sampai setengah (setelah logo duplikat)
            }}
            transition={{
              ease: "linear",
              duration: 30, // Kecepatan pergerakan (semakin besar semakin lambat)
              repeat: Infinity,
            }}
            // Trik jitu untuk menghentikan animasi saat hover
            style={{ display: 'flex' }}
            whileHover={{ animationPlayState: 'paused' }} 
          >
            {duplicatedLogos.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-24 w-auto min-w-[150px] group transition-all"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 w-auto object-contain grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}