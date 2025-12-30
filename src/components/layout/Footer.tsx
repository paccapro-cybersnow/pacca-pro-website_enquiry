import React from 'react';
import { COMPANY_INFO } from '@/lib/constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
