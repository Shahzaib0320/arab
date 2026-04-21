export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="max-w-7xl mx-auto py-24 px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h1 className="text-7xl font-black uppercase leading-none mb-10">Let's <br/> <span className="text-[#FFB400]">Talk.</span></h1>
          <div className="space-y-8">
            <div>
              <h4 className="font-black uppercase text-xs text-gray-400">Head Office</h4>
              <p className="text-xl font-bold uppercase">Main Industrial Area, Islamabad</p>
            </div>
            <div>
              <h4 className="font-black uppercase text-xs text-gray-400">Call Support</h4>
              <p className="text-xl font-bold uppercase">+92 300 0000000</p>
            </div>
          </div>
        </div>
        <form className="space-y-6 bg-gray-50 p-12 border-t-8 border-black">
          <input type="text" placeholder="NAME" className="w-full p-5 bg-white border-none text-xs font-black uppercase outline-none focus:ring-2 focus:ring-[#FFB400]" />
          <input type="email" placeholder="EMAIL" className="w-full p-5 bg-white border-none text-xs font-black uppercase outline-none focus:ring-2 focus:ring-[#FFB400]" />
          <textarea placeholder="MESSAGE" rows={5} className="w-full p-5 bg-white border-none text-xs font-black uppercase outline-none focus:ring-2 focus:ring-[#FFB400]"></textarea>
          <button className="bg-black text-white px-12 py-5 font-black uppercase text-xs hover:bg-[#FFB400] hover:text-black transition-all">Submit Request</button>
        </form>
      </section>
    </div>
  );
}