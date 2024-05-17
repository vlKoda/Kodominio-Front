import React from 'react';
import Header from './components/Header';
import Mains from './components/Mains';
import Footer from './components/Footer';
import Perfil from '../Porteiro/components/Perfil'
import { Container } from '@mui/material';

function Porteirop() {
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

export default Porteirop;