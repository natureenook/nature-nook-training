// CardDog.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const CanvasCard = ({ img, title, details, link }) => {
    const navigate = useNavigate();

    const safeTitle = String(title ?? "");
    const words = safeTitle.trim().split(/\s+/);

    return (
        <div
            className="
        relative w-full max-w-[500px]
        h-[280px] sm:h-[320px]
        rounded-3xl overflow-hidden
        shadow-xl
        transition-all duration-500
        hover:scale-[1.02]
        active:scale-95
      "
        >
            <img
                src={img}
                alt={safeTitle}
                className="absolute inset-0 w-full h-full object-cover object-right"
            />

            <div className="absolute inset-0 bg-slate-900/55" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/35 to-transparent" />

            <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-10">
                <div>
                    <h2 className="text-white font-extrabold leading-none tracking-tight">
                        <span className="block text-3xl sm:text-5xl">{words[0] || ""}</span>
                        <span className="block text-3xl sm:text-5xl mt-2">
                            {words.slice(1).join(" ")}
                        </span>
                    </h2>

                    {details ? (
                        <p className="mt-4 text-white/85 text-sm sm:text-base max-w-md">
                            {details}
                        </p>
                    ) : null}
                </div>

                <button
                    type="button"
                    onClick={() => navigate(link)}
                    className="
            inline-flex items-center justify-center
            rounded-2xl
            bg-white/20 hover:bg-white/30
            border border-white/25
            backdrop-blur-md
            px-6 py-3
            text-white font-semibold
            transition
          "
                >
                    Անցնել թեստը
                </button>
            </div>
        </div>
    );
};

const CardDog = () => {
    const cards = [
        {
            img: `${import.meta.env.BASE_URL}quizz_dog.png`,
            title: "Հարցեր Quiz",
            details: "Ստուգենք մեր գիտելիքները",
            link: "/DogQuiz",
        },
    ];

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gradient-to-br from-gray-50 via-orange-50 to-amber-100">
            <div className="w-full flex justify-center">
                {cards.map((card, i) => (
                    <CanvasCard key={i} {...card} />
                ))}
            </div>
        </div>
    );
};

export default CardDog;