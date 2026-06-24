"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const dummyReviews = [
  { text: "\"Wise is awesome — truly fast, reliable, and refreshingly transparent. There are no hidden fees, no extra charges, and absolutely no annual fees — just a small transfer fee, and that's it. I honestly cannot imagine ever going back to using traditional banks for my overseas transactions. Highly recommended!\"", author: "Taimoor Tayyab (Tami)", bg: "bg-accent", textCol: "text-primary" },
  { text: "\"Wise is a popular money transfer app known for being *easy*, and *fast* for sending money abroad. The app design is clean, intuitive, and gives me complete peace of mind with every single transfer.\"", author: "Priyanka Dey", bg: "bg-btn-bg", textCol: "text-accent" },
  { text: "\"I've been using it for over 3 years. It's incredibly cheap compared to normal banks and the UI is very user friendly. Switching to this app has literally saved me hundreds of dollars in unfavorable exchange rates.\"", author: "John Smith", bg: "bg-accent", textCol: "text-primary" },
  { text: "\"The best feature is being able to hold multiple currencies at the same time. It changed how I handle my international clients, allowing me to receive payments instantly without suffering terrible conversion rates at my local bank.\"", author: "Elena Rossi", bg: "bg-btn-bg", textCol: "text-accent" },
  { text: "\"Seamless connection and fast transfers. Customer service actually replies in a few hours if there's an issue, and they go out of their way to ensure my money arrives safely and on time.\"", author: "Satoshi T.", bg: "bg-accent", textCol: "text-primary" },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex < dummyReviews.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <section className="py-12 bg-white text-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-6 md:gap-8 lg:gap-20">

          <div className="flex flex-col items-start pr-4">
            <div className="flex items-center gap-2 mb-6 md:mb-8 ">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-slate-100 shadow-sm flex-shrink-0">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" alt="Google Play" className="w-5 h-5 ml-1" />
              </div>
              <div className="flex text-[15px] font-bold items-center">
                4.8 ★ <span className="font-semibold text-slate-600 ml-1">on Google Play</span> <span className="text-slate-400 font-medium ml-1">1.3M reviews</span>
              </div>
            </div>

            <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.85] tracking-tighter mb-6">
              Excellent everywhere
            </h2>

            <p className="text-[19px] text-primary/90 font-medium mb-6 md:mb-12 max-w-[300px]">
              See the stories of people worldwide choosing Wise.
            </p>

            <div className="flex gap-4 mt-auto">
              <button
                onClick={prev}
                disabled={currentIndex === 0}
                className={`w-16 h-16 rounded-full flex items-center justify-center transition-colors cursor-pointer disabled:cursor-not-allowed ${currentIndex === 0
                  ? 'bg-[#f2f4f2] text-slate-400'
                  : 'bg-accent hover:bg-[#90d65b] text-primary'
                  }`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button
                onClick={next}
                disabled={currentIndex === dummyReviews.length - 1}
                className={`w-16 h-16 rounded-full flex items-center justify-center transition-colors cursor-pointer disabled:cursor-not-allowed ${currentIndex === dummyReviews.length - 1
                  ? 'bg-[#f2f4f2] text-slate-400'
                  : 'bg-accent hover:bg-[#90d65b] text-primary'
                  }`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          <div className="flex pt-4 pb-12 w-full min-w-0 relative -mx-6 lg:-mx-8 pl-6 lg:pl-8">
            <motion.div
              className="flex w-max cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset }) => {
                if (offset.x < -50) {
                  next();
                } else if (offset.x > 50) {
                  prev();
                }
              }}
            >
              <AnimatePresence initial={false}>
                {dummyReviews.slice(currentIndex).map((review) => {
                  return (
                    <motion.div
                      key={review.author}
                      layout
                      initial={{ width: 0, opacity: 0, scale: 0.8, marginRight: 0 }}
                      animate={{ width: "auto", opacity: 1, scale: 1, marginRight: 24 }}
                      exit={{ width: 0, opacity: 0, scale: 0.8, marginRight: 0 }}
                      transition={{
                        duration: 0.8,
                        ease: [0.32, 0.72, 0, 1]
                      }}
                      className={`min-h-[550px] rounded-[32px] ${review.bg} ${review.textCol} flex flex-col flex-shrink-0 shadow-lg origin-left overflow-hidden`}
                    >
                      <div className="w-[340px] md:w-[400px] h-full flex flex-col p-10 shrink-0">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border border-slate-100 shadow-sm mb-6 flex-shrink-0">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" alt="Google Play" className="w-10 h-10 ml-1" />
                        </div>

                        <p className="text-lg md:text-[21px] font-medium md:font-bold leading-tight mb-8">
                          {review.text}
                        </p>

                        <div className="mt-auto font-bold text-[17px]">
                          {review.author}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

