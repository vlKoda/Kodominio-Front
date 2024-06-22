import React from 'react';
import { Box, Typography, Button, decomposeColor } from '@mui/material';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import config from '../../../config';

function Ocor() {

  const token = localStorage.getItem('token');
  const decodedToken = jwtDecode(token);
  const [data, setData] = useState({});

  const id_usuario = decodedToken.id;
  const id_condominio = decodedToken.condominio;

  const [bocorrencia, setBocorrencia] = useState('');
  const status = "Pendente";
  const prioridade = "Pendente"
  const aprovacao = "Pendente"
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (bocorrencia === "") {
      setErrorMessage('A ocorrencia não pode ser vazia');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
      return;
    }
    else {
      try {

        const response = await axios.post(config.apiUrl + '/ocorrencia/inserir',
          { bocorrencia, status, prioridade, aprovacao, usuario: {id: id_usuario}, condominio: {id: id_condominio}},
          { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` } }
        );

        // mensagem de sucesso
        setSuccessMessage('Ocorrência criada com sucesso!');
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);

        // limpa campos
        setBocorrencia('');

      } catch (error) {
        console.error('Registration failed', error);
        // mensagem de erro
        setErrorMessage('Falha na criação da ocorrência. Por favor, tente novamente.');
        setTimeout(() => {
          setErrorMessage('');
        }, 3000);
      }
    };
  }
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
      onSubmit={handleSubmit}  
    >
      <TextField
        value={bocorrencia}
        onChange={(e) => setBocorrencia(e.target.value)}
        id="outlined-basic"
        label="Escreva sua ocorrência"
        variant="outlined"
        fullWidth // Para tornar o TextField largo
        multiline // Para permitir múltiplas linhas
        rows={8} // Definindo o número de linhas
        sx={{ backgroundColor: '#e1e1e1', width: '60%', borderRadius: '5px' }} // Definindo a cor de fundo e ajustando o width
      />
      <Button
        type='submit'
        variant="contained"
        sx={{ mt: 2, background: '#e1e1e1', color: 'black', '&:hover': { background: '#e1e1e1' } }} // Adicionando efeito de hover para manter a cor de fundo
      >
        Enviar
      </Button>
      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
    </Box>
  );
}

export default Ocor;
