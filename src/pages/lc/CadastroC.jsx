import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import config from '../../config';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Piola
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const cargos = ['Porteiro', 'Morador', 'Síndico'];
const defaultTheme = createTheme();

export default function Cadastro() {

  const navigate = useNavigate();

  const handleClickSair = () => {
    navigate('/owner/cadastros')
  }

  const [cepStr, setCep] = useState('');
  const [nome, setNome] = useState('');
  const [rua, setRua] = useState('');
  const [numeroStr, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // const [errorMessage, setErrorMessage] = useState('');

  const cep = parseInt(cepStr, 10);
  const numero = parseInt(numeroStr, 10);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cep === "" || nome === "" || rua === "" || numero === "" || bairro === "" || cidade === "" || estado === "") {
      setErrorMessage('Todos os campos precisam ser preenchidos');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
      return;
    }
    else {
      try {

        const token = localStorage.getItem('token');

        const response = await axios.post(config.apiUrl + '/condominio/cadastrar',
          { cep, nome, rua, numero, bairro, cidade, estado },
          { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` } }
        );

        // mensagem de sucesso
        setSuccessMessage('Cadastro realizado com sucesso!');
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);

        // limpa campos
        setCep('');
        setNome('');
        setRua('');
        setNumero('');
        setBairro('');
        setCidade('');
        setEstado('');

      } catch (error) {
        console.error('Registration failed', error);
        // mensagem de erro
        setErrorMessage('Falha no cadastro. Por favor, tente novamente.');
        setTimeout(() => {
          setErrorMessage('');
        }, 3000);
      }
    };
  }


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ mb: 1, bgcolor: '#2c2c2c' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Cadastro de condominio
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="CEP"
                  name="CEP"
                  required
                  fullWidth
                  id="CEP"
                  label="CEP"
                  autoFocus
                  value={cepStr}
                  onChange={(e) => setCep(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="nomecond"
                  label="Nome do condominio"
                  name="Nome do condominio"
                  autoComplete="Nome do condomnínio"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Rua"
                  label="Rua"
                  name="Rua"
                  autoComplete="Rua"
                  value={rua}
                  onChange={(e) => setRua(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Número"
                  label="Número"
                  name="Número"
                  autoComplete="Número"
                  value={numeroStr}
                  onChange={(e) => setNumero(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Bairro"
                  label="Bairro"
                  name="Bairro"
                  autoComplete="Bairro"
                  value={bairro}
                  onChange={(e) => setBairro(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Cidade"
                  label="Cidade"
                  name="Cidade"
                  autoComplete="Cidade"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                />
              </Grid>
              <Grid item xs={24} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="Estadp"
                  label="Estado"
                  name="Estado"
                  autoComplete="Estado"
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}

                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: '#2c2c2c',
                color: '#ffffff',
                mt: 4,
                mb: 3,
                padding: 1.5,
                '&:hover': {
                  backgroundColor: '#2c2c2c',
                  transform: 'scale(1.01)',
                },
                '&:focus': {
                  backgroundColor: '#2c2c2c',
                  transform: 'scale(1.01)',
                }
              }}
            >
              Cadastrar
            </Button>

            <Button
              onClick={handleClickSair}
              type="button"
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: '#2c2c2c',
                color: '#ffffff',

                mb: 3,
                padding: 1.5,
                '&:hover': {
                  backgroundColor: '#2c2c2c',
                  transform: 'scale(1.01)',
                }
              }}
            >
              Voltar
            </Button>

            <Grid item>
              {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
              {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
            </Grid>
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  );
}