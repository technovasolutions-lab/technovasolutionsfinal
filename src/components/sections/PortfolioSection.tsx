import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Brain,
  Building2,
  Dumbbell,
  ExternalLink,
  Rocket,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    title: "AI Mentor Platform",
    desc: "AI-powered learning platform offering personalized mentorship, courses, and doubt-solving.",
    icon: Brain,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI"],
    gradient: "from-purple-600/30 to-blue-600/20",
  },
  {
    title: "Homely Real Estate",
    desc: "Modern real estate platform to browse properties, connect with agents, and schedule visits.",
    icon: Building2,
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    gradient: "from-orange-500/25 to-blue-600/20",
  },
  {
    title: "DataPro Dashboard",
    desc: "Analytics dashboard for tracking performance, metrics, and business insights in real-time.",
    icon: BarChart3,
    tags: ["React", "Express.js", "Chart.js", "PostgreSQL"],
    gradient: "from-blue-600/25 to-purple-600/20",
  },
  {
    title: "FitTrack Mobile App",
    desc: "Fitness tracking app with workout plans, progress tracking, and nutrition guidance.",
    icon: Dumbbell,
    tags: ["Flutter", "Firebase", "Dart", "Google Fit"],
    gradient: "from-pink-600/25 to-purple-600/20",
  },
  {
    title: "Luxe Fashion Store",
    desc: "E-commerce platform with smooth shopping experience, secure payments, and order tracking.",
    icon: ShoppingBag,
    tags: ["Next.js", "Stripe", "CMS", "Tailwind CSS"],
    gradient: "from-yellow-500/25 to-pink-600/20",
  },
  {
    title: "SEO Boost Campaign",
    desc: "SEO campaign that improved rankings, increased organic traffic, and boosted conversions.",
    icon: Rocket,
    tags: ["SEO", "Analytics", "Ahrefs", "Strategy"],
    gradient: "from-purple-600/30 to-blue-600/25",
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-slate-50 px-5 py-24 text-slate-950 transition-colors duration-300 dark:bg-[#020617] dark:text-white lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.14),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.16),transparent_35%)] dark:bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.25),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.25),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center">
          <div className="mx-auto flex w-fit items-center gap-3 text-sm font-black uppercase tracking-[0.25em] text-purple-600 dark:text-purple-300">
            <span className="h-px w-20 bg-purple-500" />
            Our Portfolio
            <span className="h-px w-20 bg-purple-500" />
          </div>

          <h2 className="mt-5 text-5xl font-black sm:text-6xl lg:text-7xl">
            Projects{" "}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-500">
              We Build
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-white/70">
            Explore a selection of impactful projects that demonstrate our
            expertise, creativity, and commitment to quality.
          </p>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-linear-to-r from-blue-500 to-purple-500" />
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 transition hover:-translate-y-2 hover:border-purple-400 dark:border-white/10 dark:bg-white/5 dark:shadow-black/20"
              >
                <div
                  className={`relative flex h-60 items-center justify-center overflow-hidden bg-linear-to-br ${project.gradient}`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.35),transparent_55%)] dark:bg-[radial-gradient(circle,rgba(147,51,234,0.25),transparent_60%)]" />

                  <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/20 px-3 py-1 text-xs font-black text-white backdrop-blur-xl">
                    TechNova
                  </div>

                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="relative flex h-28 w-28 items-center justify-center rounded-4xl border border-purple-300 bg-white/80 text-purple-600 shadow-2xl shadow-purple-300/40 backdrop-blur-xl dark:border-purple-400/40 dark:bg-white/10 dark:text-purple-300 dark:shadow-purple-500/30"
                  >
                    <Icon size={58} />
                  </motion.div>
                </div>

                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/15 text-purple-600 dark:text-purple-300">
                      <Icon size={25} />
                    </div>

                    <div>
                      <h3 className="text-2xl font-black">{project.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-white/65">
                        {project.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="mt-6 flex w-full items-center justify-end gap-3 font-black text-purple-600 transition group-hover:gap-5 dark:text-purple-300"
                  >
                    View Project
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-purple-400">
                      <ExternalLink size={17} />
                    </span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            className="flex items-center gap-4 rounded-3xl border border-purple-400 bg-white px-8 py-4 text-lg font-black text-purple-700 shadow-xl shadow-purple-200/60 transition hover:scale-[1.03] dark:bg-white/5 dark:text-purple-200 dark:shadow-purple-500/10"
          >
            <Sparkles size={22} />
            View All Projects
            <ArrowRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
