import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Code2,
  Lightbulb,
  Rocket,
  Search,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  "Modern website development",
  "AI-powered digital solutions",
  "Google visibility strategy",
  "Business-focused UI/UX",
];

const pillars = [
  {
    title: "Smart Planning",
    desc: "We understand your business goal first, then create a practical digital strategy that fits your brand.",
    icon: Lightbulb,
  },
  {
    title: "Clean Development",
    desc: "We build fast, responsive, and easy-to-use digital products with modern development practices.",
    icon: Code2,
  },
  {
    title: "AI Integration",
    desc: "We use AI tools and workflows to improve automation, productivity, and customer experience.",
    icon: Brain,
  },
  {
    title: "Growth Strategy",
    desc: "We help improve online visibility through local SEO, Google Business Profile, and smart content planning.",
    icon: TrendingUp,
  },
];

const growthCards = [
  {
    title: "For Businesses",
    desc: "Websites, Google presence, and digital strategy that help customers trust and contact your brand.",
    icon: Target,
  },
  {
    title: "For Startups",
    desc: "Launch-ready websites, MVP ideas, and scalable digital structure for early-stage growth.",
    icon: Rocket,
  },
  {
    title: "For Freelancers",
    desc: "Portfolio websites, service pages, and personal branding that look professional and credible.",
    icon: Users,
  },
];

