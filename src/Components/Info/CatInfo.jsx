import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
    ArrowLeft,
    ArrowRight,
    Cat,
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
        title: "Կատուների կախարդական աշխարհը",
        text: "Կատուները հնագույն, խորհրդավոր և նուրբ կենդանիներ են, որոնք մարդկանց կողքին ապրել են հազարավոր տարիներ։",
        image: img("Cat1.jpg"),
    },
    {
        id: 2,
        title: "Գույների գաղտնիքները",
        text: "Կատուների մորթու գույնը հաճախ կապված է գենետիկայի հետ․ օրինակ՝ եռագույն կատուները գրեթե միշտ էգ են։",
        image: img("Cat2.jpg"),
    },
    {
        id: 3,
        title: "Կատվի լեզուն՝ փոքրիկ հրաշք",
        text: "Կատվի լեզուն ծածկված է մանր խայթիկներով, որոնք օգնում են մաքրել մորթին և ուտել սնունդը։",
        image: img("Cat3.jpg"),
    },
    {
        id: 4,
        title: "Ինչու են կատուները փռփռում",
        text: "Կատուների փռփռոցը կարող է լինել հանգստության, վստահության և նույնիսկ ինքնաբուժման նշան։",
        image: img("Cat4.jpg"),
    },
    {
        id: 5,
        title: "Կատվի մարմնի լեզուն",
        text: "Պոչի դիրքը, ականջների շարժումը և աչքերի նայվածքը շատ բան են պատմում կատվի զգացողությունների մասին։",
        image: img("Cat5.jpg"),
    },
];

