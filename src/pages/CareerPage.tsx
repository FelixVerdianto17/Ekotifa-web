import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Leaf, Users, Globe, MapPin, Loader2 } from 'lucide-react';

type JobOpening = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
};

type CoreValue = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const coreValues: CoreValue[] = [
  {
    title: 'Dampak Nyata',
    desc: 'Setiap baris kode atau rute yang kamu buat berkontribusi langsung pada pelestarian alam dan pemberdayaan komunitas lokal.',
    icon: <Leaf className="h-6 w-6 text-emerald-600" />
  },
  {
    title: 'Tumbuh Bersama',
    desc: 'Kami percaya pada kolaborasi. Kamu akan bekerja dengan para ahli lingkungan dan teknolog yang inspiratif.',
    icon: <Users className="h-6 w-6 text-emerald-600" />
  },
  {
    title: 'Fleksibilitas & Kepercayaan',
    desc: 'Bekerja dari basecamp kami di Bogor atau dari mana saja. Kami mengukur hasil dan dampak, bukan jam duduk.',
    icon: <Globe className="h-6 w-6 text-emerald-600" />
  }
];

export default function CareerPage() {
  const [jobOpenings, setJobOpenings] = useState<JobOpening[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // GANTI INI dengan URL Google Form asli milikmu
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform";

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true);
        // Fetch dari API SheetDB yang terhubung ke Google Sheets kamu
        const response = await fetch('https://sheetdb.io/api/v1/pczhlr8k7zef2');
        const data = await response.json();
        
        if (response.ok) {
          setJobOpenings(data);
        } else {
          setError(true);
        }
      } catch (err) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="flex w-full flex-col bg-white text-zinc-950 selection:bg-emerald-100">
      
      {/* SECTION 1: HERO */}
      <section className="mx-auto w-full max-w-[1400px] px-6 pt-32 pb-16 md:px-12 lg:px-24 md:pt-40">
        <div className="flex flex-col gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl font-medium tracking-tighter sm:text-6xl md:text-8xl lg:leading-[1.05]">
              Bangun karirmu. <br />
              <span className="text-zinc-400">Pulihkan bumi.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-500 md:text-xl">
              Bergabunglah dengan tim Ekotifa untuk mendefinisikan ulang cara manusia menjelajahi dan merawat alam melalui teknologi dan konservasi.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="h-[400px] w-full overflow-hidden rounded-[2rem] bg-zinc-100 md:h-[500px]"
          >
            <img 
              src="/images/career-hero.jpg" 
              alt="Tim Ekotifa" 
              className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
            />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: VALUES */}
      <section className="w-full bg-zinc-50 py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-24">
          <div className="mb-16 md:mb-24">
            <h2 className="text-4xl font-medium tracking-tighter md:text-5xl">
              Bekerja dengan tujuan
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {coreValues.map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col gap-4"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold">{value.title}</h3>
                <p className="leading-relaxed text-zinc-500">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: OPEN POSITIONS */}
      <section className="mx-auto w-full max-w-[1400px] px-6 py-24 md:px-12 lg:px-24 md:py-32">
        <div className="mb-12">
          <h2 className="text-4xl font-medium tracking-tighter md:text-5xl">
            Posisi Terbuka
          </h2>
          <p className="mt-4 text-zinc-500">
            Daftar posisi yang diperbarui secara real-time dari database kami.
          </p>
        </div>

        {isLoading ? (
          <div className="flex h-48 w-full flex-col items-center justify-center gap-4">
            <Loader2 className="h-8 w-8 animate-spin text-zinc-300" />
            <p className="text-sm text-zinc-400">Menghubungkan ke database...</p>
          </div>
        ) : error ? (
          <div className="rounded-3xl border border-red-100 bg-red-50 p-12 text-center text-red-600">
            Gagal memuat data. Silakan refresh halaman.
          </div>
        ) : jobOpenings.length > 0 ? (
          <div className="flex flex-col gap-4">
            {jobOpenings.map((job, idx) => (
              <motion.a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                key={job.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group flex flex-col justify-between gap-6 rounded-3xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-xl md:flex-row md:items-center md:p-8"
              >
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-semibold transition-colors group-hover:text-emerald-700">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-600">
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-zinc-500">
                      <MapPin className="h-4 w-4" /> {job.location}
                    </span>
                    <span className="text-sm text-zinc-500">•</span>
                    <span className="text-sm text-zinc-500">{job.type}</span>
                  </div>
                </div>
                <div className="hidden h-12 w-12 items-center justify-center rounded-full bg-zinc-50 transition-all group-hover:bg-emerald-600 group-hover:text-white md:flex">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </motion.a>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-zinc-100 bg-zinc-50 p-12 text-center text-zinc-500">
            Belum ada lowongan untuk saat ini.
          </div>
        )}
        
        {/* Open Application CTA */}
        <div className="mt-16 rounded-[2.5rem] bg-zinc-950 p-8 text-center md:p-16">
          <h3 className="mb-4 text-3xl font-semibold text-white">Belum menemukan posisi yang pas?</h3>
          <p className="mx-auto mb-10 max-w-xl text-zinc-400">
            Kami selalu mencari talenta berbakat. Kirimkan profilmu melalui Open Application.
          </p>
          <a 
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-white px-10 py-4 text-sm font-bold text-black transition-all hover:scale-105 active:scale-95 shadow-lg"
          >
            Kirim Lamaran Terbuka
          </a>
        </div>
      </section>

    </div>
  );
}