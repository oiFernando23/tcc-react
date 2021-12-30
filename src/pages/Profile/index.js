import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import api from "../../api"
import Default from '../../components/default';

import './styles.css';

export default function Profile (){
   
    const [user, setUser] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const userId = localStorage.getItem('userId')
            const resp = await api.get(`users.list/${userId}`);
            console.log(resp.data);
            setUser(resp.data);
        }
        fetchData();
    }, []);
    
    return(
        <Default>
            
            
            <div className='profile-container'>
                <div>Foto do user e nota</div>
                <div className='userData'>Dados do user</div>
            </div>



            <div className='profile-container-posts'>
                 <ul>
                    { user.posts && 
                        user.posts.map( post=> 
                            <li key={post.id}>
                                <img src={post.image !== ''? post.image : 'https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg'} style={{width: '500px', marginBottom: '20px', height: '100%'}}></img>

                                <div style={{padding: '8px'}}>
                                    <p><strong>DESCRIÇÃO: </strong>{post.description}</p>
                                    <p><strong>VALOR: </strong>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(post.value)}</p>
                                    
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