import React from 'react';
import Header from './components/Header';
import Maino from './components/Maino';
import Footer from './components/Footer';
import Perfil from './components/Perfil'
import { Container } from '@mui/material';

function Moradoro() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Container style={{ flexGrow: 1 }}>
        <Header />
        <Maino />
    
      </Container>
      <Footer style={{ marginTop: 'auto' }} />
    </div>
  );
}

export default Moradoro