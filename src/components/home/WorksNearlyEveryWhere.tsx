"use client";

import { useState } from 'react';

const destinations = [
    { country: "Andorra", code: "ad" },
    { country: "Argentina", code: "ar" },
    { country: "Australia", code: "au" },
    { country: "Austria", code: "at" },
    { country: "Bangladesh", code: "bd" },
    { country: "Belgium", code: "be" },
    { country: "Botswana", code: "bw" },
    { country: "Brazil", code: "br" },
    { country: "British Virgin Islands", code: "vg" },
    { country: "Bulgaria", code: "bg" },
    { country: "Canada", code: "ca" },
    { country: "Chile", code: "cl" },
    { country: "China", code: "cn" },
    { country: "Colombia", code: "co" },
    { country: "Costa Rica", code: "cr" },
];

export default function WorksNearlyEverywhere() {
    const [activeTab, setActiveTab] = useState('send');

    return (
        <section className="py-24 bg-[#f2f4f2] text-new-world-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <h2 className="text-[36px] md:text-[48px] font-bold leading-tight tracking-tight mb-8">
                    New World works nearly everywhere
                </h2>

                <div className="flex flex-wrap gap-4 mb-16">
                    <button
                        className='text-black bg-accent px-7 py-2 rounded-full font-medium '>
                        Send money
                    </button>
                    <button
                        className='text-black px-5 py-2 rounded-full bg-transparent border border-slate-700 font-medium '>
                        Hold and convert money
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-8 md:gap-y-12">
                    {destinations.map((dest, index) => (
                        <div key={dest.country} className={`flex-col items-start gap-4 ${index >= 5 ? 'hidden md:flex' : 'flex'}`}>
                            <div className="w-[42px] h-[42px] rounded-full overflow-hidden shadow-sm flex-shrink-0 bg-white border border-slate-200">
                                <img
                                    src={`https://flagcdn.com/w160/${dest.code}.png`}
                                    alt={`${dest.country} flag`}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <a href="#" className="text-[17px] font-medium text-new-world-dark underline decoration-1 underline-offset-4 hover:decoration-2 transition-all opacity-90 hover:opacity-100 dark:decoration-new-world-dark/40 decoration-new-world-dark/30">
                                Send money to {dest.country}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
