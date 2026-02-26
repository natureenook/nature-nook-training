import React, { useState, useEffect } from "react";

export default function Bird() {
    const slides = [
        {
            id: 1,
            title: "Թռչունների կախարդական ծագումը 🦖➡️🕊️",
            text: "Գիտե՞ս, որ թռչունները սերում են դինոզավրերից։ Նրանց նախնիներն ունեցել են թե՛ ատամներ, թե՛ պոչ՝ նախքան ժամանակակից փետուրավոր տեսքը ստանալը։",
            image: `${import.meta.env.BASE_URL}Bird1.jpg`,
        },
        {
            id: 2,
            title: "Թռչելու հրաշքը ✈️🐦",
            text: "Թռչունները թռչում են շնորհիվ թեթև կմախքի և հզոր թևերի մկանների։ Նրանց փետուրները ձևավորված են այնպես, որ հոսող օդը ստեղծի վերելք։",
            image: `${import.meta.env.BASE_URL}Bird2.jpg`,
        },
        {
            id: 3,
            title: "Գույների և ձայների աշխարհը 🎨🎶",
            text: "Թռչունների գույներն ու երգերը հաղորդակցման ձևեր են․ գունավոր փետուրները գրավում են զուգընկերոջը, իսկ երգը՝ սահմանում տարածքը։",
            image: `${import.meta.env.BASE_URL}Bird3.jpg`,
        },
        {
            id: 4,
            title: "Թռչունների օգտակար դերը բնության մեջ 🌍🐤",
            text: "Թռչունները օգնում են պահպանել բնության հավասարակշռությունը՝ տարածելով սերմեր և վերահսկելով միջատների քանակը։",
            image: `${import.meta.env.BASE_URL}Bird4.jpg`,
        },
        {
            id: 5,
            title: "Թռչունների աշխարհի բազմազանությունը 🌈🕊️",
            text: "Աշխարհում կա ավելի քան 10,000 տեսակ թռչուն՝ սկսած փոքրիկ հումինգբերդից մինչև հսկա ոստրիճը։ Յուրաքանչյուրն ունի իր յուրահատուկ տեղը բնության մեջ։",
            image: `${import.meta.env.BASE_URL}Bird5.jpg`,
        },
    ];

    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => setCurrent(index);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [current]); // թողնում եմ նույնը ինչպես քեզ մոտ էր

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
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="absolute w-full h-full object-cover brightness-75"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
                            <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                                {slide.title}
                            </h2>
                            <p className="text-lg md:text-xl mt-4 max-w-2xl drop-shadow-md">
                                {slide.text}
                            </p>
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