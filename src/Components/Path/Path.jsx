import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "../Main/Main";

import DogInfo from "../Info/DogInfo";
import DogQuiz from "../Quizz/DogQuiz";

import CatInfo from "../Info/CatInfo";
import CatQuiz from "../Quizz/CatQuiz";

import BirdInfo from "../Info/BirdInfo";
import BirdQuiz from "../Quizz/BirdQuiz";

import FishInfo from "../Info/FishInfo";
import FishQuiz from "../Quizz/FishQuiz";

import PlantInfo from "../Info/PlantInfo";
import PlantQuiz from "../Quizz/PlantQuiz";

import Footer from "../Footer/Footer.jsx";
import TrainingNavbar from "../Header/TrainingNavbar.jsx";

const Path = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f0f7f4]">
      <main className="flex-1">
     <TrainingNavbar/>
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/DogInfo" element={<DogInfo />} />
          <Route path="/DogQuiz" element={<DogQuiz />} />

          <Route path="/CatInfo" element={<CatInfo />} />
          <Route path="/CatQuiz" element={<CatQuiz />} />

          <Route path="/FishInfo" element={<FishInfo />} />
          <Route path="/FishQuiz" element={<FishQuiz />} />

          <Route path="/PlantsInfo" element={<PlantInfo />} />
          <Route path="/PlantsQuiz" element={<PlantQuiz />} />

          <Route path="/BirdsInfo" element={<BirdInfo />} />
          <Route path="/BirdsQuiz" element={<BirdQuiz />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default Path;