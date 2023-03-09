import React from 'react';


export default function ResumeCard(props){
    const items = props.items;
    return(
        <div className="col-md-6 resumeHolders">
        <div><h5>{props.subtitle}</h5>
  <h6>{props.year}</h6>
  <ul>
  {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
  </ul>
  </div>
      </div>
    );
}