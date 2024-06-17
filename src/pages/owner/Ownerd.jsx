import React from 'react';
import Header from './components/Header';
import Maind from './components/Maind'
import Footer from './components/Footer';
import Cadastro from './components/Cadastro'
import { Container } from '@mui/material';
import Excluir from './components/Excluir';
import Integrantes from './components/Integrantes';
function Ownerd() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Container style={{ flexGrow: 1 }}>
        <Header />
        <Maind />
   <Excluir/>
   <Integrantes/>
      </Container>
      <Footer style={{ marginTop: 'auto' }} />
    </div>
  );
}

export default Ownerd;
