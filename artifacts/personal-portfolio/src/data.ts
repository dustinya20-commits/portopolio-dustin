export type NavItem = { label: string; href: string };
export type Stat = { value: string; label: string };
export type Skill = { title: string; description: string; icon: 'search' | 'layout' | 'prototype' | 'system' | 'testing' | 'visual' };
export type Project = { id: string; title: string; category: string; year: string; description: string; art: string };
export type Journey = { date: string; title: string; description: string };
export type Testimonial = { quote: string; name: string; role: string };

export const portfolioData = {
  person: {
    initials: 'SP',
    name: 'Salsa Pramudita',
    role: 'Junior UI/UX Designer',
    location: 'Bandung, Indonesia',
    email: 'hello@salsapramudita.com',
    intro: 'Saya merancang pengalaman digital yang terasa sederhana, dipikirkan dengan serius, dan dekat dengan manusia yang menggunakannya.',
    about: 'Fresh graduate Desain Komunikasi Visual yang menemukan rumahnya di persimpangan riset, sistem visual, dan interaksi. Saya percaya desain yang baik bukan tentang membuat layar terlihat ramai—tetapi membantu orang bergerak dengan lebih percaya diri.',
    portraitAlt: 'Placeholder potret grayscale Salsa Pramudita',
  },
  nav: [
    { label: 'Home', href: '#home' },
    { label: 'Tentang Saya', href: '#tentang-saya' },
    { label: 'Keahlian', href: '#keahlian' },
    { label: 'Proyek', href: '#proyek' },
    { label: 'Pengalaman', href: '#pengalaman' },
    { label: 'Kontak', href: '#kontak' },
  ] satisfies NavItem[],
  stats: [
    { value: '08', label: 'proyek desain' },
    { value: '04', label: 'studi kasus lengkap' },
    { value: '12', label: 'sesi usability test' },
    { value: '06', label: 'tools yang dikuasai' },
  ] satisfies Stat[],
  skills: [
    { title: 'User Research', description: 'Mengubah rasa ingin tahu menjadi temuan yang bisa ditindaklanjuti.', icon: 'search' },
    { title: 'UI Design', description: 'Menyusun visual yang jelas, konsisten, dan punya alasan.', icon: 'layout' },
    { title: 'Prototyping', description: 'Menguji ide sebelum menjadi keputusan yang mahal.', icon: 'prototype' },
    { title: 'Design System', description: 'Membuat aturan kecil yang menjaga pengalaman tetap utuh.', icon: 'system' },
    { title: 'Usability Testing', description: 'Mendengar apa yang pengguna lakukan, bukan hanya katakan.', icon: 'testing' },
    { title: 'Visual Design', description: 'Mengolah tipografi, ritme, dan detail menjadi karakter.', icon: 'visual' },
  ] satisfies Skill[],
  tools: ['Figma', 'FigJam', 'Notion', 'Adobe Illustrator', 'Maze', 'Framer'],
  projects: [
    { id: '01', title: 'Ruang Pulang', category: 'Mobile App · Wellbeing', year: '2024', description: 'Mendesain ulang pengalaman jurnal harian agar terasa ringan untuk dimulai dan aman untuk dilanjutkan.', art: 'project-art' },
    { id: '02', title: 'Pasar Sore', category: 'E-commerce · UX Research', year: '2024', description: 'Merapikan alur belanja produk lokal dari pencarian sampai pesanan diterima.', art: 'project-art project-art--two' },
    { id: '03', title: 'Langkah Pertama', category: 'Education · Product Design', year: '2023', description: 'Membuat dashboard belajar yang membantu siswa melihat progres tanpa merasa dihakimi.', art: 'project-art project-art--three' },
    { id: '04', title: 'Kelana', category: 'Travel · Visual Direction', year: '2023', description: 'Eksplorasi konsep identitas dan booking flow untuk perjalanan yang lebih mindful.', art: 'project-art project-art--four' },
  ] satisfies Project[],
  journey: [
    { date: '2024 — sekarang', title: 'Junior Product Designer — Studio Saku', description: 'Membantu tim kecil memetakan masalah, menyusun alur, dan memvalidasi solusi untuk produk digital UMKM.' },
    { date: '2023 — 2024', title: 'UI/UX Intern — Kawan Kreatif', description: 'Mengerjakan wireframe, visual interface, dan prototype untuk kebutuhan pitch serta produk klien.' },
    { date: '2020 — 2024', title: 'S1 Desain Komunikasi Visual — Telkom University', description: 'Fokus pada desain interaksi, branding, dan penelitian berbasis pengguna.' },
  ] satisfies Journey[],
  keywords: ['CURIOUS', 'SYSTEMATIC', 'EMPATHETIC', 'ITERATIVE'],
  testimonials: [
    { quote: 'Salsa punya kebiasaan baik: ia tidak buru-buru membuka Figma sebelum mengerti masalahnya.', name: 'Raka Adhitya', role: 'Mentor desain, Studio Saku' },
    { quote: 'Dalam tim, Salsa membawa ketenangan dan pertanyaan yang membuat diskusi jadi lebih tajam.', name: 'Nadia Putri', role: 'Lead Designer, Kawan Kreatif' },
  ] satisfies Testimonial[],
};