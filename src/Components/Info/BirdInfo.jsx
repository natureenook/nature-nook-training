import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
    ArrowLeft,
    ArrowRight,
    Bird as BirdIcon,
    ChevronLeft,
    ChevronRight,
    HelpCircle,
    Leaf,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

const img = (name) => {
    const base = import.meta.env.BASE_URL || "/";
    return new URL(base + name, window.location.origin).toString();
};

const slides = [
    {
        id: 1,
        title: "Թռչունների կախարդական ծագումը",
        text: "Թռչունները սերում են դինոզավրերից․ նրանց պատմությունը սկսվում է միլիոնավոր տարիներ առաջ։",
        image: img("Bird1.jpg"),
    },
    {
        id: 2,
        title: "Թռչելու հրաշքը",
        text: "Թեթև կմախք, հզոր թևեր և յուրահատուկ փետուրներ․ ահա թռիչքի հիմնական գաղտնիքները։",
        image: img("Bird2.jpg"),
    },
    {
        id: 3,
        title: "Գույների և ձայների աշխարհը",
        text: "Թռչունների գույներն ու երգերը հաղորդակցման, պաշտպանության և զուգընկեր գտնելու միջոցներ են։",
        image: img("Bird3.jpg"),
    },
    {
        id: 4,
        title: "Թռչունների դերը բնության մեջ",
        text: "Թռչունները տարածում են սերմեր, օգնում են բույսերի փոշոտմանը և պահպանում բնության հավասարակշռությունը։",
        image: img("Bird4.jpg"),
    },
    {
        id: 5,
        title: "Թռչունների բազմազան աշխարհը",
        text: "Փոքրիկ կոլիբրիից մինչև հսկա ջայլամ․ յուրաքանչյուր թռչուն ունի իր բացառիկ դերը բնության մեջ։",
        image: img("Bird5.jpg"),
    },
];

