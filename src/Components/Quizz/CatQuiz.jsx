import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const STORAGE_KEY = "cat_quiz_result_v1";
const REDIRECT_TO = "/CatInfo"; // փոխիր՝ օրինակ "/" կամ "/CatInfo"

export default function CatQuiz() {
    const navigate = useNavigate();

    const questions = useMemo(
        () => [
            {
                question: "Եթե եռագույն կատուն ունի սև, սպիտակ և նարնջագույն գույներ, ինչո՞ւ է նա գրեթե միշտ էգ 🧬🐱",
                options: [
                    "Քանի որ այդ երեք գույները կապված են X քրոմոսոմների հետ",
                    "Քանի որ որձերը չեն կարող ունենալ սպիտակ գույն",
                    "Քանի որ էգերը ավելի շատ գույներ ունեն",
                    "Քանի որ դա պատահական բնության խաղ է",
                ],
                correct: 0,
                explanation: "Եռագույն գունավորումը կապված է X քրոմոսոմի գեների հետ, իսկ էգերը ունեն երկու X քրոմոսոմ։",
            },
            {
                question: "Ինչո՞ւ են նարնջագույն (ռիժիկ) կատուները հաճախ որձեր 🧡",
                options: [
                    "Քանի որ նարնջագույն գենը հաճախ հանդիպում է արական սեռի մոտ",
                    "Քանի որ էգերը չեն սիրում այդ գույնը",
                    "Քանի որ նրանք ավելի շատ են քնում",
                    "Քանի որ այդ գույնը փոխվում է տարիքի հետ",
                ],
                correct: 0,
                explanation: "Նարնջագույն գույնի գենը կապված է սեռական քրոմոսոմների հետ և հաճախ հանդիպում է որձերի մոտ։",
            },
            {
                question: "Ինչո՞ւ են կատուները քնում օրական մինչև 16 ժամ 😴",
                options: [
                    "Քանի որ նրանք ծույլ են",
                    "Քանի որ նրանց օրգանիզմը ուժ է կուտակում որսի համար",
                    "Քանի որ նրանք հիվանդ են",
                    "Քանի որ չեն սիրում խաղալ",
                ],
                correct: 1,
                explanation: "Կատուների նախնիները գիշերային որսորդներ էին, և քունը օգնում է վերականգնել էներգիան։",
            },
            {
                question: "Եթե կատուն քնում է քո կողքին, դա ինչի՞ նշան է 💤",
                options: [
                    "Նա սոված է",
                    "Նա քեզ վստահում է և իրեն ապահով է զգում",
                    "Նա ուզում է դուրս գալ",
                    "Նա զայրացած է",
                ],
                correct: 1,
                explanation: "Կատուն քնում է այնտեղ, որտեղ իրեն անվտանգ և վստահ է զգում։",
            },
            {
                question: "Ինչո՞ւ է կատվի փռփռոցը համարվում բուժիչ 💖",
                options: [
                    "Քանի որ այն բարձր ձայն է",
                    "Քանի որ այն ունի հատուկ հաճախականություն, որը օգնում է հանգստանալ և լավանալ",
                    "Քանի որ այն վախեցնում է հիվանդությունները",
                    "Քանի որ այն լսվում է միայն մարդկանց",
                ],
                correct: 1,
                explanation: "Փռփռոցի 25–150 Հց հաճախականությունը կարող է նպաստել հանգստացմանն ու վերականգնմանը։",
            },
            {
                question: "Ինչպե՞ս է կատուն կարողանում գրեթե միշտ ընկնել թաթերի վրա 🐾",
                options: [
                    "Քանի որ ունի թեթև մարմին",
                    "Քանի որ ունի ճկուն ողնաշար և արագ շրջվելու ռեֆլեքս",
                    "Քանի որ միշտ ընկնում է փափուկ տեղ",
                    "Քանի որ չի վախենում բարձրությունից",
                ],
                correct: 1,
                explanation: "Կատուն ունի հատուկ «righting reflex»՝ ճկուն ողնաշար և հավասարակշռության լավ համակարգ։",
            },
            {
                question: "Ի՞նչ է նշանակում դանդաղ աչք թարթող կատուն 😻",
                options: [
                    "Նա փորձում է վախեցնել քեզ",
                    "Նա քնած է",
                    "Նա ցույց է տալիս վստահություն և հանգստություն",
                    "Նա չի տեսնում լավ",
                ],
                correct: 2,
                explanation: "Դանդաղ թարթումը կատուների մոտ խաղաղության և վստահության նշան է։",
            },
            {
                question: "Ինչո՞ւ են կատուները սիրում բարձր տեղերում նստել 🐈‍⬛",
                options: [
                    "Քանի որ այնտեղ տաք է",
                    "Քանի որ այնտեղից կարող են վերահսկել տարածքը",
                    "Քանի որ այնտեղ ավելի փափուկ է",
                    "Քանի որ այնտեղ մութ է",
                ],
                correct: 1,
                explanation: "Բարձր տեղը տալիս է անվտանգություն և տարածքի վերահսկման հնարավորություն։",
            },
            {
                question: "Ինչո՞ւ է կատվի բուրդը երբեմն փշաքաղվում ⚡",
                options: [
                    "Քանի որ նա մրսում է",
                    "Քանի որ նա փորձում է ավելի մեծ և վախեցնող երևալ",
                    "Քանի որ նա ուրախ է",
                    "Քանի որ նա քնած է",
                ],
                correct: 1,
                explanation: "Փշաքաղված բուրդը պաշտպանական ռեակցիա է՝ մեծ երևալու համար։",
            },
            {
                question: "Ինչո՞ւ են կատուները երբեմն «նվեր» բերում իրենց տիրոջը 🐾",
                options: [
                    "Քանի որ նրանք խաղում են",
                    "Քանի որ նրանք քեզ համարում են իրենց ընտանիքի մաս",
                    "Քանի որ չեն ուզում դա պահել",
                    "Քանի որ ուզում են պատժել քեզ",
                ],
                correct: 1,
                explanation: "«Նվեր» բերելը կարող է լինել վստահության և ընտանիք համարելու նշան։",
            },
        ],
        []
        
    );

    const [answers, setAnswers] = useState(() => Array(questions.length).fill(null));
    const [showModal, setShowModal] = useState(false);

    const [isLocked, setIsLocked] = useState(false);
    const [lockedResult, setLockedResult] = useState(null);

    const answeredCount = useMemo(() => answers.filter((a) => a !== null).length, [answers]);
    const progress = useMemo(
        () => Math.round((answeredCount / questions.length) * 100),
        [answeredCount, questions.length]
    );

    const correctCount = useMemo(
        () => answers.filter((a, i) => a === questions[i].correct).length,
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
                title: "Դու արդեն ավարտել ես թեստը",
                html: `<div style="font-size:16px;margin-top:6px">
                Միավոր՝ <b>${data.score}/${data.total}</b><br/>
                ${data.passed ? "Անցել ես ✅" : "Չես անցել ❌"}
              </div>`,
                confirmButtonText: "Լավ",
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
        const idx = answers.findIndex((a) => a === null);
        if (idx === -1) return;
        const el = document.getElementById(`q-${idx}`);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const checkAnswers = () => {
        if (isLocked) {
            const data = lockedResult;
            Swal.fire({
                icon: "info",
                title: "Դու արդեն ավարտել ես թեստը",
                text: data ? `Միավոր՝ ${data.score}/${data.total}` : "Արդեն ավարտած է",
                confirmButtonText: "Լավ",
            });
            return;
        }

        if (answeredCount !== questions.length) {
            scrollToFirstUnanswered();
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
        <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-white">
            <div className="pt-20 md:pt-24 mx-auto max-w-5xl px-4 py-6 sm:py-10">
                <div className="rounded-3xl border border-amber-100 bg-white/80 backdrop-blur shadow-xl">
                    <div className="p-5 sm:p-8">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
                                    🐱 Կատուների Թեստ
                                </h1>
                                <p className="mt-1 text-sm sm:text-base text-gray-600">
                                    Ընտրիր ճիշտ պատասխանները։ Շեմը՝ 8/10։
                                </p>

                                {isLocked && lockedResult && (
                                    <p className="mt-2 text-sm font-semibold text-amber-800">
                                        Ավարտված է • Միավոր՝ {lockedResult.score}/{lockedResult.total}
                                    </p>
                                )}
                            </div>

                            <div className="hidden sm:flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-2">
                                <span className="text-sm text-gray-600">Ավարտված</span>
                                <span className="text-sm font-semibold text-gray-900">
                                    {answeredCount}/{questions.length}
                                </span>
                            </div>
                        </div>

                        <div className="mt-5">
                            <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600">
                                <span>Պրոգրես</span>
                                <span className="font-semibold text-gray-900">{progress}%</span>
                            </div>
                            <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
                                <div
                                    className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>

                            <div className="mt-3 flex sm:hidden items-center justify-between rounded-2xl border border-gray-200 bg-white px-4 py-3">
                                <div className="text-sm text-gray-600">Ավարտված</div>
                                <div className="text-sm font-semibold text-gray-900">
                                    {answeredCount}/{questions.length}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 space-y-5">
                    {questions.map((q, qIndex) => {
                        const selected = answers[qIndex];

                        return (
                            <section
                                key={qIndex}
                                id={`q-${qIndex}`}
                                className="rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="p-5 sm:p-7">
                                    <div className="flex items-start justify-between gap-4">
                                        <p className="text-base sm:text-lg font-semibold text-gray-900">
                                            {qIndex + 1}. {q.question}
                                        </p>
                                        <span
                                            className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${selected === null ? "bg-gray-100 text-gray-600" : "bg-amber-100 text-amber-800"
                                                }`}
                                        >
                                            {selected === null ? "Չընտրված" : "Ընտրված"}
                                        </span>
                                    </div>

                                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {q.options.map((option, oIndex) => {
                                            const isActive = selected === oIndex;
                                            return (
                                                <label
                                                    key={oIndex}
                                                    className={[
                                                        "group relative flex items-start gap-3 rounded-2xl border px-4 py-3 transition",
                                                        isLocked ? "cursor-not-allowed opacity-60" : "cursor-pointer",
                                                        "focus-within:ring-2 focus-within:ring-amber-400 focus-within:ring-offset-2",
                                                        isActive ? "border-amber-400 bg-amber-50" : "border-gray-200 bg-white hover:bg-gray-50",
                                                    ].join(" ")}
                                                >
                                                    <input
                                                        type="radio"
                                                        name={`question-${qIndex}`}
                                                        value={oIndex}
                                                        checked={isActive}
                                                        onChange={() => handleSelect(qIndex, oIndex)}
                                                        disabled={isLocked}
                                                        className="mt-1 h-4 w-4 accent-amber-600"
                                                    />
                                                    <span className="text-sm sm:text-base text-gray-800">{option}</span>

                                                    {isActive && (
                                                        <span className="pointer-events-none absolute inset-x-4 bottom-2 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-400" />
                                                    )}
                                                </label>
                                            );
                                        })}
                                    </div>
                                </div>
                            </section>
                        );
                    })}
                </div>

                <div className="mt-8 hidden sm:flex justify-center">
                    <button
                        onClick={checkAnswers}
                        className={[
                            "inline-flex items-center justify-center rounded-2xl px-8 py-3 text-base font-semibold text-white shadow-lg transition",
                            isLocked
                                ? "bg-gray-900 hover:opacity-95"
                                : answeredCount === questions.length
                                    ? "bg-gradient-to-r from-amber-600 to-orange-600 hover:opacity-95"
                                    : "bg-gray-400 cursor-not-allowed",
                        ].join(" ")}
                        disabled={!isLocked && answeredCount !== questions.length}
                    >
                        {isLocked ? "Տեսնել արդյունքը" : "Ստուգել քննությունը"}
                    </button>
                </div>

                <div className="sm:hidden fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/90 backdrop-blur">
                    <div className="mx-auto max-w-5xl px-4 py-3">
                        <button
                            onClick={checkAnswers}
                            className={[
                                "w-full rounded-2xl py-3 text-base font-semibold text-white shadow-md transition",
                                isLocked
                                    ? "bg-gray-900"
                                    : answeredCount === questions.length
                                        ? "bg-gradient-to-r from-amber-600 to-orange-600"
                                        : "bg-gray-400",
                            ].join(" ")}
                        >
                            {isLocked
                                ? "Տեսնել արդյունքը"
                                : answeredCount === questions.length
                                    ? "Ստուգել քննությունը"
                                    : `Լրացրու հարցերը (${answeredCount}/${questions.length})`}
                        </button>
                    </div>
                </div>

                <div className="h-20 sm:hidden" />

                {showModal && (
                    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-10 sm:pt-16" role="dialog" aria-modal="true">
                        <div className="absolute inset-0 bg-black/60" onClick={closeAndFinalize} />
                        <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl">
                            <div className="border-b border-gray-100 p-5 sm:p-6">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h2 className="text-lg sm:text-2xl font-extrabold text-gray-900">🧾 Արդյունքներ</h2>
                                        <p className="mt-1 text-sm text-gray-600">
                                            Ձեր միավորը՝ <span className="font-semibold text-gray-900">{correctCount}/{questions.length}</span>{" "}
                                            {" • "}
                                            {passed ? (
                                                <span className="font-semibold text-green-700">Անցել եք ✅</span>
                                            ) : (
                                                <span className="font-semibold text-red-700">Չեք անցել ❌</span>
                                            )}
                                        </p>
                                    </div>

                                    <button
                                        onClick={closeAndFinalize}
                                        className="rounded-2xl border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                                    >
                                        Փակել
                                    </button>
                                </div>
                            </div>

                            <div className="max-h-[70vh] overflow-y-auto p-5 sm:p-6">
                                <div className="space-y-4">
                                    {questions.map((q, i) => {
                                        const userAnswer = answers[i];
                                        const isCorrect = userAnswer === q.correct;

                                        return (
                                            <div
                                                key={i}
                                                className={[
                                                    "rounded-3xl border p-4 sm:p-5",
                                                    isCorrect ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50",
                                                ].join(" ")}
                                            >
                                                <p className="font-semibold text-gray-900">{i + 1}. {q.question}</p>

                                                <p className="mt-2 text-sm sm:text-base text-gray-800">
                                                    📝 Ձեր պատասխանը՝{" "}
                                                    <span className="font-semibold">
                                                        {userAnswer !== null ? q.options[userAnswer] : "Չկա"}
                                                    </span>{" "}
                                                    <span className={isCorrect ? "text-green-700 font-bold" : "text-red-700 font-bold"}>
                                                        {isCorrect ? " (Ճիշտ ✅)" : " (Սխալ ❌)"}
                                                    </span>
                                                </p>

                                                {!isCorrect && (
                                                    <p className="mt-1 text-sm sm:text-base text-gray-800">
                                                        ✔️ Ճիշտ պատասխան՝{" "}
                                                        <span className="font-semibold text-green-800">{q.options[q.correct]}</span>
                                                    </p>
                                                )}

                                                <p className="mt-2 text-sm text-gray-700 italic">{q.explanation}</p>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:justify-end">
                                    <button
                                        onClick={closeAndFinalize}
                                        className="rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 px-5 py-3 text-sm sm:text-base font-semibold text-white hover:opacity-95"
                                    >
                                        Փակել և վերջացնել
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}