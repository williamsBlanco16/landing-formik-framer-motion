import { FC } from 'react';
import logoImage from '../assets/logo_domus.png';

export const Header: FC = () => (
  <header 
    className="fixed top-0 left-0 right-0 flex items-center p-4 bg-white shadow-md justify-center z-50" 
    aria-label="Header section containing the logo"
  >
    <div className="logo mx-auto" role="img" aria-label="Domus logo">
      <img 
        src={logoImage} 
        alt="Domus TechFit logo" 
        className="h-10 md:h-12 lg:h-14" 
      />
    </div>
  </header>
);
