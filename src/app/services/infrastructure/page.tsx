import React from 'react';

// --- Custom SVGs for Infrastructure ---
const Icons = {
  Truck: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFB400" strokeWidth="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>,
  Globe: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFB400" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
  CheckCircle: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
};

const InfrastructurePage = () => {
  return (
    <div className="bg-white font-sans selection:bg-[#FFB400] selection:text-black">
      
      {/* 1. PAGE HERO */}
      <section className="relative h-[70vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0">
           <img src="https://images.unsplash.com/photo-1510672854261-001bc93e96ba?q=80&w=2070" className="w-full h-full object-cover opacity-40 bg-fixed" alt="Infrastructure Hero" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 w-full">
           <span className="text-[#FFB400] font-black uppercase tracking-[0.5em] text-xs">Mega Projects Division</span>
           <h1 className="text-white text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-none mt-4">
             BUILDING <br/> <span className="text-[#FFB400]">NATIONS</span>
           </h1>
        </div>
      </section>

      {/* 2. SERVICE OVERVIEW & 3. CORE CAPABILITIES */}
      <section className="py-24 px-6 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-8">
          <h2 className="text-4xl font-black uppercase italic text-black border-l-8 border-[#FFB400] pl-6">Connecting Cities, <br/> Empowering Lives</h2>
          <p className="text-gray-600 text-xl leading-relaxed font-medium">
            Infrastructure hamari maishat ki rih ki haddi hai. Kontric mein hum roads, drainage systems, aur massive urban grids taveer karte hain jo stability aur efficiency ki misaal hain.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
             {["Urban Planning", "Highway Engineering", "Water Management", "Energy Grids"].map(item => (
               <div key={item} className="flex items-center gap-3 bg-gray-50 p-4 border border-gray-100">
                  <Icons.CheckCircle className="text-[#FFB400]" />
                  <span className="text-[10px] font-black uppercase tracking-widest">{item}</span>
               </div>
             ))}
          </div>
        </div>
        <div className="relative group">
           <img src="https://vnmanpower.com/upload_images/images/Blog/construction-working.jpg" className="w-full h-full object-cover shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700" alt="Worksite" />
           <div className="absolute inset-0 border-8 border-[#FFB400] -m-4 -z-10 group-hover:m-0 transition-all"></div>
        </div>
      </section>

      {/* 4. TYPES OF PROJECTS & 5. TECHNICAL EXPERTISE */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
             {[
               { t: "Roadways & Bridges", d: "High-durability asphalt and reinforced concrete spans.", img: "https://t3.ftcdn.net/jpg/02/50/07/14/360_F_250071430_UsUVrQL69rC9t0a4lu0C8Vc8DCBw27KN.jpg?w=800" },
               { t: "Drainage & Sewage", d: "Advanced hydraulics for flood-free urban living.", img: "https://www.alexandriava.gov/sites/default/files/2022-02/SeparateSewerSystem.jpg?w=800" },
               { t: "Commercial Grids", d: "Large scale site development for industrial zones.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800" }
             ].map((item, i) => (
               <div key={i} className="group relative h-[450px] overflow-hidden">
                  <img src={item.img} className="w-full h-full object-cover transition-all group-hover:scale-110" alt={item.t} />
                  <div className="absolute inset-0 bg-black/60 p-10 flex flex-col justify-end group-hover:bg-[#FFB400]/90 transition-all">
                     <h3 className="text-white group-hover:text-black text-2xl font-black uppercase italic mb-2">{item.t}</h3>
                     <p className="text-gray-400 group-hover:text-black text-xs font-bold uppercase">{item.d}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 6. PLANNING & 7. METHODOLOGY */}
      <section className="py-32 px-6 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="space-y-10 order-2 lg:order-1">
          <h2 className="text-5xl font-black uppercase italic leading-none">The Science Of <br/> <span className="text-[#FFB400]">Stability</span></h2>
          <p className="text-gray-500 font-medium">Infrastructure mein ghalti ki gunjaish nahi hoti. Hum har project ko 'Soil Analysis' se lekar 'Load Stress Testing' tak modern engineering methodology ke zariye guzaarte hain.</p>
          <div className="space-y-6">
             {["Terrain Surveying", "Seismic Design", "Material Quality Control", "Environmental Impact Assessment"].map((step, i) => (
               <div key={i} className="flex items-center gap-6 group">
                  <span className="text-3xl font-black italic text-gray-200 group-hover:text-[#FFB400] transition-colors">0{i+1}</span>
                  <span className="text-black font-black uppercase tracking-widest text-sm">{step}</span>
               </div>
             ))}
          </div>
        </div>
        <div className="relative order-1 lg:order-2">
           <img src="https://media.licdn.com/dms/image/v2/D4D22AQHZ2IJQIV3z3w/feedshare-shrink_800/B4DZS5q5BNG4Ag-/0/1738281817565?e=2147483647&v=beta&t=Zq9pv9hb-hEoTrXfaEhHkyb2YxN51_-Lb8tO42ydWXA" className="w-full h-full object-cover border-b-[20px] border-[#FFB400]" alt="Engineering" />
        </div>
      </section>

      {/* 8. SAFETY & 9. SUSTAINABILITY */}
      <section className="py-24 bg-black text-white px-6">
         <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="p-12 border-l-4 border-[#FFB400] bg-zinc-900">
               <div className="flex gap-4 mb-6 text-[#FFB400]"><Icons.Truck /><h3 className="text-xl font-black uppercase italic">Advanced Logistics</h3></div>
               <p className="text-gray-400 text-sm font-medium">Humari heavy machinery aur logistics team ensure karti hai ke har project bina rukawat ke mukammal ho.</p>
            </div>
            <div className="p-12 border-l-4 border-[#FFB400] bg-zinc-900">
               <div className="flex gap-4 mb-6 text-[#FFB400]"><Icons.Globe /><h3 className="text-xl font-black uppercase italic">Green Infrastructure</h3></div>
               <p className="text-gray-400 text-sm font-medium">Hum sustainable materials ka istemal karte hain jo mahol par kam se kam asar dalte hain.</p>
            </div>
         </div>
      </section>

      {/* 13. FAQ SECTION */}
      <section className="py-24 px-6 max-w-[1000px] mx-auto">
        <h2 className="text-3xl font-black uppercase italic mb-12 border-b-4 border-[#FFB400] pb-4 inline-block">Infrastructure Intelligence</h2>
        <div className="space-y-4">
           {[
             {q: "Kya aap government projects karte hain?", a: "Ji haan, hum public-private partnerships aur government infrastructure tenders mein active hain."},
             {q: "Durability ki kya guarantee hai?", a: "Hum Grade-60 steel aur high-pressure concrete use karte hain jo 50+ saal ki life-span ke liye design hote hain."},
             {q: "Road construction mein kitna waqt lagta hai?", a: "Timeline site ki condition aur terrain par depend karta hai, magar hum on-time delivery ke liye mashhoor hain."}
           ].map((faq, i) => (
             <details key={i} className="group bg-gray-50 p-6">
                <summary className="font-black uppercase italic text-xs cursor-pointer list-none flex justify-between">
                   {faq.q} <span className="text-[#FFB400] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-500 text-sm mt-4 font-medium">{faq.a}</p>
             </details>
           ))}
        </div>
      </section>

      {/* 14. CALL TO ACTION */}
      <section className="py-32 px-6 bg-[#FFB400] text-center overflow-hidden relative">
         <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none text-[200px] font-black italic whitespace-nowrap">KONTIC MEGA PROJECTS</div>
         <h2 className="text-black text-5xl md:text-7xl font-black uppercase italic mb-10 leading-tight relative z-10">Powering The <br/> Urban Future</h2>
         <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <button className="bg-black text-white px-16 py-6 font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">Submit Tender</button>
            <button className="border-2 border-black text-black px-16 py-6 font-black uppercase text-xs tracking-widest hover:bg-black hover:text-white transition-all">Download Capabilities</button>
         </div>
      </section>

    </div>
  );
};

export default InfrastructurePage;