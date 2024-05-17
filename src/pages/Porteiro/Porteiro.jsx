import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Ocor from './components/Ocor';
import { Container } from '@mui/material';

function Porteiro() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Container style={{ flexGrow: 1 }}>
        <Header />
        <Main />
        <Ocor />
      </Container>
      <Footer style={{ marginTop: 'auto' }} />
    </div>
  );
}

export default Porteiro;
