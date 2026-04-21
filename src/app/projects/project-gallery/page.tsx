import React from 'react';

// --- Custom SVGs ---
const Icons = {
  Filter: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>,
  ArrowRight: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
};

const ProjectGallery = () => {
  const categories = ["All Projects", "Residential", "Commercial", "Industrial", "Interior"];
  
  const projects = [
    { title: "Elite Residency", type: "Residential", loc: "Lahore", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800" },
    { title: "Tech Plaza", type: "Commercial", loc: "Islamabad", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800" },
    { title: "Industrial Hub", type: "Industrial", loc: "Karachi", img: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=800" },
    { title: "Modern Villa", type: "Residential", loc: "Sialkot", img: "https://images.unsplash.com/photo-1613490493576-7fde63bac811?w=800" },
    { title: "Corporate HQ", type: "Commercial", loc: "Faisalabad", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800" },
    { title: "Luxury Loft", type: "Interior", loc: "Lahore", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800" }
  ];

  return (
    <div className="bg-white font-sans selection:bg-[#FFB400] selection:text-black">
      
      {/* 1. PAGE HEADER (Compact & Sleek) */}
      <section className="bg-black py-24 px-6 border-b-8 border-[#FFB400]">
        <div className="max-w-[1440px] mx-auto text-center">
          <h1 className="text-white text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
            OUR <span className="text-[#FFB400]">PORTFOLIO</span>
          </h1>
          <p className="text-gray-400 mt-6 font-bold uppercase tracking-[0.4em] text-xs">Showcasing Architectural Excellence</p>
        </div>
      </section>

      {/* 2. GALLERY INTRODUCTION & 3. FILTER OPTIONS */}
      <section className="py-20 px-6 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 border-b border-gray-100 pb-12">
          <div className="max-w-xl">
            <h2 className="text-4xl font-black uppercase italic text-black mb-4">Masterpieces Built by Us</h2>
            <p className="text-gray-500 font-medium">Har project hamari mehnat aur perfection ka saboot hai. Filter use karein hamari mukhtalif categories dekhne ke liye.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
             <div className="flex items-center gap-2 bg-black text-[#FFB400] px-4 py-2 mr-4">
                <Icons.Filter />
                <span className="text-[10px] font-black uppercase tracking-widest">Filter:</span>
             </div>
             {categories.map((cat, i) => (
               <button key={i} className={`px-6 py-3 font-black uppercase text-[10px] tracking-widest border-2 transition-all ${i === 0 ? 'bg-[#FFB400] border-[#FFB400] text-black' : 'border-gray-100 text-gray-400 hover:border-black hover:text-black'}`}>
                 {cat}
               </button>
             ))}
          </div>
        </div>

        {/* 4. HIGH-QUALITY IMAGE GRID & 5. IMAGE DETAILS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 px-0 md:px-0 mt-1">
          {projects.map((proj, i) => (
            <div key={i} className="group relative h-[500px] overflow-hidden bg-gray-900 cursor-pointer">
              <img 
                src={proj.img} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40" 
                alt={proj.title} 
              />
              
              {/* Overlay Details */}
              <div className="absolute inset-0 flex flex-col justify-end p-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-10 group-hover:translate-y-0">
                <span className="text-[#FFB400] font-black uppercase text-[10px] tracking-[0.3em] mb-2">{proj.type} / {proj.loc}</span>
                <h3 className="text-white text-3xl font-black uppercase italic mb-6 leading-none tracking-tighter">{proj.title}</h3>
                
                {/* 6. CASE STUDY LINK */}
                <div className="flex items-center gap-4 text-white font-black uppercase text-[10px] tracking-widest hover:text-[#FFB400] transition-colors">
                   View Project Details <Icons.ArrowRight />
                </div>
              </div>
              
              {/* Corner Badge */}
              <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md text-white px-4 py-1 text-[9px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100">
                View Study
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ADDITIONAL CONTENT (To make it Long-form) */}
      <section className="py-32 bg-gray-50 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
           <div>
              <p className="text-6xl font-black italic text-[#FFB400]">12M+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-black mt-4">Sq. Ft Constructed</p>
           </div>
           <div>
              <p className="text-6xl font-black italic text-[#FFB400]">45+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-black mt-4">Ongoing Projects</p>
           </div>
           <div>
              <p className="text-6xl font-black italic text-[#FFB400]">100%</p>
              <p className="text-xs font-bold uppercase tracking-widest text-black mt-4">Client Satisfaction</p>
           </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="py-32 px-6 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
           <img src="https://vnmanpower.com/upload_images/images/Blog/construction-working.jpg" className="w-full h-full object-cover" alt="bg" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-white text-5xl md:text-7xl font-black uppercase italic leading-tight mb-10">Have a vision <br/> in <span className="text-[#FFB400]">Mind?</span></h2>
          <p className="text-gray-400 text-lg mb-12 font-medium">Hum aapke khuwabon ko concrete aur steel ki reality mein badalne ke liye tayyar hain.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-[#FFB400] text-black px-16 py-6 font-black uppercase text-xs tracking-widest hover:bg-white transition-all">Start Your Project</button>
            <button className="border-2 border-white text-white px-16 py-6 font-black uppercase text-xs tracking-widest hover:bg-[#FFB400] hover:border-[#FFB400] transition-all">View All Services</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProjectGallery;