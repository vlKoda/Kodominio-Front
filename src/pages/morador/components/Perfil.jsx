import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';

const InfoBox = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column', // Permite empilhar o Card e o botão
        alignItems: 'center', // Centraliza horizontalmente
        paddingTop: '50px', // Espaço para o topo
        height: '350px', // Altura do Box
        width: '100%', // Preenche a largura total do Box
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Card
        sx={{
          backgroundColor: '#e1e1e1', // Cor de fundo do Card
          borderRadius: '10px', // Define o border-radius
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Adiciona a box-shadow
          width: {
            xs: '80%', // Para telas pequenas, reduz a largura
            sm: '70%', // Para telas médias, ajusta a largura
            md: '50%', // Para telas maiores, aumenta a largura
          }, 
          textAlign: 'left', // Alinha informações à esquerda
          height: '250px', // Altura do Card para acomodar conteúdo
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <CardContent
          sx={{
            display: 'flex', 
            flexDirection: 'column', // Certifica-se de que as informações sejam exibidas uma embaixo da outra
            justifyContent: 'center', // Centraliza verticalmente
          }}
        >
          <Typography variant="body1" fontFamily= "'Poppins', sans-serif" marginLeft="15px" fontSize="1.2rem" marginTop="20px" color="black">
            Email: Ovelho@otario.com
          </Typography>
          <Typography variant="body1" fontFamily= "'Poppins', sans-serif" marginLeft="15px" fontSize="1.2rem" marginTop="10px" color="black">
            Torre: Torre 71
          </Typography>
          <Typography variant="body1" fontFamily= "'Poppins', sans-serif" marginLeft="15px" fontSize="1.2rem" marginTop="10px" color="black">
            Senha: fraldinha
          </Typography>
          <Typography variant="body1" fontFamily= "'Poppins', sans-serif" marginLeft="15px" fontSize="1.2rem" marginTop="10px" color="black">
            Número de Apartamento: 69
          </Typography>
        </CardContent>
      </Card>
      <Button
        variant="contained" // Define o botão como preenchido
        sx={{
          backgroundColor: '#e1e1e1', // Mesma cor do Card
          borderRadius: '10px', // Mesmo border-radius
          width: '150px', // Largura do botão
          marginTop: '30px', // Espaço entre Card e botão
          fontFamily: "'Poppins', sans-serif",
          color: 'black', // Cor da fonte preta
          transition: 'transform 0.3s', // Tempo de transição para o hover
          ':hover': {
            transform: 'scale(1.1)', // Efeito de hover para aumentar tamanho
            backgroundColor: '#e1e1e1', // Garante que a cor não mude no hover
          },
        }}
      >
        Nova Senha
      </Button>
    </Box>
  );
};

export default InfoBox;
