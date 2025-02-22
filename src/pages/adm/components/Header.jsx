import React from 'react';
import { Container, AppBar, Toolbar, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleIcon from '@mui/icons-material/People';
import { useNavigate } from 'react-router-dom';

const StyledButton = styled(Button)({
  marginRight: '16px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
  },
});
function Header() {
  const navigate = useNavigate();

  const handleClickCadastro = () => {
    navigate('/adm/cadastros')
  }
  const handleClickIntegrantes = () => {
    navigate('/adm/integrantes')
  }
  const handleClickSair = () => {
    if (window.confirm('Você realmente deseja sair?')) {
      navigate('/');
    }
  }

  return (
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
      <AppBar position="static" sx={{ bgcolor: '#e1e1e1', borderRadius: '10px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', width: '100%', fontFamily: "'Poppins', sans-serif" }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={6} sm={6} md={8}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                <StyledButton onClick={handleClickSair} color="inherit" sx={{ color: 'black', marginRight: '150px', display: { xs: 'none', sm: 'none', md: 'block' }, marginLeft: '40px' }}>Sair</StyledButton>
                <ExitToAppIcon sx={{
                  color: 'black',
                  marginRight: '35px',

                  display: { xs: 'block', sm: 'block', md: 'none' },
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.9)',
                    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.3)',
                  },
                }} />
                <StyledButton onClick={handleClickIntegrantes} color="inherit" sx={{ color: 'black', display: { xs: 'none', sm: 'none', md: 'block' }, marginRight: '150px' }}>Integrantes</StyledButton>

                <PeopleIcon sx={{
                  color: 'black',
                  marginRight: '35px',
                  display: { xs: 'block', sm: 'block', md: 'none' },
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.9)',

                    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.3)',
                  },
                }} />

                <StyledButton onClick={handleClickCadastro} color="inherit" sx={{ color: 'black', display: { xs: 'none', sm: 'none', md: 'block' } }}>Cadastros</StyledButton>
                <AssignmentIcon sx={{
                  color: 'black',
                  display: { xs: 'block', sm: 'block', md: 'none' },
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.9)',
                    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.3)',

                  },
                }} />
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default Header;
