import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
    ArrowLeft,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    Droplets,
    Fish,
    HelpCircle,
    ShieldCheck,
    Sparkles,
    Waves,
} from "lucide-react";

const img = (name) => {
    const base = import.meta.env.BASE_URL || "/";
    return new URL(base + name, window.location.origin).toString();
};

const slides = [
    {
        id: 1,
        title: "Ձկների խորհրդավոր աշխարհը",
        text: "Ձկները աշխարհի ամենահին կենդանիներից են․ նրանց գույներն ու ձևերը ջրային աշխարհը դարձնում են հիասքանչ։",
        image: img("Fish1.jpg"),
    },
    {
        id: 2,
        title: "Ջրի տակ շնչելու գաղտնիքը",
        text: "Ձկները շնչում են ժիլխայթերի միջոցով՝ ջրից թթվածին վերցնելով։",
        image: img("Fish2.jpg"),
    },
    {
        id: 3,
        title: "Գույների և ձևերի կախարդանքը",
        text: "Ձկների գույներն ու նախշերը օգնում են քողարկվել, շփվել և գրավել զուգընկերոջ ուշադրությունը։",
        image: img("Fish3.jpg"),
    },
    {
        id: 4,
        title: "Ձկների դերը բնության մեջ",
        text: "Ձկները պահպանում են ջրային էկոհամակարգերի հավասարակշռությունը և սննդային շղթայի կարևոր մասն են։",
        image: img("Fish4.jpg"),
    },
    {
        id: 5,
        title: "Ակվարիումի խաղաղ մթնոլորտը",
        text: "Ակվարիումը տանը ստեղծում է հանգստություն, գեղեցկություն և ջրային կյանքի յուրահատուկ զգացողություն։",
        image: img("Fish5.jpg"),
    },
];

