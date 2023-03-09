import React from 'react';
import ServiceCard from './ServiceCard';
import Servicedata from '../../Data/Servicedata';

export default function Services(){

    return (
<div className="container serviceContainer">
<div className="text-center sectionHeadings">
     <p className='sectionHeadingstext'>What I Do?</p>
     <h2>How I can help your next project</h2>
     </div>
  <div className="row cardrow">
  {Servicedata.map(item=>{
    return   <div className="col-lg-4 cardcol"><ServiceCard title={item.title} text={item.text} image={item.image} alt={item.alt} /></div>;
  })}
  </div>
</div>
    );
}