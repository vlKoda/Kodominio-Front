import React from 'react';
import Header from './components/Header';
import Mainc from './components/Mainc'
import Footer from './components/Footer';
import Cadastro from './components/Cadastro'
import { Container } from '@mui/material';

function Adm() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Container style={{ flexGrow: 1 }}>
        <Header />
        <Mainc />
        <Cadastro/>
      </Container>
      <Footer style={{ marginTop: 'auto' }} />
    </div>
  );
}

export default Adm;
