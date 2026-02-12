import React, { useState } from "react";
import HeaderNav from "../Header/HeaderNav";

export default function FishQuiz() {
    const questions = [
        {
            question: "Որն է ձկների հիմնական բնորոշ հատկանիշը?",
            options: ["Թաղանթավոր կաշի", "Շնչառություն լորձաթաղանթի միջոցով", "Թևեր", "Բուխտավոր ոտքեր"],
            correct: 1,
            explanation:
                "Ձկները շնչում են լորձաթաղանթի (gills) միջոցով, որը թույլ է տալիս ջրի մեջ լուծված թթվածնը օգտագործել։",
        },
        {
            question: "Որ ձկատեսակն է ամենամեծը աշխարհում?",
            options: ["Կատրանաձուկ", "Կտորակ ձուկ", "Մարդկային ձուկ", "Ամերիկյան ձուկ"],
            correct: 1,
            explanation:
                "Կտորակ ձուկը (Whale Shark) համարվում է ամենամեծ ձկատեսակը՝ հասնելով մինչև 12 մետր երկարության։",
        },
        {
            question: "Ի՞նչ է նշանակում, երբ ձուկը ջրից դուրս է թռչում կամ պոռթկում?",
            options: ["Ուրախ է", "Շրջակա միջավայրից փախչում է", "Սոված է", "Խուսափում է վտանգից"],
            correct: 3,
            explanation:
                "Շատ ձկներ ջրից դուրս պոռթկում են՝ խուսափելու համար հնարավոր վտանգից կամ որսորդից։",
        },
        {
            question: "Որ տարիքում ձկները հասնում են սեռական հասունության?",
            options: ["1 ամիս", "6 ամիս", "1 տարի", "3 տարի"],
            correct: 2,
            explanation:
                "Շատ ձկատեսակներ հասնում են սեռական հասունության մոտ 1 տարեկանում, կախված տեսակից։",
        },
        {
            question: "Որ սնունդն է վտանգավոր ձկների համար?",
            options: ["Ավոկադո", "Մանրաթելեր", "Խորոված միս", "Շաքարավազ"],
            correct: 3,
            explanation:
                "Շաքարավազը և մրգերի մեծ քանակությամբ շաքարն անպետք են ձկների համար, կարող են խանգարել նրանց առողջությանը։",
        },
        {
            question: "Որն է ձկների ջերմաստիճանի իդեալական միջակայքը?",
            options: ["10-15°C", "18-25°C", "30-35°C", "40°C"],
            correct: 1,
            explanation:
                "Շատ ձկների համար ջրային միջավայրը իդեալական է 18-25°C տաքության միջակայքում։",
        },
        {
            question: "Ինչ է նշանակում, երբ ձուկը սահում է ջրի հատակին կամ պատերին:",
            options: ["Սննդի որոնում", "Սթրես", "Հիվանդություն", "Բոլորը"],
            correct: 3,
            explanation:
                "Սա կարող է նշանակել հիվանդություն, սթրես կամ սննդի որոնում, կախված վարքից։",
        },
        {
            question: "Որն է ձկների կյանքի միջին տևողությունը:",
            options: ["1-3 տարի", "3-5 տարի", "5-10 տարի", "10-20 տարի"],
            correct: 2,
            explanation:
                "Շատ ձկներ ապրում են մոտ 5-10 տարի, բայց որոշ տեսակներ կարող են ավելի երկար։",
        },
        {
            question: "Ի՞նչ է նշանակում, երբ ձուկը պտտվում է կամ պոչը արագ շարժում է:",
            options: ["Ուրախ է", "Սթրես ունի", "Սոված է", "Բոլորը"],
            correct: 1,
            explanation:
                "Արագ պոչի շարժումը հաճախ ցույց է տալիս սթրես կամ անհանգստություն՝ կախված իրավիճակից։",
        },
        {
            question: "Որն է ձկների ամենազարգացած զգայությունը?",
            options: ["Տեսողությունը", "Հոտառությունը", "Համը", "Կյանքի ռիթմը"],
            correct: 0,
            explanation:
                "Շատ ձկներ ունեն շատ զարգացած տեսողություն՝ հատկապես գույների և շարժումների ընկալման մեջ։",
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
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-2xl rounded-2xl">
            <h1 className="text-3xl font-bold text-center mb-6 text-blue-800">
                🐟 Ձկների Թեստ — Քննություն
       
            </h1>

            {questions.map((q, qIndex) => (
                <div key={qIndex} className="mb-6 border-b pb-4">
                    <p className="font-semibold text-lg text-gray-800 mb-3">
                        {qIndex + 1}. {q.question}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {q.options.map((option, oIndex) => (
                            <label
                                key={oIndex}
                                className={`border rounded-lg px-4 py-2 cursor-pointer ${answers[qIndex] === oIndex
                                    ? "bg-blue-100 border-blue-400"
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
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
                >
                    Ստուգել քննությունը
                </button>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-start pt-10 z-50">
                    <div className="bg-white rounded-2xl shadow-2xl w-11/12 max-w-4xl p-6 overflow-y-auto max-h-[80vh]">
                        <h2 className="text-2xl font-bold text-center mb-4 text-blue-700">
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
                                className={`text-2xl font-bold ${passed ? "text-green-700" : "text-red-700"
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
                                className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
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
