import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-12 border-t-8 border-[#FFB400]">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* TOP SECTION: BRANDING & LINKS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* 1. BRAND BOX */}
          <div className="space-y-8">
            <Link href="/" className="flex flex-col">
              <span className="text-4xl font-black tracking-tighter leading-none italic text-white">
                KONTRIC <span className="text-[#FFB400]">.</span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-500 uppercase mt-2">Construction Excellence</span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed font-medium">
              Digital expert specializing in SEO, Shopify, and Web Architecture for the construction industry. Building robust structures and even stronger digital footprints.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {['FB', 'TW', 'LI', 'IG'].map((social) => (
                <button key={social} className="w-10 h-10 border border-zinc-800 flex items-center justify-center text-[10px] font-black hover:bg-[#FFB400] hover:text-black transition-all">
                  {social}
                </button>
              ))}
            </div>
          </div>

          {/* 2. QUICK NAVIGATION */}
          <div>
            <h4 className="text-[#FFB400] font-black uppercase text-xs tracking-widest mb-10 italic underline underline-offset-8">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Projects', 'Blog'].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase().replace(' ', '-')}`} className="text-zinc-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-4 h-[2px] bg-[#FFB400] transition-all"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. SERVICES */}
          <div>
            <h4 className="text-[#FFB400] font-black uppercase text-xs tracking-widest mb-10 italic underline underline-offset-8">Our Expertise</h4>
            <ul className="space-y-4">
              {['Industrial Construction', 'Residential Design', 'Infrastructure', 'Project Management'].map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-zinc-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. CONTACT INFO */}
          <div className="bg-zinc-900 p-8 border-l-4 border-[#FFB400]">
            <h4 className="text-white font-black uppercase text-xs tracking-widest mb-8 italic">Get In Touch</h4>
            <div className="space-y-6">
              <div>
                <p className="text-[#FFB400] text-[9px] font-black uppercase tracking-widest mb-1">Direct Call:</p>
                <p className="text-lg font-black italic">+92 300 123 4567</p>
              </div>
              <div>
                <p className="text-[#FFB400] text-[9px] font-black uppercase tracking-widest mb-1">Email Us:</p>
                <p className="text-sm font-bold truncate">shahzaib@zee-collection.com</p>
              </div>
              <div>
                <p className="text-[#FFB400] text-[9px] font-black uppercase tracking-widest mb-1">Office:</p>
                <p className="text-zinc-400 text-[11px] font-bold uppercase leading-relaxed">
                  Ahmadnagar, Punjab,<br />Pakistan
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: COPYRIGHT */}
        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em]">
            © {currentYear} KONTRIC. CREATED BY <span className="text-white">SHAHZAIB HASSAN</span>
          </p>
          <div className="flex gap-8 text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em]">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;