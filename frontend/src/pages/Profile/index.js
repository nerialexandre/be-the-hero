import React, {useEffect, useState} from 'react';
import './styles.css';

import {FiPower, FiTrash2} from 'react-icons/fi'
import './styles.css';
import {Link, useHistory} from 'react-router-dom';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api'

export default function Profile(){
  const [incidents, setIncidents]= useState([]);
  const history = useHistory();

  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');
  useEffect(()=>{
    api.get('profile', {
      headers: {
        authorization: ongId,
      }
    }).then(response =>{
      setIncidents(response.data);
    })
  }, [ongId]);


  async function handleDelete(id){
    try{
      await api.delete(`/incidents/${id}`, {
        headers: {
          authorization: ongId,
        }
      });
      setIncidents(incidents.filter(incident => incident.id !== id));
    }catch(err){
      alert('error')
    }
  }

  function handleLogout(){
    localStorage.clear();
    history.push('/');
  }

  return(
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="logo"/>
        <span>Bem vindo, {ongName}!</span>
        <Link to="/incidents/new" className="button">
          Cadastrar novo Caso
        </Link>
        <button onClick={handleLogout} type="submit">
        <FiPower size={18} color="#DF2041"/>
        </button>
      </header>

      <h1> Casos Cadastrados</h1>
      <ul>
        {incidents.map(incident=>(
          <li key={incident.id}>
          <strong>CASO:</strong>
          <p>{incident.title}</p>

          <strong>DESCRIÇÃO:</strong>
          <p>{incident.description}</p>

          <strong>VALOR:</strong>
          <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

          <button onClick={()=>{handleDelete(incident.id)} }><FiTrash2 size={20}/></button>
        </li>
        ))}
      </ul>

    </div>
  );
}

