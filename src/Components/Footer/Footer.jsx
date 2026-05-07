import React from "react";
import { Link } from "react-router-dom";
import { Leaf, HeartHandshake, ArrowUpRight } from "lucide-react";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative overflow-hidden bg-[#f6fbf7] text-[#102018] font-[Montserrat]">
            {/* Ֆոն */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-32 left-1/2 h-[360px] w-[620px] -translate-x-1/2 rounded-full bg-emerald-100/80 blur-[100px]" />
                <div className="absolute -bottom-40 -right-32 h-[360px] w-[360px] rounded-full bg-lime-100/90 blur-[110px]" />
                <div className="absolute -bottom-40 -left-32 h-[300px] w-[300px] rounded-full bg-green-100/80 blur-[100px]" />

                <div className="absolute inset-0 opacity-[0.28] bg-[linear-gradient(to_right,rgba(16,32,24,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,32,24,0.055)_1px,transparent_1px)] bg-[size:52px_52px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 pt-10 pb-7 sm:px-6 lg:px-8">
                <div className="overflow-hidden rounded-[36px] border border-emerald-100 bg-white/85 p-6 shadow-[0_24px_85px_rgba(16,32,24,0.075)] backdrop-blur-2xl sm:p-8">
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                        {/* Brand */}
                        <div className="max-w-md text-center lg:text-left">
                            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-50 lg:mx-0">
                                <Leaf size={27} className="text-emerald-700" />
                            </div>

                            <h2 className="text-2xl font-black tracking-[-0.035em] text-[#102018] sm:text-3xl">
                                Nature Nook
                            </h2>

                            <p className="mt-3 text-sm leading-7 text-[#607269]">
                                Բնությունից ծնված հավատարմություն, խնամք և օգտակար գիտելիք
                                կենդանիների ու բույսերի համար։
                            </p>
                        </div>

                        {/* Links */}
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-[1fr_1fr]">
                            <div className="text-center sm:text-left">
                                <p className="mb-4 text-sm font-black text-emerald-800">
                                    Ուսուցողական բաժիններ
                                </p>

                                <nav className="grid gap-3 text-sm font-semibold">
                                    <Link
                                        to="/DogInfo"
                                        className="group inline-flex items-center justify-center gap-2 text-[#607269] transition hover:text-emerald-700 sm:justify-start"
                                    >
                                        Շներ
                                        <ArrowUpRight
                                            size={14}
                                            className="opacity-0 transition group-hover:opacity-100"
                                        />
                                    </Link>

                                    <Link
                                        to="/CatInfo"
                                        className="group inline-flex items-center justify-center gap-2 text-[#607269] transition hover:text-emerald-700 sm:justify-start"
                                    >
                                        Կատուներ
                                        <ArrowUpRight
                                            size={14}
                                            className="opacity-0 transition group-hover:opacity-100"
                                        />
                                    </Link>

                                    <Link
                                        to="/BirdsInfo"
                                        className="group inline-flex items-center justify-center gap-2 text-[#607269] transition hover:text-emerald-700 sm:justify-start"
                                    >
                                        Թռչուններ
                                        <ArrowUpRight
                                            size={14}
                                            className="opacity-0 transition group-hover:opacity-100"
                                        />
                                    </Link>

                                    <Link
                                        to="/FishInfo"
                                        className="group inline-flex items-center justify-center gap-2 text-[#607269] transition hover:text-emerald-700 sm:justify-start"
                                    >
                                        Ձկներ
                                        <ArrowUpRight
                                            size={14}
                                            className="opacity-0 transition group-hover:opacity-100"
                                        />
                                    </Link>

                                    <Link
                                        to="/PlantsInfo"
                                        className="group inline-flex items-center justify-center gap-2 text-[#607269] transition hover:text-emerald-700 sm:justify-start"
                                    >
                                        Բույսեր
                                        <ArrowUpRight
                                            size={14}
                                            className="opacity-0 transition group-hover:opacity-100"
                                        />
                                    </Link>
                                </nav>
                            </div>

                            <div className="text-center sm:text-left">
                                <p className="mb-4 text-sm font-black text-emerald-800">
                                    Nature Nook-ի մասին
                                </p>

                                <div className="rounded-[28px] border border-emerald-100 bg-[#f6fbf7] p-5">
                                    <div className="mb-4 flex justify-center sm:justify-start">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white">
                                            <HeartHandshake size={22} className="text-emerald-700" />
                                        </div>
                                    </div>

                                    <p className="text-sm leading-7 text-[#607269]">
                                        Մեր նպատակը կենդանիների և բույսերի խնամքը դարձնելն է ավելի
                                        հասկանալի, հաճելի և ճիշտ։
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="my-7 h-px w-full bg-emerald-100" />

                    <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
                        <p className="text-sm text-[#607269]">
                            © {year}{" "}
                            <span className="font-black text-[#102018]">Nature Nook</span>.
                            Բոլոր իրավունքները պաշտպանված են։
                        </p>

                        <span className="inline-flex items-center justify-center rounded-full border border-emerald-100 bg-[#f6fbf7] px-4 py-2 text-xs font-bold text-emerald-800">
                            Ստեղծված է բնության հանդեպ սիրով 🌿
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}