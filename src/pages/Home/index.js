import React from 'react';
import {Link} from 'react-router-dom';
import {FiPower} from 'react-icons/fi';

import "./styles.css"

import logoTxt from '../../assets/logoText.png';

export default function Home(){
    return(
        <div className="home-container">
            <header>
                <img src={logoTxt} alt="MyBodyMyArt"/>
                <span>Bem vindo!</span>
                <Link className="button" to="/posts/new">Faça um post</Link>
                <button type="button">
                    <FiPower size={18} color="#2C2A29"/>
                </button>
            </header>
            <div className="posts">
                
            </div>
        </div>
    );
}