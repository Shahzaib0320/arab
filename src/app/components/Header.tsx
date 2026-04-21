"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const menuItems = {
    Pages: ["About Us", "Our Team", "Pricing Plan", "FAQ", "404 Error"],
    Services: ["Industrial Construction", "Residential Design", "Infrastructure", "Interior Design", "Project Management"],
    Projects: ["Project Grid", "Project Details", "Project Gallery"],
    Blogs: ["Blog Grid", "Blog List", "Single Post"]
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase().trim();
    if (query === 'services') router.push('/services');
    else if (query === 'blog') router.push('/blog/blog-list');
    else if (query) router.push(`/search?q=${searchQuery}`);
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <>
      <header className="fixed top-0 w-full z-[100] bg-white border-b-4 border-black h-24">
        <div className="max-w-[1440px] mx-auto px-6 h-full flex justify-between items-center text-black">
          
          {/* --- LOGO SECTION --- */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="w-16 h-16 bg-white flex items-center justify-center overflow-hidden border-2 border-black/5 p-1">
              <img 
                src="/logo.jpeg" 
                alt="YAS Logo" 
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
            <div className="flex flex-col border-l-4 border-[#FFB400] pl-4">
              <span className="text-xl font-black tracking-tighter leading-none italic uppercase">
                YAS | MUASSASA YAHYA
              </span>
              <span className="text-[9px] font-bold tracking-[0.2em] text-gray-500 uppercase">
                Sabeikhi Trading Est.
              </span>
            </div>
          </Link>

          {/* --- NAVIGATION --- */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-xs font-black uppercase tracking-widest hover:text-[#FFB400]">Home</Link>
            
            {Object.entries(menuItems).map(([category, items]) => (
              <div 
                key={category} 
                className="relative group" 
                onMouseEnter={() => setActiveMenu(category)} 
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="text-xs font-black uppercase tracking-widest flex items-center gap-1 group-hover:text-[#FFB400]">
                  {category} <span className="text-[10px]">▼</span>
                </button>

                {activeMenu === category && (
                  <div className="absolute top-full left-0 w-72 bg-black p-2 border-t-4 border-[#FFB400] shadow-2xl animate-in fade-in slide-in-from-top-2">
                    {items.map((item) => (
                      <Link 
                        key={item} 
                        href={`/${category.toLowerCase().replace('blogs', 'blog')}/${item.toLowerCase().replace(/ /g, '-')}`}
                        className="block p-4 text-[11px] font-bold text-gray-400 hover:text-black hover:bg-[#FFB400] uppercase tracking-widest transition-all"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* --- SEARCH & CONTACT BUTTON LINKED --- */}
          <div className="flex items-center gap-6">
            <button onClick={() => setIsSearchOpen(true)} className="p-2 hover:text-[#FFB400] transition-all">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
            
            {/* AB YE BUTTON LINK HAI */}
            <Link href="/contact">
              <button className="hidden xl:block bg-black text-white px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-[#FFB400] hover:text-black transition-all shadow-[4px_4px_0px_#FFB400]">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* --- SEARCH OVERLAY --- */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center px-6">
          <button onClick={() => setIsSearchOpen(false)} className="absolute top-10 right-10 text-white hover:text-[#FFB400]">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          <form onSubmit={handleSearch} className="w-full max-w-4xl text-center">
            <input 
              autoFocus
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="SEARCH YAS TRADING..."
              className="w-full bg-transparent border-b-4 border-white/20 text-white text-4xl md:text-7xl font-black uppercase italic py-8 outline-none focus:border-[#FFB400] transition-all"
            />
          </form>
        </div>
      )}
    </>
  );
};

export default Header;