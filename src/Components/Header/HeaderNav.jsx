import React from 'react'

function HeaderNav() {
    return (
        <div>      <header className="relative z-10 flex items-center justify-between px-10 py-6 bg-white/70 backdrop-blur-md shadow-lg rounded-b-2xl">
            <h1 className="text-3xl font-bold text-[#0b241f] tracking-wide">
                Nature Nook <span className="text-[#5d8c73]">Training</span>
            </h1>

            <nav className="hidden md:flex gap-8 text-lg font-medium">
                <Link to="/DogInfo" className="hover:text-[#5d8c73] transition">Շներ</Link>
                <Link to="/CatInfo" className="hover:text-[#5d8c73] transition">Կատուներ</Link>
                <Link to="/BirdsInfo" className="hover:text-[#5d8c73] transition">Թռչուններ</Link>
                <Link to="/FishInfo" className="hover:text-[#5d8c73] transition">Ձկներ</Link>
                <Link to="/PlantsInfo" className="hover:text-[#5d8c73] transition">Բույսեր</Link>
            </nav>
        </header></div>
    )
}

export default HeaderNav