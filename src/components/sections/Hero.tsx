import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { WHATSAPP_CONFIG, COMPANY_INFO } from '@/lib/constants';

const features = [
  'Premium Quality',
  'Factory Direct Prices',
  'Eco-Friendly',
];

const Hero: React.FC = () => {
  return (
    <div className="relative bg-white pt-28 pb-16 md:pt-32 md:pb-32 lg:pt-40 xl:pb-48 overflow-hidden">
      {/* Background Decor Elements */}
      <div className="hidden lg:block absolute top-0 right-0 -mr-20 -mt-20">
        <svg width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true" className="text-gray-100">
          <defs>
            <pattern id="grid-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Bring Your Walls</span>{' '}
              <span className="block text-brand-600 xl:inline">To Life</span>
            </h1>
            
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              {COMPANY_INFO.name} distributes the finest quality industrial and decorative paints. 
              We blend technology with color to create durable, eco-friendly finishes for every surface.
            </p>

            <div className="mt-6 space-y-2 sm:space-y-0 sm:flex sm:justify-center lg:justify-start gap-x-4 text-sm font-medium text-gray-600 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <p className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                Have questions about your project?
              </p>
              <div className="flex flex-col gap-4">
                <WhatsAppButton 
                  phoneNumber={WHATSAPP_CONFIG.phoneNumber}
                  message={WHATSAPP_CONFIG.defaultMessage}
                />
                <p className="text-xs text-gray-400">
                  Click the button above to Chat With Our Experts on WhatsApp.
                  <br />Typical response time: &lt; 5 minutes.
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-2xl shadow-xl lg:max-w-md overflow-hidden group">
              {/* Decorative blobs */}
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
              <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
              
              <div className="relative block w-full bg-white rounded-2xl overflow-hidden">
                <img
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  src="https://picsum.photos/800/800?grayscale&blur=2" 
                  alt="Paint Texture"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/40 to-transparent" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2131&auto=format&fit=crop"
                    alt="Painter working"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-gray-900">Trusted by Professionals</p>
                      <p className="text-xs text-gray-500">{COMPANY_INFO.stats.litersDistributed} Liters Distributed</p>
                    </div>
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                          <img src={`https://picsum.photos/100/100?random=${i}`} alt="user" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
