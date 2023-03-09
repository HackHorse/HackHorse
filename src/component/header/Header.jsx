import React, { useState, useEffect } from "react";
import SocialIcons from '../icons/SocialIcons.jsx';

export default function Header(props){

    const [activeSection, setActiveSection] = useState(1);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);


      const handleScroll = () => {
        const scrollPosition = window.pageYOffset;
    
        // You can calculate the section positions and change the activeSection accordingly
        // For example:
        if (scrollPosition < 800) {
          setActiveSection(1);
        } else if (scrollPosition < 1600) {
          setActiveSection(2);
        } else if (scrollPosition < 2300){
          setActiveSection(3);
        }else if (scrollPosition < 3300){
            setActiveSection(4);
          }else{
            setActiveSection(5);
          }
      };

    return (
        <header className='sticky-top' >
  <nav className="navbar sticky-top bg-body-tertiary navbar-expand-lg" style={props.style}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Hack Horse</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className={activeSection === 1 ? "active" : "nav-item"}>
          <a className="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li className={activeSection === 2 ? "active" : "nav-item"}>
          <a className="nav-link" href="#aboutMe">About Me</a>
        </li>
        <li className={activeSection === 3 ? "active" : "nav-item"}>
          <a className="nav-link" href="#services">What I Do?</a>
        </li>
        <li className={activeSection === 4 ? "active" : "nav-item"}>
          <a className="nav-link" href="#resume">Resume</a>
        </li>
        <li className={activeSection === 5 ? "active" : "nav-item"}>
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
      <span className="navbar-text">
       <SocialIcons />
      </span>
    </div>
  </div>
</nav>
        </header>
    );

}