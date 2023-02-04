import React from 'react'
import './app.css';

import {Footer, Blog, Possibility, Feature, WhatsGpt, Header} from './containers';
import {Cta, Brand, Nav } from './components';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Nav />
        <Header />
       </div>
        <Brand />
        <WhatsGpt />
        <Feature />
        <Possibility />
        <Cta />
        <Blog />
        <Footer/>
        
    </div>
  )
}

export default App
