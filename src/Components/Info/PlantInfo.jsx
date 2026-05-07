import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
    ArrowLeft,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    Droplets,
    HelpCircle,
    Leaf,
    ShieldCheck,
    Sparkles,
    Sprout,
    SunMedium,
    TreePine,
} from "lucide-react";

const img = (name) => {
    const base = import.meta.env.BASE_URL || "/";
    return new URL(base + name, window.location.origin).toString();
};

const slides = [
    {
        id: 1,
        title: "Բույսերի կախարդական աշխարհը",
        text: "Բույսերը մեր մոլորակի թթվածնի աղբյուրն են և կյանքի կարևոր հիմքը։",
        image: img("Plant1.jpg"),
    },
    {
        id: 2,
        title: "Տան կանաչ էներգիան",
        text: "Սենյակային բույսերը զարդարում են տունը, մաքրում օդը և ստեղծում խաղաղ միջավայր։",
        image: img("Plant2.jpg"),
    },
    {
        id: 3,
        title: "Բույսերի լեզուն",
        text: "Բույսերը չեն խոսում, բայց արձագանքում են լույսին, ջրին, ջերմությանը և միջավայրին։",
        image: img("Plant3.jpg"),
    },
    {
        id: 4,
        title: "Բույսերի գաղտնի ուժը",
        text: "Շատ բույսեր ունեն օգտակար հատկություններ և օգնում են ստեղծել առողջ ու ներդաշնակ մթնոլորտ։",
        image: img("Plant4.jpg"),
    },
    {
        id: 5,
        title: "Բնության հավերժ շունչը",
        text: "Ծառերն ու բույսերը պահպանում են մոլորակի հավասարակշռությունը և կյանքի շարունակությունը։",
        image: img("Plant5.jpg"),
    },
];

const sections = [
    {
        title: "Բույսերի գաղտնի նախնիները",
        image: img("Բույսերի գաղտնի նախնիները.png"),
        content:
            "Բույսերի նախնիները ծնվել են հնագույն օվկիանոսներում՝ որպես մանր ջրային ջրիմուռներ։ Հազարավոր տարիների ընթացքում նրանք բարձրացան ցամաք՝ ձևավորելով արմատներ, ցողուն և տերևներ։ Այս հեղափոխությունը կյանք տվեց Երկրի կանաչությանը։",
    },
    {
        title: "Բույսերի խնամքի արվեստը",
        image: img("Բույսերի խնամքի արվեստը.png"),
        content:
            "Բույսերը սիրում են հավասարակշռություն՝ ոչ շատ ջուր, ոչ քիչ լույս։ Ջրիր ըստ հողի չորացման, ապահովիր արևի մեղմ ճառագայթներ և երբեմն մաքրիր տերևները փոշուց, որպեսզի նրանք կարողանան ազատ շնչել ու աճել։",
    },
    {
        title: "Ինչից պետք է խուսափել բույսերի դեպքում",
        image: img("Ինչից պետք է խուսափել բույսերի դեպքում.png"),
        content:
            "Բույսերին չի կարելի թողնել ուղիղ արևի տակ երկար ժամանակ, չպետք է գերաջրել կամ տեղափոխել կտրուկ ջերմաստիճանային տարբերություններով միջավայր։ Նրանք նուրբ են՝ ինչպես կենդանի էակներ։",
        warning:
            "Գերաջրումը, ուժեղ ուղիղ արևը և կտրուկ ջերմաստիճանային փոփոխությունները բույսերի ամենատարածված վնասող պատճառներից են։",
    },
    {
        title: "Բույսերի անգնահատելի օգուտը մարդուն",
        image: img("Բույսերի անգնահատելի օգուտը մարդուն.png"),
        content:
            "Բույսերը մաքրում են օդը՝ կլանելով ածխաթթու գազը և արձակելով թթվածին։ Նրանք նվազեցնում են սթրեսը, բարելավում տրամադրությունը և ստեղծում ներդաշնակ միջավայր թե տանը, թե քաղաքում։ Բնությունը մեր կանաչ դեղատունն է։",
    },
    {
        title: "Բույսերի զգայուն աշխարհը",
        image: img("Բույսերի զգայուն աշխարհը.png"),
        content:
            "Թեպետ բույսերը չունեն նյարդային համակարգ, նրանք զգում են լույսի ուղղությունը, ջերմաստիճանը և միջավայրի փոփոխությունները։ Որոշ բույսեր փակվում են մթնելիս, իսկ մյուսները արձագանքում են խնամքին և ճիշտ պայմաններին։",
    },
    {
        title: "Բույսերի կյանքի կախարդանքը",
        image: img("Բույսերի կյանքի կախարդանքը.png"),
        content:
            "Բույսերի կյանքը չափվում է ոչ միայն տարիներով, այլև շրջապատին բերած գեղեցկությամբ։ Որոշ ծաղիկներ ապրում են օրեր, մյուսները՝ տասնամյակներ, իսկ հսկա ծառերը՝ հազարավոր տարիներ՝ դառնալով ժամանակի կենդանի վկաներ։",
    },
    {
        title: "Առողջ բույսի նշանները",
        image: img("Առողջ բույսի նշանները.png"),
        content:
            "Առողջ բույսն ունի մաքուր, փայլուն տերևներ, ամուր ցողուն և աճի հավասարակշռված ձև։ Եթե բույսը կանաչ է, ուղղահայաց և գոհ է իր միջավայրից, դա ցույց է տալիս, որ լույսը, ջուրը և խնամքը ճիշտ են ընտրված։",
    },
    {
        title: "Բույսերի ճիշտ ջրման կանոնները",
        image: img("Բույսերի ճիշտ ջրման կանոնները.png"),
        content:
            "Բույսերի մեծ մասը ավելի շատ վնասվում է գերաջրումից, քան չորությունից։ Ջրիր միայն այն ժամանակ, երբ հողի վերին շերտը չորացել է, և միշտ թող, որ ավելորդ ջուրը դուրս գա ծակերից։ Լավ է ջրել առավոտյան կամ երեկոյան։",
    },
    {
        title: "Լույսի դերը բույսերի աճում",
        image: img("Լույսի դերը բույսերի աճում.png"),
        content:
            "Լույսը բույսի էներգիայի աղբյուրն է, բայց բոլոր բույսերը նույն լույսը չեն սիրում։ Ոմանք սիրում են պայծառ, բայց անուղղակի լույս, իսկ մյուսները՝ ավելի ստվերոտ միջավայր։ Եթե բույսը ձգվում է դեպի պատուհան՝ լույսը քիչ է, իսկ եթե տերևներին այրված բծեր են հայտնվում՝ լույսը շատ է։",
    },
    {
        title: "Բույսերի վնասատուները և պաշտպանությունը",
        image: img("Բույսերի վնասատուները և պաշտպանությունը.png"),
        content:
            "Բույսերի ամենատարածված խնդիրներից են սարդոստայնային տիզերը, թրիպսները և լվերը։ Վաղ նշաններն են տերևների կետերը, կպչուն շերտը, ծալված կամ թափվող տերևները։ Կանխարգելման համար պահիր բույսը մաքուր և նոր բույսերը մի քանի օր պահիր առանձնացված։",
        warning:
            "Եթե վնասատուները շատացել են, բույսը առանձնացրու մյուսներից և ընտրիր համապատասխան խնամքի միջոց։",
    },
];

