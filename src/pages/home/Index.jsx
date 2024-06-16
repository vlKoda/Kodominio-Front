import React from 'react';
import Header from "./components/Header";
import { Container, Box } from '@mui/material';
import Main from "./components/Main";
import Footer from "./components/Footer";

function Index() {
  localStorage.removeItem('token');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#d9d9d9',
      }}
    >
      <Header />
      <Container component="main" sx={{ flex: 1, paddingTop: 2 }}>
        <Main />
      </Container>
      <Footer />
    </Box>
  );
}

export default Index;
