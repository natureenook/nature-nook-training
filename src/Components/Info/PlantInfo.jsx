import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const sections = [
    {
        title: "Բույսերի գաղտնի նախնիները 🌱",
        image: "public/Plant1.jpg",
        content:
            "Բույսերի նախնիները ծնվել են հնագույն օվկիանոսներում՝ որպես մանր ջրային ջրիմուռներ։ Հազարավոր տարիների ընթացքում նրանք «բարձրացան» ցամաք՝ ձևավորելով արմատներ, ցողուն և տերևներ։ Այս հեղափոխությունը կյանք տվեց Երկրի կանաչությանը։",
    },
    {
        title: "Բույսերի խնամքի արվեստը 🌿💧",
        image: "public/Plant2.jpg",
        content:
            "Բույսերը սիրում են հավասարակշռություն՝ ոչ շատ ջուր, ոչ քիչ լույս։ Ջրիր ըստ հողի չորացման, ապահովիր արևի մեղմ ճառագայթներ և երբեմն մաքրիր տերևները փոշուց՝ որպեսզի նրանք կարողանան ազատ շնչել ու աճել։",
    },
    {
        title: "Ինչից պետք է խուսափել բույսերի դեպքում 🚫☀️",
        image: "public/Plant3.jpg",
        content:
            "Բույսերին չի կարելի թողնել ուղիղ արևի տակ երկար ժամանակ, չպետք է գերաջրել կամ տեղափոխել կտրուկ ջերմաստիճանային տարբերություններով միջավայր։ Նրանք նուրբ են՝ ինչպես կենդանի էակներ։",
    },
    {
        title: "Բույսերի անգնահատելի օգուտը մարդուն 🌍💚",
        image: "public/Plant4.jpg",
        content:
            "Բույսերը մաքրում են օդը՝ կլանելով ածխաթթու գազը և արձակելով թթվածին։ Նրանք նվազեցնում են սթրեսը, բարելավում տրամադրությունը և ստեղծում ներդաշնակ միջավայր թե տանը, թե քաղաքում։ Բնությունը՝ մեր կանաչ դեղատունն է։",
    },
    {
        title: "Բույսերի զգայուն աշխարհը 🌞🌿",
        image: "public/Plant5.jpg",
        content:
            "Թեպետ բույսերը չունեն նյարդային համակարգ, նրանք զգում են լույսի ուղղությունը, ջերմաստիճանը և նույնիսկ ձայնի տատանումները։ Որոշ բույսեր փակվում են մթնելիս, իսկ մյուսները՝ արձագանքում են մարդու ձայնին։",
    },
    {
        title: "Բույսերի կյանքի կախարդանքը 🌸⏳",
        image: "public/Plant2.jpg",
        content:
            "Բույսերի կյանքը չափվում է ոչ թե տարիներով, այլ շրջապատին բերած գեղեցկությամբ։ Որոշ ծաղիկներ ապրում են օրեր, մյուսները՝ տասնամյակներ, իսկ հսկա ծառերը՝ հազարավոր տարիներ՝ դառնալով ժամանակի կենդանի վկաներ։",
    },
    {
        title: "Առողջ բույսի նշանները 🌿✨",
        image: "public/Plant1.jpg",
        content:
            "Առողջ բույսն ունի մաքուր, փայլուն տերևներ, ամուր ցողուն և աճի հավասարակշռված ձև։ Եթե նա կանաչ է, ուղղահայաց և գոհ է իր միջավայրից՝ նա քեզ շնորհակալ է լույսի, ջրի և սիրո համար։",
    },
];


export default function PlantInfo() {
    const navigate = useNavigate();

    return (
        <div className="bg-[#E6F5E6] text-gray-800">
            <header className="bg-[#A8D5A2] text-white py-8 text-center px-4">
                <h1 className="text-2xl md:text-4xl font-bold">🌿 Բնության անկյուն — Բույսերի մասին</h1>
                <p className="mt-2 text-base md:text-lg">Ուսուցողական էջ՝ բույսերի կարևոր տեղեկություններով</p>
            </header>
            <button
                onClick={() => navigate(-1)}
                className=" cursor-pointer absolute left-6 top-6 bg-white text-[#7FB77E] font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-[#d9f2de] transition z-10"
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
                        className="flex flex-col md:flex-row items-center bg-[#D8F0D2] rounded-3xl shadow-2xl overflow-hidden"
                    >
                        <div className="md:w-1/2 h-64 md:h-auto min-h-[250px]">
                            <img
                                src={section.image}
                                alt={section.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="md:w-1/2 p-6 md:p-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#A8D5A2] mb-4">{section.title}</h2>
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed">{section.content}</p>
                        </div>
                    </motion.section>
                ))}
            </main>

            <footer className="bg-[#A8D5A2] text-white py-8 text-center">
                <p className="text-lg">Մենք ստեղծում ենք ապագայի համար՝ միասին 🌿</p>
            </footer>
        </div>
    );
}
