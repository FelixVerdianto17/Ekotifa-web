import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Pindahkan data ke luar komponen agar tidak terjadi re-creation setiap render
// Kita gunakan Type Alias sesuai kesepakatan standar penulisan
type CompanyInfo = {
  foundedYear: string;
  location: {
    address: string;
    city: string;
  };
  missionParagraphs: string[];
};

const ekotifaData: CompanyInfo = {
  foundedYear: "2024", 
  location: {
    address: "PT Ekowisata Kreatif Indonesia",
    city: "Bogor, Jawa Barat, Indonesia",
  },
  missionParagraphs: [
    "Kami mengadopsi gagasan bahwa setiap perjalanan wisata harus memberikan dampak nyata. Baik itu menyusuri hutan yang rimbun, desa wisata, atau inisiatif konservasi, kami merancang pengalaman yang selaras dengan prinsip berkelanjutan dan memberdayakan komunitas lokal.",
    "Kami berdedikasi untuk menawarkan pengalaman yang aman, transparan, dan autentik. Dari eksplorasi alam bebas hingga riset ekologi bagi generasi muda, Ekotifa hadir untuk memastikan setiap perjalananmu tidak hanya luar biasa, tetapi juga menjaga bumi untuk masa depan."
  ]
};

export default function AboutSection() {
  return (
    <section id="about" className="w-full overflow-hidden bg-white py-24 text-zinc-950 md:py-32">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-16 px-6 md:gap-24 md:px-12 lg:px-24">
        
        {/* Header Area */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col lg:col-span-7"
          >
            <h2 className="text-6xl font-medium leading-none tracking-tighter md:text-8xl lg:text-[10rem]">
              Ekotifa
              <br />
              <span className="text-zinc-950">About us</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="pt-2 lg:col-span-5 lg:pt-8"
          >
            <p className="text-lg leading-relaxed text-zinc-500 md:text-xl">
              Di Ekotifa, kami percaya bahwa perjalanan lebih dari sekadar singgah—ini adalah sebuah pengalaman yang menghubungkan manusia, ruang alam, dan budaya. Itulah mengapa kami berkomitmen untuk menyediakan ekowisata unik yang mengubah setiap perjalanan menjadi jejak positif yang abadi.
            </p>
          </motion.div>
        </div>

        {/* Hero Image Area */}


        {/* Footer Info Area */}
        <div className="grid grid-cols-1 gap-12 border-t border-zinc-200 pt-8 md:grid-cols-12 md:gap-8 md:pt-12">
          
          {/* Founded Column */}
          <div className="flex flex-col gap-3 md:col-span-3 lg:col-span-2">
            <span className="text-sm font-medium uppercase tracking-wider text-zinc-400">Founded In</span>
            <span className="text-xl font-semibold">{ekotifaData.foundedYear}</span>
          </div>
          
          {/* Location Column */}
          <div className="flex flex-col gap-3 md:col-span-4 lg:col-span-4">
            <span className="text-sm font-medium uppercase tracking-wider text-zinc-400">Location</span>
            <span className="text-lg font-medium leading-relaxed text-zinc-800">
              {ekotifaData.location.address}
              <br />
              {ekotifaData.location.city}
            </span>
          </div>
          
          {/* Description Column */}
          <div className="flex flex-col gap-6 md:col-span-5 lg:col-span-6">
            {ekotifaData.missionParagraphs.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed text-zinc-500">
                {paragraph}
              </p>
            ))}
            
            {/* Button "See More" */}
            <div className="mt-4">
              <Link 
                to="/about" 
                className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-8 text-sm font-medium text-white transition-all hover:scale-[1.02] hover:bg-zinc-800 active:scale-[0.98]"
              >
                Read Our Full Story
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}