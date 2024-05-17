import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import TextField from '@mui/material/TextField';

function Ocor() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '30px',
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Escreva sua ocorrência"
        variant="outlined"
        fullWidth // Para tornar o TextField largo
        multiline // Para permitir múltiplas linhas
        rows={8} // Definindo o número de linhas
        sx={{ backgroundColor: '#e1e1e1', width: '60%', borderRadius: '5px' }} // Definindo a cor de fundo e ajustando o width
      />
      <Button 
        variant="contained" 
        sx={{ mt: 2, background: '#e1e1e1', color: 'black', '&:hover': { background: '#e1e1e1' } }} // Adicionando efeito de hover para manter a cor de fundo
      >
        Enviar
      </Button>
    </Box>
  );
}

export default Ocor;
