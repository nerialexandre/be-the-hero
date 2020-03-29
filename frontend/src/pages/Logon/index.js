import React, {useState} from 'react';
import {FiLogIn} from 'react-icons/fi'
import './styles.css';
import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api'

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';



export default function Logon(){
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e){
    e.preventDefault();
    
    try {
      const response = await api.post('sessions',{id});
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name)
      alert(`Usuario ${response.data.name} logado com sucesso`)
      history.push('profile')
    } catch (err){
      alert(`Usuario não localizado`);
    }
  }
     

  return(
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be the Hero"/>

        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>
          <input
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button type="submit" className="button">Entrar</button>

          <div className="register">
          <Link to="/register" className="register-link">
            <FiLogIn size={18} color="#DF2041"/>
          Não tenho cadastro
          </Link>
          </div>
          
        </form>
      </section>
      <img src={heroesImg} alt="Heroes"/>
    </div>
  );
}