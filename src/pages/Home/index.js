import {React, useEffect, useState} from "react";
import "./styles.css";

import api from "../../api"

import Default from "../../components/default";

export default function Home() {
  const [posts, setPosts] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const resp = await api.get('/posts');
            setPosts(resp.data);
        }
        fetchData();
    }, []);
  return (
    <div>
      <Default>
        <div className="posts">
          {posts.map( post=> 
            <ul>
              <li key={post.id}>
                 Imagem aqui
                 <strong>DESCRIÇÃO: </strong>{post.description}
                 <strong>VALOR: </strong>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(post.value)}
              </li>
            </ul>
          )}
        </div>
      </Default>
    </div>
  );
}
