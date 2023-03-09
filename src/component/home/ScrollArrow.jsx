import React from 'react';


export default function ScrollArrow(){
return (
    <a href="#aboutMe" className='scrollarrow'>
  <span className="visually-hidden">Scroll down you dafty</span>
  <svg className="circle" xmlns="http://www.w3.org/2000/svg">
    <g>
      <ellipse className="background" ry="60" rx="60" cy="62.5" cx="62.5" stroke-width="1"/>
      <ellipse className="foreground" ry="60" rx="60" cy="62.5" cx="62.5" stroke-width="2"/>
    </g>
  </svg>
</a>
);
}