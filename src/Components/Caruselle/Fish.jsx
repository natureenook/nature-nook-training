// Fish.jsx
import React, { useState, useEffect } from "react";

export default function Fish() {
    const slides = [
        {
            id: 1,
            title: "Ձկների խորհրդավոր աշխարհը 🌊🐠",
            text: "Ձկները աշխարհի ամենահին կենդանիներից են՝ ապրում են միլիոնավոր տարիներ առաջ ձևավորված ջրային աշխարհում։ Նրանց գույներն ու ձևերը հիացնում են։",
            image: `${import.meta.env.BASE_URL}Fish1.jpg`,
        },
        {
            id: 2,
            title: "Ջրի տակ շնչելու գաղտնիքը 🫧🐟",
            text: "Ձկները շնչում են ժիլխայթերի միջոցով՝ ջրից թթվածին վերցնելով։ Սա նրանց թույլ է տալիս ապրել խոր ջրերում, որտեղ մարդը չէր կարող գոյատևել։",
            image: `${import.meta.env.BASE_URL}Fish2.jpg`,
        },
        {
            id: 3,
            title: "Ձկների գույների և ձևերի կախարդանքը 🎨✨",
            text: "Ձկների փայլուն գույները և նախշերը ոչ միայն գեղեցիկ են, այլև օգնում են քողարկվել թշնամիներից կամ գրավել զուգընկերոջ ուշադրությունը։",
            image: `${import.meta.env.BASE_URL}Fish3.jpg`,
        },
        {
            id: 4,
            title: "Ձկների դերակատարությունը բնության մեջ 🌍🐡",
            text: "Ձկները պահպանում են էկոհամակարգերի հավասարակշռությունը՝ դառնալով սննդային շղթայի կարևոր օղակ։ Առանց նրանց, ջրային աշխարհը չէր գոյատևի։",
            image: `${import.meta.env.BASE_URL}Fish4.jpg`,
        },
        {
            id: 5,
            title: "Ակվարիումի խաղաղ մթնոլորտը 💧🐠",
            text: "Տանը ակվարիում ունենալը ոչ միայն գեղեցիկ է, այլև հանգստացնող․ ձկների շարժումները օգնում են նվազեցնել սթրեսը և բարելավել տրամադրությունը։",
            image: `${import.meta.env.BASE_URL}Fish5.jpg`,
        },
    ];

    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    const goToSlide = (index) => setCurrent(index);

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [current]);

    return (
        <div className="relative w-full h-screen overflow-hidden border bg-black">
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                    width: `${slides.length * 100}%`,
                    transform: `translateX(-${current * (100 / slides.length)}%)`,
                }}
            >
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className="w-full flex-shrink-0 h-screen relative"
                        style={{ width: `${100 / slides.length}%` }}
                    >
                        <img src={slide.image} alt={slide.title} className="absolute w-full h-full object-cover brightness-75" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
                            <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg">{slide.title}</h2>
                            <p className="text-lg md:text-xl mt-4 max-w-2xl drop-shadow-md">{slide.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-5 top-1/2 -translate-y-1/2 cursor-pointer text-white bg-white/20 hover:bg-white/40 backdrop-blur-md border border-white/30 w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold transition-all select-none"
            >
                ‹
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer text-white bg-white/20 hover:bg-white/40 backdrop-blur-md border border-white/30 w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold transition-all select-none"
            >
                ›
            </button>

            <div className="absolute bottom-6 w-full flex justify-center gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer transition-all ${index === current ? "bg-white" : "bg-white/50 hover:bg-white/80"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}