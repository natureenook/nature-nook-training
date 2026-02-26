import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import TrainingHeader from "../Header/Headerr.jsx";
// import Footer from "../Footer/Footer.jsx";

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
import Animation from "../Hook/Animation.jsx";

export default function Main() {
  const [started, setStarted] = useState(
    () => localStorage.getItem("hasStartedTraining") === "true"
  );

  // preloader ժամանակ scroll-ը փակել
  useEffect(() => {
    document.body.style.overflow = started ? "auto" : "hidden";
    return () => (document.body.style.overflow = "auto");
  }, [started]);

  if (!started) {
    return (
      <Animation 
        onFinish={() => {
          localStorage.setItem("hasStartedTraining", "true");
          setStarted(true);
        }}
      />
    );
  }

  return (
    <motion.div
      className="bg-[#f0f7f4] text-[#2e2e2e] font-[Montserrat] min-h-screen"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >

      <div className="space-y-12 md:space-y-20 pb-14">
        <AnimatedSection delay={100}><Dog /></AnimatedSection>
        <AnimatedSection delay={200}><CardDog /></AnimatedSection>

        <AnimatedSection delay={200}><Cat /></AnimatedSection>
        <AnimatedSection delay={300}><CardCat /></AnimatedSection>

        <AnimatedSection delay={200}><Fish /></AnimatedSection>
        <AnimatedSection delay={200}><CardFish /></AnimatedSection>

        <AnimatedSection delay={300}><Bird /></AnimatedSection>
        <AnimatedSection delay={400}><CardBird /></AnimatedSection>

        <AnimatedSection delay={600}><Plant /></AnimatedSection>
        <AnimatedSection delay={700}><CardPlants /></AnimatedSection>
      </div>

      {/* <Footer /> */}
    </motion.div>
  );
}