const sections = [
    {
        title: "Կատուների գունային գաղտնիքները",
        image: img("Կատուների գունային գաղտնիքները.png"),
        content:
            "Գիտեի՞ր, որ կատուների մորթու գույնը հաճախ կապված է նրանց սեռի հետ։ Օրինակ՝ եռագույն կատուները գրեթե միշտ էգ են, քանի որ այդ գույների համադրությունը կապված է X քրոմոսոմի հետ։ Իսկ նարնջագույն կատուները հիմնականում որձ են։ Այս գենետիկական առանձնահատկությունը կատուներին դարձնում է իսկական բնության հրաշք։",
    },
    {
        title: "Կատուների քնի գաղտնի աշխարհը",
        image: img("Կատուների քնի գաղտնի աշխարհը.png"),
        content:
            "Կատուները օրական քնում են միջինը 12–16 ժամ։ Դա նրանց բնական բնազդն է՝ ուժերը վերականգնելու համար։ Վայրի կատուների նախնիները որսի էին պատրաստվում գիշերները, և այդ սովորությունը պահպանվել է մինչև այսօր։ Երբ քո կատուն քնում է մոտ քեզ, դա վստահության նշան է։",
    },
    {
        title: "Կատուների հաղորդակցման ձևերը",
        image: img("Կատուների հաղորդակցման ձևերը.png"),
        content:
            "Կատուները հիմնականում մլավում են մարդկանց հետ շփվելու համար։ Բացի ձայնից, նրանք հաղորդակցվում են մարմնի լեզվով՝ պոչի դիրքով, ականջների ուղղությամբ և աչքերի նայվածքով։ Երբ կատուն քեզ նայում է և դանդաղ թարթում աչքերը, դա կարող է նշանակել վստահություն և հանգստություն։",
    },
    {
        title: "Կատուների փռփռոցի հրաշքը",
        image: img("Կատուների փռփռոցի հրաշքը.png"),
        content:
            "Կատվի փռփռոցը ոչ միայն հաճելի ձայն է, այլև կարող է լինել հանգստանալու և ինքն իրեն ապահով զգալու նշան։ Շատ մարդիկ նշում են, որ կատվի հետ շփումը նվազեցնում է սթրեսը և ստեղծում է խաղաղ մթնոլորտ։",
    },
    {
        title: "Կատուների յուրահատուկ ունակությունները",
        image: img("Կատուների յուրահատուկ ունակությունները.png"),
        content:
            "Կատուները ունեն զարգացած հիշողություն և տարածական մտածողություն։ Նրանք հիշում են մարդկանց ձայները, հոտերը և իրենց սիրելի վայրերը։ Շատ կատուներ կարողանում են բացել դռներ, գտնել թաքցրած խաղալիքները և շատ ճկուն շարժվել՝ շնորհիվ իրենց ողնաշարի կառուցվածքի։",
    },
    {
        title: "Ականջների և բրդի լեզուն",
        image: img("Ականջների և բրդի լեզուն.png"),
        content:
            "Կատվի ականջները կարող են պտտվել տարբեր ուղղություններով, ինչն օգնում է նրանց ճշգրիտ որոշել ձայնի աղբյուրը։ Բուրդը նույնպես կարևոր դեր ունի․ այն պաշտպանում է ջերմաստիճանի փոփոխություններից և կարող է արտահայտել կատվի վիճակը։ Երբ բուրդը փշաքաղվում է, կատուն փորձում է ավելի մեծ ու պաշտպանված երևալ։",
    },
    {
        title: "Կատուների հետաքրքրաշարժ սովորությունները",
        image: img("Կատուների հետաքրքրաշարժ սովորությունները.png"),
        content:
            "Կատուները սիրում են բարձր տեղերում նստել, քանի որ այդպես վերահսկում են տարածքը։ Նրանց դուր են գալիս փոքր արկղերն ու պայուսակները, որովհետև այնտեղ իրենց ապահով են զգում։ Երբ կատուն բերում է խաղալիք կամ փոքր «նվեր», դա կարող է ցույց տալ, որ նա քեզ իր ընտանիքի մաս է համարում։",
    },
    {
        title: "Կատուների ճիշտ սննդակարգը՝ ինչ, որքան, երբ",
        image: img("Կատուների ճիշտ սննդակարգը՝ ինչ, որքան, երբ.png"),
        content:
            "Կատվի սննդակարգը պետք է ընտրվի ըստ տարիքի, քաշի, ակտիվության և առողջական վիճակի։ Փոքրիկ կատվիկները սովորաբար ուտում են ավելի հաճախ, իսկ մեծահասակները՝ օրական 2 անգամ։ Կարևոր է պահպանել չափաբաժինը և միշտ ապահովել մաքուր ջուր։ Եթե փոխում ես կերը, արա դա աստիճանաբար՝ մի քանի օրվա ընթացքում։",
    },
    {
        title: "Ինչ չի կարելի տալ կատուներին",
        image: img("Ինչ չի կարելի տալ կատուներին.png"),
        content:
            "Կատուների համար վտանգավոր են շատ «մարդու» մթերքներ։ Չի կարելի տալ սոխ, սխտոր, շոկոլադ, խաղող, չամիչ, ալկոհոլ, կոֆեին, մանր կոտրվող ոսկորներ, շատ յուղոտ, կծու կամ աղի սնունդ։ Կաթը նույնպես միշտ անվտանգ չէ, քանի որ շատ կատուների մոտ կարող է առաջացնել մարսողական խնդիրներ։",
    },
    {
        title: "Կատվի առողջության հիմնական նշանները և խնամքի հիմունքները",
        image: img("Կատվի առողջության հիմնական նշանները և խնամքի հիմունքները.png"),
        content:
            "Առողջ կատուն ակտիվ է, հետաքրքրասեր և ունի կայուն ախորժակ։ Աչքերը պետք է լինեն մաքուր, բուրդը՝ փայլուն, իսկ շունչը՝ առանց տհաճ հոտի։ Խնամքի հիմքում են մաքուր լոտոկը, ճիշտ սնունդը, մաքուր ջուրը, կանոնավոր սանրումը և ժամանակին անասնաբուժական ստուգումները։",
    },
];

