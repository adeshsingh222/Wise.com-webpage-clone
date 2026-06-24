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
  ArrowUp,
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  Users,
  Grid,
  Building2
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";

// --- Data ---

const mobileMenuLinks = [
  { id: "personal" as const, label: "Personal", icon: User, desc: "Send, spend and save money globally" },
  { id: "business" as const, label: "Business", icon: Briefcase, desc: "Manage your business finances" },
  { id: "platform" as const, label: "Platform", icon: Layers, desc: "Build with the Wise platform API" },
];

const featuredLinks = [
  { label: "Send money", icon: ArrowRightLeft },
  { label: "Wise Card", icon: CreditCard },
  { label: "Security", icon: ShieldCheck },
];

type MenuType = "personal" | "business" | "platform" | null;

const getMenuIndex = (menu: MenuType) => {
  if (menu === "personal") return 0;
  if (menu === "business") return 1;
  if (menu === "platform") return 2;
  return -1;
};

// --- Subcomponents for Mega Menus ---

const PersonalMenu = () => (
  <>
    {/* Left Card */}
    <div className="w-[320px] shrink-0 border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer bg-white">
      <div className="h-[180px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600&h=400"
          alt="Wise Account"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="font-black text-[22px] mb-2 tracking-tight uppercase text-new-world-dark">Wise Account</h3>
        <p className="text-slate-500 text-[15px] leading-relaxed mb-5">The international account for sending, spending and converting money like a local.</p>
        <div className="text-primary font-bold text-[15px] flex items-center gap-1 group-hover:text-slate-600 transition-colors">
          Explore <ArrowRight size={16} className="ml-0.5" />
        </div>
      </div>
    </div>

    {/* Right Columns */}
    <div className="flex-1 grid grid-cols-2 gap-8 py-2 text-new-world-dark">
      <div>
        <h4 className="text-slate-400 text-[14px] font-medium mb-6">Features</h4>
        <ul className="flex flex-col gap-6">
          <li>
            <Link href="#" className="flex items-center gap-3 font-bold text-[16px] hover:text-slate-600 transition-colors group">
              <div className="w-8 h-8 rounded-full bg-[#f2f4f2] flex items-center justify-center text-[#163300] group-hover:bg-[#e2e8f0] transition-colors shrink-0">
                <ArrowUp size={16} strokeWidth={2.5} />
              </div>
              Send money
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center gap-3 font-bold text-[16px] hover:text-slate-600 transition-colors group">
              <div className="w-8 h-8 rounded-full bg-[#f2f4f2] flex items-center justify-center text-[#163300] group-hover:bg-[#e2e8f0] transition-colors shrink-0">
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </div>
              Send large amounts
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center gap-3 font-bold text-[16px] hover:text-slate-600 transition-colors group">
              <div className="w-8 h-8 rounded-full bg-[#f2f4f2] flex items-center justify-center text-[#163300] group-hover:bg-[#e2e8f0] transition-colors shrink-0">
                <CreditCard size={16} strokeWidth={2.5} />
              </div>
              Get a Wise Travel card
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-slate-400 text-[14px] font-medium mb-6">Pricing</h4>
        <ul className="flex flex-col gap-6">
          <li>
            <Link href="#" className="font-bold text-[16px] hover:text-slate-600 transition-colors">
              Personal pricing
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </>
);

