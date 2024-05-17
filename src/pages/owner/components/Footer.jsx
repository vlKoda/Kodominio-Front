import React from 'react';
import { Typography, Link, Box } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        width: '70%',
        backgroundColor: '#e1e1e1',
        color: 'black',
        padding: '15px',
        textAlign: 'center',
        boxShadow: '0px -4px 10px rgba(0, 0, 0, 0.3)',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column', // Alinhar os itens verticalmente
        alignItems: 'center', // Centralizar verticalmente
        justifyContent: 'center', // Centralizar horizontalmente
        margin: 'auto', // Centralizar horizontalmente
      }}
    >
      <Typography
        variant="body2"
        sx={{
          margin: '10px',
          fontFamily: "'Poppins', sans-serif",
          color: 'black',
        }}
      >
        Para entrar em contato, envie um e-mail para{' '}
        <Link href="mailto:piolasproject@gmail.com">piolasproject@gmail.com</Link>.
      </Typography>
    </Box>
  );
}

export default Footer;
