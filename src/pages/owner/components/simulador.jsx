import React from "react";
import { Box, Card, CardContent, Typography, Button } from '@mui/material';

function Simulador() {
  // Exemplo de dados do funcionário
  const funcionarios = [
    { nome: "O velho", funcao: "Babaca que enche meu saco" },
    { nome: "joão marcelo! ", funcao: "amante do java" },
    { nome: "Guilherme Peniche homem do front aquele que tudo preve aquele que tudo faz", funcao: "Ser bonito" },
    { nome: "Yuri e Bel ", funcao: "Quando perguntamos tava jogando ROF2 e mandou sairmos e outro odeia raul beauty" }

  ];

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      flexWrap="wrap"
      marginTop={{ xs: '30px', sm: '30px', md: '70px' }}
    >
      {funcionarios.map((funcionario, index) => (
        <Card
          key={index}
          sx={{
            width: '200px',
            backgroundColor: '#e1e1e1',
            padding: '30px 40px',
            borderRadius: '10px',
            marginRight: '10px',
            marginLeft: '10px',
            marginBottom: '30px',
            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s, box-shadow 0.3s',
            cursor: 'pointer',
            minWidth: '250px',
          }}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0px 12px 20px rgba(0, 0, 0, 0.2)'}
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 0.1)'}
        >
          <CardContent>
            <Typography variant="body1" fontSize="1.2rem" marginBottom="10px">
              Nome: {funcionario.nome}
            </Typography>
            <Typography variant="body1" fontSize="1.2rem" marginBottom="20px">
              Função: {funcionario.funcao}
            </Typography>
            <Box display="flex" justifyContent="center">
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  marginTop: '20px',
                  backgroundColor: '#ec3c21',
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
      ))}
    </Box>
  );
}

export default Simulador;
