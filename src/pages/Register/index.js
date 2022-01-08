import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../api'

import "./styles.css";

import logoText from "../../assets/logoText.png";

export default function Register() {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');

    async function handleRegister(e) {
        e.preventDefault();
        try {
            await api.post('/users.create', { name, email, phone, password, cidade, estado });
            history.push('/');
        } catch (err) {
            console.log(err)
            // alert("Oops, algo deu errado")
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img className="img" src={logoText} alt="My body My art" style={{ marginLeft: -100 }} />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#000000" />
                        Voltar
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Username" />
                    <input type="text" placeholder="WhatsApp (ex: 51000000000)" value={phone} onChange={e => setPhone(e.target.value)} />
                    <input type="text"placeholder="Estado" value={estado} onChange={e => setEstado(e.target.value)} />
                    <input type="text"placeholder="Cidade" value={cidade} onChange={e => setCidade(e.target.value)} />
                    <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}