"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";

export type Currency = {
  code: string;
  name: string;
  flag: string;
};

const currencies: Currency[] = [
  { code: "USD", name: "US Dollar", flag: "us" },
  { code: "EUR", name: "Euro", flag: "eu" },
  { code: "GBP", name: "British Pound", flag: "gb" },
  { code: "INR", name: "Indian Rupee", flag: "in" },
  { code: "AUD", name: "Australian Dollar", flag: "au" },
  { code: "CAD", name: "Canadian Dollar", flag: "ca" },
  { code: "JPY", name: "Japanese Yen", flag: "jp" },
];

interface Props {
  selected: Currency;
  onSelect: (c: Currency) => void;
}

export default function CurrencyDropdown({ selected, onSelect }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filtered = currencies.filter(
    (c) =>
      c.code.toLowerCase().includes(search.toLowerCase()) ||
      c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-new-world-dark px-3 py-2 rounded-full font-bold transition-colors w-[110px] justify-between"
      >
        <span className="flex items-center gap-2">
          <img src={`https://flagcdn.com/w40/${selected.flag}.png`} alt={selected.code} className="w-6 h-6 rounded-full object-cover bg-slate-200 border border-slate-200" />
          <span>{selected.code}</span>
        </span>
        <ChevronDown size={18} className={`text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-[280px] bg-white border border-slate-200 rounded-2xl shadow-xl z-50 overflow-hidden transform origin-top transition-all">
          <div className="p-3 border-b border-slate-100">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Type a currency / code"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all text-slate-900"
                autoFocus
              />
            </div>
          </div>
          <div className="max-h-[240px] overflow-y-auto p-2">
            {filtered.length === 0 ? (
              <div className="p-4 text-center text-sm text-slate-500">No results found</div>
            ) : (
              filtered.map((c) => (
                <button
                  key={c.code}
                  onClick={() => {
                    onSelect(c);
                    setIsOpen(false);
                    setSearch("");
                  }}
                  className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors ${
                    selected.code === c.code ? 'bg-green-50' : 'hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <img src={`https://flagcdn.com/w40/${c.flag}.png`} alt={c.code} className="w-8 h-8 rounded-full object-cover bg-slate-100 shadow-sm" />
                    <div className="text-left">
                      <div className="font-bold text-slate-900">{c.code}</div>
                      <div className="text-xs text-slate-500">{c.name}</div>
                    </div>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
