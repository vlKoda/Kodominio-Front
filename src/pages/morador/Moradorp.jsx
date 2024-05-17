import React from 'react';
import Header from './components/Header';
import Mains from './components/Mains';
import Footer from './components/Footer';
import Perfil from './components/Perfil'
import { Container } from '@mui/material';

function Moradorp() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Container style={{ flexGrow: 1 }}>
        <Header />
        <Mains />
        <Perfil />
      </Container>
      <Footer style={{ marginTop: 'auto' }} />
    </div>
  );
}

export default Moradorp;