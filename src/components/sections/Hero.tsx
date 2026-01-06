import React from 'react';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { WHATSAPP_CONFIG } from '@/lib/constants';
import HeroImage from '@/assets/herosection.jpeg';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-[#243875] min-h-screen pt-24 overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text and CTA */}
          <div className="text-center lg:text-left z-10">
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F57C2B] leading-relaxed"
              style={{ fontFamily: "'Noto Sans Tamil', sans-serif" }}
            >
              உங்கள் வீட்டிற்கான முழு பாதுகாப்பு — அடித்தளம் முதல் கூரை வரை
            </h1>
            <div className="mt-10">
              <WhatsAppButton 
                phoneNumber={WHATSAPP_CONFIG.phoneNumber}
                message={WHATSAPP_CONFIG.defaultMessage}
              />
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end">
            <img 
              src={HeroImage} 
              alt="Pacca Pro - Foundation to Roof Protection" 
              className="w-full max-w-lg lg:max-w-xl h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
