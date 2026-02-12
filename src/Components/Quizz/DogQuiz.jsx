import React, { useState } from "react";

export default function DogQuiz() {
    const questions = [
        {
            question: "Որ կենդանուց են սերում շները ըստ հետազոտությունների?",
            options: ["Գայլից", "Աղվեսից", "Կատուից", "Արջից"],
            correct: 0,
            explanation:
                "Շները սերում են գայլերից՝ ըստ գենետիկական և հնագիտական հետազոտությունների։",
        },
        {
            question: "Ե՞րբ է ձևավորվել մարդու և գայլի կապը՝ ըստ գիտնականների:",
            options: [
                "1000 տարի առաջ",
                "5000 տարի առաջ",
                "15,000–30,000 տարի առաջ",
                "100,000 տարի առաջ",
            ],
            correct: 2,
            explanation:
                "Մարդու և գայլի կապը ձևավորվել է ավելի քան 15,000–30,000 տարի առաջ։",
        },
        {
            question: "Ի՞նչ տարիքից է սկսվում շների վարժեցումը:",
            options: ["1 ամսականից", "3 ամսականից", "6 ամսականից", "1 տարեկանից"],
            correct: 1,
            explanation:
                "Շների վարժեցումը սկսվում է մոտ 3 ամսականում, երբ նրանք արդեն հասկանում են հրամաններ։",
        },
        {
            question: "Ի՞նչ մոտեցում է կարևոր շան վարժեցման ժամանակ:",
            options: [
                "Խիստ վերաբերմունք",
                "Պոզիտիվ մոտեցում և համբերություն",
                "Ամենօրյա պատիժներ",
                "Սնունդ չտալ",
            ],
            correct: 1,
            explanation:
                "Շների վարժեցման հիմքում են համբերությունը, պոզիտիվ մոտեցումը և կանոնավոր վարժությունները։",
        },
        {
            question: "Որ մթերքը վտանգավոր է շների համար?",
            options: ["Խնձոր", "Շոկոլադ", "Բրինձ", "Բանջարեղեն"],
            correct: 1,
            explanation:
                "Շոկոլադը պարունակում է թեոբրոմին, որը վնասակար է շների սրտի և նյարդային համակարգի համար։",
        },
        {
            question: "Ինչ է շունը տալիս մարդուն՝ բացի ընկերությունից?",
            options: [
                "Միայն սեր",
                "Պաշտպանություն և բուժիչ ազդեցություն",
                "Միայն ուրախություն",
                "Մաքուր տուն",
            ],
            correct: 1,
            explanation:
                "Շները տալիս են սեր, պաշտպանություն և անգամ բուժիչ ազդեցություն՝ սթրեսի ու անքնության դեմ։",
        },
        {
            question: "Որ զգայությունն է շների մոտ ամենազարգացածը?",
            options: ["Տեսողությունը", "Հոտառությունը", "Շոշափումը", "Համը"],
            correct: 1,
            explanation:
                "Շները ունեն արտակարգ հզոր հոտառություն՝ մոտ 40 անգամ ուժեղ քան մարդու մոտ։",
        },
        {
            question: "Որն է շների միջին կյանքի տևողությունը?",
            options: ["3-5 տարի", "7-9 տարի", "10-13 տարի", "15-20 տարի"],
            correct: 2,
            explanation:
                "Շների միջին կյանքի տևողությունը 10–13 տարի է՝ կախված ցեղատեսակից և խնամքից։",
        },
        {
            question: "Ինչպես է երևում, որ շունը առողջ է?",
            options: [
                "Քնկոտ է ու չի ուտում",
                "Ակտիվ է, փայլուն մաշկ ու մաքուր աչքեր ունի",
                "Շատ է հաչում",
                "Անընդհատ քորում է իրեն",
            ],
            correct: 1,
            explanation:
                "Առողջ շունը ակտիվ է, ունի լավ ախորժակ, մաքուր մաշկ և փայլուն աչքեր։",
        },
        {
            question: "Ինչ կարող է երկարացնել շան կյանքը?",
            options: [
                "Շոկոլադ տալը",
                "Սիրով խնամքն ու առողջ սնունդը",
                "Ավելի շատ քնելը",
                "Հաճախակի լողացնելը",
            ],
            correct: 1,
            explanation:
                "Առողջ սնունդը, կանոնավոր զբոսանքներն ու սիրով վերաբերմունքը երկարացնում են շան կյանքը։",
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
                🐾 Շների Թեստ — Քննություն
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
                        <h2 className="text-2xl font-bold text-center mb-4 text-amber-700">
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
