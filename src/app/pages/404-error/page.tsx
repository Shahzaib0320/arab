import Link from 'next/link';

export default function ErrorPage() {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-white text-center">
      <div>
        <h1 className="text-[200px] font-black leading-none text-white/10 italic">404</h1>
        <h2 className="text-4xl font-black uppercase -mt-20 mb-8">Structural Error!</h2>
        <p className="text-gray-500 uppercase tracking-[0.3em] text-xs mb-10">The page you're looking for was never built.</p>
        <Link href="/" className="bg-[#FFB400] text-black px-10 py-5 font-black uppercase text-xs tracking-widest">Back to Ground Level</Link>
      </div>
    </div>
  );
}