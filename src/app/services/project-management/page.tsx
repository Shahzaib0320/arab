import React from 'react';

// --- Custom SVGs for Management Theme ---
const Icons = {
  Target: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFB400" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>,
  BarChart: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFB400" strokeWidth="2"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>,
  Zap: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFB400" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>,
  Clock: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
};

const ProjectManagementPage = () => {
  return (
    <div className="bg-white font-sans selection:bg-[#FFB400] selection:text-black">
      
      {/* 1. PAGE HERO */}
      <section className="relative h-[70vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <img src="https://img.freepik.com/free-photo/construction-team-reviewing-blueprints-building-site_23-2152021005.jpg?semt=ais_hybrid&w=740&q=80" className="w-full h-full object-cover" alt="Management Hero" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 w-full">
           <span className="text-[#FFB400] font-black uppercase tracking-[0.5em] text-xs">Strategic Execution</span>
           <h1 className="text-white text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-none mt-4">
             CONTROLLED <br/> <span className="text-[#FFB400]">PRECISION</span>
           </h1>
        </div>
      </section>

      {/* 2. SERVICE OVERVIEW & 3. APPROACH */}
      <section className="py-24 px-6 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <h2 className="text-5xl font-black uppercase italic text-black leading-tight border-l-8 border-[#FFB400] pl-8">Expert Oversight, <br/> Seamless Results</h2>
          <p className="text-gray-600 text-xl font-medium leading-relaxed">
            Project management ka matlab sirf kaam karwana nahi, balki har step ko optimize karna hai. Hum ensure karte hain ke aapka project on-time, within-budget aur high-quality standards par mukammal ho.
          </p>
          <div className="flex gap-4">
             <div className="bg-black text-[#FFB400] px-8 py-4 font-black uppercase text-xs italic tracking-widest">Structured</div>
             <div className="bg-gray-100 text-black px-8 py-4 font-black uppercase text-xs italic tracking-widest">Efficient</div>
          </div>
        </div>
        <div className="bg-gray-50 p-12 space-y-6 border-b-8 border-[#FFB400]">
           <h4 className="text-2xl font-black uppercase italic">Our Methodology</h4>
           <p className="text-gray-500 font-medium">Hum "Lean Construction" approach use karte hain taake waste kam ho aur productivity zyada. Hamari team har phase ki micro-management karti hai.</p>
        </div>
      </section>

      {/* 4. SCOPE & 5. PLANNING & 6. COST MANAGEMENT */}
      <section className="py-24 bg-black text-white px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
             <div className="space-y-6">
                <Icons.Target />
                <h3 className="text-2xl font-black uppercase italic text-[#FFB400]">Planning & Scheduling</h3>
                <p className="text-gray-400 text-sm leading-loose">Hum advanced Gantt charts aur timelines use karte hain taake har milestone ki trackable progress ho. No more delays.</p>
             </div>
             <div className="space-y-6">
                <Icons.BarChart />
                <h3 className="text-2xl font-black uppercase italic text-[#FFB400]">Cost Management</h3>
                <p className="text-gray-400 text-sm leading-loose">Budget tracking aur financial reporting hamari priority hai. Hum hidden costs ko eliminate karte hain.</p>
             </div>
             <div className="space-y-6">
                <Icons.Zap />
                <h3 className="text-2xl font-black uppercase italic text-[#FFB400]">Risk Management</h3>
                <p className="text-gray-400 text-sm leading-loose">Potential problems ko pehle hi identify kar ke contingency plans tayaar rakhna hamara kaam hai.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 7. QUALITY, 8. PROCUREMENT & 9. COMMUNICATION */}
      <section className="py-32 px-6 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative">
           <img src="https://theleanbuilder.com/wp-content/uploads/2022/08/construction-teambuilding-tips-2.jpg" className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Team Work" />
           <div className="absolute top-0 right-0 bg-[#FFB400] text-black p-6 font-black uppercase text-[10px] tracking-widest italic">Live Supervision</div>
        </div>
        <div className="space-y-12">
           <h2 className="text-5xl font-black uppercase italic">Integrated <br/> <span className="text-[#FFB400]">Execution</span></h2>
           <div className="space-y-8">
              {[
                {t: "Quality Control", d: "International standards aur strict inspection checklists."},
                {t: "Smart Procurement", d: "Behtreen materials ki sourcing at the best prices."},
                {t: "Transparent Communication", d: "Weekly reports aur direct client dashboards."}
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                   <div className="w-2 h-2 bg-[#FFB400] mt-2 group-hover:w-8 transition-all"></div>
                   <div>
                      <h4 className="font-black uppercase italic text-xl">{item.t}</h4>
                      <p className="text-gray-500 text-sm mt-2">{item.d}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 10. TOOLS & TECH */}
      <section className="py-24 bg-gray-50 px-6">
         <div className="max-w-[1440px] mx-auto text-center">
            <h3 className="text-3xl font-black uppercase italic mb-12">Software & Systems</h3>
            <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
               {["Primavera P6", "MS Project", "AutoCAD", "Procore", "SAP"].map(tool => (
                 <span key={tool} className="text-2xl font-black tracking-tighter">{tool}</span>
               ))}
            </div>
         </div>
      </section>

      {/* 11. LIFECYCLE MANAGEMENT (Timeline Style) */}
      <section className="py-32 px-6 max-w-[1440px] mx-auto">
        <h2 className="text-4xl font-black uppercase italic mb-20 text-center">Project <span className="text-[#FFB400]">Lifecycle</span></h2>
        <div className="relative">
           <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -z-10"></div>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {s: "Initiation", d: "Feasibility aur project charter setup."},
                {s: "Planning", d: "Timelines aur budget finalization."},
                {s: "Execution", d: "Real-time construction management."},
                {s: "Closing", d: "Final inspection aur handover."}
              ].map((step, i) => (
                <div key={i} className="bg-white p-8 border border-gray-100 hover:border-[#FFB400] transition-all">
                   <div className="w-12 h-12 bg-black text-[#FFB400] flex items-center justify-center font-black italic mb-6">0{i+1}</div>
                   <h4 className="font-black uppercase italic text-lg mb-3">{step.s}</h4>
                   <p className="text-gray-500 text-xs font-medium leading-relaxed">{step.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 13. FAQs */}
      <section className="py-24 bg-zinc-950 text-white px-6">
        <div className="max-w-[800px] mx-auto">
           <h2 className="text-3xl font-black uppercase italic mb-12 text-center text-[#FFB400]">Management Insights</h2>
           <div className="space-y-4">
              {[
                {q: "Project delay hone par aapka kya action hota hai?", a: "Hum 'Fast Tracking' aur 'Crashing' techniques use karte hain taake extra shifts laga kar delay recover kiya jaye."},
                {q: "Kya aap sirf budget management provide karte hain?", a: "Nahi, hum A to Z management karte hain jis mein procurement se lekar site safety tak sab shamil hai."},
                {q: "Reports kitni baar milti hain?", a: "Hum weekly progress reports aur daily site snapshots provide karte hain."}
              ].map((faq, i) => (
                <div key={i} className="p-8 border border-zinc-800 hover:bg-zinc-900 transition-all">
                   <h4 className="text-[#FFB400] font-black uppercase text-xs mb-3 italic">Q: {faq.q}</h4>
                   <p className="text-gray-400 text-sm font-medium leading-loose">{faq.a}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 14. CALL TO ACTION */}
      <section className="py-32 px-6 bg-[#FFB400] text-center">
         <h2 className="text-black text-5xl md:text-7xl font-black uppercase italic mb-10 leading-tight">Control Your <br/> <span className="bg-black text-white px-4">Investment</span></h2>
         <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-black text-white px-16 py-6 font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">Get Management Proposal</button>
            <button className="border-2 border-black text-black px-16 py-6 font-black uppercase text-xs tracking-widest hover:bg-black hover:text-white transition-all">Request Case Studies</button>
         </div>
      </section>

    </div>
  );
};

export default ProjectManagementPage;