export default function CatInfo() {
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
                <div className="absolute top-[24%] -left-40 h-[390px] w-[390px] rounded-full bg-lime-100/90 blur-[110px]" />
                <div className="absolute top-[42%] right-[6%] h-[320px] w-[320px] rounded-full bg-orange-50/90 blur-[105px]" />
                <div className="absolute bottom-[8%] -right-40 h-[460px] w-[460px] rounded-full bg-green-100/80 blur-[125px]" />

                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,251,247,0.55),rgba(246,251,247,1))]" />

                <div className="absolute inset-0 opacity-[0.28] bg-[linear-gradient(to_right,rgba(16,32,24,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,32,24,0.055)_1px,transparent_1px)] bg-[size:52px_52px]" />
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

                {/* Hero */}
                <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
                    <motion.div
                        className="relative overflow-hidden rounded-[46px] border border-emerald-100 bg-white/85 p-6 shadow-[0_30px_100px_rgba(16,32,24,0.09)] backdrop-blur-2xl sm:p-8 md:p-10"
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75, ease: "easeOut" }}
                    >
                        <div className="pointer-events-none absolute -right-28 -top-28 h-96 w-96 rounded-full bg-emerald-100 blur-[65px]" />
                        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-orange-50 blur-[60px]" />

                        <div className="relative z-10 flex h-full min-h-[520px] flex-col justify-between">
                            <div>
                                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-[#f6fbf7] px-4 py-2 text-sm font-bold text-emerald-800">
                                    <Cat size={16} className="text-emerald-700" />
                                    Կատուների ուսուցողական բաժին
                                </div>

                                <h1 className="max-w-4xl text-4xl font-black leading-[1.03] tracking-[-0.055em] text-[#102018] sm:text-5xl md:text-6xl">
                                    Կատուների աշխարհը՝{" "}
                                    <span className="text-emerald-700">
                                        նուրբ, խելացի և հետաքրքիր
                                    </span>
                                </h1>

                                <p className="mt-7 max-w-2xl text-base leading-8 text-[#607269] sm:text-lg">
                                    Այս բաժնում կբացահայտես կատուների վարքը, մարմնի լեզուն,
                                    գունային գաղտնիքները, սննդակարգը, առողջության նշանները և ճիշտ
                                    խնամքի հիմնական կանոնները։
                                </p>

                                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                                    <a
                                        href="#cat-slider"
                                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#16834f] px-7 py-4 text-sm font-black text-white shadow-[0_18px_50px_rgba(22,131,79,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-[#106b41]"
                                    >
                                        Դիտել թեմաները
                                        <ArrowRight
                                            size={18}
                                            className="transition group-hover:translate-x-1"
                                        />
                                    </a>

                                    <a
                                        href="#cat-lessons"
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
                                    <p className="text-3xl font-black text-[#102018]">Խնամք</p>
                                    <p className="mt-1 text-sm font-semibold text-[#6b7c72]">
                                        Պարզ խորհուրդներ
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Hero image */}
                    <motion.div
                        className="relative overflow-hidden rounded-[46px] border border-emerald-100 bg-white/85 p-4 shadow-[0_30px_100px_rgba(16,32,24,0.09)] backdrop-blur-2xl sm:p-5"
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75, ease: "easeOut", delay: 0.12 }}
                    >
                        <div className="relative h-[520px] overflow-hidden rounded-[36px] bg-[#102018] lg:h-full lg:min-h-[520px]">
                            <img
                                src={img("Cat1.jpg")}
                                alt="Կատուների աշխարհ"
                                className="h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#102018]/80 via-[#102018]/25 to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/15 px-4 py-2 text-sm font-bold text-white backdrop-blur-xl">
                                    <Sparkles size={16} />
                                    Կատուների խնամք
                                </div>

                                <h2 className="max-w-xl text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl">
                                    Հասկացիր կատվի վարքը և խնամիր ավելի ճիշտ
                                </h2>

                                <p className="mt-4 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                                    Կատուների աշխարհը լի է նշաններով, սովորություններով և նուրբ
                                    հաղորդակցությամբ։
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Slider */}
                <section id="cat-slider" className="mt-12">
                    <motion.div
                        className="relative overflow-hidden rounded-[46px] border border-emerald-100 bg-white/85 p-5 shadow-[0_26px_90px_rgba(16,32,24,0.08)] backdrop-blur-2xl sm:p-6"
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.75, ease: "easeOut" }}
                    >
                        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                            <div>
                                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-[#f6fbf7] px-4 py-2 text-sm font-bold text-emerald-800">
                                    <Sparkles size={16} className="text-emerald-700" />
                                    Ընտրված թեմաներ
                                </div>

                                <h2 className="text-3xl font-black tracking-[-0.04em] text-[#102018] sm:text-4xl">
                                    Սկսիր կարճ թեմաներից
                                </h2>

                                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#607269] sm:text-base">
                                    Թերթիր սլայդները և ծանոթացիր կատուների մասին հիմնական
                                    հետաքրքիր թեմաներին։
                                </p>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={prevSlide}
                                    className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-100 bg-white text-[#102018] shadow-[0_12px_35px_rgba(16,32,24,0.06)] transition hover:-translate-y-1 hover:bg-emerald-50"
                                    aria-label="Նախորդ սլայդ"
                                >
                                    <ChevronLeft size={23} />
                                </button>

                                <button
                                    onClick={nextSlide}
                                    className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-100 bg-[#16834f] text-white shadow-[0_12px_35px_rgba(22,131,79,0.18)] transition hover:-translate-y-1 hover:bg-[#106b41]"
                                    aria-label="Հաջորդ սլայդ"
                                >
                                    <ChevronRight size={23} />
                                </button>
                            </div>
                        </div>

                        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
                            <div className="relative min-h-[360px] overflow-hidden rounded-[38px] bg-[#102018]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={slides[current].id}
                                        className="absolute inset-0"
                                        initial={{ opacity: 0, scale: 1.04 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.98 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                    >
                                        <img
                                            src={slides[current].image}
                                            alt={slides[current].title}
                                            className="h-full w-full object-cover"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#102018]/85 via-[#102018]/25 to-transparent" />
                                    </motion.div>
                                </AnimatePresence>

                                <div className="absolute bottom-5 left-5 right-5 flex justify-center gap-2">
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

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={slides[current].id}
                                    className="flex min-h-[360px] flex-col justify-between rounded-[38px] border border-emerald-100 bg-[#f6fbf7] p-6 sm:p-8"
                                    initial={{ opacity: 0, y: 18 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -18 }}
                                    transition={{ duration: 0.45, ease: "easeOut" }}
                                >
                                    <div>
                                        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-emerald-800">
                                            <Cat size={16} className="text-emerald-700" />
                                            Թեմա {String(current + 1).padStart(2, "0")}
                                        </div>

                                        <h3 className="text-3xl font-black leading-tight tracking-[-0.04em] text-[#102018] sm:text-4xl md:text-5xl">
                                            {slides[current].title}
                                        </h3>

                                        <p className="mt-5 text-sm leading-8 text-[#607269] sm:text-base">
                                            {slides[current].text}
                                        </p>
                                    </div>

                                    <a
                                        href="#cat-lessons"
                                        className="mt-8 inline-flex items-center gap-2 text-sm font-black text-emerald-700"
                                    >
                                        Կարդալ ամբողջական նյութերը
                                        <ArrowRight size={18} />
                                    </a>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </section>

                {/* Lessons */}
                <section id="cat-lessons" className="mt-14">
                    <div className="mb-8 text-center">
                        <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/85 px-4 py-2 text-sm font-bold text-emerald-800 shadow-[0_14px_35px_rgba(16,32,24,0.05)]">
                            <Leaf size={16} className="text-emerald-700" />
                            Ուսուցողական նյութեր
                        </div>

                        <h2 className="text-3xl font-black tracking-[-0.04em] text-[#102018] sm:text-4xl md:text-5xl">
                            Կատուների մասին կարևոր գիտելիքներ
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#607269] sm:text-base">
                            Կարդա նյութերը հերթով կամ ընտրիր այն թեման, որը քեզ ամենաշատն է
                            հետաքրքրում։
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
                                <div className="relative h-[260px] overflow-hidden rounded-[32px] bg-emerald-50">
                                    <img
                                        src={section.image}
                                        alt={section.title}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#102018]/35 to-transparent opacity-70" />
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
                        <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-orange-50 blur-[75px]" />

                        <div className="relative z-10 mx-auto max-w-3xl">
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-[24px] bg-emerald-50">
                                <HelpCircle size={30} className="text-emerald-700" />
                            </div>

                            <h2 className="text-3xl font-black tracking-[-0.04em] text-[#102018] sm:text-4xl md:text-5xl">
                                Ստուգիր գիտելիքդ
                            </h2>

                            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#607269] sm:text-base">
                                Եթե արդեն ուսումնասիրել ես նյութերը, անցիր հարցերին և ստուգիր՝
                                որքան լավ ես հասկացել կատուների աշխարհը։
                            </p>

                            <div className="mt-8">
                                <Link
                                    to="/CatQuiz"
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