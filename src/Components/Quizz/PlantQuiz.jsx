import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
    ArrowLeft,
    CheckCircle2,
    HelpCircle,
    Leaf,
    Lock,
    RotateCcw,
    ShieldCheck,
    Sparkles,
    XCircle,
} from "lucide-react";

const STORAGE_KEY = "plant_quiz_result_v1";
const REDIRECT_TO = "/PlantsInfo";

export default function PlantQuiz() {
    const navigate = useNavigate();

    const questions = useMemo(
        () => [
            {
                question:
                    "Ինչո՞ւ էր բույսերի «ցամաք բարձրանալը» կարևոր Երկրի պատմության մեջ 🌍🌱",
                options: [
                    "Քանի որ նրանք դարձան կենդանիներ",
                    "Քանի որ նրանք ձևավորեցին առաջին կանաչ միջավայրը և թթվածին արտադրեցին",
                    "Քանի որ օվկիանոսները չորացան",
                    "Քանի որ նրանք չէին սիրում ջուրը",
                ],
                correct: 1,
                explanation:
                    "Բույսերի զարգացումը ցամաքում նպաստեց թթվածնի ավելացմանն ու կենդանական կյանքի զարգացմանը։",
            },
            {
                question:
                    "Ինչո՞ւ է ֆոտոսինթեզը կարևոր ոչ միայն բույսերի, այլ նաև մարդկանց համար ☀️",
                options: [
                    "Քանի որ այն ստեղծում է թթվածին",
                    "Քանի որ այն ստեղծում է անձրև",
                    "Քանի որ այն մեծացնում է հողը",
                    "Քանի որ այն փոխում է գույնը",
                ],
                correct: 0,
                explanation:
                    "Ֆոտոսինթեզի արդյունքում բույսերը արտադրում են թթվածին, որն անհրաժեշտ է կենդանի օրգանիզմներին։",
            },
            {
                question: "Եթե բույսը սկսում է դեղնել, ինչի՞ նշան կարող է լինել դա 🌿",
                options: [
                    "Չափից շատ ջուր կամ լույսի պակաս",
                    "Շատ առողջ է",
                    "Աճում է արագ",
                    "Պարզապես ծաղկում է",
                ],
                correct: 0,
                explanation:
                    "Տերևների դեղնելը հաճախ կապված է ջրման կամ լուսավորության սխալ ռեժիմի հետ։",
            },
            {
                question:
                    "Ինչո՞ւ չի կարելի բույսը հաճախ տեղափոխել տարբեր միջավայրեր 🚫",
                options: [
                    "Քանի որ նա չի սիրում նոր հող",
                    "Քանի որ կտրուկ ջերմաստիճանային փոփոխությունները կարող են վնասել նրան",
                    "Քանի որ նա չի սիրում մարդկանց",
                    "Քանի որ նա դադարում է աճել",
                ],
                correct: 1,
                explanation:
                    "Բույսերը զգայուն են միջավայրի փոփոխությունների նկատմամբ և կարող են սթրես ապրել։",
            },
            {
                question: "Ինչո՞ւ են որոշ բույսեր գիշերը փակում տերևները 🌙",
                options: [
                    "Քանի որ նրանք «քնում են»",
                    "Քանի որ նվազեցնում են գոլորշիացումը և պահպանում ջերմությունը",
                    "Քանի որ վախենում են մթությունից",
                    "Քանի որ չեն սիրում քամի",
                ],
                correct: 1,
                explanation:
                    "Շատ բույսեր գիշերը նվազեցնում են ջրի կորուստը՝ փակելով տերևները։",
            },
            {
                question: "Ինչո՞ւ են կակտուսների տերևները վերածվել փշերի 🌵",
                options: [
                    "Որպեսզի գեղեցիկ երևան",
                    "Որպեսզի նվազեցնեն ջրի կորուստը և պաշտպանվեն կենդանիներից",
                    "Որպեսզի արագ աճեն",
                    "Որպեսզի ավելի շատ արև ստանան",
                ],
                correct: 1,
                explanation:
                    "Փշերը օգնում են նվազեցնել գոլորշիացումը և պաշտպանում են բույսը։",
            },
            {
                question: "Ինչո՞ւ են ծովային ջրիմուռները կարևոր ամբողջ մոլորակի համար 🌊",
                options: [
                    "Քանի որ նրանք մեծ են",
                    "Քանի որ արտադրում են մթնոլորտի թթվածնի մեծ մասը",
                    "Քանի որ ապրում են խորքում",
                    "Քանի որ արագ են աճում",
                ],
                correct: 1,
                explanation:
                    "Ծովային ջրիմուռները արտադրում են մոլորակի թթվածնի մեծ մասը։",
            },
            {
                question: "Ինչպե՞ս կարելի է ճանաչել առողջ բույսը 🌿✨",
                options: [
                    "Փայլուն տերևներ և ամուր ցողուն",
                    "Դեղնած տերևներ",
                    "Չորացած ճյուղեր",
                    "Աճի բացակայություն",
                ],
                correct: 0,
                explanation:
                    "Առողջ բույսն ունի մաքուր, կանաչ և փայլուն տերևներ ու կայուն աճ։",
            },
            {
                question: "Ինչո՞ւ է չափից շատ ջրելը վտանգավոր բույսերի համար 💧",
                options: [
                    "Քանի որ արմատները կարող են փչանալ",
                    "Քանի որ տերևները մեծանում են",
                    "Քանի որ նրանք սիրում են չորություն",
                    "Քանի որ ջուրը թանկ է",
                ],
                correct: 0,
                explanation:
                    "Գերաջրումը կարող է առաջացնել արմատների փտում և թթվածնի պակաս։",
            },
            {
                question:
                    "Ինչո՞ւ են հսկա ծառերը համարվում «ժամանակի կենդանի վկաներ» ⏳🌳",
                options: [
                    "Քանի որ նրանք շատ արագ են աճում",
                    "Քանի որ կարող են ապրել հարյուրավոր կամ հազարավոր տարիներ",
                    "Քանի որ նրանք շարժվում են",
                    "Քանի որ նրանք չեն ծաղկում",
                ],
                correct: 1,
                explanation:
                    "Որոշ ծառեր ապրում են հարյուրավոր և նույնիսկ հազարավոր տարիներ։",
            },
        ],
        []
    );

    const [answers, setAnswers] = useState(() =>
        Array(questions.length).fill(null)
    );
    const [showModal, setShowModal] = useState(false);
    const [isLocked, setIsLocked] = useState(false);
    const [lockedResult, setLockedResult] = useState(null);

    const answeredCount = useMemo(
        () => answers.filter((answer) => answer !== null).length,
        [answers]
    );

    const progress = useMemo(
        () => Math.round((answeredCount / questions.length) * 100),
        [answeredCount, questions.length]
    );

    const correctCount = useMemo(
        () => answers.filter((answer, index) => answer === questions[index].correct).length,
        [answers, questions]
    );

    const passed = correctCount >= 8;

    useEffect(() => {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return;

        try {
            const data = JSON.parse(raw);
            if (!data?.finished) return;

            setIsLocked(true);
            setLockedResult(data);

            Swal.fire({
                icon: "info",
                title: "Թեստն արդեն ավարտված է",
                html: `<div style="font-size:16px;margin-top:6px">
          Միավոր՝ <b>${data.score}/${data.total}</b><br/>
          ${data.passed ? "Անցել ես ✅" : "Չես անցել ❌"}
        </div>`,
                confirmButtonText: "Լավ",
                confirmButtonColor: "#16834f",
            });
        } catch {
            localStorage.removeItem(STORAGE_KEY);
        }
    }, []);

    const handleSelect = (qIndex, optionIndex) => {
        if (isLocked) return;

        setAnswers((prev) => {
            const next = [...prev];
            next[qIndex] = optionIndex;
            return next;
        });
    };

    const scrollToFirstUnanswered = () => {
        const index = answers.findIndex((answer) => answer === null);
        if (index === -1) return;

        document
            .getElementById(`q-${index}`)
            ?.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    const checkAnswers = () => {
        if (isLocked) {
            const data = lockedResult;

            Swal.fire({
                icon: "info",
                title: "Թեստն արդեն ավարտված է",
                text: data ? `Միավոր՝ ${data.score}/${data.total}` : "Արդեն ավարտված է",
                confirmButtonText: "Լավ",
                confirmButtonColor: "#16834f",
            });

            return;
        }

        if (answeredCount !== questions.length) {
            scrollToFirstUnanswered();

            Swal.fire({
                icon: "warning",
                title: "Կան չլրացված հարցեր",
                text: "Լրացրու բոլոր հարցերը, հետո ստուգիր արդյունքը։",
                confirmButtonText: "Լավ",
                confirmButtonColor: "#16834f",
            });

            return;
        }

        setShowModal(true);
    };

    const closeAndFinalize = () => {
        const data = {
            finished: true,
            score: correctCount,
            total: questions.length,
            passed,
            finishedAt: new Date().toISOString(),
        };

        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        setIsLocked(true);
        setLockedResult(data);
        setShowModal(false);

        navigate(REDIRECT_TO);
    };

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#f6fbf7] text-[#102018] font-[Montserrat]">
            {/* Ֆոն */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-44 left-1/2 h-[560px] w-[820px] -translate-x-1/2 rounded-full bg-emerald-100/85 blur-[125px]" />
                <div className="absolute top-[18%] -left-40 h-[420px] w-[420px] rounded-full bg-lime-100/90 blur-[115px]" />
                <div className="absolute top-[48%] right-[7%] h-[330px] w-[330px] rounded-full bg-green-100/90 blur-[105px]" />
                <div className="absolute bottom-[7%] -right-40 h-[480px] w-[480px] rounded-full bg-emerald-100/80 blur-[130px]" />

                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,251,247,0.55),rgba(246,251,247,1))]" />

                <div className="absolute inset-0 opacity-[0.28] bg-[linear-gradient(to_right,rgba(16,32,24,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,32,24,0.055)_1px,transparent_1px)] bg-[size:52px_52px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-6xl px-4 pt-24 pb-28 sm:px-6 lg:px-8">
                {/* Վերևի կոճակ */}
                <button
                    onClick={() => navigate(REDIRECT_TO)}
                    className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/85 px-5 py-3 text-sm font-black text-[#183528] shadow-[0_14px_45px_rgba(16,32,24,0.07)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-white"
                >
                    <ArrowLeft size={18} />
                    Վերադառնալ նյութերին
                </button>

                {/* Hero */}
                <section className="relative overflow-hidden rounded-[46px] border border-emerald-100 bg-white/85 p-6 shadow-[0_30px_100px_rgba(16,32,24,0.09)] backdrop-blur-2xl sm:p-8 md:p-10">
                    <div className="pointer-events-none absolute -right-28 -top-28 h-96 w-96 rounded-full bg-emerald-100 blur-[65px]" />
                    <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-lime-100 blur-[65px]" />

                    <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_340px] lg:items-center">
                        <div>
                            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-[#f6fbf7] px-4 py-2 text-sm font-bold text-emerald-800">
                                <Leaf size={16} className="text-emerald-700" />
                                Բույսերի գիտելիքի ստուգում
                            </div>

                            <h1 className="max-w-4xl text-4xl font-black leading-[1.03] tracking-[-0.055em] text-[#102018] sm:text-5xl md:text-6xl">
                                Ստուգիր՝ որքան լավ ես հասկացել{" "}
                                <span className="text-emerald-700">բույսերի խնամքը</span>
                            </h1>

                            <p className="mt-6 max-w-2xl text-base leading-8 text-[#607269] sm:text-lg">
                                Պատասխանիր 10 հարցի։ Թեստը անցնելու համար անհրաժեշտ է հավաքել
                                առնվազն 8 ճիշտ պատասխան։
                            </p>

                            {isLocked && lockedResult && (
                                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-5 py-3 text-sm font-black text-emerald-800">
                                    <Lock size={17} />
                                    Ավարտված է • Միավոր՝ {lockedResult.score}/{lockedResult.total}
                                </div>
                            )}
                        </div>

                        <div className="rounded-[34px] border border-emerald-100 bg-[#f6fbf7] p-5">
                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-white shadow-[0_14px_35px_rgba(16,32,24,0.06)]">
                                <Sparkles size={25} className="text-emerald-700" />
                            </div>

                            <p className="text-sm font-bold text-[#607269]">Ավարտված</p>
                            <p className="mt-1 text-4xl font-black tracking-[-0.04em] text-[#102018]">
                                {answeredCount}/{questions.length}
                            </p>

                            <div className="mt-5">
                                <div className="mb-2 flex items-center justify-between text-xs font-bold text-[#607269]">
                                    <span>Առաջընթաց</span>
                                    <span>{progress}%</span>
                                </div>

                                <div className="h-3 overflow-hidden rounded-full bg-white">
                                    <div
                                        className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-lime-500 transition-all duration-500"
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>
                            </div>

                            <div className="mt-5 rounded-[24px] border border-emerald-100 bg-white p-4">
                                <p className="text-sm font-black text-[#102018]">Շեմ</p>
                                <p className="mt-1 text-sm leading-6 text-[#607269]">
                                    Անցնելու համար պետք է հավաքել 8/10 կամ ավելի։
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Հարցեր */}
                <section className="mt-8 grid gap-5">
                    {questions.map((questionItem, qIndex) => {
                        const selected = answers[qIndex];

                        return (
                            <article
                                key={qIndex}
                                id={`q-${qIndex}`}
                                className="group overflow-hidden rounded-[34px] border border-emerald-100 bg-white/85 p-4 shadow-[0_18px_65px_rgba(16,32,24,0.065)] backdrop-blur-2xl transition duration-300 hover:bg-white hover:shadow-[0_24px_85px_rgba(22,131,79,0.1)] sm:p-5"
                            >
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                    <div className="flex gap-4">
                                        <div
                                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-black ${selected === null
                                                    ? "bg-[#f6fbf7] text-[#607269]"
                                                    : "bg-emerald-50 text-emerald-800"
                                                }`}
                                        >
                                            {String(qIndex + 1).padStart(2, "0")}
                                        </div>

                                        <div>
                                            <h2 className="text-base font-black leading-7 text-[#102018] sm:text-lg">
                                                {questionItem.question}
                                            </h2>

                                            <div
                                                className={`mt-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-black ${selected === null
                                                        ? "bg-[#f6fbf7] text-[#607269]"
                                                        : "bg-emerald-50 text-emerald-800"
                                                    }`}
                                            >
                                                {selected === null ? (
                                                    <>
                                                        <HelpCircle size={14} />
                                                        Չընտրված
                                                    </>
                                                ) : (
                                                    <>
                                                        <CheckCircle2 size={14} />
                                                        Ընտրված
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                    {questionItem.options.map((option, optionIndex) => {
                                        const isActive = selected === optionIndex;

                                        return (
                                            <label
                                                key={optionIndex}
                                                className={[
                                                    "relative flex min-h-[74px] items-start gap-3 rounded-[24px] border p-4 transition duration-300",
                                                    isLocked
                                                        ? "cursor-not-allowed opacity-60"
                                                        : "cursor-pointer hover:-translate-y-0.5",
                                                    isActive
                                                        ? "border-emerald-300 bg-emerald-50 shadow-[0_14px_40px_rgba(22,131,79,0.09)]"
                                                        : "border-emerald-100 bg-[#f6fbf7] hover:bg-white",
                                                ].join(" ")}
                                            >
                                                <input
                                                    type="radio"
                                                    name={`question-${qIndex}`}
                                                    value={optionIndex}
                                                    checked={isActive}
                                                    onChange={() => handleSelect(qIndex, optionIndex)}
                                                    disabled={isLocked}
                                                    className="mt-1 h-4 w-4 accent-emerald-700"
                                                />

                                                <span className="text-sm leading-6 text-[#183528] sm:text-base">
                                                    {option}
                                                </span>

                                                {isActive && (
                                                    <span className="absolute bottom-3 left-4 right-4 h-0.5 rounded-full bg-gradient-to-r from-emerald-600 to-lime-500" />
                                                )}
                                            </label>
                                        );
                                    })}
                                </div>
                            </article>
                        );
                    })}
                </section>

                {/* Desktop button */}
                <div className="mt-9 hidden justify-center sm:flex">
                    <button
                        onClick={checkAnswers}
                        disabled={!isLocked && answeredCount !== questions.length}
                        className={[
                            "inline-flex items-center justify-center gap-2 rounded-full px-9 py-4 text-base font-black text-white shadow-lg transition duration-300",
                            isLocked
                                ? "bg-[#102018] hover:-translate-y-1"
                                : answeredCount === questions.length
                                    ? "bg-[#16834f] shadow-[0_18px_50px_rgba(22,131,79,0.22)] hover:-translate-y-1 hover:bg-[#106b41]"
                                    : "cursor-not-allowed bg-[#9ca9a2]",
                        ].join(" ")}
                    >
                        {isLocked ? (
                            <>
                                <Lock size={18} />
                                Տեսնել արդյունքը
                            </>
                        ) : (
                            <>
                                <ShieldCheck size={18} />
                                Ստուգել թեստը
                            </>
                        )}
                    </button>
                </div>

                {/* Mobile fixed button */}
                <div className="fixed inset-x-0 bottom-0 z-40 border-t border-emerald-100 bg-white/90 backdrop-blur-xl sm:hidden">
                    <div className="mx-auto max-w-6xl px-4 py-3">
                        <button
                            onClick={checkAnswers}
                            className={[
                                "flex w-full items-center justify-center gap-2 rounded-full py-4 text-base font-black text-white shadow-md transition",
                                isLocked
                                    ? "bg-[#102018]"
                                    : answeredCount === questions.length
                                        ? "bg-[#16834f]"
                                        : "bg-[#9ca9a2]",
                            ].join(" ")}
                        >
                            {isLocked ? (
                                <>
                                    <Lock size={18} />
                                    Տեսնել արդյունքը
                                </>
                            ) : answeredCount === questions.length ? (
                                <>
                                    <ShieldCheck size={18} />
                                    Ստուգել թեստը
                                </>
                            ) : (
                                `Լրացրու հարցերը (${answeredCount}/${questions.length})`
                            )}
                        </button>
                    </div>
                </div>

                <div className="h-20 sm:hidden" />

                {/* Result modal */}
                {showModal && (
                    <div
                        className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-10 sm:pt-16"
                        role="dialog"
                        aria-modal="true"
                    >
                        <div
                            className="absolute inset-0 bg-[#102018]/70 backdrop-blur-sm"
                            onClick={closeAndFinalize}
                        />

                        <div className="relative w-full max-w-5xl overflow-hidden rounded-[38px] border border-emerald-100 bg-white shadow-[0_30px_120px_rgba(0,0,0,0.28)]">
                            <div className="relative overflow-hidden border-b border-emerald-100 bg-[#f6fbf7] p-5 sm:p-7">
                                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-100 blur-[65px]" />

                                <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                    <div>
                                        <div
                                            className={`mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-black ${passed
                                                    ? "bg-emerald-50 text-emerald-800"
                                                    : "bg-red-50 text-red-800"
                                                }`}
                                        >
                                            {passed ? <CheckCircle2 size={17} /> : <XCircle size={17} />}
                                            {passed ? "Թեստը անցել ես" : "Թեստը չես անցել"}
                                        </div>

                                        <h2 className="text-2xl font-black tracking-[-0.04em] text-[#102018] sm:text-4xl">
                                            Արդյունքներ
                                        </h2>

                                        <p className="mt-2 text-sm leading-7 text-[#607269] sm:text-base">
                                            Քո միավորը՝{" "}
                                            <span className="font-black text-[#102018]">
                                                {correctCount}/{questions.length}
                                            </span>
                                        </p>
                                    </div>

                                    <button
                                        onClick={closeAndFinalize}
                                        className="inline-flex items-center justify-center rounded-full border border-emerald-100 bg-white px-5 py-3 text-sm font-black text-[#183528] transition hover:bg-emerald-50"
                                    >
                                        Փակել
                                    </button>
                                </div>
                            </div>

                            <div className="max-h-[70vh] overflow-y-auto p-5 sm:p-6">
                                <div className="grid gap-4">
                                    {questions.map((questionItem, index) => {
                                        const userAnswer = answers[index];
                                        const isCorrect = userAnswer === questionItem.correct;

                                        return (
                                            <div
                                                key={index}
                                                className={[
                                                    "rounded-[28px] border p-4 sm:p-5",
                                                    isCorrect
                                                        ? "border-emerald-100 bg-emerald-50"
                                                        : "border-red-100 bg-red-50",
                                                ].join(" ")}
                                            >
                                                <div className="flex items-start gap-3">
                                                    <div
                                                        className={[
                                                            "flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl",
                                                            isCorrect
                                                                ? "bg-emerald-600 text-white"
                                                                : "bg-red-600 text-white",
                                                        ].join(" ")}
                                                    >
                                                        {isCorrect ? (
                                                            <CheckCircle2 size={20} />
                                                        ) : (
                                                            <XCircle size={20} />
                                                        )}
                                                    </div>

                                                    <div>
                                                        <p className="font-black leading-7 text-[#102018]">
                                                            {index + 1}. {questionItem.question}
                                                        </p>

                                                        <p className="mt-2 text-sm leading-6 text-[#183528]">
                                                            Քո պատասխանը՝{" "}
                                                            <span className="font-black">
                                                                {userAnswer !== null
                                                                    ? questionItem.options[userAnswer]
                                                                    : "Չկա"}
                                                            </span>
                                                        </p>

                                                        {!isCorrect && (
                                                            <p className="mt-1 text-sm leading-6 text-emerald-900">
                                                                Ճիշտ պատասխանը՝{" "}
                                                                <span className="font-black">
                                                                    {questionItem.options[questionItem.correct]}
                                                                </span>
                                                            </p>
                                                        )}

                                                        <p className="mt-3 text-sm italic leading-7 text-[#607269]">
                                                            {questionItem.explanation}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
                                    <button
                                        onClick={closeAndFinalize}
                                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#16834f] px-6 py-4 text-sm font-black text-white shadow-[0_18px_50px_rgba(22,131,79,0.22)] transition hover:-translate-y-1 hover:bg-[#106b41]"
                                    >
                                        <RotateCcw size={18} />
                                        Փակել և վերադառնալ նյութերին
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}