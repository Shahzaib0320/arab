import React from 'react';

// --- Pure SVG Icons ---
const Icons = {
  Star: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFB400"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>,
  Plus: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>,
  WhatsApp: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
  MapPin: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
};

// 1. HERO (Vibrant Colors)
const Hero = () => (
  <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1541913056-26c2d0e9268e?q=80&w=2070" 
        alt="Construction Banner" 
        className="w-full h-full object-cover opacity-80" 
      />
    </div>
    <div className="relative z-10 text-center text-white px-4">
      <h2 className="text-[#FFB400] font-bold tracking-[0.4em] uppercase mb-6 text-sm">Crafting Futures</h2>
      <h1 className="text-6xl md:text-9xl font-black uppercase leading-[0.85] mb-12 italic tracking-tighter">BUILDING VISIONS <br /> INTO <span className="text-[#FFB400]">REALITY</span></h1>
      <div className="flex justify-center gap-6">
        <button className="bg-[#FFB400] text-black px-12 py-5 font-black uppercase text-xs tracking-widest hover:bg-white transition-all">Discover Now</button>
        <button className="border-2 border-white text-white px-12 py-5 font-black uppercase text-xs tracking-widest hover:bg-[#FFB400] hover:border-[#FFB400] transition-all">Our Services</button>
      </div>
    </div>
  </section>
);

// 2. ABOUT (Vibrant)
const About = () => (
  <section className="py-24 px-6 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
    <div className="relative">
      <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800" alt="About Team" className="relative w-full h-[550px] object-cover border-l-8 border-[#FFB400]" />
      <div className="absolute -bottom-10 -right-10 bg-black p-10 hidden lg:block shadow-2xl">
        <h2 className="text-6xl font-black text-[#FFB400]">25+</h2>
        <p className="font-bold text-gray-500 uppercase text-[10px] tracking-widest">Years Excellence</p>
      </div>
    </div>
    <div className="space-y-8 text-black">
      <span className="text-[#FFB400] font-black uppercase tracking-[0.3em] text-xs">About Us Now</span>
      <h2 className="text-6xl font-black uppercase mt-4 mb-6 leading-none italic text-black">Building Dreams With Quality</h2>
      <p className="text-gray-600 text-lg leading-relaxed font-medium">We source the finest materials and employ master engineers to ensure your structural integrity never wavers.</p>
      <button className="bg-black text-white px-10 py-5 font-black uppercase text-xs tracking-widest hover:bg-[#FFB400] hover:text-black transition-all">Learn More</button>
    </div>
  </section>
);

// 3. MODERN FEATURE (Fixed Image & Color)
const ModernFeature = () => (
  <section className="py-24 bg-gray-900 text-white px-6">
    <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
      <div className="space-y-8">
        <span className="text-[#FFB400] font-black uppercase tracking-[0.3em] text-xs">Innovation</span>
        <h2 className="text-6xl font-black uppercase italic leading-[0.9]">Modern Engineering</h2>
        <p className="text-gray-400 text-lg leading-relaxed">Sustainable materials and smart architectural designs to redefine modern living.</p>
        <div className="pt-8 border-t border-white/10 flex gap-12">
            <div><p className="text-4xl font-black text-[#FFB400]">150+</p><p className="text-[10px] uppercase font-bold text-gray-500">Projects</p></div>
            <div><p className="text-4xl font-black text-[#FFB400]">50+</p><p className="text-[10px] uppercase font-bold text-gray-500">Awards</p></div>
        </div>
      </div>
      <div className="border-[15px] border-white/5">
        {/* Fixed missing image with a vibrant one */}
        <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800" alt="Architecture" className="w-full h-[500px] object-cover" />
      </div>
    </div>
  </section>
);

// 4. PROCESS
const ProcessSteps = () => (
  <section className="py-24 bg-gray-50 px-6">
    <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-100 shadow-xl">
        {[
          { s: "01", t: "Planning", d: "Strategic vision to blueprint." },
          { s: "02", t: "Build", d: "Solid construction execution." },
          { s: "03", t: "Review", d: "Final quality checks." }
        ].map((item, idx) => (
          <div key={idx} className="p-16 bg-white border-r border-gray-100 last:border-0 hover:bg-[#FFB400] transition-all group">
            <span className="text-[#FFB400] group-hover:text-black font-black italic text-5xl mb-6 block opacity-30">{item.s}</span>
            <h3 className="text-2xl font-black uppercase mb-4 group-hover:text-white text-black">{item.t}</h3>
            <p className="text-gray-500 group-hover:text-black/80 font-bold text-xs uppercase tracking-widest">{item.d}</p>
          </div>
        ))}
    </div>
  </section>
);

// 5. PROJECTS (Vibrant)
const ProjectsGrid = () => {
  const projects = [
    { title: "Central Plaza", cat: "Commercial", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab" },
    { title: "The Grand Villa", cat: "Residential", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750" },
    { title: "Metro Hub", cat: "Infrastructure", img: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1" },
  ];
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-[1440px] mx-auto mb-16">
          <h2 className="text-6xl font-black uppercase italic leading-none text-black">Featured <span className="text-[#FFB400]">Work</span></h2>
      </div>
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="group h-[500px] overflow-hidden relative">
               <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all"></div>
               <div className="absolute inset-x-8 bottom-10 text-white">
                  <p className="text-[#FFB400] font-black text-xs uppercase mb-2">{p.cat}</p>
                  <h3 className="text-3xl font-black uppercase italic">{p.title}</h3>
               </div>
            </div>
          ))}
      </div>
    </section>
  );
};