const sections = [
    {
        title: "Ձկների ծագումն ու նախնիները",
        image: img("Ձկների ծագումն ու նախնիները.png"),
        content:
            "Ձկները առաջացել են ավելի քան 500 միլիոն տարի առաջ՝ ջրային միջավայրում։ Նրանց նախնիները հիմնեցին առաջին ջրային էկոհամակարգերը, որոնք հետագայում հնարավորություն տվեցին էվոլյուցիային զարգանալ դեպի բոլոր ջրային միջավայրերը։",
    },
    {
        title: "Ձկների խնամքի հիմունքները",
        image: img("Ձկների խնամքի հիմունքները.png"),
        content:
            "Ձկների համար կարևոր են ճիշտ ջերմաստիճանը, ջրի մաքրությունը և բավարար թթվածինը։ Ակվարիումի ջուրը պետք է պարբերաբար փոխել, սնուցումը լինի չափավոր, իսկ լույսն ու ջրի որակը մշտապես վերահսկվեն։",
    },
    {
        title: "Ինչից պետք է խուսափել ձկների դեպքում",
        image: img("Ինչից պետք է խուսափել ձկների դեպքում.png"),
        content:
            "Ձկերին չի կարելի տալ մարդու սնունդ, պահել կեղտոտ կամ քլորով ջրում, ինչպես նաև չափից շատ կերակրել։ Շատ տեսակներ զգայուն են քլորի, ծանր մետաղների և ջրի կտրուկ փոփոխությունների նկատմամբ։",
        warning:
            "Ջրի կտրուկ փոփոխությունը, շատ կերը և քլորով ջուրը կարող են վտանգավոր լինել ձկների համար։",
    },
    {
        title: "Ձկների օգտակարությունը բնության մեջ",
        image: img("Ձկների օգտակարությունը բնության մեջ.png"),
        content:
            "Ձկները մասնակցում են էկոհամակարգի պահպանմանը՝ լինելով սննդային շղթայի կարևոր օղակ։ Նրանք վերահսկում են որոշ օրգանիզմների քանակը և օգնում են պահել ջրային միջավայրի հավասարակշռությունը։",
    },
    {
        title: "Ձկների զգայունությունը և հմտությունները",
        image: img("Ձկների զգայունությունը և հմտությունները.png"),
        content:
            "Ձկները ունեն զարգացած զգայունություն՝ տեսողական, հոտառական և կողմնորոշման հմտություններ։ Որոշ տեսակներ կարողանում են ընկալել ջրի հոսքը, փոփոխությունները և նույնիսկ մոտեցող վտանգը։",
    },
    {
        title: "Ձկների կյանքի տևողությունը",
        image: img("Ձկների կյանքի տևողությունը.png"),
        content:
            "Ձկների կյանքի տևողությունը տարբեր է․ փոքր ձկները ապրում են 1–3 տարի, միջին տեսակները՝ մինչև 10 տարի, իսկ մեծ ջրային ձկները կարող են ապրել 20–50 տարի։ Խնամքը, ջրի որակը և սնուցումը մեծ ազդեցություն ունեն նրանց առողջության վրա։",
    },
    {
        title: "Առողջ ձկի նշանները",
        image: img("Առողջ ձկի նշանները.png"),
        content:
            "Առողջ ձուկը ակտիվ է, ունի պայծառ գունավորում, բնական լող և նորմալ ախորժակ։ Նա չի թաքնվում անընդհատ, չի լողում կողքով և չի շնչում չափազանց արագ։",
    },
    {
        title: "Ձկների ճիշտ սննդակարգը",
        image: img("Ձկների ճիշտ սննդակարգը.png"),
        content:
            "Ձկներին պետք է տալ կեր, որը համապատասխանում է նրանց տեսակին՝ բուսակեր, մսակեր կամ խառը սնունդ պահանջող։ Ավելի լավ է կերակրել օրական 1–2 անգամ՝ այնքան, որքան կուտեն 1–2 րոպեում։ Չափից շատ կերը փչացնում է ջրի որակը։",
    },
    {
        title: "Ակվարիումի մաքրություն և ջրի որակ",
        image: img("Ակվարիումի մաքրություն և ջրի որակ.png"),
        content:
            "Ձկների առողջության ամենակարևոր գործոնը ջրի որակն է։ Ֆիլտրը պետք է աշխատի մշտապես, իսկ ջրի մասային փոխարինումը պահում է միջավայրը կայուն։ Չի կարելի միանգամից ամբողջ ջուրը փոխել, քանի որ դա սթրես է ձկների համար։",
    },
    {
        title: "Ձկների հիվանդությունների վաղ նշանները և կանխարգելում",
        image: img("Ձկների հիվանդությունների վաղ նշանները և կանխարգելում.png"),
        content:
            "Եթե ձուկը դառնում է պասիվ, թաքնվում է, շնչում է արագ, լողում է կողքով կամ մակերեսին մոտ, դա կարող է լինել հիվանդության կամ ջրի վատ որակի նշան։ Սպիտակ կետերը, վնասված լողակները և ախորժակի կորուստը նույնպես վտանգավոր ազդակներ են։",
        warning:
            "Եթե նշանները ուժեղանում են, ստուգիր ջրի որակը և անհրաժեշտության դեպքում դիմիր մասնագետի խորհրդին։",
    },
];

