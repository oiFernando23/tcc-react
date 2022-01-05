import "./styles.css";
import { Link } from "react-router-dom";
import { FiUser, FiHome, FiSettings } from "react-icons/fi";
import logoTxt from "../../assets/logoText.png";


export default function Sidebar() {
  
  const userIdLocal = localStorage.getItem('userId');
  
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
        <Link to={`/profile/${userIdLocal}`}>
          <li className="menu-item">
            <FiUser size={15} />
            <span>Meu perfil</span>
          </li>
        </Link>
      </div>
      </ul>
    </div>
  );
}
