import React from 'react';
import images from './assets/spider-man.jpg'
import Navbar from './Navbar';

function Home() {
  return (
    <>
     <Navbar title="NHD"/>
    <div>
        <div className='Home-Container'>
            <img src={images} alt="" />
        </div>
    </div>
    </>
  )
}

export default Home