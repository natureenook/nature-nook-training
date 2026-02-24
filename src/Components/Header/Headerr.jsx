import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function TrainingHeader() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
                <header className="relative z-10 flex items-center justify-between px-6 md:px-10 py-6 bg-white/70 backdrop-blur-md shadow-lg rounded-b-2xl">
                    <Link to={"/"}>
                        <h1 className="text-2xl md:text-3xl font-bold text-[#0b241f] tracking-wide">
                            Nature Nook <span className="text-[#5d8c73]">Training</span>
                        </h1>
                    </Link>

                    {/* Desktop Navigation */}
                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex gap-8 text-lg font-medium">
                        <Link to="/DogInfo" className="hover:text-[#5d8c73] transition">Շներ</Link>
                        <Link to="/CatInfo" className="hover:text-[#5d8c73] transition">Կատուներ</Link>
                        <Link to="/BirdsInfo" className="hover:text-[#5d8c73] transition">Թռչուններ</Link>
                        <Link to="/FishInfo" className="hover:text-[#5d8c73] transition">Ձկներ</Link>
                        <Link to="/PlantsInfo" className="hover:text-[#5d8c73] transition">Բույսեր</Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-[#0b241f] focus:outline-none z-50 relative"
                        onClick={toggleMenu}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </header>

                {/* Mobile Navigation Overlay */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center lg:hidden"
                        onClick={toggleMenu} // Close on backdrop click
                    >
                        <button
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 transition"
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleMenu();
                            }}
                        >
                            <svg className="w-8 h-8 text-[#0b241f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <nav
                            className="flex flex-col gap-8 text-2xl font-semibold text-[#0b241f] text-center"
                            onClick={(e) => e.stopPropagation()} // Prevent click from bubbling to backdrop
                        >
                            <Link to="/DogInfo" className="hover:text-[#5d8c73] transition transform hover:scale-110" onClick={toggleMenu}>Շներ</Link>
                            <Link to="/CatInfo" className="hover:text-[#5d8c73] transition transform hover:scale-110" onClick={toggleMenu}>Կատուներ</Link>
                            <Link to="/BirdsInfo" className="hover:text-[#5d8c73] transition transform hover:scale-110" onClick={toggleMenu}>Թռչուններ</Link>
                            <Link to="/FishInfo" className="hover:text-[#5d8c73] transition transform hover:scale-110" onClick={toggleMenu}>Ձկներ</Link>
                            <Link to="/PlantsInfo" className="hover:text-[#5d8c73] transition transform hover:scale-110" onClick={toggleMenu}>Բույսեր</Link>
                        </nav>

                        <div className="absolute bottom-10 text-sm text-[#5d8c73]/70">
                            Nature Nook Training 🌿
                        </div>
                    </motion.div>
                )}
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 md:py-24 gap-10 md:gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="md:w-1/2 text-center md:text-left space-y-5"
                >
                    <h2 className="text-3xl md:text-6xl font-bold leading-tight text-[#0b241f]">
                        Բարի գալուստ <br /><span className="text-[#5d8c73] ">Nature Nook Training🌿</span>
                    </h2>
                    <p className="text-base md:text-lg text-[#1b3d32]/90 leading-relaxed">
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
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-white/80 shadow-2xl overflow-hidden flex items-center justify-center">
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
