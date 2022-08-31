import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import { ChakraProvider } from '@chakra-ui/react';
import Team from './components/Team';
import Alumni from './components/Alumni';
import Footer from './components/Footer';

import 'swiper/css';

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Hero />
      <Team />
      <Alumni />
      <Footer />
      <Carousel />
    </ChakraProvider>
  );
}

export default App;
