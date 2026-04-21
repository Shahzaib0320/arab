import React from 'react';

// --- Custom SVGs for Industrial Theme ---
const Icons = {
  Shield: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFB400" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
  Settings: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFB400" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
  Layers: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFB400" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
};

const IndustrialPage = () => {
  return (
    <div className="bg-white font-sans selection:bg-[#FFB400] selection:text-black">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[70vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <img src="https://vnmanpower.com/upload_images/images/Blog/construction-working.jpg" className="w-full h-full object-cover bg-fixed" alt="Industrial Hero" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 w-full">
           <span className="text-[#FFB400] font-black uppercase tracking-[0.5em] text-xs">Heavy Engineering Division</span>
           <h1 className="text-white text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-none mt-4">
             INDUSTRIAL <br/> <span className="text-[#FFB400]">SOLUTIONS</span>
           </h1>
        </div>
      </section>

      {/* 2. SERVICE OVERVIEW */}
      <section className="py-24 px-6 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-4xl font-black uppercase italic text-black border-l-8 border-[#FFB400] pl-6 mb-8">Powering Growth with Infrastructure</h2>
          <p className="text-gray-600 text-xl leading-relaxed font-medium">
            Industrial construction sirf building nahi, balki aik complex ecosystem hai. Hum factories, warehouses, aur processing plants taveer karte hain jo international standards par puray utartay hain.
          </p>
        </div>
        <div className="bg-gray-50 p-10 flex flex-col justify-center">
           <p className="text-gray-500 italic">"Humne Pakistan ke baray industrial zones mein aisi structures khari ki hain jo durability aur functional design ka namoona hain."</p>
           <p className="mt-4 font-black uppercase text-xs tracking-widest">— Industrial Lead, Kontric</p>
        </div>
      </section>

      {/* 3. INDUSTRIAL EXPERTISE AREAS */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
             {[
               { t: "Manufacturing Plants", d: "High-load bearing structures for heavy machinery.", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800" },
               { t: "Mega Warehouses", d: "Spacious and ventilated storage solutions with smart grids.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800" },
               { t: "Processing Units", d: "Clean-room environments for food and pharma industries.", img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800" }
             ].map((item, i) => (
               <div key={i} className="group relative h-[400px] overflow-hidden">
                  <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={item.t} />
                  <div className="absolute inset-0 bg-black/60 p-10 flex flex-col justify-end group-hover:bg-black/20 transition-all">
                     <h3 className="text-white text-2xl font-black uppercase italic mb-2">{item.t}</h3>
                     <p className="text-gray-400 text-xs font-bold uppercase">{item.d}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 4. ENGINEERING APPROACH & 5. EXECUTION PROCESS */}
      <section className="py-32 px-6 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="relative">
           <img src="https://media.licdn.com/dms/image/v2/D4D22AQHZ2IJQIV3z3w/feedshare-shrink_800/B4DZS5q5BNG4Ag-/0/1738281817565?e=2147483647&v=beta&t=Zq9pv9hb-hEoTrXfaEhHkyb2YxN51_-Lb8tO42ydWXA" className="w-full h-full object-cover shadow-2xl" alt="Engineering" />
           <div className="absolute -bottom-10 -right-10 bg-[#FFB400] p-10 hidden md:block">
              <p className="text-black font-black text-5xl italic">0%</p>
              <p className="text-black font-bold uppercase text-[10px] tracking-widest">Structural Failure Rate</p>
           </div>
        </div>
        <div className="space-y-10">
          <h2 className="text-5xl font-black uppercase italic leading-none">Precision <br/> <span className="text-[#FFB400]">Engineering</span></h2>
          <p className="text-gray-500 font-medium">Humara process start hota hai geomatics aur structural simulation se. Hum har column aur beam ki load-bearing capacity ko 3D software mein test karte hain.</p>
          <div className="space-y-6">
             {["Site Feasibility", "Structural Steel Design", "Mechanical Integration", "Quality Audits"].map((step, i) => (
               <div key={i} className="flex items-center gap-6 group">
                  <span className="text-4xl font-black italic text-gray-100 group-hover:text-[#FFB400] transition-colors">0{i+1}</span>
                  <span className="text-black font-black uppercase tracking-widest text-sm">{step}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 6. SAFETY & COMPLIANCE */}
      <section className="py-24 bg-black text-white px-6">
         <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center space-y-4">
               <div className="flex justify-center mb-6"><Icons.Shield /></div>
               <h3 className="text-xl font-black uppercase italic text-[#FFB400]">Zero Accident Policy</h3>
               <p className="text-gray-400 text-sm font-medium">Hamare sites par safety protocols strictly follow kiye jatay hain.</p>
            </div>
            <div className="text-center space-y-4">
               <div className="flex justify-center mb-6"><Icons.Settings /></div>
               <h3 className="text-xl font-black uppercase italic text-[#FFB400]">International Standards</h3>
               <p className="text-gray-400 text-sm font-medium">Hum ISO aur OSHA standards ke mutabiq taveerati kaam karte hain.</p>
            </div>
            <div className="text-center space-y-4">
               <div className="flex justify-center mb-6"><Icons.Layers /></div>
               <h3 className="text-xl font-black uppercase italic text-[#FFB400]">Premium Materials</h3>
               <p className="text-gray-400 text-sm font-medium">Grade 60 Steel aur 4000+ PSI Concrete hamari bunyad hai.</p>
            </div>
         </div>
      </section>

      {/* 7. RELEVANT PROJECTS (Quick Grid) */}
      <section className="py-24 px-6 max-w-[1440px] mx-auto">
        <h2 className="text-4xl font-black uppercase italic mb-12">Industrial <span className="text-[#FFB400]">Footprint</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <div className="relative h-[300px] overflow-hidden group">
              <img src="https://tslhomeimprovement.com/wp-content/uploads/2023/05/general-contractor.jpg" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt="P1" />
              <div className="absolute bottom-0 left-0 p-6 bg-black text-white font-black uppercase text-[10px] tracking-widest">Textile Unit - Faisalabad</div>
           </div>
           <div className="relative h-[300px] overflow-hidden group">
              <img src="https://img.freepik.com/free-photo/building-construction-worker-site-with-architect_23-2149124289.jpg?w=740" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt="P2" />
              <div className="absolute bottom-0 left-0 p-6 bg-black text-white font-black uppercase text-[10px] tracking-widest">Pharma Plant - Lahore</div>
           </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION */}
      <section className="py-32 px-6 bg-[#FFB400] text-center">
         <h2 className="text-black text-5xl md:text-7xl font-black uppercase italic mb-10 leading-tight">Ready For Heavy <br/> Construction?</h2>
         <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-black text-white px-16 py-6 font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">Request Technical Quote</button>
            <button className="border-2 border-black text-black px-16 py-6 font-black uppercase text-xs tracking-widest hover:bg-black hover:text-white transition-all">Download Portfolio</button>
         </div>
      </section>

    </div>
  );
};

export default IndustrialPage;