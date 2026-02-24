import React, { useState } from "react";

export default function CatQuiz() {
    const questions = [
        {
            question: "Ինչու՞ են եռագույն կատուները գրեթե միշտ էգ 🐱",
            options: [
                "Քանի որ նրանք ավելի հաճախ են ծնվում էգ ձևով",
                "Քանի որ գունային գեները կապված են X քրոմոսոմի հետ",
                "Քանի որ որձերը չունեն նարնջագույն գույնի գեն",
                "Քանի որ դա բնության պատահականություն է",
            ],
            correct: 1,
        },
        {
            question: "Ի՞նչ գույնի կատուներն են հիմնականում որձեր 🧡",
            options: ["Սև", "Սպիտակ", "Ռիժիկ (նարնջագույն)", "Մոխրագույն"],
            correct: 2,
        },
        {
            question: "Քանի՞ ժամ է կատուն քնում օրվա ընթացքում 😴",
            options: ["6 ժամ", "8 ժամ", "12–16 ժամ", "20 ժամ"],
            correct: 2,
        },
        {
            question: "Կատուներն իրենց փռփռոցով ի՞նչ են անում 💖",
            options: [
                "Նշանակում է՝ քնած են",
                "Այն բուժում է և հանգստացնում է իրենց և մարդկանց",
                "Այն զգուշացնում է վտանգի մասին",
                "Այն պարզապես ձայն է խաղալու ընթացքում",
            ],
            correct: 1,
        },
        {
            question: "Ինչու՞ է կատուն միշտ ընկնում թաթերի վրա 🐾",
            options: [
                "Քանի որ ունեն շատ թեթև մարմին",
                "Քանի որ ունեն ճկուն ողնաշար և հավասարակշռության գերազանց զգացում",
                "Քանի որ միշտ գիտեն որտեղ են ընկնելու",
                "Քանի որ ունեն սուր տեսողություն",
            ],
            correct: 1,
        },
        {
            question: "Ի՞նչ է նշանակում, երբ կատուն քեզ նայում է և դանդաղ թարթում աչքերը 👀",
            options: [
                "Նա ուզում է քնել",
                "Նա զայրացած է",
                "Նա քեզ վստահում և սիրում է",
                "Նա ուզում է ուտել",
            ],
            correct: 2,
        },
        {
            question: "Կատվի ականջները քանի՞ աստիճան կարող են պտտվել 👂",
            options: ["90°", "120°", "150°", "180°"],
            correct: 3,
        },
        {
            question: "Ինչու՞ են կատուները սիրում նստել արկղերի ու պայուսակների մեջ 📦",
            options: [
                "Քանի որ այնտեղ տաք է",
                "Քանի որ այնտեղ իրենց ապահով են զգում",
                "Քանի որ սիրում են փակ տարածքներ",
                "Քանի որ այնտեղ հոտ է գալիս տիրոջից",
            ],
            correct: 1,
        },
        {
            question: "Ի՞նչ ձայն է կատուն օգտագործում միայն մարդկանց հետ շփվելու համար 💬",
            options: ["Մլավոց", "Փռփռոց", "Շչոց", "Մռնչոց"],
            correct: 0,
        },
        {
            question: "Կատվի բուրդը ի՞նչ դեր ունի բացի գեղեցկությունից 🎨",
            options: [
                "Միայն ջերմություն է պահպանում",
                "Պաշտպանում է ջերմաստիճանի փոփոխություններից և օգնում է հաղորդակցվել",
                "Օգնում է արագ վազել",
                "Այն պարզապես դեկորատիվ է",
            ],
            correct: 1,
        },
    ];



    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const [showModal, setShowModal] = useState(false);

    const handleSelect = (qIndex, optionIndex) => {
        const newAnswers = [...answers];
        newAnswers[qIndex] = optionIndex;
        setAnswers(newAnswers);
    };

    const checkAnswers = () => {
        setShowModal(true);
    };

    const correctCount = answers.filter(
        (a, i) => a === questions[i].correct
    ).length;

    const passed = correctCount >= 8;

    return (
        <div className="max-w-4xl mx-auto p-4 md:p-6 bg-white shadow-2xl rounded-2xl">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-amber-800">
                🐱 Կատուների Թեստ — Քննություն
            </h1>

            {questions.map((q, qIndex) => (
                <div key={qIndex} className="mb-6 border-b pb-4">
                    <p className="font-semibold text-base md:text-lg text-gray-800 mb-3">
                        {qIndex + 1}. {q.question}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {q.options.map((option, oIndex) => (
                            <label
                                key={oIndex}
                                className={`border rounded-lg px-4 py-2 cursor-pointer ${answers[qIndex] === oIndex
                                    ? "bg-amber-100 border-amber-400"
                                    : "hover:bg-gray-100"
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name={`question-${qIndex}`}
                                    value={oIndex}
                                    checked={answers[qIndex] === oIndex}
                                    onChange={() => handleSelect(qIndex, oIndex)}
                                    className="mr-2"
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                </div>
            ))}

            <div className="text-center mt-6">
                <button
                    onClick={checkAnswers}
                    className="bg-amber-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-amber-700 transition"
                >
                    Ստուգել քննությունը
                </button>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-start pt-10 z-50">
                    <div className="bg-white rounded-2xl shadow-2xl w-11/12 max-w-4xl p-6 overflow-y-auto max-h-[80vh]">
                        <h2 className="text-xl md:text-2xl font-bold text-center mb-4 text-amber-700">
                            🧾 Քննության Արդյունքներ
                        </h2>

                        {questions.map((q, i) => {
                            const userAnswer = answers[i];
                            const isCorrect = userAnswer === q.correct;
                            return (
                                <div
                                    key={i}
                                    className={`mb-4 p-4 rounded-lg ${isCorrect ? "bg-green-50" : "bg-red-50"
                                        }`}
                                >
                                    <p className="font-semibold text-gray-800">
                                        {i + 1}. {q.question}
                                    </p>
                                    <p>
                                        📝 Ձեր պատասխանը՝{" "}
                                        <span className="font-medium">
                                            {userAnswer !== null ? q.options[userAnswer] : "Չկա"}
                                        </span>{" "}
                                        —{" "}
                                        <span
                                            className={`font-bold ${isCorrect ? "text-green-600" : "text-red-600"
                                                }`}
                                        >
                                            {isCorrect ? "Ճիշտ ✅" : "Սխալ ❌"}
                                        </span>
                                    </p>
                                    {!isCorrect && (
                                        <p className="mt-1 text-gray-700">
                                            ✔️ Ճիշտ պատասխանն է՝{" "}
                                            <strong className="text-green-700">
                                                {q.options[q.correct]}
                                            </strong>
                                        </p>
                                    )}
                                    <p className="text-gray-600 italic mt-1">{q.explanation}</p>
                                </div>
                            );
                        })}

                        <div className="text-center mt-6">
                            <p
                                className={`text-xl md:text-2xl font-bold ${passed ? "text-green-700" : "text-red-700"
                                    }`}
                            >
                                {passed
                                    ? "🎉 Դուք անցել եք քննությունը։ Շնորհավորում ենք!"
                                    : "😔 Դուք ձախողել եք քննությունը։ Փորձեք նորից։"}
                            </p>

                            <button
                                onClick={() => {
                                    setShowModal(false);
                                    setAnswers(Array(questions.length).fill(null));
                                }}
                                className="mt-4 bg-amber-600 text-white px-6 py-3 rounded-xl hover:bg-amber-700 transition"
                            >
                                Փակել
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}


