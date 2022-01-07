import React, { useState }from "react";
import { Link } from "react-router-dom";
import { FiPower } from "react-icons/fi";
import { useHistory } from "react-router";
import api from "../../api"


import "./styles.css";
export default function Header() {
  const history = useHistory();
  const [userName, setUserName] = useState('');

  async function search(e) {
    e.preventDefault();
    try {
        const idSearch = await api.get(`/users.search/${userName}`);        
        history.push(`/profile/${idSearch.data}`)
    } catch (err) {
        alert("Oops, algo deu errado")
    }
}

  function logout () {
    history.push('/');
    localStorage.clear();
  }
  return (
    <header>
      {/* <span>Bem vindo!</span> */}
      <div>
        <form onSubmit={search}>
          <input type="text" placeholder='Pesquise aqui' value={userName} onChange={e => setUserName(e.target.value)}/>
        </form>
      </div>
      <Link className="button" to="/posts/new">
        Faça um post
      </Link>
      <button type="button" onClick={logout}>
        <FiPower size={18} color="#2C2A29" />
      </button>
    </header>
  );
}
