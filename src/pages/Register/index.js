import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import "./styles.css";

import logoText from "../../assets/logoText.png";

export default function Register(){
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoText} alt="My body My art" style = {{ marginLeft : -100 }}/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro</p>

                    <Link className="back-link" to = "/">
                        <FiArrowLeft size={16} color="#000000"  />
                        Voltar
                    </Link>
                </section>

                <form action="">
                    <input placeholder="Nome"/>
                    <input type="email" placeholder="E-mail"/>
                    <input placeholder="WhatsApp"/>
                    <input type="password" placeholder="Senha"/>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}