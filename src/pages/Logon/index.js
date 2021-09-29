import React from 'react';
import { Link } from 'react-router-dom';

import { FiLogIn } from 'react-icons/fi';

import './styles.css'; 

import logoText from "../../assets/logoText.png";
import logoImg from "../../assets/logoImg.png";

export default function Logon(){
    return (
        <div className="back">
            <h1>
                <div className="logonContainer">
                    <section className="form">
                        <img className="imgTxt" src={logoText} alt="logoText" />
                        <form>
                            <h1>Faça seu login</h1>
                            <input placeholder="Nome de usuário"></input>
                            <input type = "password" placeholder="Senha"></input>
                            <button className="button">Entrar</button>
                            <Link className="back-link" to = "/register">
                                <FiLogIn size={16} color="#000000"  />
                                Registre-se
                            </Link>
                        </form>
                    </section>
                <img src={logoImg} alt="logoImg" style= {{ marginRight : 100 }}/>
                </div>
            </h1>
        </div>
    );
}