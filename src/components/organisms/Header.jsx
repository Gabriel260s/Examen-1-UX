import Logo from '../atoms/Logo.jsx';
import Navbar from '../molecules/Navbar.jsx';
import IconSearch from '../atoms/IconSearch.jsx';
import AtomBell from '../atoms/AtomBell.jsx';
import './Header.css';

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
        <AtomBell />
      </div>

    </header>
  );
}

export default Header;
