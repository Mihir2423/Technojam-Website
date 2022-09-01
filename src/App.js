import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';


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
      <Footer />
    </div>
  );
}

export default App;
