import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import { ChakraProvider } from '@chakra-ui/react';

import 'swiper/css';

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Hero />
      <Carousel />
    </ChakraProvider>
  );
}

export default App;
