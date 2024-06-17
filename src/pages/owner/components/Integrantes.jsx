import React from 'react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';

function Integrantes() {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: 'column', sm: 'column', md: 'row' }} // Alinha verticalmente em telas pequenas
      justifyContent={{ xs: 'center', sm: 'center', md: 'center' }} // Centraliza horizontalmente
      alignItems="center" // Centraliza verticalmente
      marginTop={{ xs: '30px', sm: '30px', md: '70px' }} // Adiciona margem superior
    >
  
      <Card
        sx={{
          backgroundColor: '#e1e1e1', // Cor do Card
          padding: '30px 40px', // Reduz o padding
          borderRadius: '10px', // Mantém o border-radius
          marginRight: '10px', // Espaçamento entre cards
          marginLeft: '10px', // Espaçamento entre cards
          marginBottom: '30px', // Margem inferior
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Sombras leves
          transition: 'transform 0.3s, box-shadow 0.3s', // Transição suave
          cursor: 'pointer', // Define o cursor
        }}
        onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0px 12px 20px rgba(0, 0, 0, 0.2)'}
        onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 0.1)'}
      >
        <CardContent>
          <Typography variant="body1" fontSize="1.2rem" marginBottom="10px">
            Nome: Fulano de Tal
          </Typography>
          <Typography variant="body1" fontSize="1.2rem" marginBottom="20px">
            Função: seila
          </Typography>
          <Box display="flex" justifyContent="center">
          <Button
           variant="contained"
           color="secondary"
           sx={{
             marginTop: '20px',
             fontFamily: "'Poppins', sans-serif",  backgroundColor: '#ec3c21',  
             color: 'white',  
             '&:hover': {
               backgroundColor: '#6c140d',  
             },
           }}
  
         >
           Excluir
         </Button>
  
          </Box>
        </CardContent>
      </Card>

      <Card
        sx={{
          backgroundColor: '#e1e1e1', // Cor do Card
          padding: '30px 40px', // Reduz o padding
          borderRadius: '10px', // Mantém o border-radius
          marginRight: '10px', // Espaçamento entre cards
          marginLeft: '10px', // Espaçamento entre cards
          marginBottom: '30px', // Margem inferior
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Sombras leves
          transition: 'transform 0.3s, box-shadow 0.3s', // Transição suave
          cursor: 'pointer', // Define o cursor
        }}
        onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0px 12px 20px rgba(0, 0, 0, 0.2)'}
        onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 0.1)'}
      >
        <CardContent>
          <Typography variant="body1" fontSize="1.2rem" marginBottom="10px">
            Nome: Fulano de Tal
          </Typography>
          <Typography variant="body1" fontSize="1.2rem" marginBottom="20px">
            Função: seila
          </Typography>
          <Box display="flex" justifyContent="center">
          <Button
           variant="contained"
           color="secondary"
           sx={{
             marginTop: '20px',
             fontFamily: "'Poppins', sans-serif",  backgroundColor: '#ec3c21',  
             color: 'white',  
             '&:hover': {
               backgroundColor: '#6c140d',  
             },
           }}
  
         >
           Excluir
         </Button>
  
          </Box>
        </CardContent>
      </Card>
      
    </Box>
  );
}

export default Integrantes;
