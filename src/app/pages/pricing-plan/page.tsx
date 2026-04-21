import React from 'react';

// --- Custom SVGs for No-Library Errors ---
const Icons = {
  Check: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>,
  X: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>,
  Info: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFB400" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
};

const PricingPage = () => {
  const features = [
    "Site Inspection",
    "3D Architectural Design",
    "Structural Engineering",
    "Material Sourcing (Premium)",
    "Project Management",
    "Legal Documentation",
    "Interior Finishing",
    "Landscaping"
  ];

  return (
    <div className="bg-white font-sans selection:bg-[#FFB400] selection:text-black">
      
      {/* 1. PAGE HEADER */}
      <section className="relative h-[50vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=1600')] bg-cover bg-fixed opacity-30 grayscale"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-white text-7xl md:text-9xl font-black uppercase italic tracking-tighter leading-none">
            INVESTMENT <br/><span className="text-[#FFB400]">PLANS</span>
          </h1>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto text-center">
        <span className="text-[#FFB400] font-black uppercase tracking-widest text-xs">Transparent Pricing</span>
        <h2 className="text-5xl font-black uppercase italic mt-4 mb-8 text-black">No Hidden Costs, Only Quality</h2>
        <p className="text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto font-medium">
          Hum construction ke har marhalay mein transparency par yaqeen rakhte hain. Hamare plans aapki requirements aur budget ke mutabiq design kiye gaye hain.
        </p>
      </section>

      {/* 3. PRICE CARDS (Pricing Plans Section) */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 shadow-2xl">
          {/* Basic Plan */}
          <div className="bg-white p-16 border border-gray-100 flex flex-col">
            <h3 className="text-2xl font-black uppercase italic text-black mb-4">Residential</h3>
            <div className="mb-8">
              <span className="text-5xl font-black italic">PKR 3,500</span>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-2">Per Square Feet</p>
            </div>
            <p className="text-gray-500 mb-10 text-sm leading-relaxed">Perfect for small families and single-story home renovations.</p>
            <ul className="space-y-4 mb-12 flex-grow">
              {features.slice(0, 4).map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-xs font-bold uppercase text-black">
                  <Icons.Check /> {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-5 bg-black text-white font-black uppercase text-xs tracking-widest hover:bg-[#FFB400] hover:text-black transition-all">Get Basic</button>
          </div>

          {/* Standard Plan (Highlighted) */}
          <div className="bg-black p-16 text-white scale-105 z-10 shadow-2xl flex flex-col relative overflow-hidden">
            <div className="absolute top-5 right-[-35px] bg-[#FFB400] text-black px-10 py-1 rotate-45 text-[10px] font-black uppercase">Popular</div>
            <h3 className="text-2xl font-black uppercase italic text-[#FFB400] mb-4">Commercial</h3>
            <div className="mb-8 text-[#FFB400]">
              <span className="text-5xl font-black italic">PKR 7,500</span>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white opacity-50 mt-2">Per Square Feet</p>
            </div>
            <p className="text-gray-400 mb-10 text-sm leading-relaxed">Best for offices, plazas, and premium luxury villas.</p>
            <ul className="space-y-4 mb-12 flex-grow">
              {features.slice(0, 6).map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-xs font-bold uppercase text-white">
                  <span className="text-[#FFB400]"><Icons.Check /></span> {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-5 bg-[#FFB400] text-black font-black uppercase text-xs tracking-widest hover:bg-white transition-all">Choose Standard</button>
          </div>

          {/* Premium Plan */}
          <div className="bg-white p-16 border border-gray-100 flex flex-col">
            <h3 className="text-2xl font-black uppercase italic text-black mb-4">Industrial</h3>
            <div className="mb-8">
              <span className="text-5xl font-black italic">PKR 15,000</span>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-2">Per Square Feet</p>
            </div>
            <p className="text-gray-500 mb-10 text-sm leading-relaxed">Mega factories and high-rise structural dominance.</p>
            <ul className="space-y-4 mb-12 flex-grow">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-xs font-bold uppercase text-black">
                  <Icons.Check /> {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-5 bg-black text-white font-black uppercase text-xs tracking-widest hover:bg-[#FFB400] hover:text-black transition-all">Go Premium</button>
          </div>
        </div>
      </section>

      {/* 4. COMPARISON TABLE */}
      <section className="py-32 px-6 bg-white overflow-x-auto">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl font-black uppercase italic mb-16 text-black border-l-8 border-[#FFB400] pl-6">Detailed Comparison</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 uppercase text-[10px] font-black tracking-widest text-gray-500 border-b border-gray-100">
                <th className="p-8">Service Features</th>
                <th className="p-8">Basic</th>
                <th className="p-8">Standard</th>
                <th className="p-8">Premium</th>
              </tr>
            </thead>
            <tbody className="text-xs font-bold uppercase tracking-wider">
              {[
                { title: "Site Supervisor", basic: true, standard: true, premium: true },
                { title: "Weekly Progress Report", basic: false, standard: true, premium: true },
                { title: "Architectural 3D Rendering", basic: false, standard: "2 Views", premium: "Unlimited" },
                { title: "Custom Material Selection", basic: false, standard: false, premium: true },
                { title: "Post-Build Maintenance", basic: "6 Months", standard: "2 Years", premium: "5 Years" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-all">
                  <td className="p-8 text-black">{row.title}</td>
                  <td className="p-8">{typeof row.basic === 'boolean' ? (row.basic ? <Icons.Check /> : <span className="text-gray-200"><Icons.X /></span>) : row.basic}</td>
                  <td className="p-8">{typeof row.standard === 'boolean' ? (row.standard ? <Icons.Check /> : <span className="text-gray-200"><Icons.X /></span>) : row.standard}</td>
                  <td className="p-8 text-[#FFB400]">{typeof row.premium === 'boolean' ? (row.premium ? <Icons.Check /> : <span className="text-gray-200"><Icons.X /></span>) : row.premium}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. CUSTOM PLAN OPTION */}
      <section className="py-32 bg-gray-900 text-white px-6">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="space-y-6">
              <h2 className="text-6xl font-black uppercase italic leading-none text-[#FFB400]">Don't Fit In <br/> Any Box?</h2>
              <p className="text-gray-400 text-xl leading-relaxed">Hum samjhte hain ke har project unique hota hai. Agar aapka project bara hai ya uski requirements different hain, to hum aapke liye **Customized Package** bana sakte hain.</p>
           </div>
           <div className="p-12 border-2 border-dashed border-[#FFB400] text-center">
              <h3 className="text-3xl font-black uppercase mb-6">Build Your Own Plan</h3>
              <p className="text-gray-500 mb-10 text-sm">Hamare experts se baat karein aur apni requirements ke mutabiq quote hasil karein.</p>
              <button className="px-16 py-6 bg-[#FFB400] text-black font-black uppercase text-xs tracking-widest hover:bg-white transition-all">Get Custom Quote</button>
           </div>
        </div>
      </section>

      {/* 6. FAQS (Pricing Related) */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-5xl font-black uppercase italic mb-16 text-center text-black">Common <span className="text-[#FFB400]">Questions</span></h2>
          <div className="space-y-4">
            {[
              { q: "Is material cost included in the per sq ft price?", a: "Yes, hamara price 'With Material' hota hai jisme premium quality cement, sarya (steel), aur baqi material shamil hota hai." },
              { q: "What if I want to use my own material?", a: "Us surat mein hum sirf 'Labor Rate' charge karte hain. Details ke liye custom quote request karein." },
              { q: "Do you offer installment plans?", a: "Ji bilkul, hum project ki progress ke mutabiq milestones-based payments accept karte hain." }
            ].map((faq, i) => (
              <details key={i} className="group border border-gray-100 p-8 cursor-pointer open:bg-gray-50 transition-all">
                <summary className="flex justify-between items-center list-none font-black uppercase text-sm text-black">
                  {faq.q}
                  <span className="text-[#FFB400] text-2xl group-open:rotate-45 transition-all">+</span>
                </summary>
                <p className="mt-6 text-gray-500 leading-relaxed font-medium">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="py-32 px-6 bg-black text-center">
         <h2 className="text-white text-5xl md:text-7xl font-black uppercase italic mb-10">Stop Estimating, <br/> <span className="text-[#FFB400]">Start Building</span></h2>
         <div className="flex flex-col md:flex-row justify-center gap-6">
            <button className="bg-[#FFB400] text-black px-20 py-7 font-black uppercase text-xs tracking-widest hover:bg-white transition-all">Download Price Guide</button>
            <button className="border-2 border-white text-white px-20 py-7 font-black uppercase text-xs tracking-widest hover:bg-[#FFB400] hover:border-[#FFB400] transition-all">Talk To Expert</button>
         </div>
      </section>

    </div>
  );
};

export default PricingPage;