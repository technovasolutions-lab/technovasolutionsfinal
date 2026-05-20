import { Globe, Mail } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Internship", to: "/internship" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
];

const services = [
  "Web Development",
  "AI Solutions",
  "Google Business Profile",
  "Local SEO",
  "Mobile Apps",
  "Prompt Engineering",
];

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (to: string) => {
    if (location.pathname === to) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate(to);
    }
  };

  return (
    <footer className="bg-[#eef6fb] text-slate-700 dark:bg-[#0f1111] dark:text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr_0.8fr_0.9fr]">
          {/* BRAND */}
          <div>
            <div className="flex items-center justify-center gap-4 lg:justify-start">
              <img
                src="/logo.jpeg"
                alt="TechNova Solutions"
                className="h-16 w-16 rounded-full border border-[#d8e8f2] bg-white object-cover shadow-md dark:border-white/10"
              />

              <div>
                <h2 className="leading-none">
                  <span className="font-serif text-3xl font-black tracking-tight text-[#081c4b] dark:text-white sm:text-4xl">
                    TechNova
                  </span>{" "}
                  <span className="bg-gradient-to-r from-[#2563ff] via-[#1d8fff] to-[#00b7ff] bg-clip-text font-serif text-3xl font-black tracking-tight text-transparent sm:text-4xl">
                    Solutions
                  </span>
                </h2>

                <p className="mt-2 text-center text-xs font-semibold tracking-wide text-slate-500 dark:text-white/50 lg:text-left">
                  AI Powered ~ Smart Digital Solutions
                </p>
              </div>
            </div>

            <p className="mx-auto mt-6 max-w-md text-center text-sm leading-7 text-slate-600 dark:text-white/60 lg:mx-0 lg:text-left">
              We help businesses grow with professional websites, AI-powered
              solutions, SEO, Google visibility, and modern digital strategy.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-center text-sm font-black uppercase tracking-[0.35em] text-slate-950 dark:text-white lg:text-left">
              Quick Links
            </h3>

            <ul className="mt-5 grid grid-cols-2 gap-3 text-center sm:grid-cols-1 lg:text-left">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => handleNavigate(link.to)}
                    className="group relative inline-block text-sm font-semibold text-slate-600 transition dark:text-white/65"
                  >
                    <span className="transition group-hover:text-[#0ea5b7] dark:group-hover:text-[#5eead4]">
                      {link.label}
                    </span>

                    <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-[#0ea5b7] transition-all duration-300 group-hover:w-full dark:bg-[#5eead4]" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div className="hidden sm:block">
            <h3 className="text-center text-sm font-black uppercase tracking-[0.35em] text-slate-950 dark:text-white lg:text-left">
              Services
            </h3>

            <ul className="mt-5 space-y-3 text-center lg:text-left">
              {services.map((service) => (
                <li key={service}>
                  <button
                    type="button"
                    onClick={() => handleNavigate("/services")}
                    className="group relative inline-block text-sm font-medium text-slate-600 transition dark:text-white/65"
                  >
                    <span className="transition group-hover:text-[#0ea5b7] dark:group-hover:text-[#5eead4]">
                      {service}
                    </span>

                    <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-[#0ea5b7] transition-all duration-300 group-hover:w-full dark:bg-[#5eead4]" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-center text-sm font-black uppercase tracking-[0.35em] text-slate-950 dark:text-white lg:text-left">
              Contact
            </h3>

            <div className="mt-5 space-y-4">
              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/technovasolutions.in/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm font-medium text-slate-600 transition hover:text-pink-500 dark:text-white/65"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white">
                  <InstagramSvg />
                </div>
                technovasolutions
              </a>

              {/* EMAIL */}
              <a
                href="mailto:support.technovasolutions@gmail.com"
                className="flex items-start gap-3 text-sm font-medium text-slate-600 transition hover:text-[#0ea5b7] dark:text-white/65"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                  <Mail size={17} />
                </div>

                <span className="text-[13px] leading-5 sm:text-sm">
                  support.technovasolutions@gmail.com
                </span>
              </a>

              {/* WEBSITE */}
              <a
                href="https://www.technovasolutions.in"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm font-medium text-slate-600 transition hover:text-[#0ea5b7] dark:text-white/65"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                  <Globe size={17} />
                </div>
                technovasolutions.in
              </a>
            </div>

            {/* AVAILABLE */}
            <div className="mt-7 border-l-4 border-[#0ea5b7] pl-4">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#0ea5b7] dark:text-[#5eead4]">
                Available
              </p>

              <p className="mt-2 text-sm text-slate-500 dark:text-white/50">
                Monday - Friday
              </p>

              <p className="mt-1 text-base font-black text-slate-900 dark:text-white">
                10:00 AM – 7:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* MOBILE SOCIAL */}
        <div className="mt-10 flex justify-center gap-3 sm:hidden">
          <IconButton
            href="mailto:wfm.technovasolution@gmail.com"
            icon={<Mail size={18} />}
          />

          <IconButton
            href="https://www.instagram.com/technovasolutions"
            icon={<InstagramSvg />}
          />

          <IconButton
            href="https://www.technovasolutions.in"
            icon={<Globe size={18} />}
          />
        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 border-t border-[#dce9f3] pt-6 text-center dark:border-white/10">
          <p className="text-sm text-slate-500 dark:text-white/50">
            © 2026 TechNova Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function IconButton({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d7e8f3] bg-white text-slate-700 shadow-sm transition hover:-translate-y-1 hover:text-[#0ea5b7] dark:border-white/10 dark:bg-[#16202a] dark:text-white"
    >
      {icon}
    </a>
  );
}

function InstagramSvg() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.4" fill="currentColor" />
    </svg>
  );
}
