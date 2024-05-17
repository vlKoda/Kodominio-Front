import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Cards from './components/Cards';
import Footer from './components/Footer';


import { Container } from '@mui/material';

function Owner() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Container style={{ flexGrow: 1 }}>
        <Header />
        <Main />
        <Cards/>
      </Container>
      <Footer style={{ marginTop: 'auto' }} />
    </div>
  );
}

export default Owner;
