import React from "react";
import { Link } from "react-router-dom";
import { FiPower } from "react-icons/fi";
import { useHistory } from "react-router";

import "./styles.css";



export default function Header() {
  const history = useHistory();

  function logout () {
    history.push('/');
    localStorage.clear();
  }
  return (
    <header>
      <span>Bem vindo!</span>
      <Link className="button" to="/posts/new">
        Faça um post
      </Link>
      <button type="button" onClick={logout}>
        <FiPower size={18} color="#2C2A29" />
      </button>
    </header>
  );
}
