import React from 'react';

export default function Footer(){

    return (
        <footer>
  <div className="container">
  <div className="text-center sectionHeadingsfooter">
     <p className='sectionHeadingstext'>Contact</p>
     <h2>Let's get in touch</h2>
     </div>
  <div className="row">
    <div className="col">
    <p className='subheadings'>Email</p>
    <p className='subheadingstext'><a href='mailto:singhmallhi@outlook.com'>Singhmallhi@outlook.com</a></p>
    </div>
    <div className="col">
    <p className='subheadings'>Looking For</p>
    <p className='subheadingstext'>Full-Time Contract</p>
    </div>
    <div className="col">
    <p className='subheadings'>Freelance</p>
    <p className='subheadingstext'>Not Available</p>
    </div>
    <div className="col">
    <p className='subheadings'>Hobbies</p>
    <p className='subheadingstext'>Photography and Traveling</p>
    </div>
  </div>
</div>
        </footer>
    );

}