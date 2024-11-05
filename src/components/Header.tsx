import { FC, useState } from 'react';
import logoImage from '../assets/logo_domus.png';
import isoLogo from '../assets/isoDomus.png';

interface HaderProps {
  toggleNav:() => void
  toggleState: boolean
} 
export const Header: FC<HaderProps> = ({ toggleNav, toggleState  }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = () => {
    toggleNav()
  };

  return (
    <header className="header relative bg-white shadow-md">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <div className="logo mx-auto hidden md:block" role="img" aria-label="Domus logo">
            <img src={logoImage} alt="Domus TechFit logo" className="h-10 md:h-12 lg:h-14" />
          </div>
          <div className="logo mx-auto block md:hidden" role="img" aria-label="Domus logo">
            <img src={isoLogo} alt="Domus TechFit logo" className="h-10 md:h-12 lg:h-14" />
          </div>
        </div>
        <nav className="hidden md:flex space-x-4 mr-8">
          <button
            onClick={() => handleNavigation()}
            className="bg-[#7C2483] text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-[#4EA1D3]"
            aria-haspopup="true"
            aria-expanded={isOpen}
          >
            {toggleState ? 'Análisis' : 'Home'}
          </button>
        </nav>
        <div className="md:hidden">
          <button onClick={handleToggle} className="focus:outline-none">
            <span className="block w-8 h-1 bg-[#7C2483] mb-1"></span>
            <span className="block w-8 h-1 bg-[#7C2483] mb-1"></span>
            <span className="block w-8 h-1 bg-[#7C2483]"></span>
          </button>
        </div>
      </div>
      <div className={`absolute left-0 w-full bg-[#7C2483] transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <nav className="flex flex-col p-4">
          <button
            onClick={() => handleNavigation()}
            className="text-white py-2"
          >
            {toggleState ? 'Análisis' : 'Home'}
          </button>
        </nav>
      </div>
    </header>
  );
};
