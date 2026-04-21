import Link from 'next/link';

const services = [
  { id: "industrial-construction", title: "Industrial Construction", icon: "🏗️", desc: "Large scale factory and plant development with precision." },
  { id: "residential-design", title: "Residential Design", icon: "🏠", desc: "Modern luxury homes and apartment complexes." },
  { id: "bridge-infrastructure", title: "Bridge Infrastructure", icon: "🌉", desc: "State-of-the-art bridge and highway engineering." },
  { id: "interior-finishing", title: "Interior Finishing", icon: "🎨", desc: "Premium interior work for commercial and private spaces." },
  { id: "project-management", title: "Project Management", icon: "📋", desc: "End-to-end management of complex construction sites." },
  { id: "material-supply", title: "Material Supply", icon: "🧱", desc: "High-quality raw materials for durable structures." },
];

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <span className="text-[#FFB400] font-black uppercase tracking-[0.4em] text-xs">Expertise</span>
          <h1 className="text-7xl font-black uppercase italic tracking-tighter mt-4 leading-none">
            Our <span className="text-[#FFB400]">Services</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t-4 border-l-4 border-black">
          {services.map((s) => (
            <Link key={s.id} href={`/services/${s.id}`} className="group p-16 border-r-4 border-b-4 border-black hover:bg-black transition-all duration-500">
              <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-500">{s.icon}</div>
              <h3 className="text-2xl font-black uppercase mb-4 group-hover:text-[#FFB400] transition-colors">{s.title}</h3>
              <p className="text-gray-500 text-sm mb-8 group-hover:text-gray-400 font-medium">{s.desc}</p>
              <span className="text-xs font-black uppercase border-b-2 border-black group-hover:border-[#FFB400] group-hover:text-[#FFB400]">Discover More +</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}