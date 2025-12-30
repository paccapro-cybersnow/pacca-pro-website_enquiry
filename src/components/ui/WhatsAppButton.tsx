import React from 'react';
import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from '@/lib/utils';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  variant?: 'primary' | 'compact';
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber, 
  message = "Hello!", 
  variant = 'primary' 
}) => {
  const handleClick = () => {
    openWhatsApp(phoneNumber, message);
  };

  if (variant === 'compact') {
    return (
      <button
        onClick={handleClick}
        className="flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white px-4 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className="group relative w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold text-lg rounded-xl shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ease-in-out overflow-hidden"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
      <MessageCircle className="w-6 h-6 fill-current" />
      <span>Chat with us on WhatsApp</span>
    </button>
  );
};

export default WhatsAppButton;
