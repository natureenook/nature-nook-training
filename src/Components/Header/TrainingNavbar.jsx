import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function TrainingNavbar({ fixed = true }) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const toggleMenu = () => setIsMenuOpen((v) => !v);

    const Header = (
        <header className="relative z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-white/70 backdrop-blur-md shadow-lg rounded-b-2xl">
            <Link to={"/"}>
                <h1 className="text-xl md:text-2xl font-bold text-[#0b241f] tracking-wide">
                    Nature Nook <span className="text-[#5d8c73]">Training</span>
                </h1>
            </Link>

            <nav className="hidden lg:flex gap-8 text-lg font-medium">
                <Link to="/DogInfo" className="hover:text-[#5d8c73] transition">Շներ</Link>
                <Link to="/CatInfo" className="hover:text-[#5d8c73] transition">Կատուներ</Link>
                <Link to="/BirdsInfo" className="hover:text-[#5d8c73] transition">Թռչուններ</Link>
                <Link to="/FishInfo" className="hover:text-[#5d8c73] transition">Ձկներ</Link>
                <Link to="/PlantsInfo" className="hover:text-[#5d8c73] transition">Բույսեր</Link>
            </nav>

            <button
                className="lg:hidden text-[#0b241f] focus:outline-none z-50 relative"
                onClick={toggleMenu}
                aria-label="Menu"
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>
        </header>
    );

    return (
        <>
            {fixed ? (
                <div className="fixed top-0 left-0 right-0 z-50">{Header}</div>
            ) : (
                Header
            )}

            {/* Mobile overlay */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, x: "100%" }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: "100%" }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center lg:hidden"
                    onClick={toggleMenu}
                >
                    <button
                        className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 transition"
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleMenu();
                        }}
                        aria-label="Close"
                    >
                        <svg className="w-8 h-8 text-[#0b241f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <nav
                        className="flex flex-col gap-8 text-2xl font-semibold text-[#0b241f] text-center"
                        onClick={(e) => e.stopPropagation()}
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
        </>
    );
}