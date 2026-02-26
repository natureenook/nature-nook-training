import React from "react";
import { Link } from "react-router-dom";

const CanvasCard = ({ img, title, details, link }) => {
    const words = title.trim().split(/\s+/);

    return (
        <Link
            to={link}
            className="
        group relative
        w-full max-w-[380px]
        aspect-[4/5]
        rounded-3xl
        overflow-hidden
        cursor-pointer
        transition-all duration-500
        hover:scale-[1.03]
        active:scale-95
      "
        >
            {/* BACK GLOW (fish theme) */}
            <div
                className="
          absolute inset-0
          bg-gradient-to-br
          from-sky-400/35
          via-blue-500/25
          to-cyan-900/35
          blur-2xl
          opacity-0
          group-hover:opacity-100
          transition duration-700
        "
            />

            {/* CARD BODY */}
            <div
                className="
          relative h-full w-full
          bg-white/70
          backdrop-blur-xl
          border border-white/40
          shadow-xl
          rounded-3xl
          flex flex-col
          justify-end
          overflow-hidden
        "
            >
                {/* IMAGE */}
                <img
                    src={img}
                    alt={title}
                    className="
            absolute inset-0
            w-full h-full
            object-cover
            opacity-70
            scale-105
            transition-all duration-700
            group-hover:scale-110
            group-hover:opacity-100
          "
                />

                {/* DARK OVERLAY */}
                <div
                    className="
            absolute inset-0
            bg-gradient-to-t
            from-black/70
            via-black/30
            to-transparent
          "
                />

                {/* CONTENT */}
                <div
                    className="
            relative z-10
            p-6
            text-white
            space-y-2
            translate-y-6
            group-hover:translate-y-0
            transition-all duration-500
          "
                >
                    <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
                        {words[0]} <br /> {words[1] || ""}
                    </h2>

                    <p
                        className="
              text-sm sm:text-base
              opacity-0
              group-hover:opacity-100
              transition duration-500
            "
                    >
                        {details}
                    </p>
                </div>
            </div>
        </Link>
    );
};

const CardFish = () => {
    const cards = [
        {
            img: "/CardDog.jpg",
            title: "Ձկների Աշխարհ",
            details: "Սովորենք ձկների ճիշտ խնամքի մասին 🌊",
            link: "/FishInfo",
        },
        {
            img: "/CardDog2.jpg",
            title: "Հարցեր Quiz",
            details: "Ստուգենք մեր գիտելիքները ✅",
            link: "/FishQuiz",
        },
    ];

    return (
        <div
            className="
        bg-gradient-to-br
        from-sky-50
        via-blue-50
        to-cyan-100
        flex
        justify-center
        items-center
        px-4
        py-10
      "
        >
            <div
                className="
          grid
          gap-8
          w-full
          max-w-6xl
          grid-cols-1
          sm:grid-cols-2
          place-items-center
        "
            >
                {cards.map((card, i) => (
                    <CanvasCard key={i} {...card} />
                ))}
            </div>
        </div>
    );
};

export default CardFish;