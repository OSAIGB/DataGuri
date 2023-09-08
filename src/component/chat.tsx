import React, { useEffect, useState } from 'react';
import { faMessage, faEnvelope, faPhone, faUsers, faHandsBubbles } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './chat.css';
import Whatsapp from './whatsapp.svg'
import ChatWithUs from './chatWithUS.svg'

const Chat: React.FC = () => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleHover = (e:React.MouseEvent) => {
    e.stopPropagation()
    setIsHovering(prevState => !prevState); 
  };
useEffect (() =>{
  const handleWindowClick = () =>{
    setIsHovering(false)
  }
  window.addEventListener('click', handleWindowClick)
  return() =>{
    window.removeEventListener('click', handleWindowClick)
  }
},[])


  return (
    <div
    onClick={handleHover}
      style={{ position: 'fixed', bottom: '62px', right: '20px', zIndex: 999 }} // Adjust position and other styles as needed
      className='chat'
    >
      <div className="icon-chat">  <img src={ChatWithUs} alt="chat with us" className='chatWithUs' />
     <span className="chatWithUsText">Chat with us</span>
    </div>
    <div>{isHovering && (
          <div className="hover-icons">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <img src={Whatsapp} alt="" className='whatsapp'/>
            </a>
            <a href="tel:1234567890">
              <FontAwesomeIcon icon={faPhone} /> 
            </a>
            <a href="mailto:example@example.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="/contact">
              <FontAwesomeIcon icon={faUsers} /> 
            </a>
          </div>
        )}</div>
      
      </div>
    
  );
};

export default Chat;
