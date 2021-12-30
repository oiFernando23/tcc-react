import "./styles.css";
import { Link } from "react-router-dom";
import { FiUser, FiHome, FiSettings } from "react-icons/fi";
import logoTxt from "../../assets/logoText.png";


export default function Sidebar() {
  return (
    <div className="sidebar">
       <img src={logoTxt} alt="MyBodyMyArt" />
      <ul className="menu">
      <div>
        <Link to="/home">
          <li className="menu-item">
            <FiHome size={15} />
            <span>Home</span>
          </li>
        </Link>
        <Link to="/profile">
          <li className="menu-item">
            <FiUser size={15} />
            <span>Meu perfil</span>
          </li>
        </Link>
      </div>
        <Link to="/config">
          <li className="menu-item">
            <FiSettings size={15} />
            <span>Configurações</span>
          </li>
        </Link>
      </ul>
    </div>
  );
}
