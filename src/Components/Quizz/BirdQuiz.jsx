import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
    ArrowLeft,
    Bird,
    CheckCircle2,
    Feather,
    HelpCircle,
    Lock,
    RotateCcw,
    ShieldCheck,
    Sparkles,
    XCircle,
} from "lucide-react";

const STORAGE_KEY = "bird_quiz_result_v1";
const REDIRECT_TO = "/BirdsInfo";

export default function BirdQuiz() {
    const navigate = useNavigate();

    const questions = useMemo(
        () => [
            {
                question:
                    "Ինչո՞ւ են գիտնականները վստահ, որ թռչունները դինոզավրերի ժառանգներն են 🦖🕊",
                options: [
                    "Քանի որ ունեն նույն գույնը",
                    "Քանի որ ունեն նման կմախքային կառուցվածք և փետուրների հետքեր",
                    "Քանի որ ապրում են անտառում",
                    "Քանի որ բոլոր սողունները դարձել են թռչուն",
                ],
                correct: 1,
                explanation:
                    "Թռչունների և թերոպոդ դինոզավրերի կմախքների նմանությունները և փետուրների հետքերը ապացուցում են նրանց կապը։",
            },
            {
                question: "Ինչո՞ւ են թռչունների ոսկորները խոռոչ ✈️",
                options: [
                    "Որպեսզի ավելի ուժեղ լինեն",
                    "Որպեսզի նվազեցնեն մարմնի քաշը և հեշտացնեն թռիչքը",
                    "Որպեսզի լողան ջրի մեջ",
                    "Որպեսզի ավելի բարձր երգեն",
                ],
                correct: 1,
                explanation:
                    "Խոռոչ ոսկորները թեթևացնում են մարմինը և օգնում օդում պահպանել հավասարակշռությունը։",
            },
            {
                question:
                    "Եթե թռչունի փետուրները վառ գույներ ունեն, դա ինչի՞ համար կարող է լինել 🎨",
                options: [
                    "Միայն գեղեցիկ երևալու համար",
                    "Թշնամիներին վախեցնելու կամ զուգընկեր գրավելու համար",
                    "Քամուց պաշտպանվելու համար",
                    "Ջրի տակ լողալու համար",
                ],
                correct: 1,
                explanation:
                    "Գույները կարող են ծառայել կամ քողարկման, կամ զուգընկեր գրավելու նպատակով։",
            },
            {
                question: "Ինչո՞ւ է շոկոլադը վտանգավոր թռչունների համար 🚫🍫",
                options: [
                    "Քանի որ շատ քաղցր է",
                    "Քանի որ պարունակում է թեոբրոմին, որը թունավոր է նրանց համար",
                    "Քանի որ դժվար է կուլ տալ",
                    "Քանի որ այն սառը է",
                ],
                correct: 1,
                explanation:
                    "Թեոբրոմինը կարող է վնասել թռչունների սրտին և նյարդային համակարգին։",
            },
            {
                question: "Ինչպե՞ս են կոլիբրիները օգնում բույսերին 🌺",
                options: [
                    "Ուտում են տերևները",
                    "Փոշոտում են ծաղիկները",
                    "Կոտրում են ճյուղերը",
                    "Թաքցնում են սերմերը",
                ],
                correct: 1,
                explanation:
                    "Կոլիբրիները սնվելիս փոշոտում են բույսերը՝ նպաստելով դրանց բազմացմանը։",
            },
            {
                question: "Ինչո՞ւ է բազեի տեսողությունը կարևոր որսի ժամանակ 👁",
                options: [
                    "Քանի որ նա լավ լսում է",
                    "Քանի որ կարող է մեծ հեռավորությունից նկատել իր որսը",
                    "Քանի որ արագ է վազում",
                    "Քանի որ ունի ուժեղ կտուց",
                ],
                correct: 1,
                explanation:
                    "Բազեն կարող է տեսնել իր որսը մինչև 1 կմ հեռավորությունից։",
            },
            {
                question:
                    "Ինչպե՞ս են որոշ թռչուններ գտնում ճանապարհը հազարավոր կիլոմետրերի ընթացքում 🧭",
                options: [
                    "Հոտառությամբ",
                    "Աստղերով և Երկրի մագնիսական դաշտով",
                    "Միայն հիշողությամբ",
                    "Քամու ուղղությամբ",
                ],
                correct: 1,
                explanation:
                    "Որոշ տեսակներ կողմնորոշվում են մագնիսական դաշտով և երկնային մարմիններով։",
            },
            {
                question: "Ինչո՞ւ են կարապները հաճախ համարվում հավատարիմ զույգ 💞",
                options: [
                    "Քանի որ միշտ ապրում են խմբերով",
                    "Քանի որ հաճախ ընտրում են մեկ զուգընկեր ողջ կյանքի համար",
                    "Քանի որ չեն թռչում",
                    "Քանի որ ապրում են ջրում",
                ],
                correct: 1,
                explanation:
                    "Շատ կարապներ ձևավորում են երկարատև զույգեր և մնում միասին տարիներով։",
            },
            {
                question: "Թռչունների ձայնը որտե՞ղ է ձևավորվում 🎶",
                options: ["Թոքերում", "Կտուցում", "Սիրինքսում", "Լեզվի վրա"],
                correct: 2,
                explanation:
                    "Թռչունների ձայնը ձևավորվում է սիրինքս կոչվող հատուկ օրգանում։",
            },
            {
                question: "Ո՞ր նշանը կարող է հուշել, որ թռչունը առողջ չէ 🩺",
                options: [
                    "Ակտիվ թռիչքը",
                    "Փայլուն փետուրները",
                    "Պասիվությունը և փշաքաղված փետուրները",
                    "Բարձր երգը",
                ],
                correct: 2,
                explanation:
                    "Պասիվ վարքը կամ փետուրների վատ վիճակը կարող են հիվանդության նշան լինել։",
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
        () =>
            answers.filter((answer, index) => answer === questions[index].correct)
                .length,
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
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-44 left-1/2 h-[560px] w-[820px] -translate-x-1/2 rounded-full bg-sky-100/85 blur-[125px]" />
                <div className="absolute top-[18%] -left-40 h-[420px] w-[420px] rounded-full bg-emerald-100/80 blur-[115px]" />
                <div className="absolute top-[48%] right-[7%] h-[330px] w-[330px] rounded-full bg-yellow-100/75 blur-[105px]" />
                <div className="absolute bottom-[7%] -right-40 h-[480px] w-[480px] rounded-full bg-cyan-100/75 blur-[130px]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,251,247,0.55),rgba(246,251,247,1))]" />
                <div className="absolute inset-0 opacity-[0.28] bg-[linear-gradient(to_right,rgba(16,32,24,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,32,24,0.055)_1px,transparent_1px)] bg-[size:52px_52px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-6xl px-4 pt-24 pb-28 sm:px-6 lg:px-8">
                <button
                    onClick={() => navigate(REDIRECT_TO)}
                    className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/85 px-5 py-3 text-sm font-black text-[#183528] shadow-[0_14px_45px_rgba(16,32,24,0.07)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:bg-white"
                >
                    <ArrowLeft size={18} />
                    Վերադառնալ նյութերին
                </button>

                <section className="relative overflow-hidden rounded-[46px] border border-sky-100 bg-white/85 p-6 shadow-[0_30px_100px_rgba(16,32,24,0.09)] backdrop-blur-2xl sm:p-8 md:p-10">
                    <div className="pointer-events-none absolute -right-28 -top-28 h-96 w-96 rounded-full bg-sky-100 blur-[65px]" />
                    <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-emerald-100 blur-[65px]" />

                    <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_340px] lg:items-center">
                        <div>
                            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-[#f6fbf7] px-4 py-2 text-sm font-bold text-sky-800">
                                <Bird size={16} className="text-sky-700" />
                                Թռչունների գիտելիքի ստուգում
                            </div>

                            <h1 className="max-w-4xl text-4xl font-black leading-[1.03] tracking-[-0.055em] text-[#102018] sm:text-5xl md:text-6xl">
                                Ստուգիր՝ որքան լավ ես հասկացել{" "}
                                <span className="text-sky-700">թռչունների աշխարհը</span>
                            </h1>

                            <p className="mt-6 max-w-2xl text-base leading-8 text-[#607269] sm:text-lg">
                                Պատասխանիր 10 հարցի։ Թեստը անցնելու համար անհրաժեշտ է հավաքել
                                առնվազն 8 ճիշտ պատասխան։
                            </p>

                            {isLocked && lockedResult && (
                                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-5 py-3 text-sm font-black text-sky-800">
                                    <Lock size={17} />
                                    Ավարտված է • Միավոր՝ {lockedResult.score}/{lockedResult.total}
                                </div>
                            )}
                        </div>

                        <div className="rounded-[34px] border border-sky-100 bg-[#f6fbf7] p-5">
                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-white shadow-[0_14px_35px_rgba(16,32,24,0.06)]">
                                <Feather size={25} className="text-sky-700" />
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
                                        className="h-full rounded-full bg-gradient-to-r from-sky-600 to-emerald-400 transition-all duration-500"
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>
                            </div>

                            <div className="mt-5 rounded-[24px] border border-sky-100 bg-white p-4">
                                <p className="text-sm font-black text-[#102018]">Շեմ</p>
                                <p className="mt-1 text-sm leading-6 text-[#607269]">
                                    Անցնելու համար պետք է հավաքել 8/10 կամ ավելի։
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-8 grid gap-5">
                    {questions.map((questionItem, qIndex) => {
                        const selected = answers[qIndex];

                        return (
                            <article
                                key={qIndex}
                                id={`q-${qIndex}`}
                                className="group overflow-hidden rounded-[34px] border border-sky-100 bg-white/85 p-4 shadow-[0_18px_65px_rgba(16,32,24,0.065)] backdrop-blur-2xl transition duration-300 hover:bg-white hover:shadow-[0_24px_85px_rgba(14,116,144,0.1)] sm:p-5"
                            >
                                <div className="flex gap-4">
                                    <div
                                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-black ${selected === null
                                                ? "bg-[#f6fbf7] text-[#607269]"
                                                : "bg-sky-50 text-sky-800"
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
                                                    : "bg-sky-50 text-sky-800"
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
                                                        ? "border-sky-300 bg-sky-50 shadow-[0_14px_40px_rgba(14,116,144,0.09)]"
                                                        : "border-sky-100 bg-[#f6fbf7] hover:bg-white",
                                                ].join(" ")}
                                            >
                                                <input
                                                    type="radio"
                                                    name={`question-${qIndex}`}
                                                    value={optionIndex}
                                                    checked={isActive}
                                                    onChange={() => handleSelect(qIndex, optionIndex)}
                                                    disabled={isLocked}
                                                    className="mt-1 h-4 w-4 accent-sky-700"
                                                />

                                                <span className="text-sm leading-6 text-[#183528] sm:text-base">
                                                    {option}
                                                </span>

                                                {isActive && (
                                                    <span className="absolute bottom-3 left-4 right-4 h-0.5 rounded-full bg-gradient-to-r from-sky-600 to-emerald-400" />
                                                )}
                                            </label>
                                        );
                                    })}
                                </div>
                            </article>
                        );
                    })}
                </section>

                <div className="mt-9 hidden justify-center sm:flex">
                    <button
                        onClick={checkAnswers}
                        disabled={!isLocked && answeredCount !== questions.length}
                        className={[
                            "inline-flex items-center justify-center gap-2 rounded-full px-9 py-4 text-base font-black text-white shadow-lg transition duration-300",
                            isLocked
                                ? "bg-[#102018] hover:-translate-y-1"
                                : answeredCount === questions.length
                                    ? "bg-sky-700 shadow-[0_18px_50px_rgba(14,116,144,0.22)] hover:-translate-y-1 hover:bg-sky-800"
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

                <div className="fixed inset-x-0 bottom-0 z-40 border-t border-sky-100 bg-white/90 backdrop-blur-xl sm:hidden">
                    <div className="mx-auto max-w-6xl px-4 py-3">
                        <button
                            onClick={checkAnswers}
                            className={[
                                "flex w-full items-center justify-center gap-2 rounded-full py-4 text-base font-black text-white shadow-md transition",
                                isLocked
                                    ? "bg-[#102018]"
                                    : answeredCount === questions.length
                                        ? "bg-sky-700"
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

                        <div className="relative w-full max-w-5xl overflow-hidden rounded-[38px] border border-sky-100 bg-white shadow-[0_30px_120px_rgba(0,0,0,0.28)]">
                            <div className="relative overflow-hidden border-b border-sky-100 bg-[#f6fbf7] p-5 sm:p-7">
                                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-100 blur-[65px]" />

                                <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                    <div>
                                        <div
                                            className={`mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-black ${passed
                                                    ? "bg-emerald-50 text-emerald-800"
                                                    : "bg-red-50 text-red-800"
                                                }`}
                                        >
                                            {passed ? (
                                                <CheckCircle2 size={17} />
                                            ) : (
                                                <XCircle size={17} />
                                            )}
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
                                        className="inline-flex items-center justify-center rounded-full border border-sky-100 bg-white px-5 py-3 text-sm font-black text-[#183528] transition hover:bg-sky-50"
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
                                                            "flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-white",
                                                            isCorrect ? "bg-emerald-600" : "bg-red-600",
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
                                                            <p className="mt-1 text-sm leading-6 text-sky-900">
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
                                        className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-700 px-6 py-4 text-sm font-black text-white shadow-[0_18px_50px_rgba(14,116,144,0.22)] transition hover:-translate-y-1 hover:bg-sky-800"
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