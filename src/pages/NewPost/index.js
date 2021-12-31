import { React, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from "../../api"

import './styles.css';

import logoText from "../../assets/logoText.png";


export default function NewPost (){
    const history = useHistory();
    const [description, setDescription] = useState('');
    const [file, setFile] = useState('');
    const [value, setValue] = useState('');

    async function handlePost(e){
        e.preventDefault();

        const userId = localStorage.getItem('userId');
        const userName = localStorage.getItem('userName');
        const data = new FormData();
        data.append('file', file)
        data.append('description', description)
        data.append('value', value)
        data.append('userId', userId)
        data.append('userName', userName)

        try{
            await api.post('posts.create', data)
            alert('Post cadastrado');
            history.push('/home');
        }catch(err){
            console.log(err);
            alert("Algo deu errado")
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

                <form onSubmit={handlePost} encType="multipart/form-data">
                    {/* Colocar a imagem aqui! */}
                    <textarea placeholder="Descrição"
                    value={description}
                    onChange={e => setDescription(e.target.value)}/>

                    <input placeholder="Valor"
                    value={value}
                    onChange={e => setValue(e.target.value)}/>

                    <label htmlFor="file-upload" className="custom-file-upload">
                        Faça upload da imagem
                    </label>
                    <input type="file" name="file" accept="image/png, image/jpeg, image/pjpeg, image/jpg" id="file-upload" onChange={ (e) => setFile(e.target.files[0]) }/>
                    {file.name}
                    <button className="button" type="submit">Postar</button>
                </form>
            </div>
        </div>      
    );
}