import React from 'react';
import Header from './components/Header';
import Maini from './components/Maini'
import Footer from './components/Footer';
import Integrantes from './components/Integrantes';
import { Container } from '@mui/material';

function Admi() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Container style={{ flexGrow: 1 }}>
        <Header />
        <Maini />
        <Integrantes/>
      </Container>
      <Footer style={{ marginTop: 'auto' }} />
    </div>
  );
}

export default Admi;
