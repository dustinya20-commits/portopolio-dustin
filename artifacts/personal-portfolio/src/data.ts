export type NavItem = { label: string; href: string };
export type Stat = { value: string; label: string };
export type SkillSlug = 'ui-design' | 'prototyping' | 'my-video-edit';
export type Skill = { slug: SkillSlug; title: string; description: string; icon: 'layout' | 'prototype' | 'video' };
export type Project = { id: string; title: string; category: string; year: string; description: string; art: string; skills: SkillSlug[] };
export type Journey = { date: string; title: string; description: string };
export type Testimonial = { quote: string; name: string; role: string };

export const portfolioData = {
  person: {
    initials: 'KD',
    name: 'Keeuna Dhastyn Syahdira Putra',
    role: 'Junior UI/UX Designer',
    location: 'Sukoharjo, Jawa Tengah',
    email: 'keeuna.contact@example.com',
    intro: 'Saya Keeuna Dhastyn Syahdira Putra, umur 22 tahun fresh graduate Program Studi Pendidikan Informatika, Universitas Muhammadiyah Surakarta.',
    about: 'Saya memiliki pribadi yang mau belajar hal baru, dan ulet serta mudah dalam beradaptasi. Saya memiliki kemampuan untuk bekerja secara mandiri maupun dalam team, dan siap bertanggung jawab atas setiap tugas yang dipercayakan kepada saya.',
    portraitAlt: 'Placeholder potret grayscale Keeuna Dhastyn Syahdira Putra',
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
    { slug: 'ui-design', title: 'UI Design', description: 'Menyusun visual yang jelas, konsisten, dan mudah digunakan.', icon: 'layout' },
    { slug: 'prototyping', title: 'Prototyping', description: 'Mengubah ide menjadi alur interaktif yang siap diuji.', icon: 'prototype' },
    { slug: 'my-video-edit', title: 'My Video Edit', description: 'Mengolah potongan gambar, suara, dan ritme menjadi cerita visual.', icon: 'video' },
  ] as Skill[],
  tools: ['Figma', 'FigJam', 'Notion', 'Adobe Illustrator', 'Maze', 'Framer'],
  projects: [
    { id: '01', title: 'Ruang Pulang', category: 'Mobile App · UI Design', year: '2024', description: 'Mendesain ulang pengalaman jurnal harian agar terasa ringan untuk dimulai dan aman untuk dilanjutkan.', art: 'project-art', skills: ['ui-design', 'prototyping'] },
    { id: '02', title: 'Pasar Sore', category: 'E-commerce · UI Design', year: '2024', description: 'Merapikan alur belanja produk lokal dari pencarian sampai pesanan diterima.', art: 'project-art project-art--two', skills: ['ui-design'] },
    { id: '03', title: 'Langkah Pertama', category: 'Education · Prototyping', year: '2023', description: 'Membuat dashboard belajar yang membantu siswa melihat progres tanpa merasa dihakimi.', art: 'project-art project-art--three', skills: ['prototyping'] },
    { id: '04', title: 'Kelana', category: 'Travel · My Video Edit', year: '2023', description: 'Eksplorasi konsep identitas dan booking flow untuk perjalanan yang lebih mindful.', art: 'project-art project-art--four', skills: ['my-video-edit'] },
  ] as Project[],
  journey: [
    { date: '2024 — sekarang', title: 'Fresh Graduate — Pendidikan Informatika', description: 'Siap membawa semangat belajar, kemampuan adaptasi, dan tanggung jawab ke lingkungan kerja baru.' },
    { date: '2023 — 2024', title: 'Proyek Akademik — UI Design & Prototyping', description: 'Mengerjakan rancangan antarmuka, prototype interaktif, dan presentasi solusi digital sebagai bagian dari proses belajar.' },
    { date: '2020 — 2024', title: 'Pendidikan Informatika — Universitas Muhammadiyah Surakarta', description: 'Membangun dasar pengetahuan informatika sekaligus mengeksplorasi desain antarmuka dan pengembangan produk digital.' },
  ] satisfies Journey[],
  keywords: ['CURIOUS', 'SYSTEMATIC', 'EMPATHETIC', 'ITERATIVE'],
  testimonials: [
    { quote: '[Tambahkan kutipan dari dosen pembimbing atau rekan tim proyek di sini.]', name: 'Nama pemberi testimoni', role: 'Dosen pembimbing / rekan tim' },
    { quote: '[Tambahkan testimoni kedua tentang cara bekerja dan kemampuan beradaptasi.]', name: 'Nama pemberi testimoni', role: 'Dosen pembimbing / rekan tim' },
  ] satisfies Testimonial[],
};