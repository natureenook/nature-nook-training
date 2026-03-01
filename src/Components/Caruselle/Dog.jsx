// Dog.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Dog() {
    const slides = [
        { id: 1, title: "Շների աշխարհը 🐶", text: "Բարի, հավատարիմ և ուրախ ընկերներ՝ յուրաքանչյուր տան համար։", image: `${import.meta.env.BASE_URL}Dog1.jpg`,
    link:"/DogInfo"},
        { id: 2, title: "Շների խնամք և սեր 💖", text: "Ճիշտ խնամքով՝ քո շունը կլինի երջանիկ և առողջ։", image: `${import.meta.env.BASE_URL}Dog2.jpg`,link:"/DogInfo" },
        { id: 3, title: "Խաղալիքներ և զբոսանքներ 🎾", text: "Ամեն օր փոքրիկ արկածներ՝ քո չորսաթաթ ընկերոջ հետ։", image: `${import.meta.env.BASE_URL}Dog3.jpg`,link:"/DogInfo" },
        { id: 4, title: "Շների տարբեր ցեղեր 🐾", text: "Յուրաքանչյուր ցեղ ունի իր բնավորությունը և յուրահատկությունը։", image: `${import.meta.env.BASE_URL}Dog4.jpg,link:"/DogInfo"` },
        { id: 5, title: "Շների սնունդ և առողջություն 🦴", text: "Լավ սնունդ՝ առողջ մարմնի և փայլուն բրդի գաղտնիքը։", image: `${import.meta.env.BASE_URL}Dog5.jpg`,linj:"/DogInfo" },
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
                    <Link
                        key={slide.id}
                        to={slide.link}
                        className="w-full flex-shrink-0 h-screen relative block"
                        style={{ width: `${100 / slides.length}%` }}
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="absolute w-full h-full object-cover brightness-75"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
                            <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg">{slide.title}</h2>
                            <p className="text-lg md:text-xl mt-4 max-w-2xl drop-shadow-md">{slide.text}</p>
                        </div>
                    </Link>
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