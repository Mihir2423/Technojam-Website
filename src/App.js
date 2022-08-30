import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { ChakraProvider } from '@chakra-ui/react';
import Team from './components/Team';
import Alumni from './components/Alumni';
import Footer from './components/Footer';


function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Hero />
      <Team />
      <Alumni />
      <Footer />
      
    </ChakraProvider>
  );
}

export default App;
