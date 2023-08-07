import React, { useState, useEffect } from 'react';
import { faMessage, faEnvelope,faPhone,faUsers,faHandsBubbles } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Chat : React.FC = () =>{
const [isHovering, setIsHovering] = useState<boolean>(false)

const handleHover = () =>{
    setIsHovering(true)
}

const handleHoverFalse = () =>{
    setIsHovering(false)
}
    return(
        <div onMouseEnter={handleHover}
        onMouseLeave={handleHoverFalse}
        style={{ position: 'relative', display: 'inline-block' }}>
            <FontAwesomeIcon icon={faMessage} />

            {isHovering && (
        <div className="hover-icons">
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faHandsBubbles} /> WhatsApp
          </a>
          <a href="tel:1234567890">
            <FontAwesomeIcon icon={faPhone} /> Call
          </a>
          <a href="mailto:example@example.com">
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </a>
          <a href="/contact">
            <FontAwesomeIcon icon={faUsers} /> Contact
          </a>
        </div>
      )}

        </div>
    )
}

export default Chat