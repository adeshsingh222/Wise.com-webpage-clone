"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CurrencyDropdown, { Currency } from "./CurrencyDropdown";
import ModalDrawer from "../ui/ModalDrawer";
import { Lock, ChevronRight, Clock, FileText, Tag, Globe } from "lucide-react";

const rates: Record<string, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  INR: 83.2,
  AUD: 1.52,
  CAD: 1.36,
  JPY: 150.8,
};

const defaultSource: Currency = { code: "EUR", name: "Euro", flag: "eu" };
const defaultTarget: Currency = { code: "USD", name: "US Dollar", flag: "us" };

function formatWithCommas(value: number): string {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);
}

// ── Tiny SVG line chart ──────────────────────────────────────────────────────
const chartDataSets: Record<string, number[]> = {
  "1 week": [108.4, 107.9, 108.3, 108.0, 107.7, 108.1, 107.872],
  "1 month": [112.0, 111.6, 111.9, 111.1, 110.7, 110.4, 110.1, 109.7, 109.4, 109.1, 108.9, 108.6, 108.3, 108.1, 107.9, 107.872],
  "6 months": [104, 105.2, 106.5, 107.8, 109.1, 110.3, 111.5, 112.0, 111.3, 110.6, 109.9, 109.2, 108.8, 108.4, 108.0, 107.872],
};

function RateChart({ data }: { data: number[] }) {
  const W = 340, H = 120;
  const padL = 8, padR = 52, padT = 8, padB = 24;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;

  const min = Math.min(...data) - 0.4;
  const max = Math.max(...data) + 0.4;
  const range = max - min;

  const toX = (i: number) => padL + (i / (data.length - 1)) * chartW;
  const toY = (v: number) => padT + ((max - v) / range) * chartH;

  const points = data.map((v, i) => `${toX(i).toFixed(1)},${toY(v).toFixed(1)}`).join(" ");

  // 4 horizontal grid lines
  const step = Math.round(range / 4) || 1;
  const gridVals = Array.from({ length: 5 }, (_, i) => Math.floor(max) - i * step).filter(v => v >= min - 0.5);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full overflow-visible">
      {/* Grid lines + labels */}
      {gridVals.map((val) => {
        const y = toY(val);
        if (y < padT - 2 || y > padT + chartH + 2) return null;
        return (
          <g key={val}>
            <line x1={padL} y1={y} x2={padL + chartW} y2={y} stroke="#e2e8f0" strokeWidth="0.8" />
            <text x={padL + chartW + 4} y={y + 4} fontSize="9" fill="#94a3b8" fontFamily="sans-serif">{val.toFixed(2)}</text>
          </g>
        );
      })}
      {/* Line */}
      <polyline
        points={points}
        fill="none"
        stroke="#0E2A14"
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Last point dot */}
      <circle
        cx={toX(data.length - 1)}
        cy={toY(data[data.length - 1])}
        r="3"
        fill="#0E2A14"
      />
    </svg>
  );
}