const sections = [
    {
        title: "Թռչունների հիանալի ծագումը",
        image: img("Թռչունների հիանալի ծագումը.png"),
        content:
            "Գիտե՞ս, որ թռչունները դինոզավրերի ժառանգներն են։ Նրանք սերում են թերոպոդներից՝ մսակեր դինոզավրերից, ինչպիսին էր վելոցիրապտորը։ Ամենահին հայտնի թռչունը՝ Արկեոպտերիքսը, ունեցել է թե՛ փետուրներ, թե՛ ատամներ ու երկար պոչ՝ միավորելով դինոզավրերի և ժամանակակից թռչունների հատկանիշները։",
    },
    {
        title: "Թռչելու գաղտնիքը",
        image: img("Թռչելու գաղտնիքը.png"),
        content:
            "Թռչունները կարողանում են թռչել շնորհիվ իրենց թեթև կմախքի, հզոր թևերի մկանների և փետուրների յուրահատուկ կառուցվածքի։ Նրանց ոսկորները խոռոչ են՝ լցված օդով, ինչը նվազեցնում է քաշը։ Յուրաքանչյուր թևի շարժումը ճշգրիտ հաշվարկված է՝ ապահովելու վերելք և կայունություն օդում։",
    },
    {
        title: "Թռչունների գույների կախարդանքը",
        image: img("Թռչունների գույների կախարդանքը.png"),
        content:
            "Թռչունների փետուրների գույները ոչ միայն գեղեցկության, այլև գոյատևման համար են։ Գույները օգնում են քողարկվել թշնամիներից կամ գրավել զուգընկերոջ ուշադրությունը։ Օրինակ՝ տուկանը և թութակը ունեն պայծառ գույներ՝ կապակցված արևադարձային միջավայրի հետ։",
    },
    {
        title: "Ինչ չի կարելի տալ թռչուններին",
        image: img("Ինչ չի կարելի տալ թռչուններին.png"),
        content:
            "Թռչունների մարսողական համակարգը շատ նուրբ է։ Վտանգավոր են շոկոլադը, ավոկադոն, կոֆեինը, աղը և յուղոտ սնունդները։ Թռչունին երբեք մի՛ տուր հին կամ փչացած հաց, քանի որ այն կարող է առաջացնել առողջական խնդիրներ։",
    },
    {
        title: "Թռչունների օգտակար դերը բնության մեջ",
        image: img("Թռչունների օգտակար դերը բնության մեջ.png"),
        content:
            "Թռչունները կարևոր դեր ունեն բնության հավասարակշռության մեջ․ նրանք փոշոտում են բույսերը, վերահսկում միջատների քանակը և տարածում սերմեր։ Օրինակ՝ կոլիբրիները փոշոտման վարպետներ են, իսկ ագռավները՝ էկոհամակարգի մաքրողներ։",
    },
    {
        title: "Թռչունների զգայությունները և հմտությունները",
        image: img("Թռչունների զգայությունները և հմտությունները.png"),
        content:
            "Թռչուններն ունեն հզոր տեսողություն։ Բազենը կարող է տեսնել իր որսը մեծ հեռավորությունից։ Որոշ տեսակներ, ինչպես աղավնիները, կարողանում են կողմնորոշվել Երկրի մագնիսական դաշտով։ Ջրային թռչուններն էլ ունեն հատուկ թաղանթ՝ աչքերը ջրի տակ պաշտպանելու համար։",
    },
    {
        title: "Թռչունների կյանքի տևողությունը և հավատարմությունը",
        image: img("Թռչունների կյանքի տևողությունը և հավատարմությունը.png"),
        content:
            "Թռչունների կյանքի տևողությունը տարբեր է․ փոքր տեսակները կարող են ապրել մի քանի տարի, մինչդեռ որոշ թութակներ՝ տասնյակ տարիներ։ Շատ տեսակներ ապրում են զույգերով երկար ժամանակ, իսկ կարապներն ու աղավնիները հայտնի են իրենց հավատարմությամբ։",
    },
    {
        title: "Ինչպես ճանաչել առողջ թռչունին",
        image: img("Ինչպես ճանաչել առողջ թռչունին.png"),
        content:
            "Առողջ թռչունն ունի փայլուն փետուրներ, մաքուր աչքեր, ակտիվություն և հստակ ձայն։ Եթե նա պասիվ է, քիչ է ուտում կամ փետուրները փշաքաղված են, դա կարող է լինել հիվանդության նշան։ Լավ խնամքը և ճիշտ սնունդը օգնում են ապահովել երկար ու երջանիկ կյանք։",
    },
    {
        title: "Թռչունների բների ու ձվերի գաղտնիքները",
        image: img("Թռչունների բների ու ձվերի գաղտնիքները.png"),
        content:
            "Թռչունների համար բույնը պարզապես տուն չէ, այլ անվտանգության համակարգ։ Ոմանք բույն են հյուսում խոտերից ու ճյուղերից, մյուսները փորում են հողում կամ բնակվում ծառերի խոռոչներում։ Ձվերի գույնն ու ձևը նույնպես օգնում են պաշտպանվել միջավայրի վտանգներից։",
    },
    {
        title: "Թռչունների խնամք՝ ջուր, սնունդ և անվտանգ միջավայր",
        image: img("Թռչունների խնամք՝ ջուր, սնունդ և անվտանգ միջավայր.png"),
        content:
            "Թռչունի առողջության հիմքը մաքուր ջուրն է, հավասարակշռված սնունդը և անվտանգ միջավայրը։ Ջուրը պետք է փոխել ամեն օր, իսկ կերը ընտրել թռչնի տեսակին համապատասխան։ Վանդակի կամ տարածքի մաքրությունը շատ կարևոր է, քանի որ փոշին ու կեղտը կարող են բերել շնչառական խնդիրների։",
    },
];

