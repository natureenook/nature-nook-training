import React, { useState } from "react";

export default function PlantQuiz() {
    const questions = [
        {
            question: "Որ գործընթացի շնորհիվ են բույսերը արտադրում իրենց սնունդը?",
            options: ["Գենետիկ մուտացիա", "Ֆոտոսինթեզ", "Գեոտրոպիզմ", "Թերմոռեգուլյացիա"],
            correct: 1,
            explanation:
                "Ֆոտոսինթեզի ընթացքում բույսերը արևի լույսի օգնությամբ արտադրում են գլյուկոզ՝ իրենց սննդի աղբյուրը։",
        },
        {
            question: "Որն է բույսի այն մասը, որը կլանում է ջուրը հողից?",
            options: ["Տերևները", "Ճյուղերը", "Արմատները", "Ծաղիկը"],
            correct: 2,
            explanation:
                "Արմատները կլանում են ջուրն ու հանքանյութերը՝ ապահովելով բույսի սնուցումը։",
        },
        {
            question: "Որ բույսն է համարվում աշխարհի ամենաարագ աճողը?",
            options: ["Բամբուկ", "Ալոե Վերա", "Լիլիում", "Կակտուս"],
            correct: 0,
            explanation:
                "Բամբուկը կարող է աճել մինչև 90 սմ մեկ օրում՝ դառնալով ամենաարագ աճող բույսը։",
        },
        {
            question: "Որ բույսն է հայտնի որպես «անմահության բույս»?",
            options: ["Խունկ", "Ալոե Վերա", "Ճանճաբույս", "Թեյի ծառ"],
            correct: 1,
            explanation:
                "Ալոե Վերան հին Եգիպտոսում կոչվում էր «անմահության բույս»՝ իր բուժիչ հատկությունների պատճառով։",
        },
        {
            question: "Ինչու են որոշ բույսերի տերևները փակում գիշերը?",
            options: ["Լույսից վախենալու պատճառով", "Ջերմությունը պահպանելու համար", "Օդի խոնավությունը չափելու համար", "Քնելու համար"],
            correct: 1,
            explanation:
                "Շատ բույսեր գիշերը փակում են տերևները՝ ջերմությունը պահպանելու և գոլորշիացումը նվազեցնելու համար։",
        },
        {
            question: "Որ բույսն է արտադրում ամենաշատ թթվածինը?",
            options: ["Ծովային ջրիմուռներ", "Ամազոնյան ծառեր", "Կակտուսներ", "Թուփեր"],
            correct: 0,
            explanation:
                "Ծովային ջրիմուռները մթնոլորտի թթվածնի մոտ 70%-ը արտադրում են։",
        },
        {
            question: "Որ բույսն է հայտնի իր մսակեր բնույթով?",
            options: ["Ռոզա", "Վեներայի թակարդ", "Ճանճաբույս", "Կակտուս"],
            correct: 1,
            explanation:
                "Վեներայի թակարդը (Venus Flytrap) մսակեր բույս է, որը փակում է իր թակարդը, երբ միջատ է դիպչում։",
        },
        {
            question: "Ինչու են կակտուսները գրեթե առանց տերևների?",
            options: ["Որպեսզի քիչ ջուր կորցնեն", "Քամուց պաշտպանվելու համար", "Քնի ռեժիմի պատճառով", "Մեծանալու համար"],
            correct: 0,
            explanation:
                "Կակտուսների տերևները վերածվել են փշերի՝ ջրի գոլորշիացումը նվազեցնելու և կենդանիներից պաշտպանվելու համար։",
        },
        {
            question: "Որն է ծառի տարեկան աճի մատնանշող տարրը?",
            options: ["Արմատային երկարությունը", "Ճյուղերի քանակը", "Կեղևի գույնը", "Տար Rings-երը (տարիքային օղակները)"],
            correct: 3,
            explanation:
                "Յուրաքանչյուր օղակ ծառի կտրած հատվածում ցույց է տալիս մեկ տարվա աճը։",
        },
        {
            question: "Որ բույսն է հայտնի իր մաքրող հատկություններով՝ օդը ֆիլտրելու ունակությամբ?",
            options: ["Սպատաֆիլլում", "Կակտուս", "Թեյի ծառ", "Բամբուկ"],
            correct: 0,
            explanation:
                "Սպատաֆիլլումը (Peace Lily) հայտնի է օդից վնասակար նյութեր հեռացնելու ունակությամբ։",
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
            <h1 className="text-3xl font-bold text-center mb-6 text-green-800">
                🌱 Բույսերի Թեստ — Քննություն
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
                                    ? "bg-green-100 border-green-400"
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
                    className="bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-green-700 transition"
                >
                    Ստուգել քննությունը
                </button>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-start pt-10 z-50">
                    <div className="bg-white rounded-2xl shadow-2xl w-11/12 max-w-4xl p-6 overflow-y-auto max-h-[80vh]">
                        <h2 className="text-2xl font-bold text-center mb-4 text-green-700">
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
                                className="mt-4 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
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
