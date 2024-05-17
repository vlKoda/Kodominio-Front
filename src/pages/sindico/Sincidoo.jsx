import React from 'react';
import Header from './components/Header';
import Maino from './components/Maino';
import Cadastro from '../sindico/components/Cadastro';
import Footer from './components/Footer';

import { Container } from '@mui/material';

function Sindicoo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Container style={{ flexGrow: 1 }}>
        <Header />
        <Maino />
        <Cadastro />
      </Container>
      <Footer style={{ marginTop: 'auto' }} />
    </div>
  );
}

export default Sindicoo;
