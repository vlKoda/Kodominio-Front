import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Ocor1 from './components/Ocor1';
import Ocor2 from './components/Ocor.2';
import Ocor3 from './components/Ocor3';
import { Container } from '@mui/material';
import Main1 from './components/Main1';
import Main2 from './components/Main2';

function Sindico() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Container style={{ flexGrow: 1 }}>
        <Header />
        <Main1 />
        <Ocor1 />
        <Main2 />
        <Ocor2 />
        <Main />
        <Ocor3 />
      </Container>

      <Footer style={{ marginTop: 'auto' }} />
    </div>
  );
}

export default Sindico;
