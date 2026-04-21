import React from 'react';

const Icons = {
  Calendar: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>,
  User: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
  ArrowRight: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
};

const BlogList = () => {
  // Aapki provide ki gayi images ka array
  const articles = [
    {
      title: "The Art of Blueprint Strategy: From Paper to Reality",
      excerpt: "Ek successful project ki bunyad ek mazboot blueprint aur team coordination par hoti hai. Janeye hamari planning methodology.",
      author: "Shahzaib Hassan",
      date: "April 20, 2026",
      category: "Planning",
      image: "https://img.freepik.com/free-photo/construction-team-reviewing-blueprints-building-site_23-2152021005.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
      title: "Real-time Supervision: Ensuring Quality Standards",
      excerpt: "Har sariya aur har brick par nazar. Hamare engineers site par 24/7 quality assurance deliver karte hain.",
      author: "Site Lead",
      date: "April 18, 2026",
      category: "Supervision",
      image: "https://img.freepik.com/free-photo/building-construction-worker-site-with-architect_23-2149124289.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
      title: "Safety Protocols in Industrial Zones",
      excerpt: "Safety vests aur hardhats hamara libas hain. Zero-accident record maintain karne ke liye strict policies.",
      author: "Safety Officer",
      date: "April 15, 2026",
      category: "Safety",
      image: "https://st4.depositphotos.com/12985790/20356/i/450/depositphotos_203567962-stock-photo-professional-engineers-safety-vests-hardhats.jpg"
    },
    {
      title: "Collaborative Engineering: A Mixed Team Approach",
      excerpt: "Alag alag maharat ke log, magar ek hi maqsad—Engineering Excellence. Hamari team diversity hi hamari taqat hai.",
      author: "Project Manager",
      date: "April 12, 2026",
      category: "Teamwork",
      image: "https://c8.alamy.com/comp/2EDJ760/mixed-construction-team-in-yellow-and-red-hardhats-discuss-on-blueprint-on-site-under-construction-business-building-teamwork-and-people-concept-2EDJ760.jpg"
    },
    {
      title: "General Contracting: Managing The Whole Lifecycle",
      excerpt: "Procurement se lekar execution tak, general contractor ka role kisi bhi project ki kamyabi mein sab se eham hota hai.",
      author: "Admin",
      date: "April 10, 2026",
      category: "Contracting",
      image: "https://tslhomeimprovement.com/wp-content/uploads/2023/05/general-contractor.jpg"
    },
    {
      title: "Labor Efficiency & Modern Construction Tools",
      excerpt: "Ground par kaam karne wale hath aur modern tools ka milan hi project ko on-time mukammal karta hai.",
      author: "Operations Lead",
      date: "April 05, 2026",
      category: "Operations",
      image: "https://vnmanpower.com/upload_images/images/Blog/construction-working.jpg"
    }
  ];

  return (
    <div className="bg-white font-sans selection:bg-[#FFB400] selection:text-black">
      
      {/* 1. PAGE HERO */}
      <section className="bg-zinc-950 py-24 px-6 border-b-4 border-[#FFB400]">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-white text-5xl md:text-7xl font-black uppercase italic tracking-tighter">
            BLOG <span className="text-[#FFB400]">LISTING</span>
          </h1>
          <p className="text-zinc-500 mt-4 font-bold uppercase text-[10px] tracking-[0.4em]">Expert Perspectives & Field Intelligence</p>
        </div>
      </section>

      {/* 2. LIST CONTENT */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto space-y-24">
          {articles.map((article, index) => (
            <article key={index} className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Image Side */}
              <div className="lg:col-span-5 overflow-hidden relative aspect-video shadow-xl border border-zinc-100">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                />
                <div className="absolute top-4 left-4 bg-[#FFB400] text-black px-4 py-1 text-[9px] font-black uppercase italic">
                  {article.category}
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex gap-6 text-zinc-400 font-bold uppercase text-[10px] tracking-widest">
                  <span className="flex items-center gap-2"><Icons.Calendar /> {article.date}</span>
                  <span className="flex items-center gap-2"><Icons.User /> {article.author}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic leading-tight text-zinc-900 group-hover:text-[#FFB400] transition-colors">
                  {article.title}
                </h2>
                <p className="text-zinc-500 font-medium leading-relaxed max-w-2xl">
                  {article.excerpt}
                </p>
                <button className="flex items-center gap-4 text-black font-black uppercase text-xs tracking-widest group-hover:translate-x-4 transition-all duration-300 border-b-2 border-[#FFB400] pb-2">
                  Explore Insights <div className="text-[#FFB400]"><Icons.ArrowRight /></div>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. NEWSLETTER CTA */}
      <section className="bg-[#FFB400] py-16 px-6 mt-20">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <h2 className="text-3xl font-black uppercase italic text-black leading-none">Get Field <br/> Updates First</h2>
          <div className="flex w-full md:w-auto bg-black p-1">
            <input type="email" placeholder="EMAIL ADDRESS" className="bg-transparent border-none px-6 py-4 text-white font-bold text-xs uppercase placeholder:text-zinc-500 outline-none w-full md:w-64" />
            <button className="bg-[#FFB400] text-black px-8 py-4 font-black uppercase text-xs tracking-widest hover:bg-white transition-all">Subscribe</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BlogList;