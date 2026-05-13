import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { programsData } from '@/data/programs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function ProgramSection() {
  return (
    <section id="program" className="w-full bg-[#FDFDFD] py-24 md:py-32 scroll-mt-16 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative">
        
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Our Expertise</h2>
            <h3 className="text-4xl font-bold tracking-tight text-zinc-900 md:text-6xl">
              Program & <span className="italic text-zinc-400 font-medium">Layanan Kami</span>
            </h3>
          </motion.div>

          <div className="flex gap-3">
            <button className="prev-btn h-12 w-12 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-primary transition-all group">
              <ArrowLeft size={20} className="group-hover:text-black text-zinc-400" />
            </button>
            <button className="next-btn h-12 w-12 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-primary transition-all group">
              <ArrowRight size={20} className="group-hover:text-black text-zinc-400" />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{ prevEl: '.prev-btn', nextEl: '.next-btn' }}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="!overflow-visible"
        >
          {programsData.map((item, index) => (
            <SwiperSlide key={item.id}>
              <Link to={`/program/${item.id}`} className="group block h-full">
                <Card className="h-full border-none shadow-none bg-transparent rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:bg-white hover:shadow-2xl">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem]">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-6 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 font-bold text-zinc-900 backdrop-blur-md">
                      0{index + 1}
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="mb-4 flex items-center gap-2">
                      <Zap size={14} className="text-primary fill-primary" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{item.category}</span>
                    </div>
                    <h4 className="text-2xl font-bold text-zinc-900 mb-4 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2">{item.description}</p>
                    <div className="mt-8 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] font-bold uppercase text-primary">View Details</span>
                      <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-black"><ArrowRight size={18} /></div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}