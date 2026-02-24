import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const sections = [
    {
        title: "Թռչունների հիանալի ծագումը 🦖➡️🕊",
        image: "public/Bird3.jpg",
        content:
            "Գիտե՞ս, որ թռչունները դինոզավրերի ժառանգներն են։ 🦖 Նրանք սերում են թերոպոդներից՝ մսակեր դինոզավրերից, ինչպիսին էր վելոցիրապտորը։ Ամենահին հայտնի թռչունը՝ «Արկեոպտերիքսը», ունեցել է թե՛ փետուրներ, թե՛ ատամներ ու երկար պոչ՝ միավորելով դինոզավրերի և ժամանակակից թռչունների հատկանիշները։",
    },
    {
        title: "Թռչելու գաղտնիքը ✈️🐦",
        image: "public/Bird2.jpg",
        content:
            "Թռչունները կարողանում են թռչել շնորհիվ իրենց թեթև կմախքի, հզոր թևերի մկանների և փետուրների յուրահատուկ կառուցվածքի։ Նրանց ոսկորները խոռոչ են՝ լցված օդով, ինչը նվազեցնում է քաշը։ Ավելին՝ յուրաքանչյուր թևի շարժումը ճշգրիտ հաշվարկված է՝ ապահովելու վերելք և կայունություն օդում։",
    },
    {
        title: "Թռչունների գույների կախարդանքը 🎨✨",
        image: "public/Bird1.jpg",
        content:
            "Թռչունների փետուրների գույները ոչ միայն գեղեցկության, այլև գոյատևման համար են։ Գույները օգնում են քողարկվել թշնամիներից կամ գրավել զուգընկերոջ ուշադրությունը։ Օրինակ՝ տուկանը և թութակը ունեն պայծառ գույներ՝ կապակցված արևադարձային միջավայրի հետ։",
    },
    {
        title: "Ինչ չի կարելի տալ թռչուններին 🚫🍫",
        image: "public/Bird4.jpg",
        content:
            "Թռչունների մարսողական համակարգը շատ նուրբ է։ Վտանգավոր են՝ շոկոլադը (պարունակում է թեոբրոմին), ավոկադոն (թունավոր է որոշ տեսակների համար), կոֆեինը, աղը և յուղոտ սնունդները։ Թռչունին երբեք մի՛ տուր նաև հին կամ փչացած հաց՝ այն կարող է առաջացնել հիվանդություն։ 🩺",
    },
    {
        title: "Թռչունների օգտակար դերը բնության մեջ 🌍🐦",
        image: "public/Bird5.jpg",
        content:
            "Թռչունները պահպանողական են բնության հավասարակշռության մեջ․ նրանք փոշոտում են բույսերը, վերահսկում միջատների քանակը և տարածում սերմեր։ Օրինակ՝ կոլիբրիները փոշոտման վարպետներ են, իսկ ագռավները՝ իսկական էկոհամակարգի մաքրողներ։ Մարդկանց համար նրանք նաև խորհրդանշում են ազատություն ու ներդաշնակություն։ 🕊💚",
    },
    {
        title: "Թռչունների զգայությունները և հմտությունները 👁👂🧭",
        image: "public/bird6 (2).jpg",
        content:
            "Թռչուններն ունեն հզոր տեսողություն՝ 4 անգամ ավելի սուր, քան մարդու մոտ։ Բազենը կարող է տեսնել իր որսը 1 կմ հեռավորությունից։ Որոշ տեսակներ՝ ինչպես աղավնիները, կարողանում են կողմնորոշվել Երկրի մագնիսական դաշտով։ Իսկ ջրային թռչունները ունեն հատուկ թաղանթ՝ աչքերը ջրի տակ պաշտպանելու համար։",
    },
    {
        title: "Թռչունների կյանքի տևողությունը և հավատարմությունը 💞🕊",
        image: "public/bird6 (1).jpg",
        content:
            "Թռչունների կյանքի տևողությունը տարբեր է՝ փոքր թիթեռներն ապրում են ընդամենը 2–3 տարի, մինչդեռ թութակները՝ մինչև 70 տարի։ Շատ տեսակներ ապրում են զույգերով ողջ կյանքում՝ օրինակ՝ կարապները և աղավնիները հայտնի են իրենց հավատարիմ զուգընկերությամբ։ 💞",
    },
    {
        title: "Ինչպես ճանաչել առողջ թռչունին 🩺🐥",
        image: "public/bird6 (3).jpg",
        content:
            "Առողջ թռչունն ունի փայլուն փետուրներ, մաքուր աչքեր, ակտիվություն և հստակ երգ։ Եթե նա պասիվ է, քիչ է ուտում կամ փետուրները փշաքաղված են՝ դա կարող է լինել հիվանդության նշան։ Լավ խնամքը և վիտամիններով հարուստ սնունդը երաշխավորում են նրա երկար և երջանիկ կյանքը։ 🐤🌿",
    },
];

export default function BirdInfo() {
    const navigate = useNavigate();

    return (
        <div className="bg-[#E3F6F5] text-gray-800">
            <header className="bg-[#7FB77E] text-white py-8 text-center relative px-4">

                <h1 className="text-2xl md:text-4xl font-bold">🐦 Բնության անկյուն — Թռչունների մասին</h1>
                <p className="mt-2 text-base md:text-lg">Ուսուցողական էջ՝ թռչունների կարևոր տեղեկություններով</p>
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
                        className="flex flex-col md:flex-row items-center bg-[#A8D5BA] rounded-3xl shadow-2xl overflow-hidden"
                    >
                        <div className="md:w-1/2 h-64 md:h-auto min-h-[250px]">
                            <img
                                src={section.image}
                                alt={section.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="md:w-1/2 p-6 md:p-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#7FB77E] mb-4">{section.title}</h2>
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed">{section.content}</p>
                        </div>
                    </motion.section>
                ))}
            </main>

            <footer className="bg-[#7FB77E] text-white py-8 text-center">
                <p className="text-lg">Մենք ստեղծում ենք ապագայի համար՝ միասին 🌿</p>
            </footer>
        </div>
    );
}
