import React from 'react';
import ResumeCard from '../resume/ResumeCard';
import resumedata from "../../Data/Resumedata";
import educationData from '../../Data/EducationData';
import skilldataleft from '../../Data/Skilldataleft';
import skilldataright from '../../Data/Skilldataright';
import Skillslider from '../skills/Skillslider';
import Button from '../button/Button';

export default function Resume(){
    return (
        <div className="container">
        <div className="text-center sectionHeadingsresume">
     <p className='sectionHeadingstext'>Resume</p>
     <h2>An overview of My Resume</h2>
     </div>
  <div className="row">
  <h3 className='resumesubheading'>Work Experience</h3>
 {resumedata.map(item=>{
    return <ResumeCard subtitle={item.subtitle} year={item.year} items={item.list}/>
 })}
  </div>
  <div className="row">
  <h3 className='resumesubheading'>Education</h3>
 {educationData.map(item=>{
    return <ResumeCard subtitle={item.subtitle} year={item.year} items={item.list}/>
 })}
  </div>
  <div className='container skillcontainer'>
  <h3 className='resumesubheading'>My Skills</h3>
  <div className="row">
  <div className="col">
{skilldataleft.map(skills=>{
    return <Skillslider skillname={skills.skillname} skillvalue={skills.skillvalue} />
})}
</div>
    <div className="col">
    {skilldataright.map(skills=>{
    return <Skillslider skillname={skills.skillname} skillvalue={skills.skillvalue} />
})}
    </div>

  </div>
  <div className='downloadbtn'>
  <Button link='https://hackhorse.tech/doc/ParneetSinghResume.pdf' name='Download CV' download='ParneetSinghResume.pdf' target='_blank' />
  </div>
  </div>
</div>
    );
}