import React from 'react';
import Header from './components/Header';
import Maini from './components/Maini';
import Integrantes from '../sindico/components/Integrantes';
import Footer from './components/Footer';

import { Container } from '@mui/material';

function Sindicoi() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Container style={{ flexGrow: 1 }}>
        <Header />
        <Maini />
        <Integrantes />
      </Container>
      <Footer style={{ marginTop: 'auto' }} />
    </div>
  );
}

export default Sindicoi;
