import Logo from '../atoms/Logo.jsx';
import Navbar from '../molecules/Navbar.jsx';
import IconSearch from '../atoms/IconSearch.jsx';
import AtomBell from '../atoms/AtomBell.jsx';
import KidsText from '../atoms/KidsText.jsx';

import './Header.css';
import UserLogo from '../atoms/UserLogo.jsx';

function Header() {
  return (
    <header>

      {}
      <div className="header-left">
        <Logo />
        <Navbar />
      </div>

      {}
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
