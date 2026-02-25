import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

const sections = [
    {
        title: "Շները և նրանց ծագումը 🐾",
        image: "/dog and wolf.jpg",
        content:
            "Շները սերում են գայլերից՝ ըստ գենետիկական և հնագիտական հետազոտությունների։ Հնագույն մարդկանց և գայլերի կապը ձևավորվել է ավելի քան 15,000–30,000 տարի առաջ, երբ որոշ գայլեր մոտեցել են մարդկային բնակավայրերին՝ սնունդ գտնելու նպատակով։ Ժամանակի ընթացքում նրանք ընտելացվել են, դարձել ավելի հանդուրժող ու բարեկամական մարդու նկատմամբ։ Այսպես առաջացան առաջին շները՝ մարդկանց հավատարիմ օգնականները որսի, պահակության և ընկերության մեջ։ Այսօր աշխարհում կա ավելի քան 400 ցեղատեսակ շուն, որոնք տարբերվում են իրենց չափերով, բնավորությամբ և դերից՝ ծառայողականից մինչև դեկորատիվ։",
        badge: "History",
    },
    {
        title: "Շների վարժեցման գաղտնիքները 🦴",
        image: "/shun varjecnel.jpg",
        content:
            "Շների վարժեցումը սովորաբար սկսում է մոտ 3 ամսական տարիքից, երբ փոքրիկը արդեն բավականաչափ հասուն է՝ սովորելու պարզ հրամաններ։ Այս փուլում կարևոր է ոչ թե խստությունը, այլ համբերությունը, պոզիտիվ մոտեցումը և կանոնավոր վարժությունները։ Շունը լավագույնս արձագանքում է պարգևներին՝ քաղցրավենիք, գովասանք կամ խաղալիք։ Վարժեցումը պետք է լինի կարճ, զվարճալի և հետևողական, որպեսզի կենդանին չձանձրանա և միշտ կապվածություն զգա իր տիրոջ հանդեպ։ Այս կերպ ձևավորվում է վստահություն, հնազանդություն և իրական ընկերություն մարդու ու շան միջև։ 🐶💛",
        badge: "Training",
    },
    {
        title: "Ինչ չի կարելի տալ շներին 🚫",
        image: "/dogno.jpg",
        content:
            "Շների մարսողական համակարգը զգայուն է, և որոշ մթերքներ կարող են նրանց համար թունավոր լինել։ Ամենավտանգավորներից են՝ շոկոլադը (թեոբրոմին), սոխն ու սխտորը (արյան կարմիր բջիջների վնասում), որոշ պտուղներ՝ խաղող, չամիչ, ավոկադո (երիկամների/լյարդի վնասում)։ Ավելի լավ է շանը տալ միայն շների համար նախատեսված հատուկ կերեր, միս, բրինձ և բանջարեղեն՝ փոքր քանակներով։ 🐾",
        badge: "Safety",
    },
    {
        title: "Շան օգուտը մարդուն 🐶💖",
        image: "/dogsweet.jpg",
        content:
            "Շները մարդկության ամենահավատարիմ ընկերներն են։ Նրանք մարդուն տալիս են անվերապահ սեր, պաշտպանություն և ընկերություն, ինչն օգնում է հաղթահարել միայնությունը և սթրեսը։ Հետազոտությունները ցույց են տվել, որ շան հետ շփումը նվազեցնում է սթրեսի հորմոնները, նորմալացնում է սրտի զարկը և նույնիսկ բարելավում է քունը։ Շների ներկայությունը դրական է ազդում երեխաների, տարեցների և հոգնած մարդկանց հոգեբանական վիճակի վրա՝ ստեղծելով ջերմություն ու հանգստություն տանը։ 🐾✨",
        badge: "Benefits",
    },
    {
        title: "Շների զգայությունների կախարդանքը 🐶✨",
        image:
            "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=1200&q=80",
        content:
            "Շները ունեն զարմանալիորեն զարգացած հոտառություն՝ շատ ավելի ուժեղ, քան մարդու մոտ։ Նրանք կարող են տարբերել հարյուրավոր հոտեր՝ անգամ շատ թույլներից։ Նրանց լսողությունը նույնպես գերազանց է․ շները լսում են բարձր հաճախականության ձայներ, որոնք մարդը չի ընկալում։ Որոշ ցեղատեսակներ ունեն նաև լավ տեսողություն՝ հատկապես մթության մեջ, ինչը օգնում է նրանց որսի, պաշտպանական և ուղեկցող ծառայություններում։ 🐾✨",
        badge: "Senses",
    },
    {
        title: "Շների կյանքի տևողությունը 🐾",
        image: "/photo_2025-09-10_22-21-51.jpg",
        content:
            "Շների միջին կյանքի տևողությունը 10-ից 13 տարի է, սակայն դա կախված է ցեղատեսակից, խնամքից և սնուցումից։ Փոքր չափի շները սովորաբար ապրում են ավելի երկար, իսկ մեծ ցեղատեսակները՝ ավելի կարճ։ Առողջ սնունդը, կանոնավոր զբոսանքները և սիրով վերաբերմունքը կարող են երկարացնել շան կյանքը՝ դարձնելով այն երջանիկ և աշխույժ։ 🐶💛",
        badge: "Lifespan",
    },
    {
        title: "Շան առողջության հիմնական նշանները 🩺🐶",
        image: "/shaxmat.jpg",
        content:
            "Առողջ շունը միշտ ակտիվ ու ուրախ է։ Նրա մաշկը մաքուր է, փայլուն բրդով, իսկ աչքերը՝ մաքուր և լուսավոր։ Նա ունի լավ ախորժակ, պահպանված քաշ և շնչառություն առանց տհաճ հոտի։ Շան վարքի փոփոխությունները՝ քնկոտություն, ախորժակի կորուստ կամ անտարբերություն, կարող են լինել հիվանդության նշաններ, և հարկավոր է խորհրդակցել անասնաբույժի հետ։ 🐾",
        badge: "Health",
    },
];

