import React from 'react';
import Header from './components/Header';
import Maino from './components/Maino';
import Footer from './components/Footer';
import { Container } from '@mui/material';
import Cards from './components/Cards';

function Porteiroo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Container style={{ flexGrow: 1 }}>
        <Header />
        <Maino />
        <Cards/>
      </Container>
      <Footer style={{ marginTop: 'auto' }} />
    </div>
  );
}

export default Porteiroo