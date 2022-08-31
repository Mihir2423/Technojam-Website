import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import About from './components/About';
import { ChakraProvider } from '@chakra-ui/react';
import Team from './components/Team';
import Alumni from './components/Alumni';
import Footer from './components/Footer';

// import ParticleBackground from './ParticleBackground';

import 'swiper/css';

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Hero />
      <Carousel />
      {/* <About/> */}
      <Team/>
      <Alumni/>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