const BusinessMenu = () => (
  <>
    <div className="w-[320px] shrink-0 border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer bg-white">
      <div className="h-[180px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600&h=400"
          alt="Wise Business"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="font-black text-[22px] mb-2 tracking-tight uppercase text-new-world-dark">Wise Business</h3>
        <p className="text-slate-500 text-[15px] leading-relaxed mb-5">The only account your start-up or scale-up needs to thrive internationally.</p>
        <div className="text-primary font-bold text-[15px] flex items-center gap-1 group-hover:text-slate-600 transition-colors">
          Explore <ArrowRight size={16} className="ml-0.5" />
        </div>
      </div>
    </div>
    <div className="flex-1 grid grid-cols-3 gap-6 py-2 text-new-world-dark">
      <div>
        <h4 className="text-slate-400 text-[14px] font-medium mb-6">Features</h4>
        <ul className="flex flex-col gap-6">
          <li>
            <Link href="#" className="flex items-center gap-3 font-bold text-[16px] hover:text-slate-600 transition-colors group">
              <div className="w-8 h-8 rounded-full bg-[#f2f4f2] flex items-center justify-center text-[#163300] group-hover:bg-[#e2e8f0] transition-colors shrink-0">
                <ArrowDown size={16} strokeWidth={2.5} />
              </div>
              Receive money
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center gap-3 font-bold text-[16px] hover:text-slate-600 transition-colors group">
              <div className="w-8 h-8 rounded-full bg-[#f2f4f2] flex items-center justify-center text-[#163300] group-hover:bg-[#e2e8f0] transition-colors shrink-0">
                <Users size={16} strokeWidth={2.5} />
              </div>
              Manage team finances
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center gap-3 font-bold text-[16px] hover:text-slate-600 transition-colors group">
              <div className="w-8 h-8 rounded-full bg-[#f2f4f2] flex items-center justify-center text-[#163300] group-hover:bg-[#e2e8f0] transition-colors shrink-0">
                <Grid size={16} strokeWidth={2.5} />
              </div>
              Connect accounting software
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-slate-400 text-[14px] font-medium mb-6">Resources</h4>
        <ul className="flex flex-col gap-6">
          <li>
            <Link href="#" className="font-bold text-[16px] hover:text-slate-600 transition-colors">
              Contact sales
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-slate-400 text-[14px] font-medium mb-6">Pricing</h4>
        <ul className="flex flex-col gap-6">
          <li>
            <Link href="#" className="font-bold text-[16px] hover:text-slate-600 transition-colors">
              Business pricing
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </>
);

const PlatformMenu = () => (
  <>
    <div className="w-[320px] shrink-0 border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer bg-white">
      <div className="h-[180px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600&h=400"
          alt="Wise Platform"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="font-black text-[22px] mb-2 tracking-tight uppercase text-new-world-dark">Wise Platform</h3>
        <p className="text-slate-500 text-[15px] leading-relaxed mb-5">Where banks, financial institutions and enterprises can plug into our network.</p>
        <div className="text-primary font-bold text-[15px] flex items-center gap-1 group-hover:text-slate-600 transition-colors">
          Explore <ArrowRight size={16} className="ml-0.5" />
        </div>
      </div>
    </div>
    <div className="flex-1 grid grid-cols-3 gap-6 py-2 text-new-world-dark">
      <div>
        <h4 className="text-slate-400 text-[14px] font-medium mb-6">Products</h4>
        <ul className="flex flex-col gap-5">
          <li>
            <Link href="#" className="flex items-center gap-3 font-bold text-[15px] hover:text-slate-600 transition-colors group">
              <div className="w-8 h-8 rounded-full bg-[#f2f4f2] flex items-center justify-center text-[#163300] group-hover:bg-[#e2e8f0] transition-colors shrink-0">
                <ArrowUp size={16} strokeWidth={2.5} />
              </div>
              Send
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center gap-3 font-bold text-[15px] hover:text-slate-600 transition-colors group">
              <div className="w-8 h-8 rounded-full bg-[#f2f4f2] flex items-center justify-center text-[#163300] group-hover:bg-[#e2e8f0] transition-colors shrink-0">
                <ArrowDown size={16} strokeWidth={2.5} />
              </div>
              Receive
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center gap-3 font-bold text-[15px] hover:text-slate-600 transition-colors group">
              <div className="w-8 h-8 rounded-full bg-[#f2f4f2] flex items-center justify-center text-[#163300] group-hover:bg-[#e2e8f0] transition-colors shrink-0">
                <CreditCard size={16} strokeWidth={2.5} />
              </div>
              Issue cards
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center gap-3 font-bold text-[15px] hover:text-slate-600 transition-colors group">
              <div className="w-8 h-8 rounded-full bg-[#f2f4f2] flex items-center justify-center text-[#163300] group-hover:bg-[#e2e8f0] transition-colors shrink-0">
                <Building2 size={16} strokeWidth={2.5} />
              </div>
              Multi-currency accounts
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-slate-400 text-[14px] font-medium mb-6">Industries</h4>
        <ul className="flex flex-col gap-4">
          <li><Link href="#" className="font-bold text-[15px] hover:text-slate-600 transition-colors">Banks & financial institutions</Link></li>
          <li><Link href="#" className="font-bold text-[15px] hover:text-slate-600 transition-colors">Education platforms</Link></li>
          <li><Link href="#" className="font-bold text-[15px] hover:text-slate-600 transition-colors">Marketplaces</Link></li>
          <li><Link href="#" className="font-bold text-[15px] hover:text-slate-600 transition-colors">Spend management</Link></li>
          <li><Link href="#" className="font-bold text-[15px] hover:text-slate-600 transition-colors">Travel platforms</Link></li>
          <li><Link href="#" className="font-bold text-[15px] hover:text-slate-600 transition-colors">Workforce platforms</Link></li>
        </ul>
      </div>
      <div className="flex flex-col gap-8">
        <div>
          <h4 className="text-slate-400 text-[14px] font-medium mb-6">Events</h4>
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="#" className="font-bold text-[15px] hover:text-slate-600 transition-colors">
                Register for Wise Connect
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-slate-400 text-[14px] font-medium mb-6">Developers</h4>
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="#" className="font-bold text-[15px] hover:text-slate-600 transition-colors">
                Explore API documentation
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
);


