import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// --- KOMPONEN LAYOUT & NAVBAR ---
import Navbar from '@/components/Navbar';

// --- KOMPONEN HOMEPAGE ---
import Hero from '@/features/landing/components/Hero';
import AboutSection from '@/features/landing/components/AboutSection';
import ProgramSection from '@/features/landing/components/ProgramSection';
import MapSection from '@/features/landing/components/MapSection';
import TravelerQuiz from '@/features/landing/components/TravelerQuiz';
import PartnerSection from '@/features/landing/components/PartnerSection';

// --- HALAMAN (PAGES) ---
import ProgramDetailPage from '@/pages/ProgramDetailPage';
import AboutPage from '@/pages/AboutPage';
import CareerPage from '@/pages/CareerPage'; // 👈 IMPORT HALAMAN KARIR

/**
 * ScrollToTop Component
 * Memastikan halaman kembali ke atas setiap kali route berpindah
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

/**
 * MainLayout Component
 * Membungkus semua halaman dengan Navbar dan konfigurasi dasar
 */
function MainLayout() {
  return (
    <div className="relative min-h-screen bg-white selection:bg-primary/30">
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

/**
 * HomePage Component
 * Merakit section-section yang ada di halaman utama (Landing Page)
 */
function HomePage() {
  return (
    <div className="flex w-full flex-col">
      <Hero />
      <div id="about">
        <AboutSection />
      </div>
      <div id="program">
        <ProgramSection />
      </div>
      <div id="jangkauan">
        <MapSection />
      </div>
      <div id="eksplorasi">
        <TravelerQuiz />
      </div>
      <PartnerSection />
    </div>
  );
}

/**
 * Router Configuration
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      { 
        path: 'program/:id', 
        element: <ProgramDetailPage /> 
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      // 👈 DAFTARKAN ROUTE KARIR DI SINI
      {
        path: 'career',
        element: <CareerPage /> 
      }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}