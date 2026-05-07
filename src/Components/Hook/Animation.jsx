import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Leaf, PawPrint, Sparkles } from "lucide-react";

export default function Animation({ onFinish }) {
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    useEffect(() => {
        if (!loading) return;

        let percent = 0;

        const interval = setInterval(() => {
            percent += 2;
            setProgress(percent);

            if (percent >= 100) {
                clearInterval(interval);

                setTimeout(() => {
                    onFinish();
                }, 420);
            }
        }, 65);

        return () => clearInterval(interval);
    }, [loading, onFinish]);

    return (
        <div className="fixed inset-0 z-[9999] overflow-hidden">
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden px-4 text-center font-[Montserrat] text-white">
                <img
                    src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=1470&q=80"
                    alt="Nature Background"
                    className="absolute inset-0 h-full w-full scale-105 object-cover"
                />

                <div className="absolute inset-0 bg-black/55" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.22),transparent_38%),linear-gradient(180deg,rgba(0,0,0,0.15),rgba(0,0,0,0.72))]" />

                <motion.div
                    className="absolute left-8 top-8 hidden items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-bold text-white/85 backdrop-blur-xl sm:flex"
                    initial={{ opacity: 0, y: -18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <Leaf size={18} className="text-green-300" />
                    Nature Nook Training
                </motion.div>

                <motion.div
                    className="relative z-10 w-full max-w-4xl rounded-[34px] border border-white/15 bg-white/[0.08] px-5 py-8 shadow-[0_30px_100px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:px-8 sm:py-10 md:px-12 md:py-12"
                    initial={{ opacity: 0, y: 40, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                >
                    <motion.div
                        className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-[24px] border border-white/15 bg-green-400/15 shadow-[0_0_45px_rgba(34,197,94,0.22)] backdrop-blur-xl"
                        initial={{ opacity: 0, scale: 0.75, rotate: -12 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
                    >
                        <Leaf size={31} className="text-green-300" />
                    </motion.div>

                    <motion.div
                        className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-green-100"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.22, duration: 0.6 }}
                    >
                        <Sparkles size={16} className="text-green-300" />
                        Ուսուցողական բաժին
                    </motion.div>

                    <motion.h1
                        className="mx-auto max-w-3xl text-4xl font-black leading-tight tracking-[-0.04em] text-white drop-shadow-lg sm:text-5xl md:text-6xl"
                        initial={{ opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.28, duration: 0.75, ease: "easeOut" }}
                    >
                        Nature Nook{" "}
                        <span className="bg-gradient-to-r from-green-300 via-lime-200 to-emerald-300 bg-clip-text text-transparent">
                            Training
                        </span>
                    </motion.h1>

                    <motion.p
                        className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/82 drop-shadow-md sm:text-lg md:text-xl"
                        initial={{ opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.36, duration: 0.75, ease: "easeOut" }}
                    >
                        Այս training-ի ընթացքում կսովորենք կենդանիների, շների, կատուների,
                        թռչունների, բույսերի և ձկների մասին կարևոր նրբությունները․ ինչպես
                        ճիշտ խնամել նրանց, հասկանալ բնության լեզուն և լինել նրա մաս։
                    </motion.p>

                    <motion.blockquote
                        className="mx-auto mt-8 max-w-3xl rounded-[24px] border border-green-300/25 bg-green-400/10 px-5 py-4 text-left text-base italic leading-7 text-green-100 shadow-[0_18px_45px_rgba(0,0,0,0.16)] backdrop-blur-xl sm:text-lg"
                        initial={{ opacity: 0, x: -18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.46, duration: 0.75 }}
                    >
                        «Nature Nook Training — այն տեղն է, որտեղ մարդն ու կենդանին
                        սովորում են խոսել նույն լեզվով»։
                    </motion.blockquote>

                    <motion.div
                        className="mt-9 flex flex-wrap justify-center gap-3 text-sm font-bold text-white/75"
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.55, duration: 0.7 }}
                    >
                        {["Շներ", "Կատուներ", "Թռչուններ", "Ձկներ", "Բույսեր"].map(
                            (item) => (
                                <span
                                    key={item}
                                    className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 backdrop-blur-xl"
                                >
                                    <PawPrint size={15} className="text-green-300" />
                                    {item}
                                </span>
                            )
                        )}
                    </motion.div>

                    <div className="mt-10">
                        <AnimatePresence mode="wait">
                            {!loading ? (
                                <motion.button
                                    key="button"
                                    onClick={() => setLoading(true)}
                                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-green-500 px-10 py-4 text-lg font-black text-white shadow-[0_18px_55px_rgba(34,197,94,0.3)] transition duration-300 hover:-translate-y-1 hover:bg-green-400"
                                    initial={{ opacity: 0, y: 14 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -14 }}
                                    transition={{ duration: 0.35 }}
                                >
                                    Սկսել սովորել
                                    <ArrowRight
                                        size={20}
                                        className="transition group-hover:translate-x-1"
                                    />
                                </motion.button>
                            ) : (
                                <motion.div
                                    key="progress"
                                    className="mx-auto w-full max-w-md"
                                    initial={{ opacity: 0, y: 14 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -14 }}
                                    transition={{ duration: 0.35 }}
                                >
                                    <div className="mb-3 flex items-center justify-between text-sm font-bold text-white/85">
                                        <span>Պատրաստում ենք դասերը</span>
                                        <span className="text-green-200">{progress}%</span>
                                    </div>

                                    <div className="h-5 overflow-hidden rounded-full border border-white/15 bg-white/15 shadow-lg backdrop-blur-xl">
                                        <motion.div
                                            className="flex h-full items-center justify-center rounded-full bg-gradient-to-r from-green-500 via-lime-400 to-emerald-400 text-xs font-black text-white"
                                            initial={{ width: "0%" }}
                                            animate={{ width: `${progress}%` }}
                                            transition={{ duration: 0.12, ease: "linear" }}
                                        />
                                    </div>

                                    <p className="mt-3 text-sm font-semibold text-white/65">
                                        Մի քանի վայրկյանից կբացվի ուսուցողական գլխավոր էջը։
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}