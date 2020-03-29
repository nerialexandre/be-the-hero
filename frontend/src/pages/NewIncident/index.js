import React, {useState} from 'react';
import './styles.css';
import {FiArrowLeft} from 'react-icons/fi'
import './styles.css';
import {Link, useHistory} from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api'

export default function NewIncident(){
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const history = useHistory();

  const ongId = localStorage.getItem('ongId');
  async function handleNewIncident(e){
    e.preventDefault();
    
    const data = {title, description, value}
    try{
      const response = await api.post('incidents', data,{
        headers: {
          authorization: ongId,
        }
      });
      alert(`Novo caso cadastrado: ${response.data.id}`);
      history.push('/profile');

    }catch(err){
      alert('Erro no cadastro')
    }
  }


  return(
    <div className="newIncident-container">

      <div className="content">
        <section className="register">
          <img src={logoImg} alt="Be the Hero"/>
          <h1> Cadastrar Novo Caso</h1>
          <p>Descreva o caso detalhademente para encontrar um herói para resolver o seu caso.</p>

          <Link to="/profile" className="register-link">
              <FiArrowLeft size={18} color="#DF2041"/>
            Voltar para o Perfil
            </Link>
        </section>
        
        
        <form onSubmit={handleNewIncident}>
          <input
          placeholder="Título do caso"
          type="text"
          value={title}
          required
          onChange={e=>setTitle(e.target.value)}
          />
          <textarea
          placeholder="Descrição"
          value={description}
          required
          onChange={e=>setDescription(e.target.value)}
          />
          <input
          placeholder="Valor em reais"
          value={value}
          required
          onChange={e=>setValue(e.target.value)}
          />
          <button type="submit" className="button">Cadastrar</button>
        </form>

      </div>
    
    </div>
  );
}
