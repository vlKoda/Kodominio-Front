import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { InputLabel } from '@mui/material';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import config from '../../config';
import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';


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
const cargos = ['Porteiro', 'Síndico'];
const defaultTheme = createTheme();

export default function Cadastro() {

  const navigate = useNavigate();

  const handleClickVoltar = () => {
    navigate('/adm/cadastros')
  }

  const token = localStorage.getItem('token')
  const decodedToken = jwtDecode(token);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [senha2, setSenha2] = useState('');
  const [roleInput, setRoleInput] = useState('');
  const [role, setRole] = useState('');
  const apartamento = null;
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const id_condominio = decodedToken.condominio;

  useEffect(() => {
    if (roleInput === "Síndico") {
      setRole("SINDICO");
    } else if (roleInput === "Porteiro") {
      setRole("PORTEIRO");
    }
  }, [roleInput]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (senha != senha2) {
      setErrorMessage('As senhas precisam coincidir, tente novamente');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);


      console.log("Nome: " + nome + " Email: " + email + " Telefone: " + telefone + " Senha: " + senha + " Senha2: " + senha2 + " Role: " + role + " Condominio: " + id_condominio + " Apartamento: " + apartamento);
      return;
    }
    if (nome === "" || email === "" || telefone === "" || role === "" || senha === "") {
      setErrorMessage('Todos os campos precisam ser preenchidos');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
      return;
    }
    else {
      try {

        const token = localStorage.getItem('token');

        const response = await axios.post(config.apiUrl + '/auth/register',
          { nome, email, senha, telefone, role, condominio: { id: id_condominio }, apartamento },
          { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` } }
        );

        // mensagem de sucesso
        setSuccessMessage('Cadastro realizado com sucesso!');
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);

        // limpa campos
        setNome('');
        setEmail('');
        setTelefone('');
        setSenha('');
        setSenha2('');
        setRoleInput('');

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
            Cadastro de funcionário
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="Nome"
                  required
                  fullWidth
                  id="firstName"
                  label="Nome"
                  autoFocus
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Telefone"
                  label="Telefone"
                  name="Telefone"
                  autoComplete="Telefone"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Senha"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Senha"
                  label="Confirmar senha"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={senha2}
                  onChange={(e) => setSenha2(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel>Cargo</InputLabel>
                <Select
                  label="Cargo"
                  id="Cargo"
                  fullWidth
                  defaultValue=""
                  required
                  value={roleInput}
                  onChange={(e) => setRoleInput(e.target.value)}
                >
                  <MenuItem value="" disabled>
                    Selecione o cargo
                  </MenuItem>
                  {cargos.map((cargo, index) => (
                    <MenuItem key={index} value={cargo}>
                      {cargo}
                    </MenuItem>
                  ))}
                </Select>
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
              onClick={handleClickVoltar}
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
            {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  );
}