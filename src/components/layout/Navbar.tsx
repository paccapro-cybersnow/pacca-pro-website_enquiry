import React from 'react';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { WHATSAPP_CONFIG } from '@/lib/constants';
import Logo from '@/assets/Paccapro_logo.png';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-50 font-sans">
      {/* Background Layers */}
      <div className="absolute inset-0 flex flex-col z-0">
        <div className="h-14 bg-[#F57C2B]"></div>
        <div className="h-10 bg-transparent"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24">
        <div className="flex h-full">
          {/* Logo Section with Curve */}
          <div className="relative flex-shrink-0 w-28 mr-2">
            {/* Orange Curve Background */}
            <div className="absolute top-0 left-0 w-28 h-24 bg-[#F57C2B] rounded-b-full z-10 flex items-start justify-center pt-2">
               <img src={Logo} alt="Pacca Pro" className="h-16 w-auto object-contain mt-2 relative z-20" />
            </div>
          </div>

          {/* Text Section */}
          <div className="flex flex-col h-full z-20 pt-1">
            {/* Top Row: Pacca */}
            <div className="h-14 flex items-center">
              <span 
                className="text-5xl font-bold text-white tracking-wide leading-none ml-2" 
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Pacca
              </span>
            </div>
            {/* Bottom Row: Pro */}
            <div className="h-10 flex items-center overflow-hidden">
              {/* Ghost text for alignment */}
              <span 
                className="text-5xl font-bold text-transparent tracking-wide leading-none ml-2 select-none" 
                style={{ fontFamily: "'Playfair Display', serif" }}
                aria-hidden="true"
              >
                Pacca
              </span>
              <span 
                className="text-4xl font-bold text-[#F57C2B] leading-none" 
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Pro
              </span>
            </div>
          </div>

          {/* Spacer */}
          <div className="flex-grow"></div>

          {/* WhatsApp Button */}
          <div className="h-14 flex items-center relative z-20">
             <WhatsAppButton 
                phoneNumber={WHATSAPP_CONFIG.phoneNumber}
                message={WHATSAPP_CONFIG.defaultMessage}
                variant="compact"
              />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
