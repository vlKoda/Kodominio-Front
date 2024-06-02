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
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const jsonObject = {
      cep : data.get("CEP"),
      nome : data.get("Nome do condominio"),
      rua : data.get("Rua"),
      numero : data.get("Número"),
      bairro : data.get("Bairro"), 
      cidade : data.get("Cidade"),
      estado : "Bahia"
    }
    console.log(JSON.stringify(jsonObject));


    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/condominio/cadastrar", false);
    xhr.setRequestHeader("Content-Type", "application/JSON")
    xhr.onload = function (e) {
      //location.reload()
    };

    xhr.send(jsonObject);
    if (xhr.status != 200) {
      // errorMsg.innerHTML = "Registro Inválido";
      // errorDiv.style.setProperty("display", "none");
      // setTimeout(() => {
        // errorDiv.style.setProperty("display", "block");
      // }, 500);
    } else {
      //location.href="../../InterfacesPiSchool-main/logins/loginA/index.html"
    }
  

//     try {
//       const response = fetch('http://localhost:8080/condominio/cadastrar', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         credentials:'include',

//         body: JSON.stringify(jsonObject),
//       });

//       if (response.ok) {
//         const result = response.json();
//         console.log('Funcionário cadastrado com sucesso:', result);
//       } else {
//         console.error('Erro ao cadastrar funcionário:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Erro ao fazer a requisição:', error);
//     }
   };

  
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 7,
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
      backgroundColor: 'transparent',
    }
  }}
>
Cadastrar
</Button>
           
          </Box>
        </Box>
     
      </Container>
    </ThemeProvider>
  );
}