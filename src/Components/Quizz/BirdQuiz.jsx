import React, { useState } from "react";

export default function BirdQuiz() {
    const questions = [
        {
            question: "Որ կենդանիներից են ծագել ժամանակակից թռչունները:",
            options: ["Դինոզավրերից", "Կաթնասուններից", "Որոշ սողուններից", "Ձկներից"],
            correct: 0,
            explanation:
                "Թռչունները սերում են թերոպոդ դինոզավրերից՝ մսակեր հսկաներից, ինչպիսին էր վելոցիրապտորը։",
        },
        {
            question: "Ինչով են պայմանավորված թռչունների թեթևությունը թռիչքի ժամանակ:",
            options: ["Փետուրներով", "Խոռոչ ոսկորներով", "Թեթև մաշկով", "Քիչ մկաններով"],
            correct: 1,
            explanation:
                "Թռչունների ոսկորները խոռոչ են և լցված օդով՝ նվազեցնելով ընդհանուր քաշը։",
        },
        {
            question: "Ի՞նչ դեր ունեն փետուրների գույները թռչունների կյանքում:",
            options: [
                "Միայն գեղեցկության համար են",
                "Օգնում են քողարկվել կամ գրավել զուգընկերոջը",
                "Ջերմություն են պահպանում",
                "Ունեն բուժիչ հատկություն"
            ],
            correct: 1,
            explanation:
                "Գույները ծառայում են ինչպես քողարկման, այնպես էլ զուգընկեր գրավելու նպատակով։",
        },
        {
            question: "Ի՞նչ սնունդ absolutely չի կարելի տալ թռչուններին:",
            options: ["Սերմեր", "Շոկոլադ և ավոկադո", "Խնձոր", "Վարսակի փաթիլներ"],
            correct: 1,
            explanation:
                "Շոկոլադը և ավոկադոն պարունակում են թույն՝ վտանգավոր թռչունների համար։",
        },
        {
            question: "Ի՞նչ դեր ունեն թռչունները բնության մեջ:",
            options: [
                "Մարդկանց զվարճացնելու",
                "Սերմեր տարածելու և միջատների քանակը վերահսկելու",
                "Միայն գեղեցկություն տալու",
                "Խառնաշփոթ ստեղծելու"
            ],
            correct: 1,
            explanation:
                "Թռչունները կարևոր դեր ունեն էկոհամակարգում՝ տարածելով սերմեր և վերահսկելով միջատների քանակը։",
        },
        {
            question: "Որ թռչունն է առավել հայտնի իր հավատարմությամբ զուգընկերոջը:",
            options: ["Աղավնի", "Կարապ", "Ձկնորս թռչուն", "Սոխակ"],
            correct: 1,
            explanation:
                "Կարապները հայտնի են իրենց ողջ կյանքի հավատարիմ զուգընկերությամբ։",
        },
        {
            question: "Ի՞նչն է թռչունների համար ամենակարևոր զգայությունը որսի ժամանակ:",
            options: ["Լսողությունը", "Տեսողությունը", "Հոտառությունը", "Համը"],
            correct: 1,
            explanation:
                "Թռչուններն ունեն բացառիկ սուր տեսողություն՝ 4 անգամ ավելի լավ, քան մարդու մոտ։",
        },
        {
            question: "Որ թռչունն է համարվում աշխարհի ամենաարագը թռիչքի ժամանակ:",
            options: ["Բազեն", "Արծիվ", "Ծիծեռնակ", "Կռունկ"],
            correct: 0,
            explanation:
                "Բազենը կարող է սուզվել մինչև 320 կմ/ժ արագությամբ՝ դառնալով աշխարհի ամենաարագ թռչունը։",
        },
        {
            question: "Որտեղ է առաջանում թռչունների երգը և ձայնը:",
            options: ["Բերանում", "Լեզվի վրա", "Սիրինքսում (ձայնածորանում)", "Թոքերում"],
            correct: 2,
            explanation:
                "Թռչունների ձայնը ձևավորվում է սիրինքսում՝ հատուկ օրգանում, որը գտնվում է շնչափողի ներքևում։",
        },
        {
            question: "Ինչպես կարելի է ճանաչել առողջ թռչունին:",
            options: [
                "Նա քիչ է շարժվում",
                "Փետուրները փայլուն են և աչքերը մաքուր",
                "Հաճախ քնած է",
                "Շատ աղմկոտ է"
            ],
            correct: 1,
            explanation:
                "Առողջ թռչունն ակտիվ է, ունի փայլուն փետուրներ և մաքուր աչքեր։",
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
            <h1 className="text-3xl font-bold text-center mb-6 text-amber-800">
                🐦 Թռչունների Թեստ — Քննություն
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
                                className={`border rounded - lg px - 4 py - 2 cursor - pointer ${answers[qIndex] === oIndex
                                        ? "bg-amber-100 border-amber-400"
                                        : "hover:bg-gray-100"
                                    } `}
                            >
                                <input
                                    type="radio"
                                    name={`question - ${qIndex} `}
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
                        <h2 className="text-2xl font-bold text-center mb-4 text-amber-700">
                            🧾 Քննության Արդյունքներ
                        </h2>

                        {questions.map((q, i) => {
                            const userAnswer = answers[i];
                            const isCorrect = userAnswer === q.correct;
                            return (
                                <div
                                    key={i}
                                    className={`mb - 4 p - 4 rounded - lg ${isCorrect ? "bg-green-50" : "bg-red-50"
                                        } `}
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
                                            className={`font - bold ${isCorrect ? "text-green-600" : "text-red-600"
                                                } `}
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
                                className={`text - 2xl font - bold ${passed ? "text-green-700" : "text-red-700"
                                    } `}
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
