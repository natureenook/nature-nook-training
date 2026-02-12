import { useScrollReveal } from "../Hook/Hook";

export default function NatureNook() {
  const [ref, visible] = useScrollReveal();

  return (
    
    <div className="bg-[#f0f7f4] text-[#2e2e2e] overflow-x-hidden font-[Montserrat]">
      <div>
      </div>
      <div className="relative h-screen flex flex-col justify-center items-center text-center text-white">
        <img
          src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=1470&q=80"
          alt="Nature background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            🐾 Առաջինը Հայաստանում
          </h1>
          <p className="max-w-2xl text-lg md:text-xl leading-relaxed mx-auto drop-shadow-md">
            Training  Կենդանիների Համար — Nature Nook:<br /><hr />
            Սիրով, գիտությամբ ու վստահությամբ զարգացնենք ձեր կենդանու ներուժը։
          </p>
        </div>
      </div>

      <section
        ref={ref}
        className={`max-w-4xl mx-auto px-6 py-20 transition-all duration-700 ease-out transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <div className="bg-green-100 text-green-800 text-center py-10 px-6 rounded-2xl shadow-md italic text-lg md:text-xl">
          «Յուրաքանչյուր կենդանի ունի իր հոգին, պարզապես պետք է իմանալ՝ ինչպես խոսել նրա լեզվով…»
          <br />
          <span className="not-italic font-semibold text-green-600 block mt-2">
            — Nature Nook Philosophy 🌿
          </span>
        </div>
      </section>

 
    </div>
  );
}
