import { useEffect, useState, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Check, ChevronRight, Download, Github, Instagram, LayoutTemplate, Linkedin, Menu, MousePointer2, Quote, Video, X } from 'lucide-react';
import { portfolioData as data, type Project, type SkillSlug } from './data';

const iconMap = { layout: LayoutTemplate, prototype: MousePointer2, video: Video };

function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={reduce ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function SectionLabel({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`mono-label text-[10px] font-semibold uppercase ${light ? 'text-[#8a8a8a]' : 'text-[#8a8a8a]'}`}>{children}</p>;
}

function PlaceholderArt({ className = '', label }: { className?: string; label: string }) {
  return <div role="img" aria-label={label} className={`placeholder-art ${className}`} />;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<SkillSlug | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [toast, setToast] = useState('');

  useEffect(() => {
    document.title = `${data.person.name} — ${data.person.role}`;
    const description = 'Portfolio Keeuna Dhastyn Syahdira Putra, fresh graduate Pendidikan Informatika dari Sukoharjo, Jawa Tengah.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta); }
    meta.setAttribute('content', description);
    [['og:title', document.title], ['og:description', description], ['og:type', 'website']].forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) { tag = document.createElement('meta'); tag.setAttribute('property', property); document.head.appendChild(tag); }
      tag.setAttribute('content', content);
    });
  }, []);

  const navTo = () => setMenuOpen(false);
  const filteredProjects = selectedSkill ? data.projects.filter((project) => project.skills.includes(selectedSkill)) : data.projects;
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);
  const selectedSkillTitle = data.skills.find((skill) => skill.slug === selectedSkill)?.title;
  const showSkillProjects = (skill: SkillSlug) => {
    setSelectedSkill(skill);
    setShowAll(true);
    window.requestAnimationFrame(() => document.getElementById('proyek')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  };
  const notify = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(''), 2600);
  };

  return (
    <div className="portfolio-shell grain bg-[#f5f5f5] text-[#0a0a0a]">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-[#0a0a0a] focus:px-4 focus:py-3 focus:text-white">Lewati ke konten utama</a>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-[#0a0a0a]/10 bg-[#f5f5f5]/90 backdrop-blur-md">
        <nav aria-label="Navigasi utama" className="mx-auto flex h-[72px] max-w-[1360px] items-center justify-between px-5 md:px-10">
          <a href="#home" onClick={navTo} data-testid="link-logo" className="display-font text-lg font-extrabold tracking-[-0.06em]">{data.person.initials}<span className="text-[#8a8a8a]">.</span></a>
          <div className="hidden items-center gap-6 lg:flex">
            {data.nav.map((item) => <a key={item.href} href={item.href} data-testid={`link-nav-${item.label.toLowerCase().replaceAll(' ', '-')}`} className="text-[11px] font-semibold text-[#8a8a8a] transition-colors hover:text-[#0a0a0a]">{item.label}</a>)}
          </div>
          <a href="#kontak" data-testid="link-contact-nav" className="hidden rounded-full bg-[#0a0a0a] px-5 py-3 text-[11px] font-bold text-white transition-transform hover:-translate-y-0.5 sm:block">Mari terhubung <ArrowUpRight size={14} className="ml-1 inline" /></a>
          <button type="button" aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} data-testid="button-mobile-menu" className="rounded-full border border-[#0a0a0a]/15 p-2.5 lg:hidden">{menuOpen ? <X size={18} /> : <Menu size={18} />}</button>
        </nav>
        {menuOpen && <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="border-t border-[#0a0a0a]/10 bg-[#f5f5f5] px-5 pb-6 pt-4 lg:hidden">
          {data.nav.map((item) => <a key={item.href} href={item.href} onClick={navTo} className="flex items-center justify-between border-b border-[#0a0a0a]/10 py-4 text-sm font-semibold">{item.label}<ArrowUpRight size={15} /></a>)}
        </motion.div>}
      </header>

      <main id="main-content">
        <section id="home" aria-labelledby="hero-heading" className="bg-[#0a0a0a] px-5 pb-8 pt-32 text-white md:px-10 md:pb-12 md:pt-40">
          <div className="mx-auto max-w-[1360px]">
            <Reveal><div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.16em] text-[#8a8a8a]"><span className="h-2 w-2 rounded-full bg-white" /> Portfolio 2024 / 2025</div></Reveal>
            <div className="grid items-end gap-12 lg:grid-cols-[1fr_0.42fr]">
              <div className="pt-16 md:pt-24">
                <Reveal delay={0.08}><p className="mb-5 max-w-md text-sm leading-7 text-[#8a8a8a]">Hai, saya Keeuna.<br />Saya berdomisili di Sukoharjo, Jawa Tengah.</p></Reveal>
                <Reveal delay={0.14}><h1 id="hero-heading" className="display-font max-w-5xl text-[16vw] font-extrabold leading-[.82] tracking-[-0.09em] md:text-[11.3vw] lg:text-[10.5rem]">Keeuna<br /><span className="text-[#8a8a8a]">Dhastyn Putra</span></h1></Reveal>
                <Reveal delay={0.2}><div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-3 text-xs"><span className="font-semibold">{data.person.role}</span><span className="text-[#8a8a8a]">—</span><span className="text-[#8a8a8a]">{data.person.location}</span></div></Reveal>
              </div>
              <Reveal delay={0.25} className="lg:pb-2"><div className="relative">
                <img src="/keeuna-profile.jpeg" alt="Foto profil Keeuna Dhastyn Syahdira Putra" className="aspect-[.8] w-full rounded-2xl object-cover object-[center_28%] grayscale md:aspect-[.9]" />
                <div className="absolute -bottom-5 -left-4 flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#0a0a0a] md:-left-7 md:h-20 md:w-20"><ArrowDown size={21} strokeWidth={1.5} /></div>
                <span className="absolute right-4 top-4 max-w-24 text-right text-[9px] uppercase leading-4 tracking-[.14em] text-[#8a8a8a]">potret / placeholder</span>
              </div></Reveal>
            </div>
          </div>
        </section>

        <section id="tentang-saya" aria-labelledby="about-heading" className="px-5 py-28 md:px-10 md:py-40">
          <div className="mx-auto max-w-[1360px]">
            <Reveal><SectionLabel>ABOUT © ME</SectionLabel></Reveal>
            <div className="mt-12 grid gap-14 lg:grid-cols-[.72fr_1fr] lg:gap-24">
              <Reveal><div><h2 id="about-heading" className="display-font max-w-md text-4xl font-bold leading-[1.05] tracking-[-0.06em] md:text-6xl">Desain yang dimulai dari <span className="text-[#8a8a8a]">mendengar.</span></h2><a href="#kontak" className="mt-10 inline-flex items-center gap-2 border-b border-[#0a0a0a] pb-2 text-xs font-bold">Kenalan lebih dekat <ArrowUpRight size={14} /></a></div></Reveal>
              <div className="grid gap-12 sm:grid-cols-[.8fr_1.2fr]">
                <Reveal delay={0.1}><PlaceholderArt className="aspect-[.8] w-full rounded-2xl" label="Placeholder potret grayscale untuk bagian tentang Keeuna" /></Reveal>
                <Reveal delay={0.15}><div><p className="text-base font-semibold leading-7 md:text-lg">{data.person.intro}</p><p className="mt-6 whitespace-pre-line text-sm leading-7 text-[#8a8a8a]">{data.person.about}</p><div className="mt-10 grid grid-cols-2 gap-y-8 border-t border-[#0a0a0a]/15 pt-8">{data.stats.map((stat) => <div key={stat.label}><div className="display-font text-3xl font-bold tracking-[-0.06em]">{stat.value}</div><div className="mt-1 text-[10px] uppercase tracking-[.12em] text-[#8a8a8a]">{stat.label}</div></div>)}</div></div></Reveal>
              </div>
            </div>
          </div>
        </section>

        <section id="keahlian" aria-labelledby="skills-heading" className="bg-white px-5 py-28 md:px-10 md:py-36">
          <div className="mx-auto max-w-[1360px]">
            <Reveal><div className="flex flex-wrap items-end justify-between gap-8"><div><SectionLabel>MY © SKILLS</SectionLabel><h2 id="skills-heading" className="display-font mt-8 text-4xl font-bold tracking-[-0.06em] md:text-6xl">Kemampuan<br /><span className="text-[#8a8a8a]">saya.</span></h2></div><p className="max-w-xs text-sm leading-7 text-[#8a8a8a]">Pilih kemampuan untuk melihat proyek yang berkaitan.</p></div></Reveal>
            <div className="mt-16 grid gap-3 md:grid-cols-3">{data.skills.map((skill, index) => { const Icon = iconMap[skill.icon]; return <Reveal key={skill.title} delay={index * 0.05}><button type="button" onClick={() => showSkillProjects(skill.slug)} aria-label={`Lihat proyek ${skill.title}`} className={`group min-h-56 w-full rounded-2xl p-7 text-left transition-transform duration-300 hover:-translate-y-1 ${index === 0 ? 'bg-[#0a0a0a] text-white' : 'bg-[#f5f5f5]'}`}><div className="flex items-start justify-between"><Icon size={27} strokeWidth={1.35} /><span className="text-[10px] text-[#8a8a8a]">0{index + 1}</span></div><h3 className="mt-20 text-lg font-bold">{skill.title}</h3><p className="mt-2 max-w-xs text-xs leading-6 text-[#8a8a8a]">{skill.description}</p><span className="mt-5 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[.12em] opacity-0 transition-opacity group-hover:opacity-100">Lihat proyek <ArrowUpRight size={13} /></span></button></Reveal>; })}</div>
            <Reveal><div className="mt-14 flex flex-wrap items-center gap-3 border-t border-[#0a0a0a]/10 pt-7"><span className="mr-2 text-[10px] font-bold uppercase tracking-[.13em]">Tools</span>{data.tools.map((tool) => <span key={tool} className="rounded-full border border-[#0a0a0a]/15 px-4 py-2 text-[11px] text-[#8a8a8a]">{tool}</span>)}</div></Reveal>
          </div>
        </section>

        <section id="proyek" aria-labelledby="work-heading" className="px-5 py-28 md:px-10 md:py-40">
          <div className="mx-auto max-w-[1360px]">
            <Reveal><div className="flex items-end justify-between gap-6"><div><SectionLabel>SELECTED © WORK</SectionLabel><h2 id="work-heading" className="display-font mt-8 text-4xl font-bold tracking-[-0.06em] md:text-6xl">{selectedSkillTitle ? <>Proyek <span className="text-[#8a8a8a]">{selectedSkillTitle}.</span></> : <>Dipilih dengan<br /><span className="text-[#8a8a8a]">sengaja.</span></>}</h2></div><div className="flex items-center gap-4"><span className="hidden text-[10px] uppercase tracking-[.13em] text-[#8a8a8a] md:block">{String(filteredProjects.length).padStart(2, '0')} / projects</span>{selectedSkill && <button type="button" onClick={() => { setSelectedSkill(null); setShowAll(false); }} className="text-[10px] font-bold uppercase tracking-[.12em] underline underline-offset-4">Tampilkan semua</button>}</div></div></Reveal>
            <div className="mt-16 grid gap-x-5 gap-y-14 md:grid-cols-2">{visibleProjects.map((project, index) => <Reveal key={project.id} delay={index * 0.07}><button type="button" onClick={() => setSelectedProject(project)} data-testid={`button-project-${project.id}`} className="group block w-full text-left"><div className="overflow-hidden rounded-2xl"><div className={`${project.art} aspect-[1.32] transition-transform duration-700 group-hover:scale-[1.035]`} role="img" aria-label={`Placeholder grayscale untuk proyek ${project.title}`} /></div><div className="mt-5 flex items-start justify-between gap-4"><div><p className="text-[10px] uppercase tracking-[.12em] text-[#8a8a8a]">{project.category} · {project.year}</p><h3 className="display-font mt-2 text-2xl font-bold tracking-[-0.05em]">{project.title}</h3></div><div className="mt-1 rounded-full border border-[#0a0a0a]/15 p-2 transition-colors group-hover:bg-[#0a0a0a] group-hover:text-white"><ArrowUpRight size={16} /></div></div></button></Reveal>)}</div>
            <Reveal><div className="mt-16 text-center"><button type="button" onClick={() => setShowAll((current) => !current)} data-testid="button-view-all-projects" className="inline-flex items-center gap-3 rounded-full border border-[#0a0a0a] px-6 py-3 text-xs font-bold transition-colors hover:bg-[#0a0a0a] hover:text-white">{showAll ? 'Tampilkan lebih sedikit' : 'Lihat semua proyek'}<ChevronRight size={15} /></button></div></Reveal>
          </div>
        </section>

        <section id="pengalaman" aria-labelledby="journey-heading" className="bg-white px-5 py-28 md:px-10 md:py-36">
          <div className="mx-auto max-w-[1360px]">
            <Reveal><SectionLabel>THE © JOURNEY</SectionLabel></Reveal>
            <div className="mt-12 grid gap-16 lg:grid-cols-[.65fr_1fr] lg:gap-24">
              <Reveal><div className="rounded-2xl bg-[#0a0a0a] p-7 text-white md:p-10"><p className="text-xs leading-6 text-[#8a8a8a]">Saya datang dengan rasa ingin tahu yang besar, lalu membiarkan proses mengajarkan sisanya.</p><div className="mt-24 flex flex-wrap gap-x-3 gap-y-1">{data.keywords.map((keyword) => <span key={keyword} className="display-font text-3xl font-bold tracking-[-0.07em] md:text-4xl">{keyword}</span>)}</div><button type="button" onClick={() => { notify('CV siap diganti dengan file PDF kamu.'); window.print(); }} data-testid="button-download-cv" className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-[#0a0a0a]">Lihat CV <Download size={14} /></button></div></Reveal>
              <div><Reveal><h2 id="journey-heading" className="display-font text-4xl font-bold tracking-[-0.06em] md:text-6xl">Sedikit yang<br /><span className="text-[#8a8a8a]">membentuk saya.</span></h2></Reveal><div className="mt-14">{data.journey.map((item, index) => <Reveal key={item.title} delay={index * 0.08}><article className="relative grid grid-cols-[28px_1fr] gap-6 pb-12"><div className="relative flex justify-center"><div className="z-10 mt-1 h-3 w-3 rounded-full border-2 border-[#0a0a0a] bg-white" />{index !== data.journey.length - 1 && <div className="absolute top-4 h-full w-px bg-[#0a0a0a]/20" />}</div><div><p className="mono-label text-[9px] text-[#8a8a8a]">{item.date}</p><h3 className="mt-3 text-base font-bold">{item.title}</h3><p className="mt-2 max-w-lg text-sm leading-7 text-[#8a8a8a]">{item.description}</p></div></article></Reveal>)}</div></div>
            </div>
          </div>
        </section>

        <section aria-labelledby="voices-heading" className="px-5 py-28 md:px-10 md:py-36">
          <div className="mx-auto max-w-[1360px]"><Reveal><div className="flex items-end justify-between"><div><SectionLabel>IN THEIR © WORDS</SectionLabel><h2 id="voices-heading" className="display-font mt-8 text-4xl font-bold tracking-[-0.06em] md:text-5xl">Kata mereka<br /><span className="text-[#8a8a8a]">tentang proses.</span></h2></div><Quote className="hidden text-[#8a8a8a] md:block" size={38} strokeWidth={1} /></div></Reveal><div className="mt-14 grid gap-4 lg:grid-cols-2">{data.testimonials.map((item, index) => <Reveal key={`${item.name}-${index}`} delay={index * 0.1}><figure className="rounded-2xl bg-white p-7 md:p-9"><Quote size={22} strokeWidth={1.5} /><blockquote className="mt-10 max-w-lg text-xl font-semibold leading-8 tracking-[-0.03em]">“{item.quote}”</blockquote><figcaption className="mt-12 border-t border-[#0a0a0a]/10 pt-5"><p className="text-xs font-bold">{item.name}</p><p className="mt-1 text-[10px] uppercase tracking-[.1em] text-[#8a8a8a]">{item.role}</p></figcaption></figure></Reveal>)}</div></div>
        </section>

        <footer id="kontak" className="bg-[#0a0a0a] px-5 pb-8 pt-24 text-white md:px-10 md:pt-32">
          <div className="mx-auto max-w-[1360px]"><Reveal><SectionLabel light>LET'S © TALK</SectionLabel><div className="mt-12 grid gap-12 lg:grid-cols-[1fr_.42fr]"><div><p className="mb-5 text-sm font-semibold text-[#8a8a8a]">Punya cerita? Mari bicara.</p><h2 className="display-font max-w-4xl text-[14vw] font-extrabold leading-[.86] tracking-[-0.09em] md:text-[9rem]">Keeuna<br /><span className="text-[#8a8a8a]">Dhastyn Putra.</span></h2><a href={`mailto:${data.person.email}`} data-testid="link-email-cta" className="mt-12 inline-flex items-center gap-3 border-b border-white pb-3 text-sm font-semibold transition-colors hover:text-[#8a8a8a]">{data.person.email}<ArrowUpRight size={17} /></a></div><div className="flex flex-col justify-end lg:pb-2"><p className="max-w-xs text-sm leading-7 text-[#8a8a8a]">Saya terbuka untuk kesempatan belajar, berkolaborasi, dan membuat sesuatu yang berarti.</p><div className="mt-8 flex gap-3"><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn Keeuna" data-testid="link-linkedin" className="rounded-full border border-white/20 p-3 transition-colors hover:bg-white hover:text-[#0a0a0a]"><Linkedin size={15} /></a><a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram Keeuna" data-testid="link-instagram" className="rounded-full border border-white/20 p-3 transition-colors hover:bg-white hover:text-[#0a0a0a]"><Instagram size={15} /></a><a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub Keeuna" data-testid="link-github" className="rounded-full border border-white/20 p-3 transition-colors hover:bg-white hover:text-[#0a0a0a]"><Github size={15} /></a></div></div></div></Reveal><div className="mt-28 flex flex-col justify-between gap-6 border-t border-white/15 pt-6 text-[10px] uppercase tracking-[.13em] text-[#8a8a8a] md:flex-row"><p>© 2025 Keeuna Dhastyn Syahdira Putra. Dibuat dengan rasa ingin tahu.</p><div className="flex flex-wrap gap-x-5 gap-y-2">{data.nav.slice(0, 4).map((item) => <a key={item.href} href={item.href} data-testid={`link-footer-${item.label.toLowerCase().replaceAll(' ', '-')}`} className="transition-colors hover:text-white">{item.label}</a>)}</div></div></div>
        </footer>
      </main>
      {toast && <div role="status" data-testid="status-toast" className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full bg-[#0a0a0a] px-5 py-3 text-xs text-white shadow-lg">{toast}</div>}
      {selectedProject && <div role="presentation" className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a]/70 p-5" onClick={() => setSelectedProject(null)}><motion.div role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} onClick={(event) => event.stopPropagation()} className="relative max-h-[90vh] w-full max-w-xl overflow-auto rounded-2xl bg-[#f5f5f5] p-5 md:p-7"><button type="button" aria-label="Tutup detail proyek" data-testid="button-close-project" onClick={() => setSelectedProject(null)} className="absolute right-5 top-5 rounded-full border border-[#0a0a0a]/15 p-2"><X size={16} /></button><div className={`${selectedProject.art} aspect-[1.8] rounded-xl`} role="img" aria-label={`Placeholder grayscale untuk proyek ${selectedProject.title}`} /><p className="mt-7 text-[10px] uppercase tracking-[.12em] text-[#8a8a8a]">{selectedProject.category} · {selectedProject.year}</p><h2 id="project-dialog-title" className="display-font mt-2 text-4xl font-bold tracking-[-0.06em]">{selectedProject.title}</h2><p className="mt-5 text-sm leading-7 text-[#8a8a8a]">{selectedProject.description}</p><button type="button" onClick={() => { setSelectedProject(null); notify('Terima kasih sudah melihat karya ini.'); }} className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0a0a0a] px-5 py-3 text-xs font-bold text-white">Tutup detail <Check size={14} /></button></motion.div></div>}
    </div>
  );
}

export default App;
