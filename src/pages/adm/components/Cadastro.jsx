import React from 'react';
import { Box } from '@mui/material';

function Cadastro() {
  return (
    <Box 
      display="flex" 
      flexDirection={{ xs: 'column', sm: 'column', md: 'row' }} // Alinhe verticalmente em telas pequenas (sm)
      justifyContent={{ xs: 'center', sm: 'center', md: 'center' }} // Centralize horizontalmente
      alignItems="center" // Centralize verticalmente
      marginTop={{ xs: '30px', sm: '30px', md: '70px' }} // Adicione margem superior apenas em xs e md
    > 
      <button 
        style={{ 
          background: '#e1e1e1', 
          padding: '70px 100px', 
          marginRight:'10px', // Margem à direita para separar os botões
          marginLeft: '10px', // Margem à esquerda para separar os botões
          borderRadius: '10px', 
          marginBottom: '30px', // Margem inferior comum
          border: 'none',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s, box-shadow 0.3s', 
          cursor: 'pointer',
          fontFamily: "'Poppins', sans-serif",
        }}
        // Adicionando o estilo de hover usando a pseudo-classe CSS :hover
        // para o botão 1
        onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0px 12px 20px rgba(0, 0, 0, 0.2)'}
        onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 0.1)'}
      >
        Cadastrar funcionário
      </button>
      
      <button 
        style={{ 
          background: '#e1e1e1', 
          padding: '70px 100px', 
       
          borderRadius: '10px', 
          marginBottom: '30px', // Margem inferior comum
          border: 'none',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s, box-shadow 0.3s', 
          cursor: 'pointer' ,
          fontFamily: "'Poppins', sans-serif",
        }}
        // Adicionando o estilo de hover usando a pseudo-classe CSS :hover
        // para o botão 2
        onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0px 12px 20px rgba(0, 0, 0, 0.2)'}
        onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 0.1)'}
      >
        Cadastrar morador
      </button>
    </Box>
  );
}

export default Cadastro;