const trustItems = [
  "Transparent & Honest",
  "Quality-Focused",
  "Client-Centric",
  "Certified Team",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f3f3f3] px-4 pb-14 pt-14 text-slate-900 dark:bg-[#0f1111] dark:text-white sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pt-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* TOP ABOUT */}
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#007185] dark:text-[#ffd814] sm:text-sm sm:tracking-[0.25em]">
              About TechNova Solutions
            </span>

            <h2 className="mt-5 text-[clamp(2rem,8vw,2.5rem)] font-black leading-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              Digital intelligence made for{" "}
              <span className="text-[#007185] dark:text-[#ffd814]">
                real business growth
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-white/65 sm:text-lg">
              TechNova Solutions helps businesses, startups, freelancers, and
              freshers grow through professional websites, AI-powered solutions,
              Google visibility, and practical digital strategy.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex min-w-0 items-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm dark:border-white/10 dark:bg-[#131921] dark:text-white/75"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#007185] dark:text-[#ffd814]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="w-full max-w-full overflow-hidden rounded-2xl border border-slate-300 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-[#131921] sm:p-8"
          >
            <div className="rounded-2xl bg-[#f7fafa] p-5 dark:bg-[#232f3e] sm:p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#007185] to-[#0099a8] text-white shadow-lg">
                <Brain size={30} strokeWidth={2.2} />
              </div>

              <h3 className="mt-7 text-2xl font-black leading-tight text-slate-950 dark:text-white sm:text-4xl">
                Practical technology with a clear business purpose.
              </h3>

              <p className="mt-5 text-base leading-8 text-slate-600 dark:text-white/65">
                We do not only design pages. We create digital systems that look
                professional, work smoothly, and help customers trust your
                brand.
              </p>

              <div className="mt-8 grid gap-4">
                {[
                  "Professional look for your business",
                  "Clear structure for better user experience",
                  "Conversion-focused website sections",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex min-w-0 items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm dark:bg-[#131921] dark:text-white/75"
                  >
                    <ShieldCheck className="h-5 w-5 text-[#007185] dark:text-[#ffd814]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        {/* TRUST BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-12 overflow-hidden rounded-[2rem] border border-cyan-100 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-[#0f1722]"
        >
          <div className="absolute left-[-120px] top-[20%] h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute right-[-120px] top-0 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl" />

          <div className="grid lg:grid-cols-[1fr_390px] xl:grid-cols-[1fr_420px]">
            {/* LEFT */}
            <div className="relative overflow-hidden p-6 sm:p-8 lg:p-10 xl:p-12">
              <div className="absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-cyan-50 to-transparent dark:from-cyan-500/5" />

              <div className="relative flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#007f8f] to-cyan-700 text-white shadow-xl shadow-cyan-500/30">
                  <ShieldCheck size={30} />
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#007f8f] sm:text-xs">
                    Trust & Authenticity
                  </p>

                  <div className="mt-2 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#007f8f] to-transparent" />
                </div>
              </div>

              <div className="relative mt-8 max-w-4xl text-center lg:text-left">
                <h2 className="font-serif text-[clamp(2rem,4vw,4.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[#020617] dark:text-white">
                  Officially Recognized <span className="inline-block">&</span>
                </h2>

                <h2 className="mt-1 font-serif text-[clamp(2rem,4vw,4.5rem)] font-bold leading-[1.08] tracking-[-0.03em]">
                  <span className="bg-gradient-to-r from-[#007f8f] via-cyan-500 to-sky-500 bg-clip-text text-transparent">
                    Udyam Registered
                  </span>
                </h2>

                <h2 className="mt-1 font-serif text-[clamp(2rem,4vw,4.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[#020617] dark:text-white">
                  by Government of India
                </h2>
              </div>

              <p className="relative mt-6 max-w-3xl text-sm leading-8 text-slate-600 dark:text-white/65 sm:text-base">
                TechNova Solutions is officially registered under the Udyam MSME
                initiative, reflecting our commitment to transparency,
                professionalism, trusted internship programs, and modern digital
                solutions.
              </p>

              <div className="relative mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {trustItems.map((item) => (
                  <div
                    key={item}
                    className="flex min-h-[78px] items-center gap-3 rounded-2xl border border-cyan-100 bg-white/80 p-4 shadow-lg shadow-slate-900/5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#007f8f]/40 dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#007f8f] text-white">
                      <CheckCircle2 size={16} />
                    </div>

                    <p className="text-sm font-bold leading-snug text-slate-800 dark:text-white">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative min-h-[340px] overflow-hidden bg-gradient-to-br from-[#ffe24d] via-[#ffd814] to-[#ffc400] p-7 lg:min-h-0 lg:p-8">
              <div className="absolute right-[-40px] top-[-40px] h-64 w-64 rounded-full bg-white/20 blur-3xl" />

              {/* CURVE */}
              <div className="absolute -left-24 top-0 hidden h-full w-[190px] rounded-r-full border-r-[8px] border-[#007f8f] bg-[#f8f4df] lg:block" />

              {/* FIXED OVERLAP */}
              <div className="relative z-10 mx-auto flex h-full max-w-[270px] flex-col items-center justify-center text-center lg:ml-auto lg:mr-0">
                {" "}
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-white/30 blur-2xl" />

                  <div className="relative flex h-36 w-36 items-center justify-center rounded-full border-[8px] border-yellow-100 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
                    <CheckCircle2 size={58} className="text-[#007f8f]" />
                  </div>
                </div>
                <h3 className="mt-7 text-center text-[1.7rem] font-black leading-tight tracking-[-0.03em] text-[#020617] sm:text-3xl">
                  Verified Business
                </h3>
                <p className="mt-3 whitespace-nowrap text-[10px] font-black uppercase tracking-[0.22em] text-slate-800/80 sm:text-xs">
                  Government Recognized
                </p>
                <div className="mt-5 flex items-center justify-center gap-3">
                  <div className="h-[2px] w-12 bg-slate-900/30" />

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#007f8f] text-white shadow-lg">
                    <ShieldCheck size={15} />
                  </div>

                  <div className="h-[2px] w-12 bg-slate-900/30" />
                </div>
                <div className="mt-6 whitespace-nowrap rounded-full bg-[#007f8f] px-6 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-white shadow-2xl shadow-cyan-900/30 sm:text-xs">
                  Government Recognized
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* PILLARS */}
        <div className="mt-16 sm:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#007185] dark:text-[#ffd814] sm:text-sm sm:tracking-[0.25em]">
              Our Pillars
            </span>

            <h3 className="mt-5 text-[clamp(2rem,8vw,2.5rem)] font-black leading-tight text-slate-950 dark:text-white sm:text-5xl">
              Strong foundation for modern digital success.
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-white/65">
              Every project is planned with design, performance, trust, and
              growth in mind.
            </p>
          </motion.div>

          <div className="mt-10 grid w-full gap-6 sm:mt-12 sm:grid-cols-2 xl:grid-cols-4">
            {pillars.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="w-full max-w-full rounded-2xl border border-slate-300 bg-white p-5 shadow-sm transition hover:border-[#007185] hover:shadow-md dark:border-white/10 dark:bg-[#131921] sm:p-6"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#232f3e] text-white">
                    <Icon size={26} />
                  </div>

                  <h4 className="mt-6 text-xl font-black text-slate-950 dark:text-white">
                    {item.title}
                  </h4>

                  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-white/60">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* GROWTH BLOCK */}
        <div className="mt-16 grid w-full gap-8 sm:mt-20 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="w-full max-w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#131921] to-[#1f2d3d] p-6 text-white shadow-lg sm:p-10"
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ffd814]">
              Scale Fast
            </span>

            <h3 className="mt-5 text-2xl font-black leading-tight sm:text-4xl">
              Support for businesses, startups, and freelancers.
            </h3>

            <p className="mt-5 text-base leading-8 text-slate-300">
              Whether you are building a new brand, improving your current
              website, or growing your local presence, TechNova gives you the
              right digital support to move forward.
            </p>
          </motion.div>

          <div className="grid w-full gap-5 md:grid-cols-3 lg:grid-cols-1">
            {growthCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="w-full max-w-full rounded-2xl border border-slate-300 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#131921] sm:p-6"
                >
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#232f3e] text-white">
                      <Icon size={23} />
                    </div>

                    <div>
                      <h4 className="font-black text-slate-950 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-white/60">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* TALENT HUB */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-14 w-full max-w-full overflow-hidden rounded-2xl border border-slate-300 bg-white p-6 text-center shadow-sm dark:border-white/10 dark:bg-[#131921] sm:mt-16 sm:p-10"
        >
          <Search className="mx-auto h-10 w-10 text-[#007185] dark:text-[#ffd814]" />

          <span className="mt-5 block text-xs font-bold uppercase tracking-[0.2em] text-[#007185] dark:text-[#ffd814] sm:tracking-[0.25em]">
            Talent Hub
          </span>

          <h3 className="mt-4 text-2xl font-black text-slate-950 dark:text-white sm:text-4xl">
            Grow with TechNova
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-white/65">
            Freshers, students, and freelancers can grow with practical
            exposure, guided learning, and modern digital work experience.
          </p>

          <Link
            to="/internship"
            className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#ffd814] px-6 py-4 text-sm font-bold text-[#111827] shadow-sm transition hover:bg-[#f7ca00] sm:w-auto sm:px-8"
          >
            Explore Opportunities
            <ArrowRight size={17} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