export default function BirdInfo() {
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
                <div className="absolute -top-44 left-1/2 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-emerald-100/80 blur-[120px]" />
                <div className="absolute top-[22%] -left-40 h-[380px] w-[380px] rounded-full bg-lime-100/90 blur-[110px]" />
                <div className="absolute bottom-[8%] -right-40 h-[460px] w-[460px] rounded-full bg-green-100/80 blur-[125px]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,251,247,0.55),rgba(246,251,247,1))]" />
                <div className="absolute inset-0 opacity-[0.3] bg-[linear-gradient(to_right,rgba(16,32,24,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,32,24,0.055)_1px,transparent_1px)] bg-[size:52px_52px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-24 sm:px-6 lg:px-8">
                {/* Հետ կոճակ */}
                <button
                    onClick={() => navigate(-1)}
                    className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/85 px-5 py-3 text-sm font-black text-[#183528] shadow-[0_14px_45px_rgba(16,32,24,0.07)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-white"
                >
                    <ArrowLeft size={18} />
                    Հետ
                </button>

                {/* Hero + Carousel */}
                <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
                    <motion.div
                        className="relative overflow-hidden rounded-[46px] border border-emerald-100 bg-white/85 p-6 shadow-[0_30px_100px_rgba(16,32,24,0.09)] backdrop-blur-2xl sm:p-8 md:p-10"
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75, ease: "easeOut" }}
                    >
                        <div className="pointer-events-none absolute -right-28 -top-28 h-96 w-96 rounded-full bg-emerald-100 blur-[60px]" />

                        <div className="relative z-10 flex h-full flex-col justify-between">
                            <div>
                                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-[#f6fbf7] px-4 py-2 text-sm font-bold text-emerald-800">
                                    <BirdIcon size={16} className="text-emerald-700" />
                                    Թռչունների ուսուցողական բաժին
                                </div>

                                <h1 className="max-w-4xl text-4xl font-black leading-[1.03] tracking-[-0.055em] text-[#102018] sm:text-5xl md:text-6xl">
                                    Թռչունների աշխարհը՝{" "}
                                    <span className="text-emerald-700">
                                        գիտելիքով և սիրով
                                    </span>
                                </h1>

                                <p className="mt-7 max-w-2xl text-base leading-8 text-[#607269] sm:text-lg">
                                    Այստեղ կծանոթանաս թռչունների ծագմանը, թռիչքի գաղտնիքներին,
                                    գույներին, բնության մեջ ունեցած դերին և ճիշտ խնամքի հիմնական
                                    կանոններին։
                                </p>
                            </div>

                            <div className="mt-9 grid gap-3 sm:grid-cols-3">
                                <div className="rounded-[26px] border border-emerald-100 bg-[#f6fbf7] p-4">
                                    <p className="text-2xl font-black text-[#102018]">10</p>
                                    <p className="mt-1 text-xs font-semibold text-[#6b7c72]">
                                        Նյութ
                                    </p>
                                </div>

                                <div className="rounded-[26px] border border-emerald-100 bg-[#f6fbf7] p-4">
                                    <p className="text-2xl font-black text-[#102018]">5</p>
                                    <p className="mt-1 text-xs font-semibold text-[#6b7c72]">
                                        Սլայդ
                                    </p>
                                </div>

                                <div className="rounded-[26px] border border-emerald-100 bg-[#f6fbf7] p-4">
                                    <p className="text-2xl font-black text-[#102018]">Խնամք</p>
                                    <p className="mt-1 text-xs font-semibold text-[#6b7c72]">
                                        Օգտակար խորհուրդներ
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8">
                                <a
                                    href="#bird-lessons"
                                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#16834f] px-7 py-4 text-sm font-black text-white shadow-[0_18px_50px_rgba(22,131,79,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-[#106b41]"
                                >
                                    Սկսել ուսումնասիրությունը
                                    <ArrowRight
                                        size={18}
                                        className="transition group-hover:translate-x-1"
                                    />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative overflow-hidden rounded-[46px] border border-emerald-100 bg-white/85 p-4 shadow-[0_30px_100px_rgba(16,32,24,0.09)] backdrop-blur-2xl sm:p-5"
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75, ease: "easeOut", delay: 0.12 }}
                    >
                        <div className="relative h-[520px] overflow-hidden rounded-[36px] bg-[#102018]">
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

                            <div className="absolute left-0 right-0 bottom-5 flex justify-center gap-2">
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

                {/* Նյութեր */}
                <section id="bird-lessons" className="mt-12">
                    <div className="mb-8 text-center">
                        <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/85 px-4 py-2 text-sm font-bold text-emerald-800 shadow-[0_14px_35px_rgba(16,32,24,0.05)]">
                            <Leaf size={16} className="text-emerald-700" />
                            Ուսուցողական նյութեր
                        </div>

                        <h2 className="text-3xl font-black tracking-[-0.04em] text-[#102018] sm:text-4xl md:text-5xl">
                            Ի՞նչ պետք է իմանալ թռչունների մասին
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#607269] sm:text-base">
                            Յուրաքանչյուր բաժին ներկայացնում է կարևոր թեմա՝ պարզ բացատրությամբ
                            և գեղեցիկ պատկերով։
                        </p>
                    </div>

                    <div className="grid gap-6">
                        {sections.map((section, index) => (
                            <motion.article
                                key={section.title}
                                initial={{ opacity: 0, y: 45 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                className={`group relative overflow-hidden rounded-[42px] border border-emerald-100 bg-white/85 p-4 shadow-[0_24px_85px_rgba(16,32,24,0.075)] backdrop-blur-2xl ${index % 2 === 1 ? "lg:[&>div]:grid-cols-[1fr_0.9fr]" : ""
                                    }`}
                            >
                                <div
                                    className={`grid gap-5 lg:grid-cols-[0.9fr_1fr] lg:items-center ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                                        }`}
                                >
                                    <div className="relative h-[260px] overflow-hidden rounded-[32px] bg-emerald-50 sm:h-[340px] lg:h-[390px]">
                                        <img
                                            src={section.image}
                                            alt={section.title}
                                            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#102018]/35 to-transparent opacity-70" />
                                    </div>

                                    <div className="p-2 sm:p-5">
                                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-[#f6fbf7] px-4 py-2 text-xs font-black text-emerald-800">
                                            <ShieldCheck size={15} className="text-emerald-700" />
                                            Նյութ {String(index + 1).padStart(2, "0")}
                                        </div>

                                        <h3 className="text-2xl font-black leading-tight tracking-[-0.035em] text-[#102018] sm:text-3xl md:text-4xl">
                                            {section.title}
                                        </h3>

                                        <p className="mt-5 text-sm leading-8 text-[#607269] sm:text-base">
                                            {section.content}
                                        </p>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </section>

                {/* Հարցեր */}
                <section className="mt-12">
                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="relative overflow-hidden rounded-[46px] border border-emerald-100 bg-white p-8 text-center shadow-[0_28px_95px_rgba(16,32,24,0.08)] md:p-12"
                    >
                        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-100 blur-[75px]" />

                        <div className="relative z-10 mx-auto max-w-3xl">
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-[24px] bg-emerald-50">
                                <HelpCircle size={30} className="text-emerald-700" />
                            </div>

                            <h2 className="text-3xl font-black tracking-[-0.04em] text-[#102018] sm:text-4xl md:text-5xl">
                                Ստուգիր գիտելիքդ
                            </h2>

                            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#607269] sm:text-base">
                                Եթե ուսումնասիրել ես նյութերը, կարող ես անցնել հարցերին և ստուգել,
                                թե ինչքան լավ ես հիշում թռչունների մասին տեղեկությունները։
                            </p>

                            <div className="mt-8">
                                <Link
                                    to="/BirdsQuiz"
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