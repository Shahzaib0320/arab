import React from 'react';

// --- Custom SVGs for No-Library Errors ---
const Icons = {
  MapPin: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
  Clock: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
  TrendingUp: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFB400" strokeWidth="2.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
};

const OngoingProjects = () => {
  const ongoingProjects = [
    {
      id: 1,
      title: "Royal Heights",
      location: "DHA Phase 6, Lahore",
      phase: "Gray Structure",
      progress: 65,
      completion: "Oct 2026",
      img: "https://media.licdn.com/dms/image/v2/D4D22AQHZ2IJQIV3z3w/feedshare-shrink_800/B4DZS5q5BNG4Ag-/0/1738281817565?e=2147483647&v=beta&t=Zq9pv9hb-hEoTrXfaEhHkyb2YxN51_-Lb8tO42ydWXA",
      update: "Roof slab pouring completed for 4th floor. Team inspecting structural alignment."
    },
    {
      id: 2,
      title: "Iconic Business Center",
      location: "Gulberg III, Lahore",
      phase: "Foundation",
      progress: 20,
      completion: "Jan 2027",
      img: "https://img.freepik.com/free-photo/building-construction-worker-site-with-architect_23-2149124289.jpg?semt=ais_hybrid&w=740&q=80",
      update: "Excavation completed. Foundation piling in progress with strict safety audit."
    },
    {
      id: 3,
      title: "The Grand Villa",
      location: "Bahria Town, Islamabad",
      phase: "Finishing",
      progress: 88,
      completion: "May 2026",
      img: "https://theleanbuilder.com/wp-content/uploads/2022/08/construction-teambuilding-tips-2.jpg",
      update: "Interior design and electrical fixtures installation in final stages."
    },
    {
      id: 4,
      title: "Industrial Hub",
      location: "Port Qasim, Karachi",
      phase: "Structural Steel",
      progress: 45,
      completion: "Dec 2026",
      img: "https://vnmanpower.com/upload_images/images/Blog/construction-working.jpg",
      update: "Main structural steel frames being erected. Safety protocols strictly followed."
    }
  ];

  return (
    <div className="bg-white font-sans selection:bg-[#FFB400] selection:text-black">
      
      {/* 1. PAGE HERO */}
      <section className="bg-black py-28 px-6 border-b-8 border-[#FFB400] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src="https://media.licdn.com/dms/image/v2/D4D22AQFX7YUU7038jw/feedshare-shrink_800/B4DZS5q4_lG4Ag-/0/1738281817083?e=2147483647&v=beta&t=_7gytCS6R2OlLUCoV5W99d9PqxIdAOfS6jDTIhWtviA" className="w-full h-full object-cover" alt="Hero Background" />
        </div>
        <div className="max-w-[1440px] mx-auto relative z-10">
          <h1 className="text-white text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
            LIVE <span className="text-[#FFB400]">TRACKING</span>
          </h1>
          <p className="text-gray-400 mt-6 font-bold uppercase tracking-[0.4em] text-xs">Real-Time Construction Progress</p>
        </div>
      </section>

      {/* 2. ONGOING PROJECTS OVERVIEW */}
      <section className="py-20 px-6 max-w-[1440px] mx-auto border-b border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black uppercase italic text-black mb-6">Building The Future, <br/> One Brick At A Time</h2>
            <p className="text-gray-600 text-lg font-medium leading-relaxed">
              Hum apne projects ki har movement ko track karte hain. Yahan hamare live projects ki latest progress updates mojud hain.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="p-8 bg-gray-50 border-l-4 border-black flex items-center gap-6">
                <img src="https://st4.depositphotos.com/12985790/20356/i/450/depositphotos_203567962-stock-photo-professional-engineers-safety-vests-hardhats.jpg" className="w-16 h-16 rounded-full object-cover border-2 border-white" alt="Team" />
                <div><p className="text-3xl font-black italic">12</p><p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Active Sites</p></div>
             </div>
             <div className="p-8 bg-gray-50 border-l-4 border-[#FFB400] flex items-center gap-6">
                <img src="https://c8.alamy.com/comp/2EDJ760/mixed-construction-team-in-yellow-and-red-hardhats-discuss-on-blueprint-on-site-under-construction-business-building-teamwork-and-people-concept-2EDJ760.jpg" className="w-16 h-16 rounded-full object-cover border-2 border-white" alt="Team Support" />
                <div><p className="text-3xl font-black italic">450+</p><p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Workers Live</p></div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. ACTIVE PROJECTS LIST */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto space-y-16">
          {ongoingProjects.map((project) => (
            <div key={project.id} className="group flex flex-col lg:flex-row bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all overflow-hidden">
              {/* Image Container */}
              <div className="lg:w-1/3 relative h-[400px] lg:h-auto overflow-hidden bg-black">
                <img src={project.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={project.title} />
                <div className="absolute top-6 left-6 bg-black text-[#FFB400] px-4 py-1 text-[10px] font-black uppercase italic tracking-widest">
                  Site View
                </div>
              </div>

              {/* Details Container */}
              <div className="lg:w-2/3 p-10 md:p-16 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
                    <div>
                      <h3 className="text-4xl font-black uppercase italic text-black tracking-tighter">{project.title}</h3>
                      <div className="flex gap-6 mt-3 text-gray-400 font-bold uppercase text-[10px] tracking-widest">
                        <span className="flex items-center gap-2"><Icons.MapPin /> {project.location}</span>
                        <span className="flex items-center gap-2"><Icons.Clock /> Est. {project.completion}</span>
                      </div>
                    </div>
                    <div className="bg-[#FFB400] text-black px-6 py-2 text-[10px] font-black uppercase italic tracking-widest">
                      {project.phase}
                    </div>
                  </div>

                  {/* PROGRESS BAR */}
                  <div className="mb-10">
                    <div className="flex justify-between font-black uppercase text-[11px] mb-4 tracking-widest">
                      <span className="text-black">Site Progress Indicator</span>
                      <span className="text-[#FFB400]">{project.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 w-full rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-black transition-all duration-1000" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* MILESTONE UPDATE */}
                <div className="bg-gray-50 p-8 border-l-8 border-[#FFB400] flex gap-6 items-center">
                   <div className="hidden sm:block w-20 h-20 overflow-hidden rounded-lg">
                      <img src="https://tslhomeimprovement.com/wp-content/uploads/2023/05/general-contractor.jpg" className="w-full h-full object-cover grayscale" alt="Milestone" />
                   </div>
                   <div>
                      <p className="text-[10px] font-black uppercase text-gray-400 mb-1 italic">Last Update From Site Engineer</p>
                      <p className="text-black font-bold uppercase text-xs leading-loose italic">"{project.update}"</p>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-32 px-6 bg-black text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-10">
            <img src="https://img.freepik.com/free-photo/construction-team-reviewing-blueprints-building-site_23-2152021005.jpg?semt=ais_hybrid&w=740&q=80" className="w-full h-full object-cover" alt="Footer BG" />
         </div>
         <div className="relative z-10">
           <h2 className="text-white text-5xl md:text-7xl font-black uppercase italic mb-10 leading-tight">Your Vision, <br/> <span className="text-[#FFB400]">Our Execution</span></h2>
           <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-[#FFB400] text-black px-16 py-6 font-black uppercase text-xs tracking-widest hover:bg-white transition-all">Start Project</button>
              <button className="border-2 border-white text-white px-16 py-6 font-black uppercase text-xs tracking-widest hover:bg-[#FFB400] hover:border-[#FFB400] transition-all">Download Plan</button>
           </div>
         </div>
      </section>

    </div>
  );
};

export default OngoingProjects;