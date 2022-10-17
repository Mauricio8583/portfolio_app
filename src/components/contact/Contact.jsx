import React, { useState } from 'react'
import './contact.scss'
import emailjs from '@emailjs/browser'
import { public_key, service_key, template_key } from '../../../keys';

const Contact = () => {

  const [message, setMessage] = useState(false);
  const [messageContent, setMessageContent] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);

    try{
      emailjs.send(service_key, template_key , {from_name: name, message: messageContent}, public_key);
      console.log("Success!!");
    }catch(err){
      console.log(err);
    }
    
  }

  

  return (
    <div className='contact' id='contact'>
        <div className='left'>
          <img src='../../images/shake.png' alt='' />
        </div>
        <div className='right'>
          <h2>Contato</h2>
          <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Nome' onChange={(e) => setName(e.target.value) } />
            <textarea placeholder='Escreva sua Mensagem' onChange={(e) => setMessageContent(e.target.value) }></textarea>
            <button type='submit'>Enviar</button>
            {message && <span>Obrigado! Irei responder o mais breve possível</span>}
           </form>
        </div>
    </div>
  )
}

export default Contact