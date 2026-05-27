import { motion } from "framer-motion";
import {
  ArrowRight,
  Brush,
  CheckCircle2,
  Code2,
  Search,
  ShieldCheck,
  Smartphone,
  WandSparkles,
} from "lucide-react";

const applyLink =
  "https://docs.google.com/forms/d/e/1FAIpQLScLi9woOfxYBvRM5APpuhthe-ahHqDP6p-iIdjJM6dM4H1vmg/viewform";

const process = [
  {
    step: "01",
    title: "Application Submission",
    desc: "Submit your application form. Selected candidates receive an official Internship Offer Letter within 24 hours.",
  },
  {
    step: "02",
    title: "Task Assignment",
    desc: "You will receive a practical task/project related to your selected internship domain.",
  },
  {
    step: "03",
    title: "Mentor Guidance",
    desc: "Work with mentor guidance, modern tools, and collaborative learning throughout the internship.",
  },
  {
    step: "04",
    title: "Certificate Process",
    desc: "After successful completion, interns can receive their certificate with a one-time ₹149 processing fee.",
  },
];

const domains = [
  {
    title: "Prompt Engineering",
    desc: "Learn advanced AI prompting, workflow automation, and practical business AI usage.",
    icon: WandSparkles,
  },
  {
    title: "AI-Powered Web Development",
    desc: "Build modern responsive websites using React, AI tools, and production-level UI/UX.",
    icon: Code2,
  },
  {
    title: "AI-Powered App Development",
    desc: "Create modern mobile app concepts with smooth experiences and useful features.",
    icon: Smartphone,
  },
  {
    title: "SEO Optimization",
    desc: "Learn keyword research, optimization, analytics, and ranking strategies.",
    icon: Search,
  },
  {
    title: "Web Design",
    desc: "Master typography, spacing, layouts, color systems, and premium modern design.",
    icon: Brush,
  },
];

const trustItems = [
  "MSME Registered",
  "Verified Business",
  "Trusted Internship Provider",
  "Professional Digital Solutions",
];

export default function InternshipSection() {
  return (
    <section
      id="internship"
      className="relative overflow-hidden bg-[#f6f7f8] px-4 py-8 text-[#020617] dark:bg-[#020617] dark:text-white sm:px-6 sm:py-12 lg:px-8"
    >
      {/* Background Effects */}
      <div className="absolute left-[-140px] top-24 h-72 w-72 rounded-full bg-[#007f8f]/10 blur-3xl" />
      <div className="absolute right-[-140px] top-96 h-72 w-72 rounded-full bg-[#ffd814]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* HERO */}
        <div className="mx-auto max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-black uppercase tracking-[0.28em] text-[#007f8f]"
          >
            TechNova Internship Program
          </motion.p>

          <h1
            className="mt-6 text-[clamp(2rem,9vw,2.5rem)] font-black leading-[1.12] text-[#111827] dark:text-white sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Start your
            <span className="block leading-[1.12] text-[#007c89] dark:text-cyan-300">
              {" "}
              intership Journey{" "}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 dark:text-white/65 sm:text-base"
          >
            Modern internship programs designed for future digital creators.
          </motion.p>
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

        {/* PROCESS */}
        <div className="mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#007f8f]">
              Internship Process
            </p>

            <h3 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-serif font-black leading-tight tracking-tight">
              Simple, transparent & beginner-friendly
            </h3>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 transition hover:border-[#007f8f]/40 dark:border-white/10 dark:bg-[#111827]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#007f8f] text-lg font-black text-white">
                  {item.step}
                </div>

                <h4 className="text-2xl font-black tracking-tight">
                  {item.title}
                </h4>

                <p className="mt-4 text-sm leading-8 text-slate-600 dark:text-white/65">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* DOMAINS */}
        <div className="mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#007f8f]">
              Internship Domains
            </p>

            <h3 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight tracking-tight">
              Choose Your Learning Path
            </h3>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {domains.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="group relative flex min-h-[340px] flex-col justify-between rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-900/5 transition hover:border-[#007f8f]/40 dark:border-white/10 dark:bg-[#111827]"
                >
                  <div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#111827] text-white transition group-hover:scale-105">
                      <Icon size={32} />
                    </div>

                    <h4 className="mt-7 text-2xl font-black leading-tight tracking-tight">
                      {item.title}
                    </h4>

                    <p className="mt-5 text-[15px] leading-8 text-slate-600 dark:text-white/65">
                      {item.desc}
                    </p>
                  </div>

                  <a
                    href={applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center justify-center gap-3 rounded-2xl bg-[#ffd814] px-7 py-4 text-base font-black text-black shadow-lg shadow-yellow-400/25 transition hover:-translate-y-1 hover:bg-[#f7ca00]"
                  >
                    Apply Now
                    <ArrowRight size={20} />
                  </a>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
