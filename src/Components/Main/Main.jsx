import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bird,
  CheckCircle2,
  Fish,
  HeartHandshake,
  Leaf,
  PawPrint,
  ShieldCheck,
  Sparkles,
  Sprout,
  Truck,
} from "lucide-react";

import Animation from "../Hook/Animation.jsx";
import { AnimatedSection } from "../Hook/AnimatedSection.jsx";

const categories = [
  {
    id: "dogs",
    title: "Շներ",
    subtitle: "Սնունդ, խաղալիքներ և խնամքի պարագաներ հավատարիմ ընկերոջ համար։",
    link: "/DogInfo",
    icon: PawPrint,
    number: "01",
  },
  {
    id: "cats",
    title: "Կատուներ",
    subtitle: "Հարմարավետ, փափուկ և ընտրված ապրանքներ կատուների համար։",
    link: "/CatInfo",
    icon: PawPrint,
    number: "02",
  },
  {
    id: "fish",
    title: "Ձկներ",
    subtitle: "Ակվարիումի խնամք, ձկների սնունդ և ջրային գեղեցիկ միջավայր։",
    link: "/FishInfo",
    icon: Fish,
    number: "03",
  },
  {
    id: "birds",
    title: "Թռչուններ",
    subtitle: "Վանդակներ, կերեր և խնամքի պարագաներ թռչունների համար։",
    link: "/BirdsInfo",
    icon: Bird,
    number: "04",
  },
  {
    id: "plants",
    title: "Բույսեր",
    subtitle: "Կանաչ անկյուն, խնամք և բնական գեղեցկություն տան համար։",
    link: "/PlantsInfo",
    icon: Sprout,
    number: "05",
  },
];

const benefits = [
  {
    title: "Առանձին բաժիններ",
    text: "Յուրաքանչյուր բաժնում կարող ես տեսնել տվյալ կենդանուն կամ բույսին վերաբերող նյութերը, ապրանքները և խնամքի գաղափարները։",
    icon: Leaf,
  },
  {
    title: "Հեշտ կողմնորոշում",
    text: "Ընտրիր քեզ անհրաժեշտ ուղղությունը և արագ անցիր համապատասխան բաժին։",
    icon: CheckCircle2,
  },
  {
    title: "Հարմար օգտագործում",
    text: "Էջը կառուցված է այնպես, որ օգտատերը հեշտությամբ հասկանա՝ որտեղից սկսել։",
    icon: Truck,
  },
];

