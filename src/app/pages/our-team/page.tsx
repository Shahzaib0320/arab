import React from 'react';

// --- Custom SVGs for No-Library Errors ---
const Icons = {
  Check: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFB400" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>,
  Users: () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FFB400" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
};

const TeamPage = () => {
  return (
    <div className="bg-white font-sans selection:bg-[#FFB400] selection:text-black">
      
      {/* 1. PAGE HEADER */}
      <section className="relative h-[70vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <img 
          src="https://theleanbuilder.com/wp-content/uploads/2022/08/construction-teambuilding-tips-2.jpg" 
          className="absolute inset-0 w-full h-full object-cover grayscale" 
          alt="Team Header" 
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-white text-7xl md:text-9xl font-black uppercase italic tracking-tighter leading-none">
            OUR <span className="text-[#FFB400]">FORCE</span>
          </h1>
          <p className="text-gray-300 mt-6 font-bold uppercase tracking-[0.4em] text-sm">Building Excellence With Human Talent</p>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto text-center border-b border-gray-100">
        <span className="text-[#FFB400] font-black uppercase tracking-widest text-xs">The Backbone</span>
        <h2 className="text-5xl font-black uppercase italic mt-4 mb-8 text-black">Precision in Every Person</h2>
        <p className="text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto font-medium italic">
          "Achi building sirf material se nahi, balki un logon se banti hai jin mein passion aur tajurba ho."
        </p>
      </section>

      {/* 3. LEADERSHIP TEAM (Using High-Res Site Photos) */}
      <section className="py-32 bg-gray-50 px-6">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-4xl font-black uppercase italic mb-16 border-l-8 border-[#FFB400] pl-6 text-black">Strategic Leadership</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col md:flex-row bg-white shadow-2xl overflow-hidden group border-b-8 border-black">
              <div className="md:w-1/2 overflow-hidden">
                <img src="https://img.freepik.com/free-photo/construction-team-reviewing-blueprints-building-site_23-2152021005.jpg?semt=ais_hybrid&w=740&q=80" className="w-full h-[500px] object-cover group-hover:scale-110 transition-all duration-700" alt="Lead Engineer" />
              </div>
              <div className="md:w-1/2 p-12 flex flex-col justify-center bg-white">
                <span className="text-[#FFB400] font-black text-xs uppercase mb-2 italic">Project Director</span>
                <h3 className="text-3xl font-black uppercase italic mb-6 text-black tracking-tighter">Technical Mastery</h3>
                <p className="text-gray-500 font-medium leading-relaxed mb-6 italic">Engineering plans ko reality mein badalne ka maharat rakhte hain.</p>
                <div className="flex gap-4">
                  <span className="px-4 py-2 bg-black text-white text-[10px] font-black uppercase italic cursor-pointer hover:bg-[#FFB400] hover:text-black transition-all">Profile</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row bg-white shadow-2xl overflow-hidden group border-b-8 border-[#FFB400]">
              <div className="md:w-1/2 overflow-hidden">
                <img src="https://img.freepik.com/free-photo/building-construction-worker-site-with-architect_23-2149124289.jpg?semt=ais_hybrid&w=740&q=80" className="w-full h-[500px] object-cover group-hover:scale-110 transition-all duration-700" alt="Architect" />
              </div>
              <div className="md:w-1/2 p-12 flex flex-col justify-center bg-black text-white">
                <span className="text-[#FFB400] font-black text-xs uppercase mb-2 italic">Site Architect</span>
                <h3 className="text-3xl font-black uppercase italic mb-6 text-white tracking-tighter">Modern Aesthetics</h3>
                <p className="text-gray-400 font-medium leading-relaxed mb-6 italic">Designing structure that lasts for generations.</p>
                <div className="flex gap-4">
                  <span className="px-4 py-2 bg-[#FFB400] text-black text-[10px] font-black uppercase italic cursor-pointer hover:bg-white transition-all">Connect</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TEAM MEMBERS GRID (The "On-Site" Force) */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex justify-between items-end mb-16 border-b-2 border-gray-100 pb-10">
             <h2 className="text-5xl font-black uppercase italic text-black leading-none">The Site <br/><span className="text-[#FFB400]">Experts</span></h2>
             <p className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.3em] hidden md:block">Certified Professionals</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              "https://st4.depositphotos.com/12985790/20356/i/450/depositphotos_203567962-stock-photo-professional-engineers-safety-vests-hardhats.jpg",
              "https://c8.alamy.com/comp/2EDJ760/mixed-construction-team-in-yellow-and-red-hardhats-discuss-on-blueprint-on-site-under-construction-business-building-teamwork-and-people-concept-2EDJ760.jpg",
              "https://vnmanpower.com/upload_images/images/Blog/construction-working.jpg"
            ].map((img, i) => (
              <div key={i} className="group overflow-hidden">
                <div className="h-[450px] w-full overflow-hidden relative border-t-4 border-gray-100">
                  <img src={img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125" alt="Site Team" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <p className="text-white font-black uppercase italic text-xl tracking-widest border-2 border-white px-8 py-3">Site Force</p>
                  </div>
                </div>
                <div className="py-8">
                  <h4 className="text-2xl font-black uppercase italic text-black">Operation Specialist</h4>
                  <p className="text-gray-500 font-medium mt-2 leading-relaxed">Structural stability aur safety protocols ke mahir specialists.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EXPERIENCE SUMMARY (Using Construction Manager Image) */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
          <img src="https://tslhomeimprovement.com/wp-content/uploads/2023/05/general-contractor.jpg" className="w-full h-full object-cover" alt="Manager" />
        </div>
        <div className="max-w-[1440px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <h2 className="text-7xl font-black uppercase italic leading-none text-[#FFB400]">Vast Project <br/> Experience</h2>
            <p className="text-gray-400 text-xl leading-relaxed font-medium italic">"Hamari team ke pas 500+ projects ka collectively tajurba hai, jis mein bare industrial units se lekar luxury homes shamil hain."</p>
            <div className="grid grid-cols-2 gap-10">
               <div><p className="text-5xl font-black italic">15k+</p><p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mt-2">Safe Work Hours</p></div>
               <div><p className="text-5xl font-black italic">100%</p><p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mt-2">Project Success</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WORK CULTURE (Using LinkedIn Style Images) */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="grid grid-cols-2 gap-4">
             <img src="https://media.licdn.com/dms/image/v2/D4D22AQHZ2IJQIV3z3w/feedshare-shrink_800/B4DZS5q5BNG4Ag-/0/1738281817565?e=2147483647&v=beta&t=Zq9pv9hb-hEoTrXfaEhHkyb2YxN51_-Lb8tO42ydWXA" className="w-full h-[300px] object-cover shadow-xl border-4 border-white" alt="Culture 1" />
             <img src="https://media.licdn.com/dms/image/v2/D4D22AQFX7YUU7038jw/feedshare-shrink_800/B4DZS5q4_lG4Ag-/0/1738281817083?e=2147483647&v=beta&t=_7gytCS6R2OlLUCoV5W99d9PqxIdAOfS6jDTIhWtviA" className="w-full h-[300px] object-cover shadow-xl border-4 border-white mt-12" alt="Culture 2" />
          </div>
          <div className="space-y-10">
            <h2 className="text-5xl font-black uppercase italic text-black">Built On <span className="text-[#FFB400]">Values</span></h2>
            <div className="space-y-8">
              {[
                { t: "Unwavering Focus", d: "Hamari team ka har member detail-oriented hai." },
                { t: "Radical Safety", d: "Har site par 100% safety equipment aur rules." },
                { t: "Global Standards", d: "International building codes ko follow karna hamari adat hai." }
              ].map((v, i) => (
                <div key={i} className="flex gap-6 border-b border-gray-200 pb-6">
                  <div className="mt-1"><Icons.Check /></div>
                  <div><h4 className="text-xl font-black uppercase text-black">{v.t}</h4><p className="text-gray-500 mt-1">{v.d}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. JOIN OUR TEAM / CTA */}
      <section className="py-40 bg-white text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#FFB400] opacity-[0.03] scale-150 rotate-12"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-7xl font-black uppercase italic text-black leading-tight">Join The <span className="text-[#FFB400]">Dominant</span> Construction Force</h2>
          <p className="text-gray-500 mt-10 text-xl font-medium leading-relaxed">Hum un engineers aur workers ki talash mein hain jo history create karna chahte hain. Be part of Pakistan's most innovative construction team.</p>
          <div className="mt-16 flex flex-col md:flex-row justify-center gap-6">
             <button className="bg-black text-white px-20 py-7 font-black uppercase text-xs tracking-widest hover:bg-[#FFB400] hover:text-black transition-all">Submit Portfolio</button>
             <button className="border-2 border-black text-black px-20 py-7 font-black uppercase text-xs tracking-widest hover:bg-black hover:text-white transition-all">Current Openings</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TeamPage;