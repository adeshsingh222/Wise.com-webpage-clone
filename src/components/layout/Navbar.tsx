"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  ChevronRight,
  User,
  Briefcase,
  Layers,
  Globe,
  HelpCircle,
  LogIn,
  CreditCard,
  ArrowRightLeft,
  ShieldCheck,
} from "lucide-react";

const mobileMenuLinks = [
  { label: "Personal", icon: User, desc: "Send, spend and save money globally" },
  { label: "Business", icon: Briefcase, desc: "Manage your business finances" },
  { label: "Platform", icon: Layers, desc: "Build with the Wise platform API" },
];

const featuredLinks = [
  { label: "Send money", icon: ArrowRightLeft },
  { label: "Wise Card", icon: CreditCard },
  { label: "Security", icon: ShieldCheck },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`w-full z-50 px-5 md:px-10 xl:px-16 py-3 flex items-center justify-between text-primary bg-accent fixed top-0 left-0 right-0 transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        {/* Left — logo + desktop nav */}
        <div className="flex items-center gap-8">
          <Link href="/" className="text-3xl font-extrabold tracking-tighter leading-none mb-1">
            wise
          </Link>
          <div className="hidden md:flex gap-6 font-medium text-base">
            <Link href="#" className="hover:opacity-70 transition-opacity">Personal</Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">Business</Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">Platform</Link>
          </div>
        </div>

        {/* Right — desktop links */}
        <div className="hidden md:flex items-center gap-6 font-medium text-base">
          <Link href="#" className="hover:opacity-70 transition-opacity flex items-center gap-2">
            <div className="w-[22px] h-[22px] rounded-full overflow-hidden flex-shrink-0">
              <img src="https://flagcdn.com/w40/in.png" alt="India flag" className="w-full h-full object-cover" />
            </div>
            EN
          </Link>
          <Link href="#" className="hover:opacity-70 transition-opacity">Help</Link>
          <Link href="#" className="hover:opacity-70 transition-opacity">Log in</Link>
          <Link href="#" className="bg-primary hover:bg-slate-800 text-white  px-4 py-2 rounded-full transition-colors font-medium">
            Sign up
          </Link>
        </div>

        {/* Right — mobile: sign up + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <Link
            href="#"
            className="bg-btn-bg hover:bg-slate-800 text-accent px-5 py-2 rounded-full font-bold text-[14px] transition-colors"
          >
            Sign up
          </Link>
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-full hover:bg-primary/10 transition-colors"
          >
            <span className="w-5 h-[2px] bg-primary rounded-full" />
            <span className="w-5 h-[2px] bg-primary rounded-full" />
            <span className="w-3 h-[2px] bg-primary rounded-full self-start ml-1" />
          </button>
        </div>
      </nav>

      {/* ── Mobile full-screen menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="menu-backdrop"
              className="fixed inset-0 bg-black/40 z-[90]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.div
              key="menu-panel"
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-[360px] bg-white z-[100] flex flex-col overflow-y-auto [&::-webkit-scrollbar]:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
                <span className="text-2xl font-extrabold tracking-tighter text-primary">wise</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
                >
                  <X size={18} className="text-slate-600" />
                </button>
              </div>

              {/* Main nav links */}
              <div className="px-4 py-4 flex flex-col gap-1">
                {mobileMenuLinks.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + i * 0.06, duration: 0.3, ease: "easeOut" }}
                  >
                    <Link
                      href="#"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-4 px-4 py-3.5 rounded-2xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                        <item.icon size={18} className="text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-[15px] text-primary">{item.label}</p>
                        <p className="text-[12px] text-slate-500 truncate">{item.desc}</p>
                      </div>
                      <ChevronRight size={16} className="text-slate-400 shrink-0" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Divider */}
              <div className="mx-4 border-t border-slate-100" />

              {/* Featured quick links */}
              <div className="px-4 py-4">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest px-4 mb-3">Quick links</p>
                <div className="flex flex-col gap-1">
                  {featuredLinks.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.24 + i * 0.05, duration: 0.28, ease: "easeOut" }}
                    >
                      <Link
                        href="#"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-slate-50 transition-colors"
                      >
                        <item.icon size={16} className="text-slate-500" />
                        <span className="text-[14px] font-medium text-slate-700">{item.label}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="mx-4 border-t border-slate-100" />

              {/* Bottom actions */}
              <div className="px-6 py-6 mt-auto flex flex-col gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.38, duration: 0.3 }}
                >
                  <Link
                    href="#"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 text-[15px] font-medium text-slate-600 hover:text-primary transition-colors py-2"
                  >
                    <LogIn size={17} className="text-slate-400" /> Log in
                  </Link>
                  <Link
                    href="#"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 text-[15px] font-medium text-slate-600 hover:text-primary transition-colors py-2"
                  >
                    <Globe size={17} className="text-slate-400" /> Language & region
                  </Link>
                  <Link
                    href="#"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 text-[15px] font-medium text-slate-600 hover:text-primary transition-colors py-2"
                  >
                    <HelpCircle size={17} className="text-slate-400" /> Help centre
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.44, duration: 0.3 }}
                >
                  <Link
                    href="#"
                    onClick={() => setMenuOpen(false)}
                    className="mt-2 w-full bg-accent hover:bg-btn-bg text-btn-bg py-3.5 rounded-full font-bold text-[15px] text-center transition-colors block"
                  >
                    Sign up — it's free
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
