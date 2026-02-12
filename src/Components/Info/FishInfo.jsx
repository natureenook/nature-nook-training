import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const sections = [
    {
        title: "Ձկների ծագումն ու նախնիները 🐟",
        image: "public/Fish1.jpg",
        content:
            "Ձկները առաջացել են ավելի քան 500 միլիոն տարի առաջ՝ ջրային միջավայրում։ Նրանց նախնիները՝ կոշտկաշկային և փափկամարմին տեսակները, հիմնեցին առաջին ջրային էկոհամակարգերը, որոնք հետագայում հնարավորություն տվեցին էվոլյուցիային զարգանալ դեպի բոլոր ջրային միջավայրերը։",
    },
    {
        title: "Ձկների խնամքի հիմունքները 💧",
        image: "public/Fish2.jpg",
        content:
            "Ձկների համար կարևոր է ճիշտ ջերմաստիճանը, ջրի մաքրությունը և բավարար թթվածինը։ Ակվարիումի ջուրը պետք է պարբերաբար փոխել, սնուցումը լիներ չափավոր, իսկ լույսն ու թունավոր նյութերը հսկվեն՝ ձկների առողջությունը պահպանելու համար։",
    },
    {
        title: "Ինչից պետք է խուսափել ձկների դեպքում 🚫",
        image: "public/Fish3.jpg",
        content:
            "Ձկերին չի կարելի տալ մարդու սնունդ, աղոտ ջուր կամ թունավոր նյութեր։ Շատ տեսակի ձկներ զգայուն են քլորի, ծանր մետաղների և սննդային սխալ հավասարակշռության նկատմամբ։ Նվազագույն չափից դուրս սնուցումը նույնպես կարող է վնասել նրանց առողջությանը։",
    },
    {
        title: "Ձկների օգտակարությունը բնության մեջ 🌊💙",
        image: "public/Fish4.jpg",
        content:
            "Ձկները մասնակցում են էկոհամակարգի պահպանմանը՝ վերահսկելով միջատների և բջջային օրգանիզմների թիվը, ինչպես նաև նպաստում ջրային միջավայրի խոնավության հավասարակշռությանը։ Նրանք կարևոր են սննդի շղթայում և մարդկանց համար՝ հանգստության և ուսուցման աղբյուր։",
    },
    {
        title: "Ձկների զգայունությունը և հմտությունները 👁️",
        image: "public/Fish5.jpg",
        content:
            "Ձկները ունեն զարգացած զգայունություն՝ տեսողական, հոտառական և կողմնորոշման հմտություններ։ Որոշ տեսակներ կարողանում են ընկալել ջրի հոսքը, ճառագայթները և նույնիսկ մարդու գործողությունները՝ խուսափելու վտանգներից։",
    },
    {
        title: "Ձկների կյանքի տևողությունը ⏳🐠",
        image: "public/Fish4.jpg",
        content:
            "Ձկների կյանքի տևողությունը տարբեր է՝ փոքր ձկները ապրում են 1–3 տարի, միջին տեսակները՝ մինչև 10 տարի, իսկ մեծ ջրային ձկները կարող են հասնել 20–50 տարի։ Խնամքը, ջրի որակը և սնուցումը անմիջապես ազդում են նրանց երկարատև առողջության վրա։",
    },
    {
        title: "Առողջ ձկի նշանները 🐟✨",
        image: "public/Fish1.jpg",
        content:
            "Առողջ ձուկը ակտիվ է, ունի պայծառ ու ողջամիտ գունավորում, ակնառու շարժումներ և հստակ սերուցքային կամակատարմամբ վարք։ Ախորժակը նորմալ է, լողալը բնական, և լորձաթաղանթը մաքուր է։",
    },
];

export default function FishInfo() {
    const navigate = useNavigate();

    return (
        <div className="bg-[#E0F7FA] text-gray-800">
            <header className="bg-[#4FC3F7] text-white py-8 text-center relative">

                <h1 className="text-4xl font-bold">🌊 Բնության անկյուն — Ձկների մասին</h1>
                <p className="mt-2 text-lg">Ուսուցողական էջ՝ ձկների կարևոր տեղեկություններով</p>
            </header>
            <button
                onClick={() => navigate(-1)}
                className="absolute left-6 top-6 bg-white text-[#0288D1] font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-[#b3e5fc] transition"
            >
                ← Հետ
            </button>

            <main className="max-w-6xl mx-auto px-4 py-12 space-y-24">
                {sections.map((section, index) => (
                    <motion.section
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col md:flex-row items-center bg-[#B3E5FC] rounded-3xl shadow-2xl overflow-hidden"
                    >
                        <div className="md:w-1/2 h-64 md:h-auto">
                            <img
                                src={section.image}
                                alt={section.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="md:w-1/2 p-8 md:p-12">
                            <h2 className="text-3xl font-bold text-[#0288D1] mb-4">{section.title}</h2>
                            <p className="text-gray-700 text-lg leading-relaxed">{section.content}</p>
                        </div>
                        
                    </motion.section>
                ))}
            
            </main>
            <Link to="/FishQuiz"  className="text-3xl font-extrabold flex items-center justify-center border">Հարցեր</Link>
            <footer className="bg-[#4FC3F7] text-white py-8 text-center">
                <p className="text-lg">Մենք ստեղծում ենք ապագայի համար՝ միասին 🌿</p>
            </footer>
        </div>
    );
}
