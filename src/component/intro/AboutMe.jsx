import React from 'react';

export default function AboutMe(){

    return (
 <div className="container">
     <div className="text-center sectionHeadings">
     <p className='sectionHeadingstext'>About Me</p>
     <h2>Find Out More</h2>
     </div>
  <div className="row">
    <div className="col-md-8">
    <h2>Hi, I'm <span className='boldState'>Parneet Singh</span></h2>
     <p>I've been employed to develop user-friendly and effective internet applications. Competent at all levels of programming for Frontend Development, Backend, and database development. Very skilled at managing project timelines and collaborating with cross-functional teams to provide exceptional results. Possess a strong commitment to testing best practices and code quality. I'm searching for a challenging job where I can combine my technical know-how and creative problem-solving skills to deliver excellent user experiences. Capable of picking up new technologies and programming languages.</p>
    </div>
    <div className="col-md-4 text-center">
     <h1 className='experienceYear'><p className='experienceYearNum'>3</p></h1>
     <p>Years of <span className='boldState'>Experiance</span></p>
    </div>
  </div>
  <div className="container details">
  <div className="row">
    <div className="col">
    <p className='subheadings'>Email</p>
    <p className='subheadingstext'><a href='mailto:singhmallhi@outlook.com'>Singhmallhi@outlook.com</a></p>
    </div>
    <div class="col">
    <p className='subheadings'>Residence</p>
    <p className='subheadingstext'>Germany</p>
    </div>
    <div class="col">
    <p className='subheadings'>Nationality</p>
    <p className='subheadingstext'>Indian</p>
    </div>
    <div class="col">
    <p className='subheadings'>Age</p>
    <p className='subheadingstext'>30</p>
    </div>
  </div>
</div>
</div>
    );
}