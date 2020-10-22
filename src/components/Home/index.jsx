import React from 'react';
import Header from '../shared/Header';
import { Button } from 'react-bootstrap';
import './style.css';

// You need to import your shared header...

const Home = () => {
  return (
    <>
    <Header title="With Great Power Comes Great Responsibility"/>
      {/* You need to use your shared header component... */}
    <Button class="demo" href = "/About"> About </Button>
      {/* You need a link to your about page as a call to action */}
    </>
  );
}
 
export default Home;