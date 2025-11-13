import NavItem from '../atoms/NavItem.jsx';

function Navbar() {
  return (
    <nav>
      <ul className="nav-list">
        <NavItem text="Inicio" />
        <NavItem text="Series" />
        <NavItem text="Películas" />
        <NavItem text="Novedades populares" />
        <NavItem text="Mi lista" />
        <NavItem text="Explora por idiomas" />
      </ul>
    </nav>
  );
}

export default Navbar;
