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
      {/** Card 1 */}
      <Card
        sx={{
          backgroundColor: '#e1e1e1', // Cor do Card
          padding: '30px 40px', // Reduz o padding
          borderRadius: '10px', // Mantém o border-radius
          marginRight: '50px', // Espaçamento entre cards
          marginLeft: '10px', // Espaçamento entre cards
          marginBottom: '30px', // Margem inferior
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Sombras leves
          transition: 'transform 0.3s, box-shadow 0.3s', // Transição suave
          cursor: 'pointer', // Define o cursor
        }}
        onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0px 12px 20px rgba(0, 0, 0, 0.2)'}
        onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 0.1)'}
      >
        <CardContent  >
          <Typography variant="body1" fontSize="1.2rem" marginBottom="10px" fontFamily="'Poppins', sans-serif" >
            Nome: Fulano de Tal
          </Typography>
          <Typography variant="body1" fontSize="1.2rem" marginBottom="20px" fontFamily="'Poppins', sans-serif">
            Função: seila
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#e1e1e1', // Mesma cor do Card
              borderRadius: '10px', // Mesmo border-radius
              color: 'black', // Cor do texto
              transition: 'transform 0.3s', // Transição suave
              ':hover': {
                transform: 'scale(1.1)', // Efeito de hover para aumentar tamanho
                backgroundColor: '#e1e1e1', // Garante que a cor não mude no hover
              },
            }}
          >
            Excluir
          </Button>
        </CardContent>
      </Card>

      {/** Card 2 */}
      <Card
        sx={{
          backgroundColor: '#e1e1e1', // Cor do Card
          padding: '30px 40px', // Reduz o padding
          borderRadius: '10px', // Mesmo border-radius
          marginBottom: '30px', // Margem inferior
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Sombras leves
          transition: 'transform 0.3s, box-shadow 0.3s', // Transição suave
          cursor: 'pointer', // Define o cursor
        }}
        onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0px 12px 20px rgba(0, 0, 0, 0.2)'}
        onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 0.1)'}
      >
        <CardContent>
          <Typography variant="body1" fontSize="1.2rem" marginBottom="10px" fontFamily="'Poppins', sans-serif">
            Nome: Ciclano de Tal
          </Typography>
          <Typography variant="body1" fontSize="1.2rem" marginBottom="20px" fontFamily="'Poppins', sans-serif">
            Função: seila
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#e1e1e1', // Mesma cor do Card
              borderRadius: '10px', // Mesmo border-radius
              color: 'black', // Cor do texto
              transition: 'transform 0.3s', // Transição suave
              ':hover': {
                transform: 'scale(1.1)', // Efeito de hover para aumentar tamanho
                backgroundColor: '#e1e1e1', // Garante que a cor não mude no hover
              },
            }}
          >
            Excluir
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Integrantes;
