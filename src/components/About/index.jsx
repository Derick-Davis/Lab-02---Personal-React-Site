import React from 'react';
import Header from '../shared/Header';
import './style.css';


const About = () => {
  return (
    <>
       <Header title = "Know me"/>
      {/* You need to use your shared header component... */}
      {/* You need a paragraph describing a fun fact about you */}
      <p>
        I'm a huge Marvel Fan, I love every Marvel Heroes, especially Spiderman. I love every MCU (Marvel Cinematic Universe) movies. I have watched every marvel movie in the big screen. Not only marvel movies, I love every comic book adaptations including DC. I am proud to be a Marvel Fan.
      </p>
    </>
  );
}
export default About;