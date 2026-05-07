import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
    AlertTriangle,
    ArrowLeft,
    ArrowRight,
    Bone,
    ChevronLeft,
    ChevronRight,
    Dog,
    HelpCircle,
    HeartHandshake,
    PawPrint,
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
        title: "Շների աշխարհը",
        text: "Բարի, հավատարիմ և ուրախ ընկերներ՝ յուրաքանչյուր տան համար։",
        image: img("Dog1.jpg"),
    },
    {
        id: 2,
        title: "Շների խնամք և սեր",
        text: "Ճիշտ խնամքով քո շունը կլինի երջանիկ, առողջ և ավելի վստահ։",
        image: img("Dog2.jpg"),
    },
    {
        id: 3,
        title: "Խաղալիքներ և զբոսանքներ",
        text: "Ամեն օր փոքրիկ արկածներ՝ քո չորսթաթ ընկերոջ հետ։",
        image: img("Dog3.jpg"),
    },
    {
        id: 4,
        title: "Շների տարբեր ցեղեր",
        text: "Յուրաքանչյուր ցեղ ունի իր բնավորությունը, էներգիան և խնամքի առանձնահատկությունները։",
        image: img("Dog4.jpg"),
    },
    {
        id: 5,
        title: "Սնունդ և առողջություն",
        text: "Լավ սնունդը առողջ մարմնի, ուժեղ իմունիտետի և փայլուն բրդի հիմքն է։",
        image: img("Dog5.jpg"),
    },
];

