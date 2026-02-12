import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import DogQuiz from "../Quizz/DogQuiz";
import DogInfo from "../Info/DogInfo";
import CatInfo from "../Info/CatInfo";
import CatQuiz from "../Quizz/CatQuiz";
import BirdInfo from "../Info/BirdInfo";
import FishQuiz from "../Quizz/FishQuiz";
import PlantInfo from "../Info/PlantInfo";
import PlantQuiz from "../Quizz/PlantQuiz";
import BirdQuiz from "../Quizz/BirdQuiz";
import FishInfo from "../Info/FishInfo";

const Path = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/DogInfo" element={<DogInfo />} />
            <Route path="/DogQuiz" element={<DogQuiz />} />
            <Route path="/CatInfo" element={<CatInfo />} />
            <Route path="/CatQuiz" element={<CatQuiz />} />
            <Route path="/FishQuiz" element={<FishQuiz />} />
            <Route path="/FishInfo" element={<FishInfo />} />
            <Route path="/PlantsInfo" element={<PlantInfo />} />
            <Route path="/PlantsQuiz" element={<PlantQuiz />} />
            <Route path="/BirdsInfo" element={<BirdInfo />} />
            <Route path="/BirdsQuiz" element={<BirdQuiz />} />
        </Routes>
    );
};

export default Path;
