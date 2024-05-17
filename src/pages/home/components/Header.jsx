import React from 'react';
import { Container, AppBar, Toolbar, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';
import LoginIcon from '@mui/icons-material/Login';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';

const StyledButton = styled(Button)({
  marginRight: '16px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
  },
});

function Header() {
  return (
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
      <AppBar position="static" sx={{ bgcolor: '#e1e1e1', borderRadius: '10px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', width: '100%' }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={6} sm={6} md={8}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              
                  <StyledButton color="inherit" sx={{ color: 'black', marginRight: '400px', display: { xs: 'none', sm: 'block' } }}>Login</StyledButton>
                  <LoginIcon sx={{
                    color: 'black',
                    marginRight: '120px',
                    display: { xs: 'block', sm: 'none' },
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.9)',
                      boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.3)',
                    },
                  }} />
             
              
                  <Button color="inherit" sx={{ color: 'black', display: { xs: 'none', sm: 'block' } }}>
                    Cadastro
                  </Button>
          
                <AssignmentIcon sx={{
                  color: 'black',
                  display: { xs: 'block', sm: 'none' },
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
