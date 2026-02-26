import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Dog from "../Caruselle/Dog";
import Cat from "../Caruselle/Cat";
import Fish from "../Caruselle/Fish";
import Bird from "../Caruselle/Bird";
import Plant from "../Caruselle/Plant";

import CardDog from "../Card/CardDog";
import CardCat from "../Card/CardCat";
import CardFish from "../Card/CardFish";
import CardPlants from "../Card/CardPlants";
import CardBird from "../Card/CardBird.jsx";

import { AnimatedSection } from "../Hook/AnimatedSection.jsx";
import TrainingHeader from "../Header/Headerr.jsx";

export default function Main() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(() => {
    const saved = localStorage.getItem("hasSeenPreloader");
    return saved === "true";
  });

  useEffect(() => {
    if (!loading) return;

    let percent = 0;
    const interval = setInterval(() => {
      percent += 2;
      setProgress(percent);

      if (percent >= 100) {
        clearInterval(interval);
        localStorage.setItem("hasSeenPreloader", "true");
        setTimeout(() => setShowContent(true), 500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [loading]);

  if (!showContent) {
    return (
      <div className="relative h-screen flex flex-col justify-center items-center text-center text-white font-[Montserrat] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=1470&q=80"
          alt="Nature Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          className="relative z-10 px-6 max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-snug drop-shadow-lg">
            🌿 Nature Nook Training
          </h1>

          <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-8 drop-shadow-md">
            Այս training-ի ընթացքում կսովորենք կենդանիների, շների, թռչունների, բույսերի և ձկների մասին
            ամենակարևոր նրբությունները, ինչպես ճիշտ խնամել նրանց, հասկանալ բնության լեզուն և լինել նրա մաս։
            <br />
            Եթե պատրաստ եք՝ սկսենք 🐾
          </p>

          <motion.blockquote
            className="italic text-green-200 border-l-4 border-green-400 pl-4 text-lg md:text-xl mb-10 drop-shadow-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            «Nature Nook Training — այն տեղն է, որտեղ մարդն ու կենդանին սովորում են խոսել նույն լեզվով»։
          </motion.blockquote>

          {!loading ? (
            <button
              onClick={() => setLoading(true)}
              className="px-10 py-4 bg-green-500 hover:bg-green-400 rounded-full text-lg font-semibold shadow-lg transition cursor-pointer"
            >
              Սկսել սովորել
            </button>
          ) : (
            <div className="w-80 bg-white/20 rounded-full h-6 mx-auto mt-4 relative overflow-hidden shadow-lg">
              <motion.div
                className="absolute top-0 left-0 h-full bg-green-500 text-white text-sm flex items-center justify-center font-semibold"
                style={{ width: `${progress}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              >
                {progress}%
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-[#f0f7f4] text-[#2e2e2e] font-[Montserrat]">
      <TrainingHeader />

      <div className="space-y-12 md:space-y-20 pb-14">
        <h1 className="flex items-center justify-center text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-400 to-orange-500 animate-gradient-move drop-shadow-lg tracking-wide md:tracking-widest uppercase text-center px-4">
          Շների Աշխարհ 🐾
        </h1>
        <AnimatedSection delay={100}><Dog /></AnimatedSection>

        <h1 className="flex items-center justify-center text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-400 to-orange-500 animate-gradient-move drop-shadow-lg tracking-wide md:tracking-widest uppercase text-center px-4">
          Սովորենք Միասին 🐾
        </h1>
        <AnimatedSection delay={200}><CardDog /></AnimatedSection>

        <h1 className="flex items-center justify-center text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-800 via-orange-700 to-yellow-600 animate-cat-gradient drop-shadow-xl tracking-wide md:tracking-widest uppercase text-center px-4">
          Կատուների Աշխարհ 🐾
        </h1>
        <AnimatedSection delay={200}><Cat /></AnimatedSection>

        <h1 className="flex items-center justify-center text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-800 via-orange-700 to-yellow-600 animate-cat-gradient drop-shadow-xl tracking-wide md:tracking-widest uppercase text-center px-4">
          Սովորենք Միասին 🐾
        </h1>
        <AnimatedSection delay={300}><CardCat /></AnimatedSection>

        <h1 className="flex items-center justify-center text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-400 animate-fish-gradient drop-shadow-xl tracking-wide md:tracking-widest uppercase text-center px-4">
          Ձկների Աշխարհ 🌊
        </h1>
        <AnimatedSection delay={200}><Fish /></AnimatedSection>

        <h1 className="flex items-center justify-center text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-400 animate-fish-gradient drop-shadow-xl tracking-wide md:tracking-widest uppercase text-center px-4">
          Սովորենք Միասին 🌊
        </h1>
        <AnimatedSection delay={200}><CardFish /></AnimatedSection>

        <h1 className="flex items-center justify-center text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-yellow-300 to-amber-500 animate-bird-gradient drop-shadow-xl tracking-wide md:tracking-widest uppercase text-center px-4">
          Թռչունների Աշխարհ 🕊️
        </h1>
        <AnimatedSection delay={300}><Bird /></AnimatedSection>

        <h1 className="flex items-center justify-center text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-yellow-300 to-amber-500 animate-bird-gradient drop-shadow-xl tracking-wide md:tracking-widest uppercase text-center px-4">
          Սովորենք Միասին 🕊️
        </h1>
        <AnimatedSection delay={400}><CardBird /></AnimatedSection>

        <h1 className="flex items-center justify-center text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-500 to-lime-400 animate-plant-gradient drop-shadow-xl tracking-wide md:tracking-widest uppercase text-center px-4">
          Բույսերի Աշխարհ 🌿
        </h1>
        <AnimatedSection delay={600}><Plant /></AnimatedSection>

        <h1 className="flex items-center justify-center text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-500 to-lime-400 animate-plant-gradient drop-shadow-xl tracking-wide md:tracking-widest uppercase text-center px-4">
          Սովորենք Միասին 🌿
        </h1>
        <AnimatedSection delay={700}><CardPlants /></AnimatedSection>
      </div>
    </div>
  );
}