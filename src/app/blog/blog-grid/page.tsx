import React from 'react';

// --- Custom SVGs for Blog Icons ---
const Icons = {
  Search: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>,
  ArrowRight: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
};

const BlogGrid = () => {
  const categories = ["All", "Construction", "Interior Design", "Project Tips", "Architecture"];
  
  const blogs = [
    {
      id: 2,
      category: "Construction",
      title: "Cost-Effective Construction Strategies in 2026",
      desc: "Kam budget mein premium quality building kaise tayaar ki jaye? Janeye expert tips.",
      img: "https://vnmanpower.com/upload_images/images/Blog/construction-working.jpg",
      date: "April 15, 2026"
    },
    {
      id: 3,
      category: "Design",
      title: "Maximizing Small Spaces: Interior Secrets",
      desc: "Chote gharon ko bara aur hosh-ruba dikhane ke liye space optimization techniques.",
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800",
      date: "April 10, 2026"
    },
    {
      id: 4,
      category: "Tips",
      title: "How to Choose the Best Raw Materials",
      desc: "Cement, steel aur tiles ki pehchan kaise karein? Aik mukammal guide.",
      img: "https://media.licdn.com/dms/image/v2/D4D22AQHZ2IJQIV3z3w/feedshare-shrink_800/B4DZS5q5BNG4Ag-/0/1738281817565?e=2147483647&v=beta&t=Zq9pv9hb-hEoTrXfaEhHkyb2YxN51_-Lb8tO42ydWXA",
      date: "April 05, 2026"
    },
    {
      id: 5,
      category: "Architecture",
      title: "Sustainability in Urban Infrastructure",
      desc: "Environment-friendly infrastructure kyun zaroori hai aur hum isay kaise follow karte hain.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQcGTHmGtzNHpfDBZSYde8aZA8M5tSB2M6SQ&s?w=800",
      date: "March 28, 2026"
    }
  ];

  return (
    <div className="bg-white font-sans selection:bg-[#FFB400] selection:text-black">
      
      {/* 1. PAGE HERO */}
      <section className="bg-black py-32 px-6 border-b-8 border-[#FFB400]">
        <div className="max-w-[1440px] mx-auto text-center">
           <span className="text-[#FFB400] font-black uppercase tracking-[0.5em] text-xs">Knowledge Hub</span>
           <h1 className="text-white text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mt-6">
             INSIGHTS & <br/> <span className="text-[#FFB400]">ARTICLES</span>
           </h1>
           <p className="text-gray-400 mt-8 max-w-2xl mx-auto font-medium uppercase text-xs tracking-widest leading-loose">
             Construction ki dunya ki latest updates, design trends aur project management ki tips hamare experts se seekhein.
           </p>
        </div>
      </section>

      {/* 3. FILTERS & 4. SEARCH BAR */}
      <section className="sticky top-0 z-40 bg-white border-b border-gray-100 px-6 py-6">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex flex-wrap gap-6">
              {categories.map((cat, i) => (
                <button key={i} className={`text-[10px] font-black uppercase tracking-widest pb-1 border-b-2 ${i === 0 ? 'border-[#FFB400] text-black' : 'border-transparent text-gray-400 hover:text-black transition-all'}`}>
                  {cat}
                </button>
              ))}
           </div>
           <div className="relative w-full md:w-80">
              <input type="text" placeholder="SEARCH ARTICLES..." className="w-full bg-gray-50 border-none px-6 py-3 text-xs font-bold uppercase tracking-widest focus:ring-2 focus:ring-[#FFB400] outline-none" />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"><Icons.Search /></div>
           </div>
        </div>
      </section>

      {/* 5. FEATURED POST */}
      <section className="py-20 px-6 max-w-[1440px] mx-auto">
        <div className="group relative flex flex-col lg:flex-row bg-black overflow-hidden h-auto lg:h-[600px]">
           <div className="lg:w-2/3 h-[400px] lg:h-auto overflow-hidden">
              <img src="https://theleanbuilder.com/wp-content/uploads/2022/08/construction-teambuilding-tips-2.jpg" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" alt="Featured" />
           </div>
           <div className="lg:w-1/3 p-12 lg:p-16 flex flex-col justify-center bg-black text-white">
              <span className="text-[#FFB400] font-black uppercase text-[10px] tracking-widest mb-4">Featured Article</span>
              <h2 className="text-4xl font-black uppercase italic leading-tight mb-6">The Evolution of Modern Infrastructure in Pakistan</h2>
              <p className="text-gray-400 text-sm font-medium mb-10 leading-relaxed">Pakistan ke construction sector mein aane wali tabdeeliyan aur digital tools ka barhta hua istemal.</p>
              <button className="flex items-center gap-4 text-[#FFB400] font-black uppercase text-xs tracking-widest group/btn">
                Read Full Story <Icons.ArrowRight />
              </button>
           </div>
        </div>
      </section>

      {/* 6. GRID LAYOUT */}
      <section className="py-20 px-6 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogs.map((blog) => (
            <article key={blog.id} className="group flex flex-col border-b border-gray-100 pb-10">
              <div className="h-64 overflow-hidden mb-8 relative">
                 <img src={blog.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt={blog.title} />
                 <div className="absolute top-4 left-4 bg-white text-black px-4 py-1 text-[10px] font-black uppercase italic">
                    {blog.category}
                 </div>
              </div>
              <p className="text-gray-400 font-bold uppercase text-[9px] tracking-widest mb-3">{blog.date}</p>
              <h3 className="text-2xl font-black uppercase italic text-black mb-4 group-hover:text-[#FFB400] transition-colors">{blog.title}</h3>
              <p className="text-gray-500 text-sm font-medium leading-relaxed mb-6">{blog.desc}</p>
              <button className="flex items-center gap-3 text-black font-black uppercase text-[10px] tracking-[0.2em] group/link">
                Read More <div className="group-hover/link:translate-x-2 transition-transform"><Icons.ArrowRight /></div>
              </button>
            </article>
          ))}
        </div>

        {/* 7. PAGINATION */}
        <div className="mt-20 flex justify-center gap-4">
           <button className="w-12 h-12 flex items-center justify-center bg-black text-[#FFB400] font-black italic">1</button>
           <button className="w-12 h-12 flex items-center justify-center border-2 border-gray-100 hover:border-black font-black italic">2</button>
           <button className="w-12 h-12 flex items-center justify-center border-2 border-gray-100 hover:border-black font-black italic">3</button>
        </div>
      </section>

      {/* 8. NEWSLETTER */}
      <section className="py-24 bg-gray-50 px-6 border-y border-gray-200">
        <div className="max-w-[800px] mx-auto text-center space-y-8">
           <h2 className="text-4xl font-black uppercase italic text-black">Stay Updated</h2>
           <p className="text-gray-500 font-medium">Hamare latest articles aur industry updates seedha apne inbox mein payein.</p>
           <div className="flex flex-col sm:flex-row gap-2">
              <input type="email" placeholder="YOUR EMAIL ADDRESS" className="flex-1 bg-white border-2 border-gray-200 px-8 py-5 text-xs font-bold uppercase tracking-widest focus:border-black outline-none transition-all" />
              <button className="bg-black text-[#FFB400] px-12 py-5 font-black uppercase text-xs tracking-widest hover:bg-[#FFB400] hover:text-black transition-all">Subscribe</button>
           </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="py-32 px-6 bg-black text-center relative overflow-hidden">
         <div className="relative z-10">
           <h2 className="text-white text-5xl md:text-7xl font-black uppercase italic mb-10 leading-tight">Got A Project <br/> In Mind?</h2>
           <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-[#FFB400] text-black px-16 py-6 font-black uppercase text-xs tracking-widest hover:bg-white transition-all">Let's Talk Business</button>
              <button className="border-2 border-white text-white px-16 py-6 font-black uppercase text-xs tracking-widest hover:bg-[#FFB400] hover:border-[#FFB400] transition-all">Explore Services</button>
           </div>
         </div>
      </section>

    </div>
  );
};

export default BlogGrid;