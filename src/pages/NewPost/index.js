import { React, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from "../../api"

import './styles.css';

import logoText from "../../assets/logoText.png";


export default function NewPost (){
    const history = useHistory();
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [value, setValue] = useState('');

    async function handlePost(e){
        e.preventDefault();

        try{
            const userId = localStorage.getItem('userId');
            const response = await api.post('newPost', {description, image, value, userId});
            history.push('/home');

        }catch(err){
            console.log(err);
        }
    }

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

                <form onSubmit={handlePost}>
                    {/* Colocar a imagem aqui! */}
                    <textarea placeholder="Descrição"
                    value={description}
                    onChange={e => setDescription(e.target.value)}/>

                    <input placeholder="Valor"
                    value={value}
                    onChange={e => setValue(e.target.value)}/>

                    <label for="file-upload" className="custom-file-upload">
                        Faça upload da imagem
                    </label>
                    <input id="file-upload" type="file"/>

                    <button className="button" type="submit">Postar</button>
                </form>
            </div>
        </div>      
    );
}