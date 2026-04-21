import React from 'react';

// --- Custom SVGs for Interior Theme ---
const Icons = {
  Layers: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFB400" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>,
  Sun: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFB400" strokeWidth="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>,
  Maximize: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFB400" strokeWidth="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
};

const InteriorDesignPage = () => {
  return (
    <div className="bg-white font-sans selection:bg-[#FFB400] selection:text-black">
      
      {/* 1. PAGE HERO */}
      <section className="relative h-[80vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0">
           <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070" className="w-full h-full object-cover opacity-60" alt="Luxury Interior" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 w-full">
           <span className="text-[#FFB400] font-black uppercase tracking-[0.5em] text-xs">Aesthetics & Comfort</span>
           <h1 className="text-white text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-none mt-4">
             CURATED <br/> <span className="text-[#FFB400]">SPACES</span>
           </h1>
        </div>
      </section>

      {/* 2. SERVICE OVERVIEW & 3. DESIGN PHILOSOPHY */}
      <section className="py-24 px-6 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <h2 className="text-5xl font-black uppercase italic text-black leading-tight border-l-8 border-[#FFB400] pl-8">Where Design <br/> Meets Soul</h2>
          <p className="text-gray-600 text-xl font-medium leading-relaxed">
            Hum deewaron ko zinda karte hain. Interior design hamare liye sirf furniture sajane ka naam nahi, balki har inch ko functional aur khubsurat banane ka fan (art) hai.
          </p>
          <div className="bg-black text-white p-10 relative overflow-hidden group">
             <div className="relative z-10">
                <p className="italic font-medium text-lg text-gray-300">"Interior design is not just what it looks like, it's how it makes you feel."</p>
             </div>
             <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:rotate-12 transition-transform">
                <Icons.Layers />
             </div>
          </div>
        </div>
        <div className="relative">
           <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800" className="w-full h-[550px] object-cover shadow-2xl" alt="Interior Details" />
           <div className="absolute -bottom-6 -right-6 bg-[#FFB400] p-8 hidden md:block">
              <p className="text-black font-black text-sm uppercase italic tracking-widest italic">100% Bespoke Designs</p>
           </div>
        </div>
      </section>

      {/* 4. SCOPE & 5. SPECIALIZATIONS */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-[1440px] mx-auto">
          <h3 className="text-3xl font-black uppercase italic mb-16 text-center">Our Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { t: "Residential Interiors", d: "Kitchens, Bedrooms, and Living Lounges." },
               { t: "Commercial Interiors", d: "Productive office spaces and retail outlets." },
               { t: "Hospitality Design", d: "High-end restaurants and hotel suites." }
             ].map((item, i) => (
               <div key={i} className="bg-white p-12 border-t-4 border-black hover:bg-black group transition-all cursor-default">
                  <h4 className="text-xl font-black uppercase italic mb-4 group-hover:text-[#FFB400]">{item.t}</h4>
                  <p className="text-gray-500 text-sm font-medium group-hover:text-gray-300">{item.d}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 6. SPACE PLANNING, 7. MATERIALS & 8. LIGHTING */}
      <section className="py-32 px-6 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
         <div className="space-y-6">
            <Icons.Maximize />
            <h4 className="text-2xl font-black uppercase italic">Space Optimization</h4>
            <p className="text-gray-500 text-sm font-medium leading-relaxed">Hum choti se choti jagah ko bhi behtreen tarike se utilize karte hain taake aapka ghar khula khula mehsoos ho.</p>
         </div>
         <div className="space-y-6">
            <Icons.Layers />
            <h4 className="text-2xl font-black uppercase italic">Material Selection</h4>
            <p className="text-gray-500 text-sm font-medium leading-relaxed">Marble, Wood, aur Fabrics ka waisa imtezaaj jo premium look aur durability dono provide kare.</p>
         </div>
         <div className="space-y-6">
            <Icons.Sun />
            <h4 className="text-2xl font-black uppercase italic">Lighting Design</h4>
            <p className="text-gray-500 text-sm font-medium leading-relaxed">Mood lighting se lekar task lighting tak, hum light ko as a design tool istemal karte hain.</p>
         </div>
      </section>

      {/* 9. PROCESS & 10. 3D VISUALIZATION */}
      <section className="py-24 bg-black text-white px-6 overflow-hidden">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <div className="space-y-12">
              <h2 className="text-5xl font-black uppercase italic text-[#FFB400]">The Design Flow</h2>
              <div className="space-y-8">
                 {[
                   { s: "Mood Boards", d: "Color palette aur material selection ka pehla jhalak." },
                   { s: "3D Rendering", d: "Ghar banne se pehle hi real look ka preview." },
                   { s: "Execution Coordination", d: "Carpentry se lekar painting tak hamari nigrani." }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-8 group">
                      <span className="text-4xl font-black italic text-zinc-800 group-hover:text-[#FFB400] transition-colors">0{i+1}</span>
                      <div>
                         <h4 className="font-black uppercase italic text-lg">{item.s}</h4>
                         <p className="text-gray-400 text-sm mt-2">{item.d}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           <div className="relative">
              <img src="https://media.licdn.com/dms/image/v2/D4D22AQHZ2IJQIV3z3w/feedshare-shrink_800/B4DZS5q5BNG4Ag-/0/1738281817565?e=2147483647&v=beta&t=Zq9pv9hb-hEoTrXfaEhHkyb2YxN51_-Lb8tO42ydWXA" className="w-full h-[500px] object-cover" alt="Planning & Team" />
              <div className="absolute top-0 left-0 w-full h-full border-r-[20px] border-[#FFB400] opacity-30"></div>
           </div>
        </div>
      </section>

      {/* 12. PORTFOLIO TEASER */}
      <section className="py-24 px-6 max-w-[1440px] mx-auto">
        <h2 className="text-4xl font-black uppercase italic mb-12">Luxury <span className="text-[#FFB400]">Interiors</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
           <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800" className="h-[400px] w-full object-cover grayscale hover:grayscale-0 transition-all" alt="Int 1" />
           <img src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800" className="h-[400px] w-full object-cover grayscale hover:grayscale-0 transition-all" alt="Int 2" />
           <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800" className="h-[400px] w-full object-cover grayscale hover:grayscale-0 transition-all" alt="Int 3" />
           <img src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800" className="h-[400px] w-full object-cover grayscale hover:grayscale-0 transition-all" alt="Int 4" />
        </div>
      </section>

      {/* 14. FAQ SECTION */}
      <section className="py-24 px-6 max-w-[1000px] mx-auto">
        <h2 className="text-3xl font-black uppercase italic mb-12 text-center">Interior FAQs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
           <div>
              <h4 className="font-black uppercase italic text-xs mb-3 text-[#FFB400]">Kya aap furniture khud design karte hain?</h4>
              <p className="text-gray-500 text-sm font-medium">Ji haan, hum custom-made furniture provide karte hain jo aapki space ke liye perfect fit hota hai.</p>
           </div>
           <div>
              <h4 className="font-black uppercase italic text-xs mb-3 text-[#FFB400]">Ek room ka design kitne time mein hota hai?</h4>
              <p className="text-gray-500 text-sm font-medium">Initial design concept 1 hafte mein tayaar ho jata hai.</p>
           </div>
        </div>
      </section>

      {/* 15. CALL TO ACTION */}
      <section className="py-32 bg-[#FFB400] text-center px-6">
         <h2 className="text-black text-5xl md:text-7xl font-black uppercase italic mb-10 leading-tight">Elevate Your <br/> <span className="bg-black text-white px-4">Environment</span></h2>
         <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-black text-white px-16 py-6 font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">Start Your Design</button>
            <button className="border-2 border-black text-black px-16 py-6 font-black uppercase text-xs tracking-widest hover:bg-black hover:text-white transition-all">View Gallery</button>
         </div>
      </section>

    </div>
  );
};

export default InteriorDesignPage;