import React from 'react';

// --- Custom SVGs for Interaction ---
const Icons = {
  Share: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>,
  ArrowLeft: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
};

const SingleBlogPost = () => {
  return (
    <div className="bg-white font-sans selection:bg-[#FFB400] selection:text-black">
      
      {/* 1. PAGE HEADER / BREADCRUMB */}
      <section className="py-12 px-6 border-b border-gray-100">
        <div className="max-w-[800px] mx-auto flex items-center gap-4">
           <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:text-[#FFB400] transition-colors">
             <Icons.ArrowLeft /> Back To Archive
           </button>
        </div>
      </section>

      {/* 2. BLOG TITLE & 3. META INFO */}
      <article className="py-20 px-6">
        <header className="max-w-[800px] mx-auto text-center mb-16">
           <span className="text-[#FFB400] font-black uppercase text-xs tracking-[0.3em] italic">Infrastructure & Planning</span>
           <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-tight mt-6 mb-8 text-zinc-900">
             The Art of Blueprint Strategy: From Paper to Reality
           </h1>
           <div className="flex justify-center items-center gap-6 text-zinc-400 font-bold uppercase text-[10px] tracking-widest border-y border-gray-100 py-4">
              <span>By Shahzaib Hassan</span>
              <span className="w-1.5 h-1.5 bg-[#FFB400] rounded-full"></span>
              <span>April 20, 2026</span>
              <span className="w-1.5 h-1.5 bg-[#FFB400] rounded-full"></span>
              <span>5 Min Read</span>
           </div>
        </header>

        {/* 4. FEATURED IMAGE */}
        <div className="max-w-[1200px] mx-auto mb-20">
           <img 
             src="https://img.freepik.com/free-photo/construction-team-reviewing-blueprints-building-site_23-2152021005.jpg?semt=ais_hybrid&w=1200&q=80" 
             className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700" 
             alt="Featured Blueprint Strategy" 
           />
        </div>

        {/* 5. ARTICLE CONTENT & 6. HEADINGS */}
        <div className="max-w-[800px] mx-auto prose prose-zinc prose-invert">
           <p className="text-xl leading-relaxed text-zinc-600 font-medium mb-10">
             Construction ki dunya mein ek purana maqula hai: "Measure twice, cut once." Magar modern engineering mein hum kehte hain ke "Plan perfectly, execute seamlessly." Aik acha blueprint sirf lines nahi hoti, wo poore project ki rooh hoti hai.
           </p>

           <h2 className="text-3xl font-black uppercase italic text-zinc-900 mt-16 mb-6">Why Coordination Matters?</h2>
           <p className="text-zinc-500 leading-loose mb-8">
             Jab team site par khari hoti hai, to har fard ki zimedaari wazeh honi chahiye. Yahan par blueprints ka role aata hai. Hamari team jab site par review karti hai, to hum sirf drawings nahi dekhte, hum potential risks ko pehle hi dhoondte hain.
           </p>

           {/* 8. QUOTES */}
           <blockquote className="border-l-8 border-[#FFB400] bg-zinc-50 p-10 my-12">
              <p className="text-2xl font-black italic text-zinc-800 leading-snug">
                "Design sirf wo nahi jo paper par dikhta hai, design wo hai jo ground par stability aur efficiency deliver kare."
              </p>
              <cite className="block mt-4 text-[#FFB400] font-black uppercase tracking-widest text-xs">— Shahzaib Hassan</cite>
           </blockquote>

           <h2 className="text-3xl font-black uppercase italic text-zinc-900 mt-16 mb-6">Execution & Real-time Adjustments</h2>
           <p className="text-zinc-500 leading-loose mb-8">
             Ground realities aksar paper planning se mukhtalif hoti hain. Is liye real-time supervision zaroori hai.
           </p>

           {/* 7. SUPPORTING IMAGES */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
              <img src="https://img.freepik.com/free-photo/building-construction-worker-site-with-architect_23-2149124289.jpg?w=600" className="w-full h-80 object-cover" alt="Site Supervision" />
              <img src="https://vnmanpower.com/upload_images/images/Blog/construction-working.jpg?w=600" className="w-full h-80 object-cover" alt="Field Execution" />
           </div>

           {/* 9. TAGS */}
           <div className="flex gap-3 mt-20 pt-10 border-t border-gray-100">
              {["Construction", "Management", "Blueprints"].map(tag => (
                <span key={tag} className="bg-zinc-100 px-4 py-2 text-[10px] font-black uppercase tracking-widest">#{tag}</span>
              ))}
           </div>
        </div>

        {/* 10. AUTHOR INFO & 11. SOCIAL SHARE */}
        <section className="max-w-[800px] mx-auto mt-20 p-10 bg-zinc-950 text-white flex flex-col md:flex-row items-center gap-10">
           <div className="w-32 h-32 bg-[#FFB400] flex-shrink-0 grayscale">
              <img src="Shahzaibpic.png?w=400" className="w-full h-full object-cover" alt="Author" />
           </div>
           <div className="space-y-4">
              <div className="flex justify-between items-center">
                 <h4 className="text-xl font-black uppercase italic text-[#FFB400]">About Shahzaib Hassan</h4>
                 <button className="text-zinc-500 hover:text-white transition-all"><Icons.Share /></button>
              </div>
              <p className="text-zinc-400 text-sm font-medium leading-relaxed">
                Shahzaib is a digital-first construction enthusiast with over 5 years of experience in strategic planning and UI/UX for commercial infrastructure.
              </p>
           </div>
        </section>

        {/* 12. RELATED POSTS */}
        <section className="max-w-[1200px] mx-auto mt-32">
           <h3 className="text-2xl font-black uppercase italic mb-12 border-b-4 border-black pb-4 inline-block">Keep Reading</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {t: "Safety Protocols in Industrial Zones", img: "https://st4.depositphotos.com/12985790/20356/i/450/depositphotos_203567962-stock-photo-professional-engineers-safety-vests-hardhats.jpg"},
                {t: "General Contracting Lifecycles", img: "https://tslhomeimprovement.com/wp-content/uploads/2023/05/general-contractor.jpg"},
                {t: "Labor Efficiency Tools", img: "https://vnmanpower.com/upload_images/images/Blog/construction-working.jpg"}
              ].map((post, i) => (
                <div key={i} className="group cursor-pointer">
                   <div className="h-48 overflow-hidden mb-4"><img src={post.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" /></div>
                   <h4 className="font-black uppercase italic text-xs leading-tight group-hover:text-[#FFB400]">{post.t}</h4>
                </div>
              ))}
           </div>
        </section>

        {/* 13. COMMENTS & 14. FORM */}
        <section className="max-w-[800px] mx-auto mt-32 py-20 border-t border-gray-100">
           <h3 className="text-2xl font-black uppercase italic mb-10">Leave A Comment</h3>
           <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <input type="text" placeholder="YOUR NAME" className="w-full bg-zinc-50 border-none p-5 text-xs font-black uppercase outline-none focus:ring-2 focus:ring-[#FFB400]" />
                 <input type="email" placeholder="YOUR EMAIL" className="w-full bg-zinc-50 border-none p-5 text-xs font-black uppercase outline-none focus:ring-2 focus:ring-[#FFB400]" />
              </div>
              <textarea placeholder="WRITE YOUR FEEDBACK..." rows={6} className="w-full bg-zinc-50 border-none p-5 text-xs font-black uppercase outline-none focus:ring-2 focus:ring-[#FFB400]"></textarea>
              <button className="bg-black text-[#FFB400] px-12 py-5 font-black uppercase text-xs tracking-widest hover:bg-[#FFB400] hover:text-black transition-all">Submit Comment</button>
           </form>
        </section>

        {/* 15. CTA */}
        <section className="max-w-[1200px] mx-auto mt-20 bg-black p-16 text-center">
           <h2 className="text-white text-4xl font-black uppercase italic mb-8">Ready to Build Your Vision?</h2>
           <button className="bg-[#FFB400] text-black px-16 py-6 font-black uppercase text-xs tracking-widest hover:bg-white transition-all">Let's Discuss Project</button>
        </section>
      </article>

    </div>
  );
};

export default SingleBlogPost;