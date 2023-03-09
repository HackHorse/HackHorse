import React from 'react';


export default function CircularButton(props){

    function changeColor(){
        return props.changeBackground();
    }


    return (
        <button onClick={changeColor} className='circularBtn'></button>
    );
}