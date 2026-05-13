import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Target, CheckCircle2, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { programsData } from '@/data/programs';

export default function ProgramDetailPage() {
  const { id } = useParams();
  const data = programsData.find((p) => p.id === id);

  if (!data) return <div className="p-20 text-center">Program Not Found</div>;

  return (
    <div className="min-h-screen bg-white pb-20 pt-28">
      <div className="container mx-auto max-w-6xl px-4">
        <Link to="/" className="group flex items-center gap-2 text-sm font-bold uppercase text-zinc-400 hover:text-black mb-8">
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" /> Kembali
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl">
          <img src={data.image} alt={data.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-5xl font-bold text-zinc-900">{data.title}</h1>
            <div className="mt-6 flex flex-wrap gap-6 text-zinc-500 border-b pb-8">
              <div className="flex items-center gap-2"><MapPin size={18} className="text-primary" /> {data.location}</div>
              <div className="flex items-center gap-2"><Clock size={18} /> {data.duration}</div>
            </div>
            <p className="mt-8 text-xl text-zinc-600 leading-relaxed">{data.description}</p>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-zinc-50 p-8 rounded-[2.5rem] border border-zinc-100 sticky top-32">
              <div className="flex items-center gap-3 mb-6">
                <Target className="text-primary" />
                <span className="font-bold text-zinc-900">{data.impactGoal}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {data.details.map((d, i) => (
                  <li key={i} className="flex gap-2 text-sm text-zinc-600 font-medium">
                    <CheckCircle2 size={16} className="text-primary mt-1 shrink-0" /> {d}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-primary text-black font-bold rounded-full h-14 hover:scale-105 transition-all">Hubungi Kami</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}