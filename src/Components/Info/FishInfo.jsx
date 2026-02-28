import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const img = (name) => `${import.meta.env.BASE_URL}${name}`;

const sections = [
    {
        title: "Ձկների ծագումն ու նախնիները 🐟",
        image: img("Ձկների ծագումն ու նախնիները.png"),
        content:
            "Ձկները առաջացել են ավելի քան 500 միլիոն տարի առաջ՝ ջրային միջավայրում։ Նրանց նախնիները՝ կոշտկաշկային և փափկամարմին տեսակները, հիմնեցին առաջին ջրային էկոհամակարգերը, որոնք հետագայում հնարավորություն տվեցին էվոլյուցիային զարգանալ դեպի բոլոր ջրային միջավայրերը։",
    },
    {
        title: "Ձկների խնամքի հիմունքները 💧",
        image: img("Ձկների խնամքի հիմունքները.png"),
        content:
            "Ձկների համար կարևոր է ճիշտ ջերմաստիճանը, ջրի մաքրությունը և բավարար թթվածինը։ Ակվարիումի ջուրը պետք է պարբերաբար փոխել, սնուցումը լիներ չափավոր, իսկ լույսն ու թունավոր նյութերը հսկվեն՝ ձկների առողջությունը պահպանելու համար։",
    },
    {
        title: "Ինչից պետք է խուսափել ձկների դեպքում 🚫",
        image: img("Ինչից պետք է խուսափել ձկների դեպքում.png"),
        content:
            "Ձկերին չի կարելի տալ մարդու սնունդ, աղոտ ջուր կամ թունավոր նյութեր։ Շատ տեսակի ձկներ զգայուն են քլորի, ծանր մետաղների և սննդային սխալ հավասարակշռության նկատմամբ։ Նվազագույն չափից դուրս սնուցումը նույնպես կարող է վնասել նրանց առողջությանը։",
    },
    {
        title: "Ձկների օգտակարությունը բնության մեջ 🌊💙",
        image: img("Ձկների օգտակարությունը բնության մեջ.png"),
        content:
            "Ձկները մասնակցում են էկոհամակարգի պահպանմանը՝ վերահսկելով միջատների և բջջային օրգանիզմների թիվը, ինչպես նաև նպաստում ջրային միջավայրի խոնավության հավասարակշռությանը։ Նրանք կարևոր են սննդի շղթայում և մարդկանց համար՝ հանգստության և ուսուցման աղբյուր։",
    },
    {
        title: "Ձկների զգայունությունը և հմտությունները 👁️",
        image: img("Ձկների զգայունությունը և հմտությունները.png"),
        content:
            "Ձկները ունեն զարգացած զգայունություն՝ տեսողական, հոտառական և կողմնորոշման հմտություններ։ Որոշ տեսակներ կարողանում են ընկալել ջրի հոսքը, ճառագայթները և նույնիսկ մարդու գործողությունները՝ խուսափելու վտանգներից։",
    },
    {
        title: "Ձկների կյանքի տևողությունը ⏳🐠",
        image: img("Ձկների կյանքի տևողությունը.png"),
        content:
            "Ձկների կյանքի տևողությունը տարբեր է՝ փոքր ձկները ապրում են 1–3 տարի, միջին տեսակները՝ մինչև 10 տարի, իսկ մեծ ջրային ձկները կարող են հասնել 20–50 տարի։ Խնամքը, ջրի որակը և սնուցումը անմիջապես ազդում են նրանց երկարատև առողջության վրա։",
    },
    {
        title: "Առողջ ձկի նշանները 🐟✨",
        image: img("Առողջ ձկի նշանները.png"),
        content:
            "Առողջ ձուկը ակտիվ է, ունի պայծառ ու ողջամիտ գունավորում, ակնառու շարժումներ և հստակ սերուցքային կամակատարմամբ վարք։ Ախորժակը նորմալ է, լողալը բնական, և լորձաթաղանթը մաքուր է։",
    },
];

export default function FishInfo() {
    const navigate = useNavigate();

    return (
        <div className="bg-[#E0F7FA] text-gray-800 mt-15">
            <button
                onClick={() => navigate(-1)}
                className="absolute left-6 top-20 bg-white text-[#0288D1] font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-[#b3e5fc] transition z-10"
            >
                ← Հետ
            </button>

            <main className="max-w-6xl mx-auto px-4 py-8 md:py-12 space-y-12 md:space-y-24">
                {sections.map((section, index) => (
                    <motion.section
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col md:flex-row items-center bg-[#B3E5FC] rounded-3xl shadow-2xl overflow-hidden"
                    >
                        <div className="md:w-1/2 h-64 md:h-auto min-h-[250px]">
                            <img
                                src={section.image}
                                alt={section.title}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>

                        <div className="md:w-1/2 p-6 md:p-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#0288D1] mb-4">
                                {section.title}
                            </h2>
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                {section.content}
                            </p>
                        </div>
                    </motion.section>
                ))}
            </main>

            <div className="flex justify-center items-center pb-10">
                <Link
                    to="/FishQuiz"
                    className="text-lg font-bold px-8 py-4 rounded-2xl bg-white text-[#0288D1] shadow-lg hover:bg-[#b3e5fc] transition"
                >
                    Հարցեր
                </Link>
            </div>
        </div>
    );
}