// --- Mobile Subcomponents ---

const MobilePersonalMenu = () => (
  <div className="p-4 flex flex-col gap-6">
    <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
      <div className="h-[140px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600&h=400"
          alt="Wise Account"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="font-black text-[20px] mb-2 tracking-tight uppercase text-new-world-dark">Wise Account</h3>
        <p className="text-slate-500 text-[14px] leading-relaxed mb-4">The international account for sending, spending and converting money like a local.</p>
        <div className="text-primary font-bold text-[14px] flex items-center gap-1">
          Explore <ArrowRight size={14} className="ml-0.5" />
        </div>
      </div>
    </div>

    <div>
      <h4 className="text-slate-400 text-[13px] font-medium mb-4">Features</h4>
      <ul className="flex flex-col gap-5">
        <li>
          <Link href="#" className="flex items-center gap-3 font-bold text-[15px] hover:text-slate-600 transition-colors">
            <div className="w-8 h-8 rounded-full bg-[#f2f4f2] flex items-center justify-center text-[#163300] shrink-0">
              <ArrowUp size={16} strokeWidth={2.5} />
            </div>
            Send money
          </Link>
        </li>
        <li>
          <Link href="#" className="flex items-center gap-3 font-bold text-[15px] hover:text-slate-600 transition-colors">
            <div className="w-8 h-8 rounded-full bg-[#f2f4f2] flex items-center justify-center text-[#163300] shrink-0">
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </div>
            Send large amounts
          </Link>
        </li>
        <li>
          <Link href="#" className="flex items-center gap-3 font-bold text-[15px] hover:text-slate-600 transition-colors">
            <div className="w-8 h-8 rounded-full bg-[#f2f4f2] flex items-center justify-center text-[#163300] shrink-0">
              <CreditCard size={16} strokeWidth={2.5} />
            </div>
            Get a Wise Travel card
          </Link>
        </li>
      </ul>
    </div>

    <div>
      <h4 className="text-slate-400 text-[13px] font-medium mb-4">Pricing</h4>
      <ul className="flex flex-col gap-4">
        <li>
          <Link href="#" className="font-bold text-[15px] hover:text-slate-600 transition-colors">
            Personal pricing
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

const MobileBusinessMenu = () => (
  <div className="p-4 flex flex-col gap-6">
    <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
      <div className="h-[140px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=600&h=400"
          alt="Wise Business"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="font-black text-[20px] mb-2 tracking-tight uppercase text-new-world-dark">Wise Business</h3>
        <p className="text-slate-500 text-[14px] leading-relaxed mb-4">The only account your start-up or scale-up needs to thrive internationally.</p>
        <div className="text-primary font-bold text-[14px] flex items-center gap-1">
          Explore <ArrowRight size={14} className="ml-0.5" />
        </div>
      </div>
    </div>

    <div>
      <h4 className="text-slate-400 text-[13px] font-medium mb-4">Features</h4>
      <ul className="flex flex-col gap-5">
        <li>
          <Link href="#" className="flex items-center gap-3 font-bold text-[15px] hover:text-slate-600 transition-colors">
            <div className="w-8 h-8 rounded-full bg-[#f2f4f2] flex items-center justify-center text-[#163300] shrink-0">
              <ArrowDown size={16} strokeWidth={2.5} />
            </div>
            Receive money
          </Link>
        </li>
        <li>
          <Link href="#" className="flex items-center gap-3 font-bold text-[15px] hover:text-slate-600 transition-colors">
            <div className="w-8 h-8 rounded-full bg-[#f2f4f2] flex items-center justify-center text-[#163300] shrink-0">
              <Users size={16} strokeWidth={2.5} />
            </div>
            Manage team finances
          </Link>
        </li>
        <li>
          <Link href="#" className="flex items-center gap-3 font-bold text-[15px] hover:text-slate-600 transition-colors">
            <div className="w-8 h-8 rounded-full bg-[#f2f4f2] flex items-center justify-center text-[#163300] shrink-0">
              <Grid size={16} strokeWidth={2.5} />
            </div>
            Connect accounting software
          </Link>
        </li>
      </ul>
    </div>

    <div>
      <h4 className="text-slate-400 text-[13px] font-medium mb-4">Pricing</h4>
      <ul className="flex flex-col gap-4">
        <li><Link href="#" className="font-bold text-[15px] hover:text-slate-600 transition-colors">Business pricing</Link></li>
      </ul>
    </div>
  </div>
);

const MobilePlatformMenu = () => (
  <div className="p-4 flex flex-col gap-6">
    <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
      <div className="h-[140px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600&h=400"
          alt="Wise Platform"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="font-black text-[20px] mb-2 tracking-tight uppercase text-new-world-dark">Wise Platform</h3>
        <p className="text-slate-500 text-[14px] leading-relaxed mb-4">Where banks, financial institutions and enterprises can plug into our network.</p>
        <div className="text-primary font-bold text-[14px] flex items-center gap-1">
          Explore <ArrowRight size={14} className="ml-0.5" />
        </div>
      </div>
    </div>

    <div>
      <h4 className="text-slate-400 text-[13px] font-medium mb-4">Products</h4>
      <ul className="flex flex-col gap-5">
        <li>
          <Link href="#" className="flex items-center gap-3 font-bold text-[15px] hover:text-slate-600 transition-colors">
            <div className="w-8 h-8 rounded-full bg-[#f2f4f2] flex items-center justify-center text-[#163300] shrink-0">
              <ArrowUp size={16} strokeWidth={2.5} />
            </div>
            Send
          </Link>
        </li>
        <li>
          <Link href="#" className="flex items-center gap-3 font-bold text-[15px] hover:text-slate-600 transition-colors">
            <div className="w-8 h-8 rounded-full bg-[#f2f4f2] flex items-center justify-center text-[#163300] shrink-0">
              <ArrowDown size={16} strokeWidth={2.5} />
            </div>
            Receive
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

const mobileSlideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: "0%",
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

// --- Main Navbar ---

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileView, setMobileView] = useState<"root" | "personal" | "business" | "platform">("root");
  const [mobileDirection, setMobileDirection] = useState(1);

  const navigateMobile = (view: "root" | "personal" | "business" | "platform") => {
    setMobileDirection(view === "root" ? -1 : 1);
    setMobileView(view);
  };

  const [activeMenu, setActiveMenu] = useState<MenuType>(null);
  const [prevMenu, setPrevMenu] = useState<MenuType>(null);

  const { openAuthModal } = useAuth();

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
    if (!menuOpen) {
      setTimeout(() => setMobileView("root"), 300);
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleMenuEnter = (menu: MenuType) => {
    setPrevMenu(activeMenu);
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    setPrevMenu(activeMenu);
    setActiveMenu(null);
  };

  const activeIndex = getMenuIndex(activeMenu);
  const prevIndex = getMenuIndex(prevMenu);
  const direction = prevMenu === null ? 0 : activeIndex > prevIndex ? 1 : -1;

  const slideVariants = {
    initial: (dir: number) => ({ x: dir === 0 ? 0 : dir > 0 ? 30 : -30, opacity: 0 }),
    animate: { x: 0, opacity: 1, transition: { duration: 0.2, ease: "easeOut" as const } },
    exit: (dir: number) => ({ x: dir === 0 ? 0 : dir > 0 ? -30 : 30, opacity: 0, transition: { duration: 0.15, ease: "easeIn" as const } })
  };

  return (
    <>
      <nav
        className={`w-full z-50 px-5 md:px-10 xl:px-16 py-3 flex items-center justify-between fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
          } ${activeMenu ? "bg-white text-new-world-dark shadow-sm" : "bg-accent text-primary"}`}
        onMouseLeave={handleMenuLeave}
      >
        {/* Left — logo + desktop nav */}
        <div className="flex items-center gap-8">
          <Link href="/" className="text-3xl font-extrabold tracking-tighter leading-none mb-1">
            wise
          </Link>
          <div className="hidden md:flex gap-6 font-medium text-base h-full items-center ">
            <div
              className="relative py-4 -my-4 flex items-center "
              onMouseEnter={() => handleMenuEnter("personal")}
            >
              <Link
                href="#"
                className={`px-4 py-2 transition-all duration-200 rounded-[20px] ${activeMenu === "personal"
                  ? "bg-accent/50 text-new-world-dark"
                  : activeMenu
                    ? "hover:bg-accent/50"
                    : "hover:bg-black/5"
                  }`}
              >
                Personal
              </Link>
            </div>
            <div
              className="relative py-4 -my-4 flex items-center"
              onMouseEnter={() => handleMenuEnter("business")}
            >
              <Link
                href="#"
                className={`px-4 py-2 transition-all duration-200 rounded-[20px] ${activeMenu === "business"
                  ? "bg-accent/50 text-new-world-dark"
                  : activeMenu
                    ? "hover:bg-accent/50"
                    : "hover:bg-black/5"
                  }`}
              >
                Business
              </Link>
            </div>
            <div
              className="relative py-4 -my-4 flex items-center"
              onMouseEnter={() => handleMenuEnter("platform")}
            >
              <Link
                href="#"
                className={`px-4 py-2 transition-all duration-200 rounded-[20px] ${activeMenu === "platform"
                  ? "bg-accent/50 text-new-world-dark"
                  : activeMenu
                    ? "hover:bg-accent/50"
                    : "hover:bg-black/5"
                  }`}
              >
                Platform
              </Link>
            </div>
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
          <button
            onClick={() => openAuthModal()}
            className={`cursor-pointer px-4 py-2 rounded-full transition-colors ${activeMenu ? "bg-primary text-white hover:bg-slate-800" : "bg-primary text-accent hover:bg-slate-800"}`}
          >
            Sign up
          </button>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => openAuthModal()}
            className="bg-btn-bg cursor-pointer hover:bg-slate-800 text-accent px-5 py-2 rounded-full font-bold text-[14px] transition-colors"
          >
            Sign up
          </button>
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-full hover:bg-primary/10 transition-colors"
          >
            <span className={`w-5 h-[2px] rounded-full ${activeMenu ? "bg-new-world-dark" : "bg-primary"}`} />
            <span className={`w-5 h-[2px] rounded-full ${activeMenu ? "bg-new-world-dark" : "bg-primary"}`} />
            <span className={`w-4 h-[2px] rounded-full self-start ml-1 ${activeMenu ? "bg-new-world-dark" : "bg-primary"}`} />
          </button>
        </div>

        {/* ── Mega Menu Dropdown ── */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 cursor-default overflow-hidden"
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeMenu}
                  custom={direction}
                  variants={slideVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="max-w-7xl mx-auto px-5 md:px-10 xl:px-16 py-8 flex gap-12"
                >
                  {activeMenu === "personal" && <PersonalMenu />}
                  {activeMenu === "business" && <BusinessMenu />}
                  {activeMenu === "platform" && <PlatformMenu />}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
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
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-[360px] bg-white z-[100] flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 shrink-0">
                {mobileView === "root" ? (
                  <span className="text-2xl font-extrabold tracking-tighter text-primary">wise</span>
                ) : (
                  <button onClick={() => navigateMobile("root")} className="flex items-center gap-2 font-bold text-slate-700 text-[17px] hover:text-slate-900 transition-colors">
                    <ChevronRight className="rotate-180" size={20} />
                    {mobileView.charAt(0).toUpperCase() + mobileView.slice(1)}
                  </button>
                )}
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
                >
                  <X size={18} className="text-slate-600" />
                </button>
              </div>

              {/* View Container */}
              <div className="relative flex-1 overflow-hidden">
                <AnimatePresence initial={false} custom={mobileDirection}>
                  {mobileView === "root" && (
                    <motion.div
                      key="root"
                      custom={mobileDirection}
                      variants={mobileSlideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="absolute inset-0 overflow-y-auto flex flex-col [&::-webkit-scrollbar]:hidden bg-white"
                    >

                      {/* Main nav links */}
                      <div className="px-4 py-4 flex flex-col gap-1">
                        {mobileMenuLinks.map((item, i) => (
                          <motion.div
                            key={item.label}
                            initial={{ opacity: 0, x: 24 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.06 + i * 0.06, duration: 0.3, ease: "easeOut" }}
                          >
                            <button
                              onClick={() => navigateMobile(item.id)}
                              className="w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl hover:bg-slate-50 transition-colors group text-left"
                            >
                              <div className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                                <item.icon size={18} className="text-primary" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-bold text-[15px] text-primary">{item.label}</p>
                                <p className="text-[12px] text-slate-500 truncate">{item.desc}</p>
                              </div>
                              <ChevronRight size={16} className="text-slate-400 shrink-0" />
                            </button>
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
                          <button
                            onClick={() => {
                              setMenuOpen(false);
                              openAuthModal();
                            }}
                            className="mt-2 cursor-pointer w-full bg-accent hover:bg-btn-bg text-btn-bg py-3.5 rounded-full font-bold text-[15px] text-center transition-colors block"
                          >
                            Sign up — it&apos;s free
                          </button>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}

                  {mobileView === "personal" && (
                    <motion.div
                      key="personal"
                      custom={mobileDirection}
                      variants={mobileSlideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="absolute inset-0 overflow-y-auto flex flex-col [&::-webkit-scrollbar]:hidden bg-white"
                    >
                      <MobilePersonalMenu />
                    </motion.div>
                  )}

                  {mobileView === "business" && (
                    <motion.div
                      key="business"
                      custom={mobileDirection}
                      variants={mobileSlideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="absolute inset-0 overflow-y-auto flex flex-col [&::-webkit-scrollbar]:hidden bg-white"
                    >
                      <MobileBusinessMenu />
                    </motion.div>
                  )}

                  {mobileView === "platform" && (
                    <motion.div
                      key="platform"
                      custom={mobileDirection}
                      variants={mobileSlideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="absolute inset-0 overflow-y-auto flex flex-col [&::-webkit-scrollbar]:hidden bg-white"
                    >
                      <MobilePlatformMenu />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
