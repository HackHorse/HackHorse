import React from 'react';
import ScrollArrow from '../home/ScrollArrow.jsx';
import Button from '../button/Button';
import TypingAnimation from '../typinganimation/TypingAnimation';

export default function IntroCard(props){
return (
<div className='Intro'>
<div className="avatar">
    <img className="circular--square" src={props.image} alt='singh'/>
    <h2>{props.description}<TypingAnimation /></h2>
    <p>based in Hamburg, Germany</p>
<Button link='#aboutMe' name='About Me' />
<div className='scroll'><ScrollArrow /></div>
</div>
</div>

);
}