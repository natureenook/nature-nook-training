import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    Bird,
    Fish,
    Leaf,
    Menu,
    PawPrint,
    Sprout,
    X,
} from "lucide-react";

const navLinks = [
    { title: "Շներ", link: "/DogInfo", icon: PawPrint },
    { title: "Կատուներ", link: "/CatInfo", icon: PawPrint },
    { title: "Թռչուններ", link: "/BirdsInfo", icon: Bird },
    { title: "Ձկներ", link: "/FishInfo", icon: Fish },
    { title: "Բույսեր", link: "/PlantsInfo", icon: Sprout },
];

export default function TrainingNavbar({ fixed = true }) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => setIsMenuOpen((value) => !value);

    const Header = (
        <header className="relative z-50 mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between rounded-[28px] border border-emerald-100 bg-white/85 px-4 py-3 shadow-[0_18px_60px_rgba(16,32,24,0.075)] backdrop-blur-2xl sm:px-5">
                <Link to="/" className="group flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 transition group-hover:scale-105">
                        <Leaf size={22} className="text-emerald-700" />
                    </div>

                    <div>
                        <h1 className="text-lg font-black tracking-[-0.03em] text-[#102018] sm:text-xl">
                            Nature Nook
                        </h1>
                        <p className="text-xs font-bold text-emerald-700">
                            Ուսուցողական բաժին
                        </p>
                    </div>
                </Link>

                <nav className="hidden items-center gap-2 lg:flex">
                    {navLinks.map((item) => (
                        <Link
                            key={item.title}
                            to={item.link}
                            className="rounded-full px-4 py-2 text-sm font-black text-[#607269] transition hover:bg-emerald-50 hover:text-emerald-800"
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>

                <button
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-100 bg-[#f6fbf7] text-[#102018] transition hover:bg-emerald-50 lg:hidden"
                    onClick={toggleMenu}
                    aria-label="Բացել մենյուն"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </header>
    );

    return (
        <>
            {fixed ? (
                <div className="fixed left-0 right-0 top-0 z-50">
                    {Header}
                </div>
            ) : (
                Header
            )}

            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, x: "100%" }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: "100%" }}
                    transition={{ type: "spring", stiffness: 120, damping: 22 }}
                    className="fixed inset-0 z-[80] bg-[#f6fbf7]/95 px-5 backdrop-blur-2xl lg:hidden"
                    onClick={toggleMenu}
                >
                    <div className="mx-auto flex h-full max-w-md flex-col justify-center">
                        <button
                            className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-100 bg-white text-[#102018] shadow-[0_14px_40px_rgba(16,32,24,0.08)]"
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleMenu();
                            }}
                            aria-label="Փակել մենյուն"
                        >
                            <X size={25} />
                        </button>

                        <div
                            className="rounded-[36px] border border-emerald-100 bg-white/90 p-6 shadow-[0_24px_90px_rgba(16,32,24,0.1)]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="mb-7 text-center">
                                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-50">
                                    <Leaf size={26} className="text-emerald-700" />
                                </div>

                                <h2 className="text-2xl font-black tracking-[-0.035em] text-[#102018]">
                                    Ընտրիր բաժինը
                                </h2>

                                <p className="mt-2 text-sm text-[#607269]">
                                    Անցիր քեզ հետաքրքրող ուսուցողական նյութերին
                                </p>
                            </div>

                            <nav className="grid gap-3">
                                {navLinks.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <Link
                                            key={item.title}
                                            to={item.link}
                                            onClick={toggleMenu}
                                            className="group flex items-center justify-between rounded-[24px] border border-emerald-100 bg-[#f6fbf7] p-4 transition hover:bg-emerald-50"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white">
                                                    <Icon size={20} className="text-emerald-700" />
                                                </div>

                                                <span className="font-black text-[#102018]">
                                                    {item.title}
                                                </span>
                                            </div>

                                            <ArrowRight
                                                size={18}
                                                className="text-[#9aaba2] transition group-hover:translate-x-1 group-hover:text-emerald-700"
                                            />
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    );
}