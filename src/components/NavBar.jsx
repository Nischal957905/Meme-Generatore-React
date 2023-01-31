import React from 'react';

export default function NavBarContent(){

    const navVar =(
        <nav className='navBar'>
            <img src='troll-face.png' alt='troll-face' className='meme-logo'/>
            <h2 className='meme-webtitle'>Meme Generator</h2>
            <h4 className='meme-pagetitle'>React Course - Project 3</h4>
        </nav>
    )

    return navVar;
}