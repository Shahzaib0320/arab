import React from 'react';

// --- Custom SVGs for No-Library Errors ---
const Icons = {
  Check: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFB400" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>,
  Star: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFB400"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>,
  Shield: () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FFB400" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
};

const AboutPage = () => {
  return (
    <div className="bg-white font-sans selection:bg-[#FFB400] selection:text-black">
      
      {/* 1. PAGE HEADER */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')] bg-cover bg-fixed opacity-40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-7xl md:text-9xl font-black uppercase italic tracking-tighter leading-none">
            ABOUT <span className="text-[#FFB400]">KONTRIC</span>
          </h1>
          <p className="text-gray-300 mt-6 font-bold uppercase tracking-[0.4em] text-sm md:text-base">Engineering Excellence Since 1998</p>
        </div>
      </section>

      {/* 2. COMPANY INTRODUCTION */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto text-center">
        <span className="text-[#FFB400] font-black uppercase tracking-widest text-xs">Who We Are</span>
        <h2 className="text-5xl font-black uppercase italic mt-4 mb-8 text-black">Pakistan's Leading Construction Hub</h2>
        <p className="text-gray-600 text-xl leading-relaxed max-w-4xl mx-auto font-medium">
          Kontric is not just a construction company; we are a team of visionary engineers, architects, and creators dedicated to building the future of urban living in Pakistan.
        </p>
      </section>

      {/* 3. COMPANY STORY (Side Image) */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img src="https://rightcon.in/wp-content/uploads/2026/02/Blog_Process_2.jpg.jpg?w=800" className="w-full h-[600px] object-cover shadow-2xl border-l-[15px] border-[#FFB400]" alt="Story" />
          </div>
          <div className="space-y-6">
            <h2 className="text-5xl font-black uppercase italic text-black">Our Journey</h2>
            <p className="text-gray-600 text-lg leading-relaxed italic">"It started with a single blueprint and a massive dream."</p>
            <p className="text-gray-500 text-lg">Humne 25 saal pehle ek choti si team se start liya tha. Aaj hum hazaaron square feet cover kar chuke hain, residential se lekar mega industrial projects tak.</p>
            <div className="pt-6 grid grid-cols-2 gap-4">
               <div className="p-6 bg-white shadow-lg"><p className="text-4xl font-black text-[#FFB400]">120+</p><p className="text-xs font-bold uppercase text-gray-400">Projects Done</p></div>
               <div className="p-6 bg-white shadow-lg"><p className="text-4xl font-black text-[#FFB400]">15+</p><p className="text-xs font-bold uppercase text-gray-400">Cities Reached</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MISSION & VISION */}
      <section className="py-32 bg-black text-white px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="border-t-4 border-[#FFB400] pt-10">
            <h3 className="text-3xl font-black uppercase italic mb-6">Our Mission</h3>
            <p className="text-gray-400 text-lg leading-relaxed">Sustainable aur affordable construction solutions farahum karna jo Pakistan ke infrastructure ko mazeed mazboot banayein.</p>
          </div>
          <div className="border-t-4 border-white pt-10">
            <h3 className="text-3xl font-black uppercase italic mb-6">Our Vision</h3>
            <p className="text-gray-400 text-lg leading-relaxed">Dunya bhar mein innovation aur quality ke naye standards set karna taake har build ek misaal ban jaye.</p>
          </div>
        </div>
      </section>

      {/* 5. CORE VALUES (Grid) */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-6xl font-black uppercase italic mb-20 text-center text-black">Our Core <span className="text-[#FFB400]">Values</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { t: "Integrity", d: "Hum hamesha transparency aur honesty ke saath kaam karte hain." },
              { t: "Quality", d: "Zero compromise on material and structural strength." },
              { t: "Innovation", d: "Modern technology aur smart designs hamari pehchan hain." }
            ].map((v, i) => (
              <div key={i} className="p-12 bg-gray-50 border-b-8 border-transparent hover:border-[#FFB400] transition-all">
                <Icons.Shield />
                <h4 className="text-2xl font-black uppercase mt-8 mb-4 text-black">{v.t}</h4>
                <p className="text-gray-500 font-medium leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SERVICES OVERVIEW */}
      <section className="py-24 bg-gray-900 text-white px-6">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
           <h2 className="text-5xl font-black uppercase italic">Specialized <br/> Services</h2>
           <div className="flex flex-wrap gap-4">
              {['Residential', 'Commercial', 'Industrial', 'Architecture'].map(s => (
                <span key={s} className="px-8 py-3 border border-white/20 uppercase font-black text-[10px] tracking-widest hover:bg-[#FFB400] hover:text-black cursor-pointer transition-all">{s}</span>
              ))}
           </div>
        </div>
      </section>

      {/* 7. TEAM INTRODUCTION */}
      <section className="py-32 px-6">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-6xl font-black uppercase italic text-black">Led By <span className="text-[#FFB400]">Experts</span></h2>
            <p className="text-gray-600 text-lg">Hamari team mein Pakistan ke behtreen structural engineers aur interior designers shamil hain jo har project ko apna samajh kar banate hain.</p>
            <button className="bg-black text-white px-12 py-5 font-black uppercase text-xs tracking-widest hover:bg-[#FFB400] hover:text-black transition-all">Meet Full Team</button>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400" className="h-[300px] w-full object-cover rounded-tr-[100px]" alt="CEO" />
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" className="h-[300px] w-full object-cover rounded-bl-[100px]" alt="Manager" />
          </div>
        </div>
      </section>

      {/* 8. EXPERIENCE / ACHIEVEMENTS */}
      <section className="py-24 bg-[#FFB400] text-black">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
           <div><p className="text-7xl font-black italic">25+</p><p className="font-bold uppercase tracking-widest text-xs mt-2">Years Exp</p></div>
           <div><p className="text-7xl font-black italic">500+</p><p className="font-bold uppercase tracking-widest text-xs mt-2">Houses Built</p></div>
           <div><p className="text-7xl font-black italic">12+</p><p className="font-bold uppercase tracking-widest text-xs mt-2">Awards Won</p></div>
           <div><p className="text-7xl font-black italic">100%</p><p className="font-bold uppercase tracking-widest text-xs mt-2">Safety Rate</p></div>
        </div>
      </section>

      {/* 9. CERTIFICATIONS */}
      <section className="py-32 px-6 text-center bg-white border-b">
         <h2 className="text-4xl font-black uppercase italic mb-16 text-black">Licensed & <span className="text-[#FFB400]">Certified</span></h2>
         <div className="flex flex-wrap justify-center gap-20 opacity-50 grayscale hover:grayscale-0 transition-all">
            <img src="https://images.template.net/507671/Gold-Background-Construction-License-Certificate-Template-edit-online.png" className="h-20" alt="ISO" />
            <img src="https://images.squarespace-cdn.com/content/v1/5f6a9e64aec2cc7c068fbbe3/1725069635429-S1BIYLL0YOUCRAAY85J8/IMG_3563.jpg" className="h-20" alt="PEC" />
         </div>
      </section>

      {/* 10. CLIENTS / PARTNERS */}
      <section className="py-24 bg-gray-50 px-6">
         <div className="max-w-[1440px] mx-auto text-center">
           <h2 className="text-2xl font-black uppercase tracking-widest mb-12 text-gray-400">Trusted By Industry Giants</h2>
           <div className="flex flex-wrap justify-center gap-16 text-2xl font-black text-gray-300 uppercase italic">
              <span>DHA Group</span>
              <span>Bahria Town</span>
              <span>Lucky Cement</span>
              <span>FWO</span>
           </div>
         </div>
      </section>

      {/* 11. WHY CHOOSE US */}
      <section className="py-32 px-6">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
             <h2 className="text-6xl font-black uppercase italic text-black leading-none">Why Choose <br/> <span className="text-[#FFB400]">Kontric?</span></h2>
          </div>
          <div className="space-y-8">
            {[
              { t: "Fast Track Delivery", d: "Hum technology use karte hain taake kaam jaldi aur behtar ho." },
              { t: "Cost Effective", d: "Best quality in budget prices hamara wada hai." },
              { t: "Legal Security", d: "Sarey projects legal certifications ke saath mukammal hotay hain." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                 <div className="mt-1"><Icons.Check /></div>
                 <div><h4 className="text-xl font-black uppercase text-black">{item.t}</h4><p className="text-gray-500 mt-2">{item.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. CALL TO ACTION */}
      <section className="py-32 px-6 bg-black text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFB400] rounded-full blur-[150px] opacity-20"></div>
        <div className="relative z-10">
          <h2 className="text-white text-5xl md:text-7xl font-black uppercase italic mb-10 leading-tight">Ready To Build <br/> Your <span className="text-[#FFB400]">Dream?</span></h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-[#FFB400] text-black px-16 py-6 font-black uppercase text-xs tracking-widest hover:bg-white transition-all">Start Your Project</button>
            <button className="border-2 border-white text-white px-16 py-6 font-black uppercase text-xs tracking-widest hover:bg-[#FFB400] hover:border-[#FFB400] transition-all">Contact Us Now</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;