// 6. REVIEWS
const Reviews = () => (
  <section className="py-24 bg-white px-6">
    <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-gray-50 border-t-4 border-[#FFB400] p-10 shadow-sm">
          <div className="flex gap-1.5 mb-6 text-[#FFB400]"><Icons.Star /><Icons.Star /><Icons.Star /><Icons.Star /><Icons.Star /></div>
          <p className="text-gray-600 italic mb-8 font-medium">"Kontric team delivered our project exactly as envisioned. Professional and reliable."</p>
          <p className="font-black uppercase text-xs tracking-widest text-black">Client Name</p>
        </div>
      ))}
    </div>
  </section>
);

// 7. TEAM (Colorful)
const Team = () => (
  <section className="py-24 bg-gray-50 text-center px-6">
    <h2 className="text-6xl font-black uppercase italic mb-16 text-black">Our <span className="text-[#FFB400]">Engineers</span></h2>
    <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { name: "L. Grant", role: "Structural Eng.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a" },
        { name: "E. Brooks", role: "Project Manager", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" },
        { name: "A. Monroe", role: "Designer", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" },
        { name: "S. Turner", role: "Site Supervisor", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956" }
      ].map((member, i) => (
        <div key={i} className="group overflow-hidden bg-white shadow-lg">
           <img src={member.img} alt={member.name} className="w-full h-[400px] object-cover" />
           <div className="p-6 border-b-4 border-black group-hover:border-[#FFB400] transition-all">
             <h4 className="font-black uppercase text-lg text-black">{member.name}</h4>
             <p className="text-[#FFB400] font-black text-[10px] uppercase tracking-widest">{member.role}</p>
           </div>
        </div>
      ))}
    </div>
  </section>
);

// 8. FAQ & MAP (Fixed Google Map Link)
const SupportMap = () => (
  <section className="py-24 bg-white px-6">
    <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
      <div>
        <h2 className="text-5xl font-black uppercase italic mb-10 text-black">Common <span className="text-[#FFB400]">Questions</span></h2>
        <div className="space-y-4">
          {["Our Service Areas", "Safety Compliance"].map((q, i) => (
            <details key={i} className="group border border-gray-100 p-6 cursor-pointer open:ring-2 open:ring-[#FFB400]">
              <summary className="font-black uppercase text-xs flex justify-between items-center list-none text-black">{q} <Icons.Plus /></summary>
              <p className="mt-4 text-gray-500 text-sm">We maintain ISO quality & safety certifications for all builds.</p>
            </details>
          ))}
        </div>
      </div>
      <div className="h-[450px] relative border-[10px] border-zinc-100 shadow-xl overflow-hidden">
        {/* Working Google Map Embed URL */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.966399120612!2d73.0818241!3d33.7101292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf84aa3339c1%3A0x67399a531d09e73b!2sBlue%20Area%2C%20Islamabad!5e0!3m2!1sen!2spk!4v1700000000000" 
          className="w-full h-full" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy">
        </iframe>
        <div className="absolute bottom-6 left-6 bg-black text-white p-6 border-l-4 border-[#FFB400]">
            <p className="text-[10px] font-bold uppercase text-[#FFB400]">Headquarters</p>
            <p className="text-sm font-black mt-1 uppercase italic">Islamabad, PK</p>
        </div>
      </div>
    </div>
  </section>
);

export default function HomePage() {
  return (
    <div className="font-sans selection:bg-[#FFB400] selection:text-black bg-white">
      <a href="https://wa.me/923001234567" target="_blank" className="fixed bottom-10 right-10 z-[200] bg-[#25D366] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform">
        <Icons.WhatsApp />
      </a>
      <Hero />
      <About />
      <ModernFeature />
      <ProcessSteps />
      <ProjectsGrid />
      <Reviews />
      <Team />
      <SupportMap />
      <footer className="bg-black py-16 text-center border-t border-white/10">
         <h2 className="text-[#FFB400] font-black italic text-4xl mb-4">KONTRIC</h2>
         <p className="text-[10px] uppercase font-black tracking-[0.6em] text-gray-600">Built To Perfection</p>
      </footer>
    </div>
  );
}