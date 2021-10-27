import React, { useEffect, useState } from 'react';
import './App.css';
import api from './service/Api';
function App() {
  const [pessoas, setPessoas] = useState([]);

  useEffect(() => {
    api.get("/?results=8")
      .then((response) => setPessoas(response.data.results))
      .catch((err) => {
        console.error("erro" + err);
      });
  }, [])
  return (
    <div className="conteudo">
      <h1>Pessoas Cadastradas</h1>
 <div className="tudo">
      {pessoas.map((post, key) => {
        return (
          
            <div className="card" key={key}>
              
                <img src={post.picture.large} />
                <h1>{post.name.first}</h1>
             
            </div>
          
        );
      })}
 </div> 

    </div>
  );
}

export default App;
