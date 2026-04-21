import React from 'react';

// --- Custom SVGs for No-Library Errors ---
const Icons = {
  Search: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>,
  Mail: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFB400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
  Phone: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFB400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
};

const FAQPage = () => {
  const categories = ["General", "Pricing", "Materials", "Safety", "Timeline"];
  
  const faqs = [
    { cat: "General", q: "What areas do you cover in Pakistan?", a: "Hum Lahore, Islamabad, aur Karachi samait tamam baray shehron mein kaam karte hain." },
    { cat: "Materials", q: "Which cement and steel brands do you use?", a: "Hum hamesha Lucky Cement ya Bestway Cement aur Mughal Steel (Grade 60) use karte hain." },
    { cat: "Timeline", q: "How long does it take to build a 5 Marla house?", a: "Grey structure mein taqreeban 4-5 mahine lagte hain aur finishing mein mazeed 3 mahine." },
    { cat: "Safety", q: "Are your workers insured on site?", a: "Ji bilkul, safety hamari priority hai aur tamam on-site staff properly insured hota hai." },
    { cat: "Pricing", q: "Are the prices fixed or negotiable?", a: "Prices market rates ke mutabiq hoti hain, lekin baray projects par hum discussion kar sakte hain." }
  ];

  return (
    <div className="bg-white font-sans selection:bg-[#FFB400] selection:text-black min-h-screen">
      
      {/* 1. PAGE HEADER (Managed Compact Size) */}
      <section className="bg-black py-20 px-6 border-b-4 border-[#FFB400]">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <h1 className="text-white text-5xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">
              HELP <span className="text-[#FFB400]">CENTER</span>
            </h1>
            <p className="text-gray-400 mt-4 font-bold uppercase tracking-widest text-xs">Apke Tamam Sawalat Ka Jawab Yahan Hai</p>
          </div>
          
          {/* 4. SEARCH BAR (Optional but Recommended) */}
          <div className="relative w-full md:w-[400px]">
            <input 
              type="text" 
              placeholder="Search your question..." 
              className="w-full bg-white/5 border-2 border-white/20 px-6 py-4 text-white text-xs font-bold uppercase tracking-widest outline-none focus:border-[#FFB400] transition-all"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white">
              <Icons.Search />
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="py-20 px-6 max-w-[1200px] mx-auto text-center">
        <h2 className="text-4xl font-black uppercase italic text-black">Common Queries</h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto font-medium">Humne in sawalat ko jama kiya hai jo hamare clients aksar puchte hain. Agar aapko mazeed maloomat chahiye, to humse rabta karein.</p>
      </section>

      {/* 3. FAQ CATEGORIES */}
      <section className="pb-10 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-wrap justify-center gap-4">
          {categories.map((cat, i) => (
            <button key={i} className="px-10 py-3 border-2 border-black font-black uppercase text-[10px] tracking-[0.2em] hover:bg-[#FFB400] transition-all">
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 4. QUESTIONS & ANSWERS LIST (Long Scrolling List) */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-[900px] mx-auto space-y-4">
          {faqs.map((item, i) => (
            <details key={i} className="group bg-white border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 open:ring-4 open:ring-[#FFB400]">
              <summary className="flex justify-between items-center p-8 cursor-pointer list-none">
                <div className="flex gap-6 items-center">
                  <span className="text-[#FFB400] font-black text-xs opacity-50 italic">0{i+1}</span>
                  <h3 className="font-black uppercase text-sm md:text-base text-black tracking-tight">{item.q}</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-open:bg-[#FFB400] transition-all">
                   <span className="font-black text-xl group-open:rotate-45 transition-transform">+</span>
                </div>
              </summary>
              <div className="px-8 pb-10 pt-2 border-t border-gray-50">
                <p className="text-gray-600 leading-relaxed font-medium">
                  {item.a}
                </p>
                <div className="mt-6 flex gap-4">
                   <span className="text-[10px] font-black uppercase tracking-widest text-[#FFB400] bg-black px-3 py-1 italic">{item.cat}</span>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* 5. CONTACT SUPPORT SECTION */}
      <section className="py-32 px-6">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="bg-black p-16 text-white flex flex-col justify-center">
            <h2 className="text-5xl font-black uppercase italic mb-8 leading-none">Still Have <br/> <span className="text-[#FFB400]">Questions?</span></h2>
            <p className="text-gray-400 mb-12 text-lg">Hamari support team 24/7 mojud hai. Aap humein kisi bhi waqt call ya email kar sakte hain.</p>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-white/5 rounded-full"><Icons.Phone /></div>
                <div><p className="text-[10px] font-black uppercase text-[#FFB400]">Call Us</p><p className="text-xl font-black">+92 300 1234567</p></div>
              </div>
              <div className="flex items-center gap-6">
                <div className="p-4 bg-white/5 rounded-full"><Icons.Mail /></div>
                <div><p className="text-[10px] font-black uppercase text-[#FFB400]">Email Us</p><p className="text-xl font-black">support@kontric.com</p></div>
              </div>
            </div>
          </div>
          <div className="p-16 border-4 border-black flex flex-col justify-center bg-[#FFB400]">
             <h3 className="text-3xl font-black uppercase italic mb-6">Request A Callback</h3>
             <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full p-5 bg-white border-none text-xs font-bold uppercase outline-none focus:ring-4 focus:ring-black" />
                <input type="email" placeholder="Email Address" className="w-full p-5 bg-white border-none text-xs font-bold uppercase outline-none focus:ring-4 focus:ring-black" />
                <textarea placeholder="Message" className="w-full p-5 bg-white border-none text-xs font-bold uppercase h-32 outline-none focus:ring-4 focus:ring-black"></textarea>
                <button className="w-full py-6 bg-black text-white font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">Send Message</button>
             </form>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-24 bg-gray-50 text-center border-t">
        <h2 className="text-5xl font-black uppercase italic mb-10 text-black">Ready to build your <span className="text-[#FFB400]">legacy?</span></h2>
        <button className="bg-black text-white px-16 py-6 font-black uppercase text-xs tracking-widest hover:bg-[#FFB400] hover:text-black transition-all">Start Your Journey</button>
      </section>

    </div>
  );
};

export default FAQPage;