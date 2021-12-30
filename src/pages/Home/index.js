import {React, useEffect, useState} from "react";
import "./styles.css";

import api from "../../api"

import Default from "../../components/default";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
      async function fetchData() {
          const resp = await api.get('/posts.list');
          setPosts(resp.data);
      }
      fetchData();
  }, []);
  return (
    <div>
      <Default>
        <div className="posts">
          <ul>
          {posts.map( post=> 
              <li key={post.id}>
                  {/* <div style={{backgroundImage: `url(${post.image !== ''? post.image : 'https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg'})`, height: '500px', marginBottom: '20px', width: '100%', backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}></div> */}
                  {/* <img src={post.image}></img> */}
                  <img src={post.image !== ''? post.image : 'https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg'} style={{width: '500px', marginBottom: '20px', height: '100%'}}></img>

                  <div style={{padding: '8px'}}>
                  <p><strong>DESCRIÇÃO: </strong>{post.description}</p>
                  <p><strong>VALOR: </strong>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(post.value)}</p>
                  </div>
              </li>
            )}
          </ul>
        </div>
      </Default>
    </div>
  );
}
