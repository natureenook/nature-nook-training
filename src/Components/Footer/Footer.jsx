import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative overflow-hidden">
            {/* background */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-emerald-700" />
            <div className="absolute inset-0 opacity-25">
                <div className="absolute -top-24 -left-24 h-56 w-56 rounded-full bg-white blur-3xl" />
                <div className="absolute -bottom-28 -right-24 h-64 w-64 rounded-full bg-white blur-3xl" />
            </div>
            <div className="absolute inset-0 bg-black/15" />

            {/* content */}
            <div className="relative mx-auto max-w-6xl px-6 py-7">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    <div className="text-center md:text-left">
                        <p className="text-lg md:text-xl font-bold tracking-tight text-white">
                            Nature Nook <span className="text-emerald-200">Training</span>
                        </p>
                        <p className="mt-1 text-sm text-white/80 italic">
                            Բնությունից ծնված հավատարմություն և խնամք 🌿
                        </p>
                    </div>

                    <nav className="flex flex-wrap items-center justify-center md:justify-end gap-x-7 gap-y-2 text-sm">
                        <Link to="/DogInfo" className="text-white/80 hover:text-white transition">Շներ</Link>
                        <Link to="/CatInfo" className="text-white/80 hover:text-white transition">Կատուներ</Link>
                        <Link to="/BirdsInfo" className="text-white/80 hover:text-white transition">Թռչուններ</Link>
                        <Link to="/FishInfo" className="text-white/80 hover:text-white transition">Ձկներ</Link>
                        <Link to="/PlantsInfo" className="text-white/80 hover:text-white transition">Բույսեր</Link>
                    </nav>
                </div>

                <div className="mt-5 h-px w-full bg-white/15" />

                <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
                    <p className="text-sm text-white/75">
                        © {year} <span className="font-semibold text-white">Nature Nook</span>. Բոլոր իրավունքները պաշտպանված են։
                    </p>

                    <span className="inline-flex items-center justify-center rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                        Made with 🌿
                    </span>
                </div>
            </div>
        </footer>
    );
}