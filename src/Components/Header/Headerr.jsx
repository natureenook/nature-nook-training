import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function TrainingHeader() {
    return (
        <div className="relative min-h-screen bg-gradient-to-br from-[#5d8c73] via-[#a1d6b2] to-[#e7f4ec] overflow-hidden text-[#0b241f] font-[Poppins]">

            <div className="absolute inset-0 overflow-hidden z-0">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-[#5d8c73]/30 w-8 h-8 rounded-full blur-md"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            opacity: 0,
                            scale: 0.5,
                        }}
                        animate={{
                            y: [-50, window.innerHeight + 50],
                            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
                            opacity: [0.5, 1, 0.3],
                            rotate: [0, 360],
                            scale: [0.6, 1, 0.8],
                        }}
                        transition={{
                            duration: 10 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>
            <div>
                <header className="relative z-10 flex items-center justify-between px-10 py-6 bg-white/70 backdrop-blur-md shadow-lg rounded-b-2xl">
                    <Link to={"/"}> <h1 className="text-3xl font-bold text-[#0b241f] tracking-wide">
                        Nature Nook <span className="text-[#5d8c73]">Training</span>
                    </h1>
                    </Link>

                    <nav className="hidden md:flex gap-8 text-lg font-medium">
                        <Link to="/DogInfo" className="hover:text-[#5d8c73] transition">Շներ</Link>
                        <Link to="/CatInfo" className="hover:text-[#5d8c73] transition">Կատուներ</Link>
                        <Link to="/BirdsInfo" className="hover:text-[#5d8c73] transition">Թռչուններ</Link>
                        <Link to="/FishInfo" className="hover:text-[#5d8c73] transition">Ձկներ</Link>
                        <Link to="/PlantsInfo" className="hover:text-[#5d8c73] transition">Բույսեր</Link>
                    </nav>
                </header>
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-24 gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="md:w-1/2 text-center md:text-left space-y-5"
                >
                    <h2 className="text-4xl md:text-6xl font-bold leading-tight text-[#0b241f]">
                        Բարի գալուստ <br /><span className="text-[#5d8c73] ">Nature Nook Training🌿</span>
                    </h2>
                    <p className="text-lg text-[#1b3d32]/90 leading-relaxed">
                        Սովորիր կենդանիների, թռչունների, ձկների և բույսերի մասին ամենակարևոր տեղեկությունները՝
                        պրոֆեսիոնալ մոտեցմամբ և սիրով դեպի բնությունը։
                    </p>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="md:w-1/2 flex justify-center"
                >
                    <div className="relative w-80 h-80 rounded-full bg-white/80 shadow-2xl overflow-hidden flex items-center justify-center">
                        <img
                            src="public/logo.png"
                            alt="Nature Nook"
                            className="w-[95%] h-[95%] object-cover rounded-full"
                        />
                        <div className="absolute inset-0 bg-[#5d8c73]/20 animate-pulse rounded-full"></div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
