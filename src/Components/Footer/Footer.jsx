import React from "react";

export default function Footer() {
    return (
        <footer className="bg-green-700 text-white text-center py-10 px-6 mt-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-greem from-green-700 to-emerald-600 opacity-90" />

            <div className="relative z-10">
                <p className="text-lg md:text-xl font-medium mb-2">
                    © 2025 <span className="font-semibold">Nature Nook</span>
                </p>
                <p className="text-sm text-green-100 italic">
                    Բնությունից ծնված հավատարմություն և խնամք 🌿
                </p>
            </div>
        </footer>
    );
}
