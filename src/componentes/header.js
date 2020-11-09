import React from 'react';
import './header.css';
import leologo from '../imagens/leologo.png';

export default function Header(){
    
    return(
        <header>
            
            <div className="header--logo">
            <a href="/">
                <img className="logo--flix" src="https://fontmeme.com/permalink/201109/efac7dd57d3d2e1173ab9377331d676d.png" alt="netflix-font" border="0"/>
            </a>
            </div>

            <div className="usuario--logo">
                <a href="/">
                    <img src={leologo}/>
                </a>
            </div>
             
        </header>
          
        
    )
}