// ── Rate info modal content ──────────────────────────────────────────────────
function RateModalContent({
  sourceCurr,
  targetCurr,
  exchangeRate,
}: {
  sourceCurr: Currency;
  targetCurr: Currency;
  exchangeRate: number;
}) {
  const [tab, setTab] = useState("1 month");
  const tabs = ["1 week", "1 month", "6 months"];

  return (
    <div className="p-6 md:p-8 font-sans text-new-world-dark">

      {/* Flag pair + rate */}
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4">
          <div className="relative w-16 h-10">
            <img src={`https://flagcdn.com/w80/${sourceCurr.flag}.png`} alt={sourceCurr.code} className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md absolute left-0 top-0" />
            <img src={`https://flagcdn.com/w80/${targetCurr.flag}.png`} alt={targetCurr.code} className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md absolute left-6 top-0" />
          </div>
        </div>
        <h2 className="text-[28px] font-black tracking-tight">
          1 {sourceCurr.code} = {exchangeRate.toFixed(3)} {targetCurr.code}
        </h2>
      </div>

      <hr className="border-slate-100 mb-5" />

      {/* Guaranteed row */}
      <div className="text-center mb-5">
        <div className="flex items-center justify-center gap-1.5 text-[16px] font-semibold text-slate-700 mb-2">
          <Lock size={14} /> We&apos;ve locked this rate for 67 hours
        </div>
        <p className="text-[15px] text-slate-500 leading-relaxed max-w-[320px] mx-auto">
          You&apos;re safe from rate fluctuations as long as we receive your money by <strong>Friday, June 27 at 8:29 PM.</strong>
        </p>
      </div>

      <hr className="border-slate-100 mb-5" />

      {/* Mid-market section */}
      <div className="mb-5">
        <h3 className="text-[19px] font-black mb-3">Our rate isn&apos;t hiding anything</h3>
        <p className="text-[15px] text-slate-600 leading-relaxed mb-3">
          We always use the <strong>mid-market exchange rate.</strong> It&apos;s the fair rate between the buy and sell price for two currencies.
        </p>
        <p className="text-[15px] text-slate-600 leading-relaxed mb-4">
          Beware of banks and providers offering rates below the mid-market rate. Your recipient might get less even with low or zero fees.
        </p>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-[15px] text-slate-500 leading-relaxed">
          We don&apos;t have comparison data for these currencies and transfer amounts, but we&apos;ll keep working to help you compare more currencies, price points and providers.
        </div>
      </div>

      {/* Rate history */}
      <div>
        <h3 className="text-[19px] font-black mb-4">Rate history</h3>
        {/* Tabs */}
        <div className="flex gap-2 mb-4">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-1.5 rounded-full text-[15px] font-semibold transition-colors border ${tab === t
                ? "bg-new-world-dark text-white border-new-world-dark"
                : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                }`}
            >
              {t}
            </button>
          ))}
        </div>
        {/* Chart */}
        <div className="w-full">
          <RateChart data={chartDataSets[tab]} />
        </div>
      </div>
    </div>
  );
}

// ── Main component ───────────────────────────────────────────────────────────
export default function CurrencyConverter() {
  const [sendAmount, setSendAmount] = useState<string>("1000");
  const [isFocused, setIsFocused] = useState(false);
  const [sourceCurr, setSourceCurr] = useState<Currency>(defaultSource);
  const [targetCurr, setTargetCurr] = useState<Currency>(defaultTarget);
  const [badgeIndex, setBadgeIndex] = useState(0);
  const [isRateModalOpen, setIsRateModalOpen] = useState(false);

  const sourceRate = rates[sourceCurr.code];
  const targetRate = rates[targetCurr.code];
  const exchangeRate = targetRate / sourceRate;

  const numericAmount = parseFloat(sendAmount || "0");
  const isHighVolume = numericAmount > 25000;
  const feePercentage = isHighVolume ? 0.004 : 0.005;
  const fee = numericAmount * feePercentage;
  const amountToConvert = numericAmount - fee;
  const receiveAmount = (amountToConvert * exchangeRate).toFixed(2);

  const rateLabel = `1 ${sourceCurr.code} = ${exchangeRate.toFixed(3)} ${targetCurr.code}`;
  const badgeLabels = [rateLabel, "Guaranteed for 67h"];

  // Alternate badge every 3s
  useEffect(() => {
    const timer = setInterval(() => setBadgeIndex((p) => (p + 1) % 2), 3000);
    return () => clearInterval(timer);
  }, []);

  // Show loader on Send button for 700ms whenever amount changes
  const [isCalculating, setIsCalculating] = useState(false);
  const calcTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    const t1 = setTimeout(() => setIsCalculating(true), 0);
    if (calcTimer.current) clearTimeout(calcTimer.current);
    calcTimer.current = setTimeout(() => setIsCalculating(false), 700);
    return () => { 
      clearTimeout(t1);
      if (calcTimer.current) clearTimeout(calcTimer.current); 
    };
  }, [sendAmount, sourceCurr, targetCurr]);

  const displayValue = isFocused
    ? sendAmount
    : numericAmount > 0
      ? formatWithCommas(numericAmount)
      : "";

  return (
    <>
      <div className="bg-white rounded-[24px] md:rounded-[32px] shadow-2xl text-new-world-dark font-sans">

        {/* ── You send ── */}
        <div className="px-6 pt-6 md:px-8 md:pt-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[15px] font-medium text-slate-500">You send exactly</span>

            {/* Clickable animated badge */}
            <button
              onClick={() => setIsRateModalOpen(true)}
              className="flex items-center gap-1.5 text-[12px] font-semibold text-slate-600 bg-slate-100 border border-slate-200 rounded-full px-3 py-1.5 cursor-pointer hover:bg-slate-200 transition-colors select-none"
            >
              <Lock size={12} className="shrink-0" />
              <div className="relative overflow-hidden h-[16px] min-w-[148px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={badgeIndex}
                    initial={{ y: 16, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -16, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="absolute left-0 whitespace-nowrap leading-4"
                  >
                    {badgeLabels[badgeIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
              <ChevronRight size={12} className="text-slate-400 shrink-0" />
            </button>
          </div>

          <div className="flex items-center justify-between gap-3">
            <CurrencyDropdown selected={sourceCurr} onSelect={setSourceCurr} />
            <input
              type="text"
              inputMode="decimal"
              className="bg-transparent text-[36px] md:text-[42px] font-black outline-none flex-1 text-right text-new-world-dark placeholder:text-slate-300 tracking-tight min-w-0"
              value={displayValue}
              placeholder="0"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onChange={(e) => {
                const raw = e.target.value.replace(/,/g, "");
                if (/^\d*\.?\d*$/.test(raw)) setSendAmount(raw);
              }}
            />
          </div>
        </div>

        <div className="border-t border-slate-100 mx-6 md:mx-8 mt-4" />

        {/* ── Middle info rows ── */}
        <div className="px-6 md:px-8 py-3 flex flex-col gap-5">

          {/* High volume banner */}
          <AnimatePresence>
            {!isHighVolume && (
              <motion.div
                key="hv-banner"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="bg-[#f0f7fa] text-[#0091be] rounded-xl p-3 text-[13px] flex items-start gap-2.5 border border-[#d6edf5]">
                  <Globe size={16} className="shrink-0 mt-0.5" />
                  <span>Sending over 25,000 USD or equivalent? <a href="#" className="underline font-bold hover:opacity-80">We&apos;ll discount our fee</a></span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Arrives */}
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
              <Clock size={17} className="text-slate-600" />
            </div>
            {isCalculating ? (
              <div className="flex flex-col gap-2 py-1 w-32">
                <div className="h-3 bg-slate-200 rounded animate-pulse w-1/2"></div>
                <div className="h-4 bg-slate-200 rounded animate-pulse w-full"></div>
              </div>
            ) : (
              <div>
                <p className="text-[13px] text-slate-500 font-medium">Arrives</p>
                <p className="font-bold text-[15px]">by Thursday</p>
              </div>
            )}
          </div>

          {/* Total fees */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                <FileText size={17} className="text-slate-600" />
              </div>
              {isCalculating ? (
                <div className="flex flex-col gap-2 py-1 w-48">
                  <div className="h-3 bg-slate-200 rounded animate-pulse w-2/3"></div>
                  <div className="h-4 bg-slate-200 rounded animate-pulse w-full"></div>
                </div>
              ) : (
                <div>
                  <p className="text-[13px] text-slate-500 font-medium">Total fees ({(feePercentage * 100).toFixed(2)}%)</p>
                  <p className="font-bold text-[15px]">Included in {sourceCurr.code} amount</p>
                  <AnimatePresence>
                    {isHighVolume && (
                      <motion.div
                        key="hv-tag"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="mt-2 inline-flex items-center gap-1.5 bg-[#edf7ee] text-[#1e7e34] px-2.5 py-1 rounded-lg text-[12px] font-bold"
                      >
                        <Tag size={12} /> {formatWithCommas(parseFloat((fee * 0.18).toFixed(2)))} {sourceCurr.code} volume discount
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {isCalculating ? (
              <div className="h-5 bg-slate-200 rounded animate-pulse w-16 md:w-20 mt-1"></div>
            ) : (
              <div
                className="flex items-center gap-0.5 font-bold text-[14px] text-slate-700 cursor-pointer underline decoration-1 underline-offset-2 hover:opacity-70 whitespace-nowrap mt-1"
              >
                {formatWithCommas(parseFloat(fee.toFixed(2)))} {sourceCurr.code} <ChevronRight size={15} />
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-slate-100 mx-6 md:mx-8" />

        {/* ── Recipient gets ── */}
        <div className="px-6 pt-5 pb-5 md:px-8">
          <span className="text-[15px] font-medium text-slate-500 block mb-4">Recipient gets</span>
          <div className="flex items-center justify-between gap-3">
            <CurrencyDropdown selected={targetCurr} onSelect={setTargetCurr} />
            {isCalculating ? (
              <div className="flex-1 flex justify-end">
                <div className="h-10 md:h-12 bg-slate-200 rounded animate-pulse w-32 md:w-48 my-1"></div>
              </div>
            ) : (
              <span className="text-[36px] md:text-[42px] font-black tracking-tight text-new-world-dark flex-1 text-right min-w-0 inline-block">
                {parseFloat(receiveAmount) > 0 ? formatWithCommas(parseFloat(receiveAmount)) : "0.00"}
              </span>
            )}
          </div>
        </div>

        {/* ── High volume promo card ── */}
        <AnimatePresence>
          {isHighVolume && (
            <motion.div
              key="hv-promo"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden px-6 md:px-8"
            >
              <div className="mb-4 bg-[#f3f9ec] rounded-2xl p-5 text-new-world-dark border border-[#ddedc8] flex items-start gap-4">
                <span className="text-3xl shrink-0">🌍</span>
                <div>
                  <p className="font-bold text-[15px] mb-1">You&apos;re sending a lot so we discounted our fee</p>
                  <p className="text-[13px] text-slate-600 mb-3 leading-relaxed">Savings on this transfer, and eligible transfers for the rest of the month. Plus dedicated support from our expert team.</p>
                  <a href="#" className="text-[13px] font-bold underline hover:opacity-80">Learn more about sending large amounts</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── CTA ── */}
        <div className="px-6 pb-6 md:px-8 md:pb-8">
          <button className="w-full bg-accent text-new-world-dark py-4 rounded-full font-bold text-lg transition-colors flex items-center justify-center gap-3">
            {isCalculating ? (
              <>
                <svg className="animate-spin h-5 w-5 text-new-world-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                <span>Calculating...</span>
              </>
            ) : (
              <span>Send money</span>
            )}
          </button>
        </div>
      </div>

      {/* ── Rate info modal / drawer ── */}
      <ModalDrawer isOpen={isRateModalOpen} onClose={() => setIsRateModalOpen(false)}>
        <RateModalContent
          sourceCurr={sourceCurr}
          targetCurr={targetCurr}
          exchangeRate={exchangeRate}
        />
      </ModalDrawer>
    </>
  );
}