function splitToParagraphs(text) {
    return text
        .replace(/\s+/g, " ")
        .split("։ ")
        .map((s) => s.trim())
        .filter(Boolean)
        .map((s) => (s.endsWith("։") ? s : s + "։"));
}

export default function DogInfo() {
    const navigate = useNavigate();

    const parsed = useMemo(() => {
        return sections.map((s) => ({
            ...s,
            paragraphs: splitToParagraphs(s.content),
        }));
    }, []);

    return (
        <div className="w-full overflow-x-hidden bg-[#fefae0] text-gray-800 font-[Montserrat]">
            {/* BODY: no header, so no top padding */}
            <main className="pt-6 sm:pt-10 pb-10">
                {/* TOP INTRO */}
                <section className="mx-auto max-w-6xl px-4">
                    <div className="rounded-3xl bg-white/70 shadow-xl border border-black/5 p-5 sm:p-7 md:p-10">
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5d8c73]/10 text-[#5d8c73] font-semibold text-xs sm:text-sm">
                                    Training • Dogs
                                </div>
                                <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0b241f]">
                                    Շների մասին ամենակարևորը՝ պարզ ու պրոֆեսիոնալ
                                </h2>
                                <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed max-w-3xl">
                                    Ստորև կգտնես ծագում, վարժեցում, անվտանգ սնունդ, առողջություն և այլ կարևոր թեմաներ՝
                                    կարճ, ընթեռնելի ու միևնույն ոճով։
                                </p>

                                {/* If you still want back/home buttons without header, keep this */}
                                <div className="mt-5 flex flex-wrap gap-3">
                                    <button
                                        onClick={() => navigate(-1)}
                                        className="inline-flex items-center gap-2 bg-[#5d8c73]/15 hover:bg-[#5d8c73]/20 transition px-4 py-2 rounded-xl font-semibold text-[#0b241f]"
                                    >
                                        ← Հետ
                                    </button>
                                </div>
                            </div>

                            <div className="hidden md:flex items-center gap-2">
                                <span className="text-xs text-gray-600">Scroll</span>
                                <span className="w-10 h-px bg-gray-300" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTIONS */}
                <section className="mx-auto max-w-6xl px-4 mt-8 sm:mt-10 space-y-8 sm:space-y-10">
                    {parsed.map((s, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.55, ease: "easeOut" }}
                            className="group rounded-3xl overflow-hidden bg-white shadow-2xl border border-black/5"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                {/* IMAGE */}
                                <div className="relative h-56 sm:h-64 md:h-full min-h-[240px]">
                                    <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

                                    <div className="absolute left-4 top-4">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/85 text-[#0b241f] text-xs font-bold shadow">
                                            {s.badge}
                                        </span>
                                    </div>

                                    <div className="absolute left-4 right-4 bottom-4">
                                        <h3 className="text-white font-extrabold text-lg sm:text-xl drop-shadow">
                                            {s.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* TEXT */}
                                <div className="p-5 sm:p-7 md:p-10">
                                    <h4 className="text-[#5d8c73] font-extrabold text-lg sm:text-xl md:text-2xl">
                                        {s.title}
                                    </h4>

                                    <div className="mt-4 space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
                                        {s.paragraphs.slice(0, 4).map((p, i) => (
                                            <p key={i}>{p}</p>
                                        ))}
                                    </div>

                                    {s.badge === "Safety" && (
                                        <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-red-900">
                                            <div className="font-extrabold text-sm mb-1">Զգուշացում</div>
                                            <div className="text-sm leading-relaxed">
                                                Եթե կասկածում ես մթերքի անվտանգության վրա՝ մի տվիր։ Անհարմար նշանների դեպքում՝ դիմիր
                                                անասնաբույժի։
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </section>
                <Footer/>
            </main>
        </div>
    );
}