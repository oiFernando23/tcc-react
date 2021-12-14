import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoText from "../../assets/logoText.png";


export default function NewPost (){
    return(
             <div className="new-post-container">
            <div className="content">
                <section>
                    <img className="img" src={logoText} alt="My body My art" style={{ marginLeft: -100 }} />
                    <h1>Faça um novo post!</h1>
                    <p>Mostre arte para outros usuários!</p>

                    <Link className="back-link" to="/home">
                        <FiArrowLeft size={16} color="#000000" />
                        Voltar
                    </Link>
                </section>

                <form>
                    {/* Colocar a imagem aqui! */}
                    <input placeholder='Titulo' />
                    <textarea placeholder="Descrição"/>
                    <input placeholder="Valor"/>
                    <button className="button" type="submit">Postar</button>
                </form>
            </div>
        </div>      
    );
}