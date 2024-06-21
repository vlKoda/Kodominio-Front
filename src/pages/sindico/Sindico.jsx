import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Ocor from './components/Ocor';
import { Container } from '@mui/material';
import Main1 from './components/Main1';
import Main2 from './components/Main2';
function Sindico() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Container style={{ flexGrow: 1 }}>
        <Header />
        <Main1 />
        <Ocor />
        <Main2 />
        <Ocor />
        <Main />
      </Container>
      <Ocor />
      <Footer style={{ marginTop: 'auto' }} />
    </div>
  );
}

export default Sindico;
