import React, {useState} from "react";
import Header from '../header/Header';
import IntroCard from "../home/IntroCard";
import data from "../../Data/Data";
import AboutMe from '../intro/AboutMe';
import Services from '../services/Services';
import Resume from '../resume/Resume';
import Footer from '../footer/Footer';
import CircularButton from "../button/CircularButton";

const stylecolor1 = {
    background: "linear-gradient(90deg, rgba(44,105,117,1) 3%, rgba(104,178,160,1) 52%, rgba(205,224,201,1) 81%)"
}

const stylecolor2 = {
    background: "linear-gradient(90deg, rgba(182,180,194,1) 3%, rgba(201,187,200,1) 42%, rgba(243,219,207,1) 81%)"
}

export default function App(){
    const [background, setBackground] = new useState(true);

    function backgroundColor(){
        setBackground(false);
    }


return (
    <>
    <section id="introCard" style={background ? stylecolor1 : stylecolor2}>
    {data.map((plantData)=>{
       return <IntroCard image={plantData.image} description={plantData.description}/>
    })}
    <CircularButton changeBackground={backgroundColor} />
    </section>
    <Header style={background ? stylecolor1 : stylecolor2} />
    <section id='aboutMe' className='about' style={background ? stylecolor1 : stylecolor2}>
    <AboutMe />
    </section>
    <section id='services' className='serivce' style={background ? stylecolor1 : stylecolor2}>
    <Services />
    </section>
    <section id='resume' className='resume' style={background ? stylecolor1 : stylecolor2}>
    <Resume />
    </section>
    <section id='contact' className='footersection' style={background ? stylecolor1 : stylecolor2}>
    <Footer />
    </section>
    </>

);
}