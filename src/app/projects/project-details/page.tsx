import React from 'react';

// --- Custom SVGs for No-Library Errors ---
const Icons = {
  Calendar: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFB400" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>,
  MapPin: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFB400" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
  User: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFB400" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
  Zap: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFB400" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
};

const ProjectDetails = () => {
  return (
    <div className="bg-white font-sans selection:bg-[#FFB400] selection:text-black">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[80vh] flex items-end bg-black">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" 
            className="w-full h-full object-cover opacity-60 bg-fixed" 
            alt="Hero" 
          />
        </div>
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 pb-20">
          <span className="bg-[#FFB400] text-black px-6 py-2 font-black uppercase text-[10px] tracking-widest italic">Featured Case Study</span>
          <h1 className="text-white text-7xl md:text-9xl font-black uppercase italic tracking-tighter leading-none mt-6">
            ELITE <br/> <span className="text-[#FFB400]">PLAZA</span>
          </h1>
        </div>
      </section>

      {/* 2. OVERVIEW & 3. KEY INFORMATION */}
      <section className="py-24 px-6 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20">
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-4xl font-black uppercase italic text-black">Project Overview</h2>
          <p className="text-gray-600 text-xl leading-relaxed font-medium">
            Elite Plaza Islamabad ke dil mein waqaye aik modern commercial hub hai. Is project ka maqsad aik aisi building taveer karna tha jo aesthetics aur structural integrity ka behtreen imtezaaj ho. 
          </p>
          <p className="text-gray-500 text-lg leading-relaxed">
            Humne is project mein smart energy systems aur high-grade structural steel ka istemal kiya hai taake ye building aane wali dehyon tak qaim rahe.
          </p>
        </div>

        {/* Info Sidebar */}
        <div className="bg-gray-50 p-12 space-y-8 border-t-8 border-[#FFB400]">
          <div className="flex gap-6 items-start">
            <Icons.MapPin />
            <div><p className="text-[10px] font-black uppercase text-gray-400">Location</p><p className="font-black uppercase text-black">Blue Area, Islamabad</p></div>
          </div>
          <div className="flex gap-6 items-start">
            <Icons.User />
            <div><p className="text-[10px] font-black uppercase text-gray-400">Client</p><p className="font-black uppercase text-black">Z-Collection Corp.</p></div>
          </div>
          <div className="flex gap-6 items-start">
            <Icons.Calendar />
            <div><p className="text-[10px] font-black uppercase text-gray-400">Timeline</p><p className="font-black uppercase text-black">18 Months (2025-2026)</p></div>
          </div>
          <div className="flex gap-6 items-start">
            <Icons.Zap />
            <div><p className="text-[10px] font-black uppercase text-gray-400">Budget</p><p className="font-black uppercase text-black">PKR 450M+</p></div>
          </div>
        </div>
      </section>

      {/* 4. SCOPE & PLANNING (Updated Image with your LinkedIn Link) */}
      <section className="py-24 bg-black text-white px-6">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-5xl font-black uppercase italic text-[#FFB400] mb-10">Scope & Planning</h2>
            <ul className="space-y-6">
              {[
                "Architecture & 3D Modeling",
                "Foundation Structural Analysis",
                "Electrical & Mechanical Grid",
                "Interior & Finishing",
                "Exterior Glass Facade"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-center border-b border-white/10 pb-4">
                  <span className="text-[#FFB400] font-black">/ 0{i+1}</span>
                  <span className="uppercase font-bold tracking-widest text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative group overflow-hidden border-4 border-white/10">
            <img 
              src="https://media.licdn.com/dms/image/v2/D4D22AQHZ2IJQIV3z3w/feedshare-shrink_800/B4DZS5q5BNG4Ag-/0/1738281817565?e=2147483647&v=beta&t=Zq9pv9hb-hEoTrXfaEhHkyb2YxN51_-Lb8tO42ydWXA" 
              className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
              alt="Team Planning Session" 
            />
            <div className="absolute bottom-4 left-4 bg-[#FFB400] text-black px-4 py-1 text-[10px] font-black uppercase italic">
              Strategy Session
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONSTRUCTION PROCESS & CHALLENGES */}
      <section className="py-32 px-6 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <h3 className="text-3xl font-black uppercase italic">Technical Challenges</h3>
            <div className="p-10 bg-red-50 border-l-8 border-red-500">
               <p className="text-red-900 font-bold uppercase italic text-sm mb-4">The Challenge:</p>
               <p className="text-red-800 leading-relaxed font-medium">Zameen ki gehrai mein pani ka pressure boht zyada tha, jis ki wajah se foundation ki stability khatre mein thi.</p>
            </div>
            <div className="p-10 bg-green-50 border-l-8 border-green-500">
               <p className="text-green-900 font-bold uppercase italic text-sm mb-4">The Solution:</p>
               <p className="text-green-800 leading-relaxed font-medium">Advanced de-watering system aur double-layer waterproofing membrane ka istemal kiya gaya.</p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-black uppercase italic mb-8 border-b-2 border-gray-100 pb-4">Process & Materials</h3>
            <p className="text-gray-600 leading-relaxed mb-8">Humne Grade 60 steel aur high-performance concrete mix (4000 PSI) ka istemal kiya hai taake earthquake resistance maximum ho.</p>
            <div className="flex flex-wrap gap-4">
               {["Reinforced Steel", "Thermal Insulation", "Smart HVAC"].map(m => (
                 <span key={m} className="px-6 py-2 border border-black font-black uppercase text-[10px] tracking-widest italic">{m}</span>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROJECT GALLERY */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6 mb-12 flex justify-between items-end">
           <h2 className="text-4xl font-black uppercase italic">Visual Progress</h2>
           <span className="text-gray-400 font-bold uppercase text-[10px] tracking-widest italic">On-Site Documentation</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 px-2">
           <img src="https://img.freepik.com/free-photo/construction-team-reviewing-blueprints-building-site_23-2152021005.jpg?w=740" className="h-[400px] w-full object-cover grayscale hover:grayscale-0 transition-all" alt="G1" />
           <img src="https://vnmanpower.com/upload_images/images/Blog/construction-working.jpg" className="h-[400px] w-full object-cover grayscale hover:grayscale-0 transition-all" alt="G2" />
           <img src="https://tslhomeimprovement.com/wp-content/uploads/2023/05/general-contractor.jpg" className="h-[400px] w-full object-cover grayscale hover:grayscale-0 transition-all" alt="G3" />
           <img src="https://st4.depositphotos.com/12985790/20356/i/450/depositphotos_203567962-stock-photo-professional-engineers-safety-vests-hardhats.jpg" className="h-[400px] w-full object-cover grayscale hover:grayscale-0 transition-all" alt="G4" />
        </div>
      </section>

      {/* 7. CLIENT TESTIMONIAL */}
      <section className="py-32 px-6 bg-[#FFB400] text-black">
        <div className="max-w-[800px] mx-auto text-center">
           <p className="text-5xl font-black italic leading-tight mb-12">"Kontric ki team ne sirf building nahi banayi, hamari expectations se barh kar kaam kiya. Professionalism inka hallmark hai."</p>
           <h4 className="font-black uppercase tracking-widest text-sm">— Farhan Ahmed, CEO Z-Collection</h4>
        </div>
      </section>

      {/* 8. CALL TO ACTION */}
      <section className="py-32 bg-black text-center px-6">
        <h2 className="text-white text-5xl md:text-7xl font-black uppercase italic mb-10 leading-tight">Build Your <span className="text-[#FFB400]">Vision</span> With Us</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-[#FFB400] text-black px-16 py-6 font-black uppercase text-xs tracking-widest hover:bg-white transition-all">Start Your Project</button>
          <button className="border-2 border-white text-white px-16 py-6 font-black uppercase text-xs tracking-widest hover:bg-[#FFB400] hover:border-[#FFB400] transition-all">Back To Portfolio</button>
        </div>
      </section>

    </div>
  );
};

export default ProjectDetails;