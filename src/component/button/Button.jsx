import React from 'react';


export default function Button(props){

    return (
        <a href={props.link} className='btn' download={props.download} target={props.target}>{props.name}</a>
    );
}