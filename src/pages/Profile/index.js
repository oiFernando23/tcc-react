import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FiUser, FiPhone, FiHome, FiTrash2 } from "react-icons/fi";
import { useHistory } from 'react-router-dom';


import api from "../../api"
import Default from '../../components/default';

import './styles.css';

export default function Profile (){
    
    const [rate, setRate] = useState();
    const {id} = useParams();
    const history = useHistory();
    const [user, setUser] = useState([]);

    async function sendRate(){
        try{
            await api.post(`/users.rate/${id}`, {rate})          
        }catch(err){
            alert(err)
        }
    }
    
    async function hangleDeletePost(id){
        try{
            history.push('/home');
            await api.delete(`posts.delete/${id}`);

        }catch(err){
            alert('Erro ao deletar o post.');
        }
    }

    function triggerPop(){
        document.getElementById('pop').classList.toggle('pop-active')
        console.log(document.getElementById('pop'))
    }

    useEffect(()=>{
        async function fetchData() {
            
            const resp = await api.get(`users.list/${id}`);
            //console.log(resp.data);
            setUser(resp.data);
        }
        fetchData();
    }, []);
    
    const rating = user.rate

    return(
        <Default>
            <div id='pop'>
                <select value={rate} onChange={e => setRate(e.target.value)}>
                    <option value={1.0}>1</option>
                    <option value={2.0}>2</option>
                    <option value={3.0}>3</option>
                    <option value={4.0}>4</option>
                    <option value={5.0}>5</option>
                </select>
                <button onClick={sendRate}>Enviar</button>
            </div>
            
            <div className='profile-container'>
                <div className='userData'>
                    <p><h2><FiUser size={20} />   {user.name}</h2></p>
                    <p><h2><FiUser size={20} />   {user.email}</h2></p>
                    <p><h2><FiPhone size={20}/>   {user.phone}</h2></p>
                    <p><h2><FiHome size={20}/>   {user.cidade}, {user.estado}</h2></p>
                    <p onClick={triggerPop} className='rating'><h2>★   {Intl.NumberFormat('pt-BR', {maximumSignificantDigits: 3}).format(rating)}</h2></p>
                </div>
            </div>



            <div className='profile-container-posts'>
                 <ul>
                    { user.posts && 
                        user.posts.map( post=> 
                            <li key={post.id}>
                                <img src={post.image !== ''? post.image : 'https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg'} style={{width: '500px', marginBottom: '20px', height: '100%'}}></img>

                                <div style={{padding: '8px'}}>
                                    <button onClick={()=>hangleDeletePost(post.id)}><FiTrash2 size={20}/></button>
                                    <p><strong>Valor: </strong>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(post.value)}</p>
                                    <p><strong>{post.userName} -  </strong>{post.description}</p>                                    
                                </div>
                            </li>
                    )}
                    { !user.posts &&
                        <div style={{margin: 'auto', textAlign: 'center', color: 'GrayText'}}>
                            <h1>Não há posts cadastrados</h1>
                        </div>
                    }
                </ul>
            </div>

        </Default>
    )
}