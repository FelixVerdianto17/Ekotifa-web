export const quizQuestions = [
  {
    id: 1,
    question: "Apa tujuan utama kamu saat melakukan perjalanan?",
    options: [
      { text: "Mencari ketenangan dan kedamaian alam", type: "Nature Seeker" },
      { text: "Mempelajari budaya dan sejarah lokal", type: "Culture Enthusiast" },
      { text: "Melakukan aksi nyata untuk lingkungan", type: "Eco Warrior" },
      { text: "Mencari tantangan dan riset lapangan", type: "Researcher" }
    ]
  },
  {
    id: 2,
    question: "Mana aktivitas yang paling menarik bagimu?",
    options: [
      { text: "Menanam mangrove atau rehabilitasi terumbu karang", type: "Eco Warrior" },
      { text: "Mengikuti workshop kerajinan tangan lokal", type: "Culture Enthusiast" },
      { text: "Meditasi di pinggir danau atau hutan", type: "Nature Seeker" },
      { text: "Mengamati perilaku satwa liar di habitatnya", type: "Researcher" }
    ]
  },
  {
    id: 3,
    question: "Bagaimana cara kamu berinteraksi dengan warga lokal?",
    options: [
      { text: "Mengajak mereka berdiskusi tentang ekosistem", type: "Researcher" },
      { text: "Membantu mereka dalam kegiatan konservasi", type: "Eco Warrior" },
      { text: "Tinggal di homestay dan ikut kegiatan harian", type: "Culture Enthusiast" },
      { text: "Menikmati keramahan tanpa banyak gangguan", type: "Nature Seeker" }
    ]
  },
  {
    id: 4,
    question: "Apa yang wajib ada di dalam tas perjalananmu?",
    options: [
      { text: "Buku catatan dan teropong", type: "Researcher" },
      { text: "Kamera untuk mengabadikan momen estetis", type: "Nature Seeker" },
      { text: "Botol minum pakai ulang & alat makan ramah lingkungan", type: "Eco Warrior" },
      { text: "Buku panduan bahasa atau sejarah lokal", type: "Culture Enthusiast" }
    ]
  },
  {
    id: 5,
    question: "Destinasi impianmu adalah...",
    options: [
      { text: "Desa adat yang belum banyak tersentuh", type: "Culture Enthusiast" },
      { text: "Hutan lindung dengan keanekaragaman hayati tinggi", type: "Nature Seeker" },
      { text: "Pusat rehabilitasi orang utan di Kalimantan", type: "Eco Warrior" },
      { text: "Stasiun penelitian di pulau terpencil", type: "Researcher" }
    ]
  }
];

export const travelerTypes = {
  "Nature Seeker": {
    title: "The Nature Seeker",
    description: "Kamu adalah penikmat keheningan. Bagimu, perjalanan adalah cara untuk menyatu kembali dengan alam.",
    recommendation: "Wisata Konservasi - Hutan Lindung"
  },
  "Culture Enthusiast": {
    title: "The Culture Enthusiast",
    description: "Kamu sangat menghargai kearifan lokal. Kamu percaya bahwa setiap tempat punya cerita manusia yang unik.",
    recommendation: "Pengelolaan Destinasi Berbasis Komunitas"
  },
  "Eco Warrior": {
    title: "The Eco Warrior",
    description: "Kamu tidak hanya melihat, tapi bertindak. Kamu ingin setiap jejak kakimu membawa perubahan positif bagi bumi.",
    recommendation: "Program Wisata Konservasi & Volunteer"
  },
  "Researcher": {
    title: "The Researcher",
    description: "Rasa ingin tahumu sangat besar. Kamu melihat dunia sebagai laboratorium raksasa yang perlu dipelajari.",
    recommendation: "Youth Research Camp"
  }
};