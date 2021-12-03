import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import api from "../../api"
import './styles.css'; 
import { useHistory } from 'react-router';

import logoText from "../../assets/logoText.png";

export default function Logon(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const [message, setMessage] = useState('');

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('login', {email, password});
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userPassword', password);
            localStorage.setItem('userName', response.data.name);
            history.push('/home');

        }catch(err){
            setMessage("Erro de login, tente novamente!");
        }
    }

    return (
        <div className="back">
            <h1>
                <div className="logonContainer">
                    <section className="form">
                        <img className="imgTxt" src={logoText} alt="logoText" />
                        <form onSubmit={handleLogin}>
                            <h1>Faça seu login</h1>
                            <input 
                                type="email"
                                placeholder="E-mail"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            ></input>
                            <input 
                                type = "password" 
                                placeholder="Senha"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            ></input>
                            <span> {message} </span>
                            <button className="button">Entrar</button>
                            <Link className="back-link" to = "/register">
                                <FiLogIn size={16} color="#000000"  />
                                Registre-se
                            </Link>
                        </form>
                    </section>
                </div>
            </h1>
        </div>
    );
}