const sections = [
    {
        title: "Շները և նրանց ծագումը",
        image: img("Շները և նրանց ծագումը.png"),
        content:
            "Շները սերում են գայլերից՝ ըստ գենետիկական և հնագիտական հետազոտությունների։ Հնագույն մարդկանց և գայլերի կապը ձևավորվել է ավելի քան 15,000–30,000 տարի առաջ, երբ որոշ գայլեր մոտեցել են մարդկային բնակավայրերին՝ սնունդ գտնելու նպատակով։ Ժամանակի ընթացքում նրանք ընտելացվել են, դարձել ավելի հանդուրժող ու բարեկամական մարդու նկատմամբ։ Այսպես առաջացան առաջին շները՝ մարդկանց հավատարիմ օգնականները որսի, պահակության և ընկերության մեջ։ Այսօր աշխարհում կա ավելի քան 400 ցեղատեսակ շուն, որոնք տարբերվում են իրենց չափերով, բնավորությամբ և դերից՝ ծառայողականից մինչև դեկորատիվ։",
    },
    {
        title: "Շների վարժեցման գաղտնիքները",
        image: img("Շների վարժեցման գաղտնիքները.png"),
        content:
            "Շների վարժեցումը սովորաբար սկսում է մոտ 3 ամսական տարիքից, երբ փոքրիկը արդեն բավականաչափ հասուն է՝ սովորելու պարզ հրամաններ։ Այս փուլում կարևոր է ոչ թե խստությունը, այլ համբերությունը, պոզիտիվ մոտեցումը և կանոնավոր վարժությունները։ Շունը լավագույնս արձագանքում է պարգևներին՝ քաղցրավենիք, գովասանք կամ խաղալիք։ Վարժեցումը պետք է լինի կարճ, զվարճալի և հետևողական, որպեսզի կենդանին չձանձրանա և միշտ կապվածություն զգա իր տիրոջ հանդեպ։ Այս կերպ ձևավորվում է վստահություն, հնազանդություն և իրական ընկերություն մարդու ու շան միջև։",
    },
    {
        title: "Ինչ չի կարելի տալ շներին",
        image: img("Ինչ չի կարելի տալ շներին.png"),
        content:
            "Շների մարսողական համակարգը զգայուն է, և որոշ մթերքներ կարող են նրանց համար թունավոր լինել։ Ամենավտանգավորներից են՝ շոկոլադը, սոխն ու սխտորը, խաղողը, չամիչը և ավոկադոն։ Ավելի լավ է շանը տալ միայն շների համար նախատեսված հատուկ կերեր, միս, բրինձ և բանջարեղեն՝ փոքր քանակներով։",
        warning:
            "Եթե կասկածում ես՝ մի տուր։ Թունավորման կասկածի դեպքում անմիջապես դիմիր անասնաբույժի։",
    },
    {
        title: "Շան օգուտը մարդուն",
        image: img("Շան օգուտը մարդուն.png"),
        content:
            "Շները մարդկության ամենահավատարիմ ընկերներն են։ Նրանք մարդուն տալիս են անվերապահ սեր, պաշտպանություն և ընկերություն, ինչն օգնում է հաղթահարել միայնությունը և սթրեսը։ Շան հետ շփումը կարող է ստեղծել ջերմություն, հանգստություն և ապահովության զգացում տանը։ Շների ներկայությունը դրական է ազդում երեխաների, տարեցների և հոգնած մարդկանց հոգեբանական վիճակի վրա։",
    },
    {
        title: "Շների զգայությունների կախարդանքը",
        image: img("Շների զգայությունների կախարդանքը.png"),
        content:
            "Շները ունեն զարմանալիորեն զարգացած հոտառություն՝ շատ ավելի ուժեղ, քան մարդու մոտ։ Նրանք կարող են տարբերել հարյուրավոր հոտեր՝ անգամ շատ թույլներից։ Նրանց լսողությունը նույնպես գերազանց է․ շները լսում են բարձր հաճախականության ձայներ, որոնք մարդը չի ընկալում։ Որոշ ցեղատեսակներ ունեն նաև լավ տեսողություն՝ հատկապես մթության մեջ։",
    },
    {
        title: "Շների կյանքի տևողությունը",
        image: img("Շների կյանքի տևողությունը.png"),
        content:
            "Շների միջին կյանքի տևողությունը 10-ից 13 տարի է, սակայն դա կախված է ցեղատեսակից, խնամքից և սնուցումից։ Փոքր չափի շները սովորաբար ապրում են ավելի երկար, իսկ մեծ ցեղատեսակները՝ ավելի կարճ։ Առողջ սնունդը, կանոնավոր զբոսանքները և սիրով վերաբերմունքը կարող են երկարացնել շան կյանքը՝ դարձնելով այն երջանիկ և աշխույժ։",
    },
    {
        title: "Շան առողջության հիմնական նշանները",
        image: img("Շան առողջության հիմնական նշանները.png"),
        content:
            "Առողջ շունը միշտ ակտիվ ու ուրախ է։ Նրա մաշկը մաքուր է, բուրդը՝ փայլուն, իսկ աչքերը՝ մաքուր և լուսավոր։ Նա ունի լավ ախորժակ, պահպանված քաշ և շնչառություն առանց տհաճ հոտի։ Շան վարքի փոփոխությունները՝ քնկոտություն, ախորժակի կորուստ կամ անտարբերություն, կարող են լինել հիվանդության նշաններ։",
    },
    {
        title: "Շների սննդակարգը ճիշտ կազմելու կանոնները",
        image: img("Շների սննդակարգը ճիշտ կազմելու կանոնները.png"),
        content:
            "Սնունդը պետք է ընտրվի շան տարիքին, քաշին, ակտիվությանը և առողջական վիճակին համապատասխան՝ առանց մարդու սեղանից մնացորդների։ Կտրուկ փոփոխությունները կերի մեջ կարող են բերել մարսողական խնդիրների, ուստի նոր սնունդը պետք է ներմուծել աստիճանաբար։ Եթե նկատում ես փքվածություն, փորլուծություն, քաշի արագ փոփոխություն կամ ախորժակի անկում՝ ճիշտ է դիմել անասնաբույժի։",
    },
    {
        title: "Շների հիվանդությունների վաղ նշանները և կանխարգելում",
        image: img("Շների հիվանդությունների վաղ նշանները և կանխարգելում.png"),
        content:
            "Եթե շունը դարձել է քնկոտ, պակաս ակտիվ, չի խաղում ինչպես միշտ կամ փորձում է մեկուսանալ՝ դա արդեն կարող է ազդակ լինել։ Ախորժակի կորուստը, ջրի չափից շատ խմելը, փսխումը, փորլուծությունը կամ հազը նույնպես վաղ նշաններ են, որոնց պետք է ուշադրություն դարձնել։ Կանխարգելման համար կարևոր են ժամանակին պատվաստումները, պարազիտներից պաշտպանությունը, մաքուր ջուրը, ճիշտ սնունդը և կանոնավոր զբոսանքները։",
        warning:
            "Եթե նշանները չեն անցնում 1–2 օրվա մեջ կամ ուժեղանում են, մի սպասիր․ դիմիր անասնաբույժի։",
    },
    {
        title: "Շան խնամք՝ հիգիենա, պատվաստումներ, պարազիտներից պաշտպանություն",
        image: img("Շան խնամք՝ հիգիենա, պատվաստումներ, պարազիտներից պաշտպանություն.png"),
        content:
            "Կանոնավոր հիգիենան՝ լողացնելը ճիշտ ժամանակին, բրդի սանրումը, ականջների ու աչքերի մաքրությունը, պահում են շանը մաքուր ու պաշտպանում մաշկային խնդիրներից։ Պատվաստումները շանը պաշտպանում են վտանգավոր վարակներից և պետք է արվեն ըստ անասնաբույժի կազմած գրաֆիկի։ Պարազիտներից պաշտպանությունը պարտադիր է ամբողջ տարվա ընթացքում, հատկապես գարուն–ամառ սեզոնին։",
    },
];

