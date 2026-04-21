import React from 'react';

// --- Custom SVGs ---
const Icons = {
  Compass: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFB400" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>,
  Feather: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFB400" strokeWidth="2"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>,
  Leaf: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFB400" strokeWidth="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1.8 8.2C19.7 17.5 16.5 20 11 20z"></path><line x1="11" y1="20" x2="14" y2="14"></line></svg>
};

const ResidentialDesign = () => {
  return (
    <div className="bg-white font-sans selection:bg-[#FFB400] selection:text-black">
      
      {/* 1. PAGE HERO */}
      <section className="relative h-[80vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0">
           <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070" className="w-full h-full object-cover opacity-50" alt="Luxury Home" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 w-full">
           <span className="text-[#FFB400] font-black uppercase tracking-[0.5em] text-xs">Aesthetic Excellence</span>
           <h1 className="text-white text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-none mt-4">
             CRAFTING <br/> <span className="text-[#FFB400]">LIFESTYLES</span>
           </h1>
        </div>
      </section>

      {/* 2. SERVICE INTRODUCTION & 3. DESIGN PHILOSOPHY */}
      <section className="py-24 px-6 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <h2 className="text-5xl font-black uppercase italic text-black leading-tight border-l-8 border-[#FFB400] pl-8">Designing Beyond <br/> Four Walls</h2>
          <p className="text-gray-600 text-xl font-medium leading-relaxed">
            Residential design sirf nakshe banane ka naam nahi, balki ek aisi jagah taveer karne ka naam hai jahan sukoon ho. Hum modern architecture aur client ki personality ko mix karke "Dream Homes" banate hain.
          </p>
          <div className="bg-black text-white p-10">
             <p className="italic font-medium text-lg text-gray-300">"Hamara falsafa hai ke har kona (corner) functional ho aur har view inspirational ho."</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
           <img src="https://images.unsplash.com/photo-1613490493576-7fde63bac811?w=800" className="h-[400px] w-full object-cover" alt="Modern Villa" />
           <img src="https://img.freepik.com/free-photo/construction-team-reviewing-blueprints-building-site_23-2152021005.jpg?w=740" className="h-[400px] w-full object-cover mt-12" alt="Design Team" />
        </div>
      </section>

      {/* 4. SCOPE OF SERVICES & 6. ARCHITECTURAL PLANNING */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-[1440px] mx-auto">
          <h3 className="text-3xl font-black uppercase italic mb-16 text-center">Design Scope</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
             {[
               { title: "Architectural Planning", desc: "Detailed 2D/3D layouts with optimized ventilation and sunlight.", img: "https://ahouseinthehills.com/wp-content/uploads/2025/03/Everything-You-Need-to-Know-.webp?w=800" },
               { title: "Interior Architecture", desc: "Premium finishes, bespoke furniture layouts, and lighting design.", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800" },
               { title: "Exterior Facade", desc: "Iconic elevations using modern materials like stone, glass, and wood.", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800" }
             ].map((item, i) => (
               <div key={i} className="group relative h-[500px] overflow-hidden">
                  <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
                  <div className="absolute inset-0 bg-black/60 p-12 flex flex-col justify-end">
                     <h4 className="text-[#FFB400] text-2xl font-black uppercase italic mb-4">{item.title}</h4>
                     <p className="text-white/80 text-sm font-medium">{item.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. DESIGN PROCESS (Step-by-Step) */}
      <section className="py-32 px-6 max-w-[1440px] mx-auto">
        <h2 className="text-4xl font-black uppercase italic mb-20">The <span className="text-[#FFB400]">Creative</span> Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {[
            { step: "Discovery", detail: "Client vision aur site analysis." },
            { step: "Schematic Design", detail: "Initial sketches aur concept boards." },
            { step: "Detailing", detail: "Technical maps aur material selection." },
            { step: "Handover", detail: "Final 3D renders aur blue-prints." }
          ].map((item, i) => (
            <div key={i} className="border-t-4 border-black pt-8">
               <span className="text-[#FFB400] font-black text-4xl italic">0{i+1}</span>
               <h4 className="text-xl font-black uppercase italic mt-4 mb-2">{item.step}</h4>
               <p className="text-gray-500 text-sm font-medium">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. MATERIALS & 9. SUSTAINABILITY */}
      <section className="py-24 bg-black text-white px-6">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
           <div className="space-y-12">
              <h2 className="text-5xl font-black uppercase italic text-[#FFB400]">Materials & Ethics</h2>
              <div className="space-y-8">
                 <div className="flex gap-6 items-start">
                    <Icons.Feather />
                    <div><h4 className="font-black uppercase italic">Premium Finishes</h4><p className="text-gray-400 text-sm mt-2">Hum import-quality marble, tempered glass aur teak wood ka istemal karte hain.</p></div>
                 </div>
                 <div className="flex gap-6 items-start">
                    <Icons.Leaf />
                    <div><h4 className="font-black uppercase italic">Green Building</h4><p className="text-gray-400 text-sm mt-2">Energy-efficient design jo aapke ghar ko summer mein thanda aur winter mein garm rakhta hai.</p></div>
                 </div>
              </div>
           </div>
           <img src="https://media.licdn.com/dms/image/v2/D4D22AQHZ2IJQIV3z3w/feedshare-shrink_800/B4DZS5q5BNG4Ag-/0/1738281817565?e=2147483647&v=beta&t=Zq9pv9hb-hEoTrXfaEhHkyb2YxN51_-Lb8tO42ydWXA" className="w-full h-[500px] object-cover border-4 border-[#FFB400]" alt="Sustainability" />
        </div>
      </section>

      {/* 12. FAQs (Design Related) */}
      <section className="py-24 px-6 max-w-[1000px] mx-auto">
        <h2 className="text-3xl font-black uppercase italic mb-12 text-center">Common Questions</h2>
        <div className="space-y-6">
          {[
            { q: "Design process mein kitna waqt lagta hai?", a: "Ek typical residential project ka detailed design 4 se 6 hafton mein mukammal hota hai." },
            { q: "Kya hum purane ghar ko remodel kar sakte hain?", a: "Ji bilkul, hum renovation aur remodeling ke liye expert architectural services provide karte hain." },
            { q: "Kya 3D renders designs ka hissa hain?", a: "Yes, hamare har design package mein high-quality 3D visualisations shamil hoti hain." }
          ].map((faq, i) => (
            <div key={i} className="p-8 border border-gray-100 hover:border-[#FFB400] transition-colors">
               <h4 className="font-black uppercase italic text-sm mb-3">Q: {faq.q}</h4>
               <p className="text-gray-500 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 13. CALL TO ACTION */}
      <section className="py-32 bg-gray-50 text-center px-6 border-t-8 border-black">
         <h2 className="text-5xl md:text-7xl font-black uppercase italic mb-10 leading-tight">Start Your <br/> <span className="text-[#FFB400]">Dream Design</span></h2>
         <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-black text-white px-16 py-6 font-black uppercase text-xs tracking-widest hover:bg-[#FFB400] hover:text-black transition-all">Get A Consultation</button>
            <button className="border-2 border-black text-black px-16 py-6 font-black uppercase text-xs tracking-widest hover:bg-black hover:text-white transition-all">View Our Work</button>
         </div>
      </section>

    </div>
  );
};

export default ResidentialDesign;