export default function PlantInfo() {
    const navigate = useNavigate();
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrent(index);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#f6fbf7] text-[#102018] font-[Montserrat]">
            {/* Ֆոն */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-44 left-1/2 h-[560px] w-[820px] -translate-x-1/2 rounded-full bg-emerald-100/85 blur-[125px]" />
                <div className="absolute top-[20%] -left-40 h-[420px] w-[420px] rounded-full bg-lime-100/90 blur-[115px]" />
                <div className="absolute top-[42%] right-[6%] h-[330px] w-[330px] rounded-full bg-green-100/90 blur-[105px]" />
                <div className="absolute bottom-[7%] -right-40 h-[480px] w-[480px] rounded-full bg-emerald-100/80 blur-[130px]" />

                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,251,247,0.55),rgba(246,251,247,1))]" />

                <div className="absolute inset-0 opacity-[0.28] bg-[linear-gradient(to_right,rgba(16,32,24,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,32,24,0.055)_1px,transparent_1px)] bg-[size:52px_52px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-24 sm:px-6 lg:px-8">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/85 px-5 py-3 text-sm font-black text-[#183528] shadow-[0_14px_45px_rgba(16,32,24,0.07)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-white"
                >
                    <ArrowLeft size={18} />
                    Հետ
                </button>

                {/* Hero */}
                <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
                    <motion.div
                        className="relative overflow-hidden rounded-[46px] border border-emerald-100 bg-white/85 p-6 shadow-[0_30px_100px_rgba(16,32,24,0.09)] backdrop-blur-2xl sm:p-8 md:p-10"
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75, ease: "easeOut" }}
                    >
                        <div className="pointer-events-none absolute -right-28 -top-28 h-96 w-96 rounded-full bg-emerald-100 blur-[65px]" />
                        <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-lime-100 blur-[65px]" />

                        <div className="relative z-10 flex min-h-[560px] flex-col justify-between">
                            <div>
                                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-[#f6fbf7] px-4 py-2 text-sm font-bold text-emerald-800">
                                    <Sprout size={16} className="text-emerald-700" />
                                    Բույսերի ուսուցողական բաժին
                                </div>

                                <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.06em] text-[#102018] sm:text-5xl md:text-6xl lg:text-7xl">
                                    Կանաչ խնամք՝{" "}
                                    <span className="text-emerald-700">
                                        լույսով, ջրով և սիրով
                                    </span>
                                </h1>

                                <p className="mt-7 max-w-2xl text-base leading-8 text-[#607269] sm:text-lg">
                                    Սովորիր բույսերի ծագման, ճիշտ ջրման, լույսի, առողջության
                                    նշանների և վնասատուներից պաշտպանության մասին՝ մաքուր ու
                                    բնական դիզայնով։
                                </p>

                                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                                    <a
                                        href="#plant-garden"
                                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#16834f] px-7 py-4 text-sm font-black text-white shadow-[0_18px_50px_rgba(22,131,79,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-[#106b41]"
                                    >
                                        Սկսել ուսումնասիրությունը
                                        <ArrowRight
                                            size={18}
                                            className="transition group-hover:translate-x-1"
                                        />
                                    </a>

                                    <a
                                        href="#plant-lessons"
                                        className="inline-flex items-center justify-center rounded-full border border-emerald-100 bg-white px-7 py-4 text-sm font-black text-[#183528] shadow-[0_16px_45px_rgba(16,32,24,0.055)] transition duration-300 hover:-translate-y-1 hover:border-emerald-200"
                                    >
                                        Կարդալ նյութերը
                                    </a>
                                </div>
                            </div>

                            <div className="mt-12 grid gap-3 sm:grid-cols-3">
                                <div className="rounded-[28px] border border-emerald-100 bg-[#f6fbf7] p-5">
                                    <p className="text-3xl font-black text-[#102018]">10</p>
                                    <p className="mt-1 text-sm font-semibold text-[#6b7c72]">
                                        Նյութ
                                    </p>
                                </div>

                                <div className="rounded-[28px] border border-emerald-100 bg-[#f6fbf7] p-5">
                                    <p className="text-3xl font-black text-[#102018]">5</p>
                                    <p className="mt-1 text-sm font-semibold text-[#6b7c72]">
                                        Սլայդ
                                    </p>
                                </div>

                                <div className="rounded-[28px] border border-emerald-100 bg-[#f6fbf7] p-5">
                                    <p className="text-3xl font-black text-[#102018]">Աճ</p>
                                    <p className="mt-1 text-sm font-semibold text-[#6b7c72]">
                                        Խնամքի հիմք
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Garden slider */}
                    <motion.div
                        id="plant-garden"
                        className="relative overflow-hidden rounded-[46px] border border-emerald-100 bg-white/85 p-4 shadow-[0_30px_100px_rgba(16,32,24,0.09)] backdrop-blur-2xl sm:p-5"
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75, ease: "easeOut", delay: 0.12 }}
                    >
                        <div className="relative h-[560px] overflow-hidden rounded-[36px] bg-[#102018]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={slides[current].id}
                                    className="absolute inset-0"
                                    initial={{ opacity: 0, scale: 1.04 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ duration: 0.65, ease: "easeOut" }}
                                >
                                    <img
                                        src={slides[current].image}
                                        alt={slides[current].title}
                                        className="h-full w-full object-cover"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#102018]/90 via-[#102018]/35 to-transparent" />

                                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/15 px-4 py-2 text-sm font-bold text-white backdrop-blur-xl">
                                            <Sparkles size={16} />
                                            Ընտրված թեմա
                                        </div>

                                        <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl">
                                            {slides[current].title}
                                        </h2>

                                        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
                                            {slides[current].text}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/15 text-white backdrop-blur-xl transition hover:bg-white/25"
                                aria-label="Նախորդ սլայդ"
                            >
                                <ChevronLeft size={24} />
                            </button>

                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/15 text-white backdrop-blur-xl transition hover:bg-white/25"
                                aria-label="Հաջորդ սլայդ"
                            >
                                <ChevronRight size={24} />
                            </button>

                            <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`h-2.5 rounded-full transition-all ${index === current
                                                ? "w-8 bg-white"
                                                : "w-2.5 bg-white/45 hover:bg-white/75"
                                            }`}
                                        aria-label={`Սլայդ ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Care highlight */}
                <section className="mt-12 grid gap-5 md:grid-cols-3">
                    {[
                        {
                            title: "Ճիշտ ջրում",
                            text: "Ջրիր ըստ հողի չորացման, ոչ թե սովորությամբ։",
                            icon: Droplets,
                        },
                        {
                            title: "Մեղմ լույս",
                            text: "Բույսերի մեծ մասը սիրում է պայծառ, բայց անուղղակի լույս։",
                            icon: SunMedium,
                        },
                        {
                            title: "Մաքուր տերևներ",
                            text: "Տերևների մաքրությունը օգնում է բույսին շնչել և աճել։",
                            icon: Leaf,
                        },
                    ].map((item) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{ duration: 0.65, ease: "easeOut" }}
                                className="rounded-[36px] border border-emerald-100 bg-white/85 p-6 shadow-[0_20px_70px_rgba(16,32,24,0.065)] backdrop-blur-2xl"
                            >
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-50">
                                    <Icon size={25} className="text-emerald-700" />
                                </div>

                                <h3 className="text-xl font-black tracking-[-0.03em] text-[#102018]">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-[#607269]">
                                    {item.text}
                                </p>
                            </motion.div>
                        );
                    })}
                </section>

                {/* Lessons */}
                <section id="plant-lessons" className="mt-14">
                    <div className="mb-8 text-center">
                        <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/85 px-4 py-2 text-sm font-bold text-emerald-800 shadow-[0_14px_35px_rgba(16,32,24,0.05)]">
                            <TreePine size={16} className="text-emerald-700" />
                            Կանաչ նյութեր
                        </div>

                        <h2 className="text-3xl font-black tracking-[-0.04em] text-[#102018] sm:text-4xl md:text-5xl">
                            Բույսերի խնամքի կարևոր թեմաներ
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#607269] sm:text-base">
                            Յուրաքանչյուր նյութ օգնում է ավելի լավ հասկանալ բույսերի կարիքները
                            և խնամքի հիմնական կանոնները։
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {sections.map((section, index) => (
                            <motion.article
                                key={section.title}
                                initial={{ opacity: 0, y: 45 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.22 }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                className="group relative flex h-full flex-col overflow-hidden rounded-[40px] border border-emerald-100 bg-white/85 p-4 shadow-[0_22px_75px_rgba(16,32,24,0.07)] backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_30px_95px_rgba(22,131,79,0.11)]"
                            >
                                <div className="relative h-[250px] overflow-hidden rounded-[32px] bg-emerald-50">
                                    <img
                                        src={section.image}
                                        alt={section.title}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#102018]/38 to-transparent opacity-80" />

                                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-emerald-800 backdrop-blur-xl">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>
                                </div>

                                <div className="flex flex-1 flex-col p-2 pt-5 sm:p-4 sm:pt-6">
                                    <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-100 bg-[#f6fbf7] px-4 py-2 text-xs font-black text-emerald-800">
                                        <ShieldCheck size={15} className="text-emerald-700" />
                                        Նյութ {String(index + 1).padStart(2, "0")}
                                    </div>

                                    <h3 className="text-2xl font-black leading-tight tracking-[-0.035em] text-[#102018] sm:text-3xl">
                                        {section.title}
                                    </h3>

                                    <p className="mt-5 text-sm leading-8 text-[#607269]">
                                        {section.content}
                                    </p>

                                    {section.warning && (
                                        <div className="mt-6 rounded-[24px] border border-amber-100 bg-amber-50 p-4 text-amber-950">
                                            <div className="mb-1 font-black">Զգուշացում</div>
                                            <p className="text-sm leading-6">{section.warning}</p>
                                        </div>
                                    )}
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </section>

                {/* Quiz */}
                <section className="mt-14">
                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="relative overflow-hidden rounded-[46px] border border-emerald-100 bg-white p-8 text-center shadow-[0_28px_95px_rgba(16,32,24,0.08)] md:p-12"
                    >
                        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-100 blur-[75px]" />
                        <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-lime-100 blur-[75px]" />

                        <div className="relative z-10 mx-auto max-w-3xl">
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-[24px] bg-emerald-50">
                                <HelpCircle size={30} className="text-emerald-700" />
                            </div>

                            <h2 className="text-3xl font-black tracking-[-0.04em] text-[#102018] sm:text-4xl md:text-5xl">
                                Ստուգիր գիտելիքդ
                            </h2>

                            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#607269] sm:text-base">
                                Եթե ուսումնասիրել ես նյութերը, անցիր հարցերին և ստուգիր՝ որքան
                                լավ ես հասկացել բույսերի խնամքի մասին թեմաները։
                            </p>

                            <div className="mt-8">
                                <Link
                                    to="/PlantsQuiz"
                                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#16834f] px-8 py-4 text-sm font-black text-white shadow-[0_18px_50px_rgba(22,131,79,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-[#106b41]"
                                >
                                    Անցնել հարցերին
                                    <ArrowRight
                                        size={18}
                                        className="transition group-hover:translate-x-1"
                                    />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </div>
        </main>
    );
}