function splitToParagraphs(text) {
    return text
        .replace(/\s+/g, " ")
        .split("։ ")
        .map((item) => item.trim())
        .filter(Boolean)
        .map((item) => (item.endsWith("։") ? item : item + "։"));
}

export default function DogInfo() {
    const navigate = useNavigate();
    const [current, setCurrent] = useState(0);
    const [activeLesson, setActiveLesson] = useState(0);

    const parsed = useMemo(
        () =>
            sections.map((section) => ({
                ...section,
                paragraphs: splitToParagraphs(section.content),
            })),
        []
    );

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
                <div className="absolute -top-44 left-1/2 h-[560px] w-[820px] -translate-x-1/2 rounded-full bg-emerald-100/80 blur-[125px]" />
                <div className="absolute top-[20%] -left-40 h-[420px] w-[420px] rounded-full bg-lime-100/90 blur-[115px]" />
                <div className="absolute top-[42%] right-[6%] h-[330px] w-[330px] rounded-full bg-yellow-50/90 blur-[105px]" />
                <div className="absolute bottom-[7%] -right-40 h-[480px] w-[480px] rounded-full bg-green-100/80 blur-[130px]" />

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

                {/* Hero dashboard */}
                <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
                    <motion.div
                        className="relative overflow-hidden rounded-[46px] border border-emerald-100 bg-white/85 p-6 shadow-[0_30px_100px_rgba(16,32,24,0.09)] backdrop-blur-2xl sm:p-8 md:p-10"
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75, ease: "easeOut" }}
                    >
                        <div className="pointer-events-none absolute -right-28 -top-28 h-96 w-96 rounded-full bg-emerald-100 blur-[65px]" />
                        <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-yellow-50 blur-[65px]" />

                        <div className="relative z-10 flex min-h-[560px] flex-col justify-between">
                            <div>
                                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-[#f6fbf7] px-4 py-2 text-sm font-bold text-emerald-800">
                                    <Dog size={16} className="text-emerald-700" />
                                    Շների ուսուցողական բաժին
                                </div>

                                <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.06em] text-[#102018] sm:text-5xl md:text-6xl lg:text-7xl">
                                    Հավատարիմ ընկերոջ խնամքը՝{" "}
                                    <span className="text-emerald-700">
                                        պարզ քայլերով
                                    </span>
                                </h1>

                                <p className="mt-7 max-w-2xl text-base leading-8 text-[#607269] sm:text-lg">
                                    Սովորիր շների ծագման, վարժեցման, սննդակարգի, առողջության,
                                    զգայությունների և ճիշտ խնամքի մասին՝ դասավորված ու հեշտ
                                    ընկալվող ձևով։
                                </p>

                                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                                    <a
                                        href="#dog-training"
                                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#16834f] px-7 py-4 text-sm font-black text-white shadow-[0_18px_50px_rgba(22,131,79,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-[#106b41]"
                                    >
                                        Սկսել դասերը
                                        <ArrowRight
                                            size={18}
                                            className="transition group-hover:translate-x-1"
                                        />
                                    </a>

                                    <a
                                        href="#dog-slider"
                                        className="inline-flex items-center justify-center rounded-full border border-emerald-100 bg-white px-7 py-4 text-sm font-black text-[#183528] shadow-[0_16px_45px_rgba(16,32,24,0.055)] transition duration-300 hover:-translate-y-1 hover:border-emerald-200"
                                    >
                                        Դիտել սլայդները
                                    </a>
                                </div>
                            </div>

                            <div className="mt-12 grid gap-3 sm:grid-cols-3">
                                <div className="rounded-[28px] border border-emerald-100 bg-[#f6fbf7] p-5">
                                    <p className="text-3xl font-black text-[#102018]">10</p>
                                    <p className="mt-1 text-sm font-semibold text-[#6b7c72]">
                                        Դաս
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
                                        Քայլ առ քայլ
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Hero slider */}
                    <motion.div
                        id="dog-slider"
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

                {/* Training layout */}
                <section id="dog-training" className="mt-14">
                    <div className="mb-8 text-center">
                        <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/85 px-4 py-2 text-sm font-bold text-emerald-800 shadow-[0_14px_35px_rgba(16,32,24,0.05)]">
                            <Bone size={16} className="text-emerald-700" />
                            Դասերի ծրագիր
                        </div>

                        <h2 className="text-3xl font-black tracking-[-0.04em] text-[#102018] sm:text-4xl md:text-5xl">
                            Շների խնամքը՝ քայլ առ քայլ
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#607269] sm:text-base">
                            Ընտրիր ձախ կողմի դասը կամ պարզապես կարդա նյութերը հերթով։
                        </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-[360px_1fr] lg:items-start">
                        {/* Sticky lesson navigation */}
                        <motion.aside
                            className="rounded-[42px] border border-emerald-100 bg-white/85 p-4 shadow-[0_24px_85px_rgba(16,32,24,0.075)] backdrop-blur-2xl lg:sticky lg:top-28"
                            initial={{ opacity: 0, x: -28 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <div className="mb-4 rounded-[30px] bg-[#102018] p-5 text-white">
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                                    <PawPrint size={24} className="text-emerald-200" />
                                </div>

                                <h3 className="text-2xl font-black tracking-[-0.035em]">
                                    Արագ ընտրություն
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-white/60">
                                    Սեղմիր թեմայի վրա և շարունակիր ուսումնասիրել նույն էջում։
                                </p>
                            </div>

                            <div className="grid gap-2">
                                {parsed.map((item, index) => (
                                    <button
                                        key={item.title}
                                        onClick={() => setActiveLesson(index)}
                                        className={`group flex items-center gap-3 rounded-[22px] border p-3 text-left transition duration-300 ${activeLesson === index
                                                ? "border-emerald-200 bg-emerald-50"
                                                : "border-emerald-100 bg-[#f6fbf7] hover:bg-white"
                                            }`}
                                    >
                                        <span
                                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-xs font-black ${activeLesson === index
                                                    ? "bg-[#16834f] text-white"
                                                    : "bg-white text-emerald-800"
                                                }`}
                                        >
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <span className="line-clamp-2 text-sm font-black text-[#102018]">
                                            {item.title}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </motion.aside>

                        {/* Active lesson card */}
                        <motion.div
                            key={activeLesson}
                            className="relative overflow-hidden rounded-[42px] border border-emerald-100 bg-white/85 p-4 shadow-[0_24px_85px_rgba(16,32,24,0.075)] backdrop-blur-2xl sm:p-5"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, ease: "easeOut" }}
                        >
                            <div className="grid gap-6 xl:grid-cols-[0.9fr_1fr] xl:items-stretch">
                                <div className="relative min-h-[360px] overflow-hidden rounded-[34px] bg-emerald-50 xl:min-h-[620px]">
                                    <img
                                        src={parsed[activeLesson].image}
                                        alt={parsed[activeLesson].title}
                                        className="h-full w-full object-cover"
                                        loading="lazy"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#102018]/70 via-transparent to-transparent" />

                                    <div className="absolute bottom-5 left-5 right-5">
                                        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm font-black text-white backdrop-blur-xl">
                                            <ShieldCheck size={16} />
                                            Դաս {String(activeLesson + 1).padStart(2, "0")}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-between p-2 sm:p-5">
                                    <div>
                                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-[#f6fbf7] px-4 py-2 text-sm font-black text-emerald-800">
                                            <Dog size={16} className="text-emerald-700" />
                                            Շների խնամք
                                        </div>

                                        <h3 className="text-3xl font-black leading-tight tracking-[-0.04em] text-[#102018] sm:text-4xl md:text-5xl">
                                            {parsed[activeLesson].title}
                                        </h3>

                                        <div className="mt-6 space-y-4 text-sm leading-8 text-[#607269] sm:text-base">
                                            {parsed[activeLesson].paragraphs.map((paragraph, index) => (
                                                <p key={index}>{paragraph}</p>
                                            ))}
                                        </div>

                                        {parsed[activeLesson].warning && (
                                            <div className="mt-7 rounded-[28px] border border-red-100 bg-red-50 p-5 text-red-950">
                                                <div className="mb-2 flex items-center gap-2 font-black">
                                                    <AlertTriangle size={18} />
                                                    Զգուշացում
                                                </div>

                                                <p className="text-sm leading-7">
                                                    {parsed[activeLesson].warning}
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                        <button
                                            onClick={() =>
                                                setActiveLesson((prev) =>
                                                    prev === 0 ? parsed.length - 1 : prev - 1
                                                )
                                            }
                                            className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-100 bg-white px-6 py-3 text-sm font-black text-[#183528] transition hover:-translate-y-1 hover:bg-emerald-50"
                                        >
                                            <ChevronLeft size={18} />
                                            Նախորդ դասը
                                        </button>

                                        <button
                                            onClick={() =>
                                                setActiveLesson((prev) => (prev + 1) % parsed.length)
                                            }
                                            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#16834f] px-6 py-3 text-sm font-black text-white shadow-[0_16px_45px_rgba(22,131,79,0.2)] transition hover:-translate-y-1 hover:bg-[#106b41]"
                                        >
                                            Հաջորդ դասը
                                            <ChevronRight size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* All lessons preview */}
                <section className="mt-14">
                    <div className="mb-8 text-center">
                        <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/85 px-4 py-2 text-sm font-bold text-emerald-800 shadow-[0_14px_35px_rgba(16,32,24,0.05)]">
                            <HeartHandshake size={16} className="text-emerald-700" />
                            Բոլոր թեմաները
                        </div>

                        <h2 className="text-3xl font-black tracking-[-0.04em] text-[#102018] sm:text-4xl md:text-5xl">
                            Շների մասին ամբողջական նյութերը
                        </h2>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {parsed.map((section, index) => (
                            <motion.button
                                type="button"
                                key={section.title}
                                onClick={() => {
                                    setActiveLesson(index);
                                    document
                                        .getElementById("dog-training")
                                        ?.scrollIntoView({ behavior: "smooth" });
                                }}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="group overflow-hidden rounded-[34px] border border-emerald-100 bg-white/85 p-4 text-left shadow-[0_20px_70px_rgba(16,32,24,0.065)] transition duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_28px_90px_rgba(22,131,79,0.11)]"
                            >
                                <div className="relative h-[210px] overflow-hidden rounded-[26px] bg-emerald-50">
                                    <img
                                        src={section.image}
                                        alt={section.title}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />

                                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-emerald-800 backdrop-blur-xl">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>
                                </div>

                                <div className="p-2 pt-5">
                                    <h3 className="text-xl font-black leading-tight tracking-[-0.03em] text-[#102018]">
                                        {section.title}
                                    </h3>

                                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#607269]">
                                        {section.paragraphs[0]}
                                    </p>

                                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-black text-emerald-700">
                                        Բացել դասը
                                        <ArrowRight
                                            size={17}
                                            className="transition group-hover:translate-x-1"
                                        />
                                    </div>
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </section>

                {/* Quiz CTA */}
                <section className="mt-14">
                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="relative overflow-hidden rounded-[46px] border border-emerald-100 bg-white p-8 text-center shadow-[0_28px_95px_rgba(16,32,24,0.08)] md:p-12"
                    >
                        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-100 blur-[75px]" />
                        <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-yellow-50 blur-[75px]" />

                        <div className="relative z-10 mx-auto max-w-3xl">
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-[24px] bg-emerald-50">
                                <HelpCircle size={30} className="text-emerald-700" />
                            </div>

                            <h2 className="text-3xl font-black tracking-[-0.04em] text-[#102018] sm:text-4xl md:text-5xl">
                                Ստուգիր գիտելիքդ
                            </h2>

                            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#607269] sm:text-base">
                                Եթե ուսումնասիրել ես նյութերը, անցիր հարցերին և ստուգիր՝ որքան լավ
                                ես հիշում շների խնամքի ու առողջության մասին տեղեկությունները։
                            </p>

                            <div className="mt-8">
                                <Link
                                    to="/DogQuiz"
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