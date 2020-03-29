import React, {useState}from 'react';
import './styles.css';
import {FiArrowLeft} from 'react-icons/fi'
import './styles.css';
import {Link, useHistory} from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function Register(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  
  const history = useHistory();
  async function handleRegister(e){
    e.preventDefault();
    const data = {name, email, whatsapp, city, uf}

    
    try{
      const response = await api.post('ongs', data);
      alert(`Seu ID de acesso: ${response.data.id}`);
      history.push('/');
    }catch(err){
      alert('Erro no cadastro')
    }
  }
  
  return(
    <div className="register-container">

      <div className="content">
        <section className="register">
          <img src={logoImg} alt="Be the Hero"/>
          <h1> Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrar os casos da sua ONG.</p>

          <Link to="/" className="register-link">
              <FiArrowLeft size={18} color="#DF2041"/>
            Voltar para o logon
            </Link>
        </section>
        
        
        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da Ong"
            type="text"
            value={name}
            required
            onChange={e=>setName(e.target.value)}
          />
          <input
            placeholder="E-mail"
            type="email"
            value={email}
            required
            onChange={e=>setEmail(e.target.value)}
          />
          <input
            placeholder="Whatsapp 99-99999-9999"
            type="tel"
            pattern="^\d{11}$"
            value={whatsapp}
            required
            onChange={e=>setWhatsapp(e.target.value)}
          />

          <div className="city">
            <input
              placeholder="Cidade"
              type="text"
              value={city}
              onChange={e=>setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              style={{width: 70}}
              value={uf}
              required
              pattern="[a-zA]{2}$"
              onChange={e=>setUf(e.target.value)}
            />
          </div>
          <button type="submit" className="button">Cadastrar</button>
        </form>

      </div>
    
    </div>
  );
}
