import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Fix icon leaflet yang sering hilang saat build
const customIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', // Ganti dengan icon primary kamu
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const locations = [
  { id: "konsultasi-destinasi", city: "Jakarta", coords: [-6.2088, 106.8456] as [number, number], title: "Headquarter & Consulting" },
  { id: "youth-research-camp", city: "Bali", coords: [-8.4095, 115.1889] as [number, number], title: "Nature Research Center" },
  { id: "pengelolaan-destinasi", city: "Surabaya", coords: [-7.2575, 112.7521] as [number, number], title: "Management Hub" },
  { id: "wisata-konservasi", city: "Medan", coords: [3.5952, 98.6722] as [number, number], title: "Sumatra Conservation" },
  { id: "wisata-konservasi", city: "Makassar", coords: [-5.1476, 119.4327] as [number, number], title: "East Indonesia Gate" },
];

export default function MapSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Our Presence</h2>
          <h3 className="text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
            Jangkauan <span className="italic text-zinc-400 font-medium">Layanan Kami</span>
          </h3>
        </div>

        <div className="h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl border-8 border-zinc-50 relative z-0">
          <MapContainer 
            center={[-2.5489, 118.0149]} // Center of Indonesia
            zoom={5} 
            className="h-full w-full"
            scrollWheelZoom={false}
          >
            {/* TileLayer menggunakan style 'CartoDB Positron' agar warnanya putih/abu-abu bersih ala Endless Worlds */}
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
            />

            {locations.map((loc, index) => (
              <Marker key={index} position={loc.coords} icon={customIcon}>
                <Popup className="custom-popup">
                  <div className="p-2">
                    <p className="text-[10px] font-bold uppercase text-primary mb-1">{loc.city}</p>
                    <h4 className="font-bold text-zinc-900 mb-2">{loc.title}</h4>
                    <Link 
                      to={`/program/${loc.id}`}
                      className="text-xs font-bold text-zinc-400 hover:text-black flex items-center gap-1"
                    >
                      Lihat Program →
                    </Link>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-12 grayscale opacity-50">
          <div className="text-center"><p className="text-2xl font-bold">12+</p><p className="text-xs uppercase font-bold tracking-widest">Cities</p></div>
          <div className="text-center"><p className="text-2xl font-bold">50+</p><p className="text-xs uppercase font-bold tracking-widest">Projects</p></div>
          <div className="text-center"><p className="text-2xl font-bold">5000+</p><p className="text-xs uppercase font-bold tracking-widest">Impacted Youth</p></div>
        </div>
      </div>
    </section>
  );
}