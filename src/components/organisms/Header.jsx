import { useState, useEffect } from "react";

import Logo from '../atoms/Logo.jsx';
import Navbar from '../molecules/Navbar.jsx';
import IconSearch from '../atoms/IconSearch.jsx';
import AtomBell from '../atoms/AtomBell.jsx';
import KidsText from '../atoms/KidsText.jsx';

import './Header.css';
import UserLogo from '../atoms/UserLogo.jsx';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false); 
  useEffect(() => { 
    const handleScroll = () => { 
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <div className="header-left">
        <Logo />
        <Navbar />
      </div>

      <div className="header-right">
        <IconSearch />
         <KidsText />  
        <AtomBell />
        <UserLogo />
      </div>

    </header>
  );
}

export default Header;
