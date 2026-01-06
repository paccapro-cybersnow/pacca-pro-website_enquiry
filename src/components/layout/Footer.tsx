import React from 'react';
import { COMPANY_INFO } from '@/lib/constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#243875] border-t border-white/10 text-gray-300 py-6 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
