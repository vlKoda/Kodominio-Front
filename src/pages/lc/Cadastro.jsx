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
const cargos = ['Porteiro', 'Síndico'];
const defaultTheme = createTheme();

export default function Cadastro() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
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
        />
      </Grid>
    
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="Login"
          label="Login"
          name="Login"
          autoComplete="Login"
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
        />
      </Grid>
      <Grid item xs={12}>
        <Select
          label="Cargo"
          id="Cargo"
          fullWidth
          defaultValue=""
          required
        >
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