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


const defaultTheme = createTheme();

export default function Newsenha() {
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
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ mt: 5, mb: 2, bgcolor: '#2c2c2c' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Redefinir Senha
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
          fullWidth
          name="Senha"
          label="Senha"
          type="password"
          id="password"
          autoComplete="new-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Senha"
              label="Confirmar senha"
              type="password"
              id="password"
              autoComplete="new-password"
            />
          
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
Redefinir senha
</Button>

            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}