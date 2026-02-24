import React from "react";
import { Link } from "react-router-dom";

const CanvasCard = ({ img, title, details, reverse, link }) => {
    return (
        <Link
            to={link}
            className={`relative block w-[90%] m-[5%] max-w-[400px] aspect-square p-5 text-inherit no-underline group`}
        >
            <div
                className={`absolute top-10 ${reverse ? "left-[-40px]" : "left-[-40px]"
                    } w-full h-full z-0 transform -rotate-[10deg] -skew-[10deg] group-hover:-rotate-[14deg] group-hover:-skew-[14deg] group-hover:scale-[0.96] transition-all duration-300`}
            >
                <svg className="w-full h-full">
                    <defs>
                        <linearGradient id={`grad-${title}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgb(253,137,68)" />
                            <stop offset="100%" stopColor="rgb(153,75,23)" />
                        </linearGradient>
                    </defs>
                    <rect
                        fill="none"
                        stroke={`url(#grad-${title})`}
                        strokeWidth="4"
                        className="w-full h-full stroke-dasharray-[2000] stroke-dashoffset-[2000] group-hover:animate-draw-line"
                    />
                </svg>
            </div>

            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white overflow-hidden transform -rotate-[10deg] -skew-[10deg] transition-all duration-300 group-hover:-rotate-[14deg] group-hover:-skew-[14deg] group-hover:scale-[0.96]">
                <img
                    src={img}
                    alt={title}
                    className="w-[85%] h-[85%] object-contain opacity-30 scale-[0.9] transition-all duration-700 group-hover:opacity-100 group-hover:scale-100"
                />
            </div>

            <div
                className={`absolute inset-0 flex flex-col justify-center items-center text-center z-20 text-yellow-400`}
            >
                <strong className="block text-4xl md:text-[62px] text-black transform scale-50 opacity-0 transition-all duration-[750ms] ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] delay-[100ms] group-hover:scale-100 group-hover:opacity-100">
                    {title.split(" ")[0]}
                </strong>
                <strong className="block text-4xl md:text-[62px] text-black transform scale-50 opacity-0 transition-all duration-[750ms] ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] delay-[200ms] group-hover:scale-100 group-hover:opacity-100">
                    {title.split(" ")[1] || ""}
                </strong>
                <span className="block text-md text-gray-700 transform scale-50 opacity-0 transition-all duration-[750ms] ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] delay-[300ms] group-hover:scale-100 group-hover:opacity-100">
                    {details}
                </span>
            </div>
        </Link>
    );
};

const style = `
@keyframes draw-line {
  from { stroke-dashoffset: 2000; }
  to { stroke-dashoffset: 0; }
}
.animate-draw-line {
  animation: draw-line 5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}
`;

const CardDog = () => {
    const cards = [
        {
            img: "/CardDog.jpg",
            title: "Հավատարիմ Ընկեր",
            details: "Սովորենք Շների Ճիշտ խնամքի մասին",
            reverse: true,
            link: "/CatInfo",
        },
        {
            img: "/CardDog2.jpg",
            title: " Հարցեր ",
            details: "Ստուգենք Մեր Գիտելիքները",
            reverse: false,
            link: "/CatQuiz",
        },
    ];

    return (
        <>
            <style>{style}</style>
            <div className="flex justify-center items-center min-h-screen bg-gray-100 gap-10 flex-wrap max-[1250px]:flex-col">
                {cards.map((card, index) => (
                    <CanvasCard key={index} {...card} />
                ))}
            </div>
        </>
    );
};

export default CardDog;
