import React from 'react';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { WHATSAPP_CONFIG } from '@/lib/constants';
import Logo from '@/assets/Paccapro_logo.png';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <img src={Logo} alt="Pacca Pro" className="h-12 w-auto" />
          </div>

          <div className="flex items-center">
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
