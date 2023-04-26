import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/soul-pet-logo.svg"

export function Header() {
  return (
    <div className="header w-100 px-3 py-2">
      <nav className="container d-flex justify-content-between align-items-center">
        <Link><img src={logo} alt="SoulPet" /></Link>
        <div className="d-flex gap-5">
        <Link>Cliente</Link>
        <Link>Pets</Link>
        </div>
      </nav>
    </div>
  );
};