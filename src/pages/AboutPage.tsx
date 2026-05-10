import { motion } from 'framer-motion';

// Type definition untuk data tim
type TeamMember = {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
};

// Data dummy (bisa kamu ganti dengan data tim Ekotifa yang asli)
const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Afro',
    role: 'Founder & CEO',
    imageUrl: '/images/team-placeholder-1.jpg',
  },
  {
    id: '2',
    name: 'Siti Lestari',
    role: 'Head of Conservation',
    imageUrl: '/images/team-placeholder-2.jpg',
  },
  {
    id: '3',
    name: 'Andi Pratama',
    role: 'Community Outreach',
    imageUrl: '/images/team-placeholder-3.jpg',
  },
  {
    id: '4',
    name: 'Rina Wijaya',
    role: 'Eco-Tourism Guide',
    imageUrl: '/images/team-placeholder-4.jpg',
  },
];

export default function AboutPage() {
  return (
    <div className="flex w-full flex-col bg-white text-zinc-950 selection:bg-zinc-200">
      
      {/* SECTION 1: Detail Ekotifa */}
      <section className="mx-auto w-full max-w-[1400px] px-6 py-32 md:px-12 lg:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 max-w-4xl"
        >
          <h1 className="mb-8 text-5xl font-medium tracking-tighter md:text-7xl">
            Menjaga Bumi, <br /> Memberdayakan Komunitas.
          </h1>
          <p className="text-xl leading-relaxed text-zinc-500">
            Ekotifa (PT Ekowisata Kreatif Indonesia) lahir dari kesadaran bahwa pariwisata 
            tidak boleh merusak, melainkan harus merawat. Berbasis di Bogor, kami 
            membangun jembatan antara traveler yang peduli lingkungan dengan program 
            konservasi serta komunitas lokal yang menjaga kelestarian alam.
          </p>
        </motion.div>
        
        {/* Banner Image Penuh */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="h-[500px] w-full overflow-hidden rounded-[2rem] bg-zinc-100"
        >
          <img 
            src="/images/About.jpg" 
            alt="Kegiatan Konservasi Ekotifa" 
            className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
      </section>

      {/* SECTION 2: Meet Our Team */}
      <section className="w-full bg-zinc-50 py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-24">
          <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <h2 className="mb-4 text-4xl font-medium tracking-tighter md:text-5xl">
                Meet the minds behind Ekotifa
              </h2>
              <p className="text-zinc-500">
                Tim kami terdiri dari para ahli konservasi, strategis digital, dan penggerak komunitas lokal yang memiliki visi sama.
              </p>
            </motion.div>
          </div>

          {/* Grid Tim: 1 kolom di HP, 2 di Tablet, 4 di Desktop */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col gap-4"
              >
                {/* Image Box (Rasio Portrait untuk Editorial) */}
                <div className="aspect-[3/4] w-full overflow-hidden bg-zinc-200 rounded-lg">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                {/* Info Pekerja */}
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <span className="text-sm text-zinc-500">{member.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}