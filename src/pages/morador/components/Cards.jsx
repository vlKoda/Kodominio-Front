import React from "react";
import { Box, Card, CardContent, Typography, Button } from '@mui/material';

function Cards() {

  const funcionarios = [
    {ocorrencia: "Rfspamfpsamsopmfasfmoasmfoasmfopasmfopasmfopasmfopasmfopasmfasmfopasmfasofmsoamfsopfmsmfasopmfsaofmofmasmfaopmfasm" },
    {ocorrencia: "joão" },
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
            width: '300px',
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
            <Typography
              variant="body1"
              fontSize="1.2rem"
              marginBottom="10px"
              sx={{
                wordWrap: 'break-word',
                wordBreak: 'break-all',
                whiteSpace: 'normal'
              }}
            >
              Ocorrencia: {funcionario.ocorrencia}
            </Typography>

            <Typography variant="body1" fontSize="1.2rem" marginBottom="10px">
              Status:
            </Typography>
            <Typography variant="body1" fontSize="1.2rem" marginBottom="10px">
              Data:
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

export default Cards;
