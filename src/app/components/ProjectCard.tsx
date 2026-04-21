export default function ProjectCard({ title, category, image }: { title: string, category: string, image: string }) {
  return (
    <div className="group relative overflow-hidden bg-black cursor-pointer">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-80 object-cover transition duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 to-transparent">
        <p className="text-yellow-500 font-bold uppercase text-xs tracking-widest mb-1">{category}</p>
        <h3 className="text-white text-xl font-bold uppercase tracking-tight group-hover:text-yellow-500 transition-colors">
          {title}
        </h3>
        <button className="mt-4 w-fit bg-yellow-500 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
           <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </button>
      </div>
    </div>
  );
}