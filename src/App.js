import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import { ChakraProvider,Wrap } from '@chakra-ui/react';


import Events from './components/Events';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Team from './components/Team';
import Alumni from './components/Alumni';
import Footer from './components/Footer';

import 'swiper/css';

function App() {
  return (
    <div className='wrapper'>
      <Wrap>
        <ChakraProvider>
          <ChakraProvider>
            <Navbar />
          </ChakraProvider>
          <ChakraProvider>
            <Hero />
            <Events/>
            <Team/>
            <Alumni/>
          </ChakraProvider>
        </ChakraProvider>
      </Wrap>
      <Footer/>
    </div>
  );
}

export default App;