export default function Main() {
  const [started, setStarted] = useState(
    () => localStorage.getItem("hasStartedTraining") === "true"
  );

  useEffect(() => {
    document.body.style.overflow = started ? "auto" : "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [started]);

  if (!started) {
    return (
      <Animation
        onFinish={() => {
          localStorage.setItem("hasStartedTraining", "true");
          setStarted(true);
        }}
      />
    );
  }

  return (
    <motion.main
      className="relative min-h-screen overflow-hidden bg-[#f6fbf7] text-[#102018] font-[Montserrat]"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      {/* Ֆոն */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-44 left-1/2 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-emerald-100/80 blur-[120px]" />
        <div className="absolute top-[20%] -left-40 h-[380px] w-[380px] rounded-full bg-lime-100/80 blur-[110px]" />
        <div className="absolute bottom-[10%] -right-40 h-[460px] w-[460px] rounded-full bg-green-100/80 blur-[125px]" />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,251,247,0.55),rgba(246,251,247,1))]" />

        <div className="absolute inset-0 opacity-[0.3] bg-[linear-gradient(to_right,rgba(16,32,24,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,32,24,0.055)_1px,transparent_1px)] bg-[size:52px_52px]" />
      </div>

      <div className="relative z-10">
        {/* Առաջին հատված */}
        <section className="mx-auto grid min-h-screen max-w-7xl items-center gap-6 px-4 pt-24 pb-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          {/* Ձախ գլխավոր հատված */}
          <motion.div
            className="relative overflow-hidden rounded-[46px] border border-emerald-100 bg-white/85 p-6 shadow-[0_30px_100px_rgba(16,32,24,0.09)] backdrop-blur-2xl sm:p-8 md:p-10 lg:min-h-[640px]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <div className="pointer-events-none absolute -right-28 -top-28 h-96 w-96 rounded-full bg-emerald-100 blur-[60px]" />
            <div className="pointer-events-none absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-lime-100 blur-[60px]" />

            <div className="relative z-10 flex min-h-[560px] flex-col justify-between">
              <div>
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-[#f6fbf7] px-4 py-2 text-sm font-bold text-emerald-800">
                  <Sparkles size={16} className="text-emerald-600" />
                  Nature Nook ուսուցողական բաժին
                </div>

                <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.055em] text-[#102018] sm:text-5xl md:text-6xl lg:text-7xl">
                  Բացահայտիր խնամքի ճիշտ ուղին{" "}
                  <span className="text-emerald-700">
                    կենդանիների և բնության համար
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-[#607269] sm:text-lg">
                  Ընտրիր համապատասխան բաժինը և ծանոթացիր շների, կատուների,
                  ձկների, թռչունների կամ բույսերի խնամքին վերաբերող նյութերին,
                  գաղափարներին և օգտակար առաջարկներին։
                </p>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#categories"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#16834f] px-7 py-4 text-sm font-black text-white shadow-[0_18px_50px_rgba(22,131,79,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-[#106b41]"
                  >
                    Ընտրել բաժինը
                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-1"
                    />
                  </a>

                  <Link
                    to="/shop"
                    className="inline-flex items-center justify-center rounded-full border border-emerald-100 bg-white px-7 py-4 text-sm font-black text-[#183528] shadow-[0_16px_45px_rgba(16,32,24,0.055)] transition duration-300 hover:-translate-y-1 hover:border-emerald-200"
                  >
                    Անցնել խանութ
                  </Link>
                </div>
              </div>

              <div className="mt-12 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[28px] border border-emerald-100 bg-[#f6fbf7] p-5">
                  <p className="text-3xl font-black text-[#102018]">5</p>
                  <p className="mt-1 text-sm font-semibold text-[#6b7c72]">
                    Բաժին
                  </p>
                </div>

                <div className="rounded-[28px] border border-emerald-100 bg-[#f6fbf7] p-5">
                  <p className="text-3xl font-black text-[#102018]">Խնամք</p>
                  <p className="mt-1 text-sm font-semibold text-[#6b7c72]">
                    Օգտակար նյութեր
                  </p>
                </div>

                <div className="rounded-[28px] border border-emerald-100 bg-[#f6fbf7] p-5">
                  <p className="text-3xl font-black text-[#102018]">Հեշտ</p>
                  <p className="mt-1 text-sm font-semibold text-[#6b7c72]">
                    Կողմնորոշում
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Աջ բաժինների ցանկ */}
          <motion.div
            className="grid gap-4"
            initial={{ opacity: 0, x: 26 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
          >
            <div className="rounded-[40px] border border-emerald-100 bg-white/85 p-5 shadow-[0_24px_80px_rgba(16,32,24,0.075)] backdrop-blur-2xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-emerald-700">
                    Արագ անցում
                  </p>
                  <h2 className="mt-1 text-2xl font-black tracking-[-0.03em]">
                    Բաժիններ
                  </h2>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50">
                  <Leaf size={23} className="text-emerald-700" />
                </div>
              </div>

              <div className="grid gap-3">
                {categories.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.id}
                      to={item.link}
                      className="group flex items-center justify-between rounded-[26px] border border-emerald-100 bg-[#f6fbf7] p-4 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_45px_rgba(22,131,79,0.1)]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white">
                          <Icon
                            size={20}
                            className="text-emerald-700 transition group-hover:scale-110"
                          />
                        </div>

                        <div>
                          <p className="font-black text-[#102018]">
                            {item.title}
                          </p>
                          <p className="text-xs font-semibold text-[#7a8a82]">
                            Բացել նյութերը
                          </p>
                        </div>
                      </div>

                      <ArrowRight
                        size={18}
                        className="text-[#9aaba2] transition group-hover:translate-x-1 group-hover:text-emerald-700"
                      />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[40px] border border-emerald-100 bg-[#102018] p-6 text-white shadow-[0_24px_80px_rgba(16,32,24,0.16)]">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-400/20 blur-[50px]" />

              <div className="relative z-10">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <HeartHandshake size={23} className="text-emerald-200" />
                </div>

                <h3 className="text-2xl font-black tracking-[-0.03em]">
                  Սիրով կազմված խնամքի ուղեցույց
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  Այստեղ կարող ես ընտրել քեզ հետաքրքրող ուղղությունը և անցնել
                  համապատասխան բաժին՝ ավելի մանրամասն ուսումնասիրելու համար։
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Բաժինների ցանկ */}
        <section
          id="categories"
          className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
        >
          <AnimatedSection delay={100}>
            <div className="mb-10 text-center">
              <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/80 px-4 py-2 text-sm font-bold text-emerald-800 shadow-[0_14px_35px_rgba(16,32,24,0.05)]">
                <Leaf size={16} className="text-emerald-700" />
                Ընտրիր բաժինը
              </div>

              <h2 className="text-3xl font-black tracking-[-0.04em] text-[#102018] sm:text-4xl md:text-5xl">
                Ո՞ր թեման է քեզ հետաքրքրում
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#607269] sm:text-base">
                Ընտրիր կենդանու կամ բույսերի բաժինը և անցիր տվյալ թեմայի
                ուսուցողական նյութերին։
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-4">
            {categories.map((item, index) => {
              const Icon = item.icon;

              return (
                <AnimatedSection key={item.id} delay={150 + index * 70}>
                  <Link
                    to={item.link}
                    className="group grid items-center gap-5 rounded-[34px] border border-emerald-100 bg-white/85 p-5 shadow-[0_18px_65px_rgba(16,32,24,0.065)] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_26px_85px_rgba(22,131,79,0.11)] sm:grid-cols-[90px_1fr_auto]"
                  >
                    <div className="flex h-[76px] w-[76px] items-center justify-center rounded-[26px] bg-emerald-50">
                      <Icon
                        size={30}
                        className="text-emerald-700 transition group-hover:scale-110"
                      />
                    </div>

                    <div>
                      <div className="mb-2 flex items-center gap-3">
                        <span className="text-xs font-black text-emerald-700">
                          {item.number}
                        </span>
                        <span className="h-px w-10 bg-emerald-200" />
                        <span className="text-xs font-bold tracking-[0.16em] text-[#7a8a82]">
                          NATURE NOOK
                        </span>
                      </div>

                      <h3 className="text-2xl font-black tracking-[-0.03em] text-[#102018] sm:text-3xl">
                        {item.title}
                      </h3>

                      <p className="mt-2 max-w-2xl text-sm leading-6 text-[#607269]">
                        {item.subtitle}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-4 sm:justify-end">
                      <span className="text-sm font-black text-emerald-700">
                        Բացել բաժինը
                      </span>

                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#16834f] text-white transition group-hover:scale-105">
                        <ArrowRight
                          size={19}
                          className="transition group-hover:translate-x-0.5"
                        />
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </section>

        {/* Առավելություններ */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <AnimatedSection delay={150}>
            <div className="grid gap-5 lg:grid-cols-3">
              {benefits.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[36px] border border-emerald-100 bg-white/85 p-7 shadow-[0_20px_70px_rgba(16,32,24,0.065)]"
                  >
                    <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-50">
                      <Icon size={25} className="text-emerald-700" />
                    </div>

                    <h3 className="text-xl font-black tracking-[-0.025em] text-[#102018]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#607269]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </section>

        {/* Վերջնական ուղղորդում */}
        <section className="mx-auto max-w-7xl px-4 pt-4 pb-24 sm:px-6 lg:px-8">
          <AnimatedSection delay={180}>
            <div className="relative overflow-hidden rounded-[46px] border border-emerald-100 bg-white p-8 text-center shadow-[0_28px_95px_rgba(16,32,24,0.08)] md:p-12">
              <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-100 blur-[75px]" />

              <div className="relative z-10 mx-auto max-w-3xl">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-[24px] bg-emerald-50">
                  <ShieldCheck size={30} className="text-emerald-700" />
                </div>

                <h2 className="text-3xl font-black tracking-[-0.04em] text-[#102018] sm:text-4xl md:text-5xl">
                  Սկսիր քեզ հետաքրքրող բաժնից
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#607269] sm:text-base">
                  Ընտրիր համապատասխան բաժինը և ուսումնասիրիր կենդանիների ու
                  բույսերի խնամքին վերաբերող օգտակար նյութերը։
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  {categories.map((item) => (
                    <Link
                      key={item.id}
                      to={item.link}
                      className="rounded-full border border-emerald-100 bg-[#f6fbf7] px-5 py-3 text-sm font-black text-[#183528] transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-800"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </div>
    </motion.main>
  );
}