export default function FishInfo() {
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
                <div className="absolute -top-44 left-1/2 h-[560px] w-[820px] -translate-x-1/2 rounded-full bg-cyan-100/85 blur-[125px]" />
                <div className="absolute top-[18%] -left-40 h-[420px] w-[420px] rounded-full bg-emerald-100/75 blur-[115px]" />
                <div className="absolute top-[42%] right-[5%] h-[360px] w-[360px] rounded-full bg-sky-100/90 blur-[110px]" />
                <div className="absolute bottom-[6%] -right-44 h-[500px] w-[500px] rounded-full bg-teal-100/80 blur-[135px]" />

                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,251,247,0.55),rgba(246,251,247,1))]" />

                <div className="absolute inset-0 opacity-[0.25] bg-[linear-gradient(to_right,rgba(16,32,24,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,32,24,0.055)_1px,transparent_1px)] bg-[size:52px_52px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-24 sm:px-6 lg:px-8">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white/85 px-5 py-3 text-sm font-black text-[#183528] shadow-[0_14px_45px_rgba(16,32,24,0.07)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:bg-white"
                >
                    <ArrowLeft size={18} />
                    Հետ
                </button>

                {/* Hero */}
                <section className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-stretch">
                    <motion.div
                        className="relative overflow-hidden rounded-[46px] border border-cyan-100 bg-white/85 p-6 shadow-[0_30px_100px_rgba(16,32,24,0.09)] backdrop-blur-2xl sm:p-8 md:p-10"
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75, ease: "easeOut" }}
                    >
                        <div className="pointer-events-none absolute -right-28 -top-28 h-96 w-96 rounded-full bg-cyan-100 blur-[65px]" />
                        <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-emerald-100 blur-[65px]" />

                        <div className="relative z-10 flex min-h-[560px] flex-col justify-between">
                            <div>
                                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-[#f6fbf7] px-4 py-2 text-sm font-bold text-cyan-800">
                                    <Fish size={16} className="text-cyan-700" />
                                    Ձկների ուսուցողական բաժին
                                </div>

                                <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.06em] text-[#102018] sm:text-5xl md:text-6xl lg:text-7xl">
                                    Ջրային աշխարհը՝{" "}
                                    <span className="text-cyan-700">
                                        հանգիստ, գեղեցիկ և հետաքրքիր
                                    </span>
                                </h1>

                                <p className="mt-7 max-w-2xl text-base leading-8 text-[#607269] sm:text-lg">
                                    Սովորիր ձկների ծագման, ջրի որակի, ճիշտ սննդակարգի,
                                    ակվարիումի խնամքի և առողջության նշանների մասին՝ պարզ ու
                                    գեղեցիկ կառուցվածքով։
                                </p>

                                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                                    <a
                                        href="#fish-aquarium"
                                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-700 px-7 py-4 text-sm font-black text-white shadow-[0_18px_50px_rgba(14,116,144,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-cyan-800"
                                    >
                                        Սկսել ուսումնասիրությունը
                                        <ArrowRight
                                            size={18}
                                            className="transition group-hover:translate-x-1"
                                        />
                                    </a>

                                    <a
                                        href="#fish-lessons"
                                        className="inline-flex items-center justify-center rounded-full border border-cyan-100 bg-white px-7 py-4 text-sm font-black text-[#183528] shadow-[0_16px_45px_rgba(16,32,24,0.055)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200"
                                    >
                                        Կարդալ նյութերը
                                    </a>
                                </div>
                            </div>

                            <div className="mt-12 grid gap-3 sm:grid-cols-3">
                                <div className="rounded-[28px] border border-cyan-100 bg-[#f6fbf7] p-5">
                                    <p className="text-3xl font-black text-[#102018]">10</p>
                                    <p className="mt-1 text-sm font-semibold text-[#6b7c72]">
                                        Նյութ
                                    </p>
                                </div>

                                <div className="rounded-[28px] border border-cyan-100 bg-[#f6fbf7] p-5">
                                    <p className="text-3xl font-black text-[#102018]">5</p>
                                    <p className="mt-1 text-sm font-semibold text-[#6b7c72]">
                                        Սլայդ
                                    </p>
                                </div>

                                <div className="rounded-[28px] border border-cyan-100 bg-[#f6fbf7] p-5">
                                    <p className="text-3xl font-black text-[#102018]">Ջուր</p>
                                    <p className="mt-1 text-sm font-semibold text-[#6b7c72]">
                                        Որակի վերահսկում
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Aquarium slider */}
                    <motion.div
                        id="fish-aquarium"
                        className="relative overflow-hidden rounded-[46px] border border-cyan-100 bg-white/85 p-4 shadow-[0_30px_100px_rgba(16,32,24,0.09)] backdrop-blur-2xl sm:p-5"
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75, ease: "easeOut", delay: 0.12 }}
                    >
                        <div className="relative h-[560px] overflow-hidden rounded-[36px] bg-[#082f3a]">
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

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#082f3a]/95 via-[#082f3a]/35 to-transparent" />

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

                {/* Water care highlight */}
                <section className="mt-12 grid gap-5 md:grid-cols-3">
                    {[
                        {
                            title: "Մաքուր ջուր",
                            text: "Ջրի որակը ձկների առողջության հիմնական պայմանն է։",
                            icon: Droplets,
                        },
                        {
                            title: "Ճիշտ սնունդ",
                            text: "Կերը պետք է համապատասխան լինի ձկների տեսակին։",
                            icon: Fish,
                        },
                        {
                            title: "Կայուն միջավայր",
                            text: "Ջերմաստիճանի և ջրի կտրուկ փոփոխությունները պետք է բացառել։",
                            icon: Waves,
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
                                className="rounded-[36px] border border-cyan-100 bg-white/85 p-6 shadow-[0_20px_70px_rgba(16,32,24,0.065)] backdrop-blur-2xl"
                            >
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-50">
                                    <Icon size={25} className="text-cyan-700" />
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
                <section id="fish-lessons" className="mt-14">
                    <div className="mb-8 text-center">
                        <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white/85 px-4 py-2 text-sm font-bold text-cyan-800 shadow-[0_14px_35px_rgba(16,32,24,0.05)]">
                            <Waves size={16} className="text-cyan-700" />
                            Ակվարիումի նյութեր
                        </div>

                        <h2 className="text-3xl font-black tracking-[-0.04em] text-[#102018] sm:text-4xl md:text-5xl">
                            Ձկների խնամքի կարևոր թեմաներ
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#607269] sm:text-base">
                            Յուրաքանչյուր թեմա ներկայացված է պարզ բացատրությամբ և ջրային
                            միջավայրին համապատասխան մաքուր քարտերով։
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
                                className="group relative flex h-full flex-col overflow-hidden rounded-[40px] border border-cyan-100 bg-white/85 p-4 shadow-[0_22px_75px_rgba(16,32,24,0.07)] backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_30px_95px_rgba(14,116,144,0.12)]"
                            >
                                <div className="relative h-[250px] overflow-hidden rounded-[32px] bg-cyan-50">
                                    <img
                                        src={section.image}
                                        alt={section.title}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#082f3a]/45 to-transparent opacity-80" />

                                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-cyan-800 backdrop-blur-xl">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>
                                </div>

                                <div className="flex flex-1 flex-col p-2 pt-5 sm:p-4 sm:pt-6">
                                    <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-100 bg-[#f6fbf7] px-4 py-2 text-xs font-black text-cyan-800">
                                        <ShieldCheck size={15} className="text-cyan-700" />
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
                        className="relative overflow-hidden rounded-[46px] border border-cyan-100 bg-white p-8 text-center shadow-[0_28px_95px_rgba(16,32,24,0.08)] md:p-12"
                    >
                        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-100 blur-[75px]" />
                        <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-emerald-100 blur-[75px]" />

                        <div className="relative z-10 mx-auto max-w-3xl">
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-[24px] bg-cyan-50">
                                <HelpCircle size={30} className="text-cyan-700" />
                            </div>

                            <h2 className="text-3xl font-black tracking-[-0.04em] text-[#102018] sm:text-4xl md:text-5xl">
                                Ստուգիր գիտելիքդ
                            </h2>

                            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#607269] sm:text-base">
                                Եթե ուսումնասիրել ես նյութերը, անցիր հարցերին և ստուգիր՝ որքան
                                լավ ես հասկացել ձկների խնամքի և ակվարիումի մասին թեմաները։
                            </p>

                            <div className="mt-8">
                                <Link
                                    to="/FishQuiz"
                                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-700 px-8 py-4 text-sm font-black text-white shadow-[0_18px_50px_rgba(14,116,144,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-cyan-800"
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