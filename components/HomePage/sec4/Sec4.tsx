'use client';
import React from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Sec4() {
  const { t } = useLanguage();

  return (
    <div className="mt-20 px-4 md:px-8 lg:px-12">
      {/* Full-width rounded rectangular background with photograph and blue gradient overlay */}
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/dba-sitting.jpg"
            alt="District Bar Association Meeting"
            className="w-full h-full object-cover"
            fill
            priority
          />
        </div>

        {/* Semi-transparent blue gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-blue-600/60"></div>

        {/* Decorative partial ring (donut) at top-right */}
        <div className="absolute top-4 right-4 w-20 h-20 md:w-32 md:h-32">
          <div className="w-full h-full border-8 border-white/30 rounded-full border-t-transparent border-r-transparent rotate-45"></div>
        </div>

        {/* Two overlapping callout cards in the foreground */}
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full max-w-4xl">

            {/* Left card (white) - curved left side with bottom-right notch */}
            <div className="relative bg-white p-8 md:p-10 shadow-lg flex-1 min-h-[280px] md:min-h-[320px] overflow-hidden" style={{borderRadius: '100px 20px 20px 100px'}}>
              {/* Bottom-right curved notch cutout */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-r from-blue-900/80 to-blue-600/60" style={{borderRadius: '100% 0 0 0'}}></div>

              <div className="relative z-20 mt-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  {t('join.title')}
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  {t('join.subtitle')}
                </p>
                {/* Rounded button with curved edge */}
                <a
                  href="https://app.sindhbarcouncil.org/advocates_portal/register.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  style={{borderRadius: '20px 20px 20px 0px'}}
                >
                  {t('join.button')}
                </a>
              </div>
            </div>

            {/* Right card (dark blue) - top-left notch with curved right side */}
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 md:p-10 shadow-lg flex-1 min-h-[280px] md:min-h-[320px] overflow-hidden" style={{borderRadius: '20px 100px 100px 20px'}}>
              {/* Top-left curved notch cutout */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-white" style={{borderRadius: '0 0 100% 0'}}></div>

              <div className="relative z-20 mt-8 ml-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                  {t('verification.title')}
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  {t('verification.subtitle')}
                </p>
                {/* White rounded button */}
                <a
                  href="https://app.sindhbarcouncil.org/advocates_portal/login.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white hover:bg-gray-100 text-slate-900 px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  style={{borderRadius: '0px 20px 20px 20px'}}
                >
                  {t('verification.button')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}