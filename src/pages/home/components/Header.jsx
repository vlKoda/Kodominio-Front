import React from 'react';
import { Container, AppBar, Toolbar, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import LoginIcon from '@mui/icons-material/Login';
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

  const handleClickLogin = () => {
    navigate('/login');
  };

  return (
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '12px' }}>
      <AppBar position="static" sx={{ bgcolor: '#e1e1e1', borderRadius: '10px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', width: '100%' }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <StyledButton onClick={handleClickLogin} color="inherit" sx={{ color: 'black', display: { xs: 'none', sm: 'block' } }}>
              Login
            </StyledButton>
            <LoginIcon
              onClick={handleClickLogin}
              sx={{
                color: 'black',
                display: { xs: 'block', sm: 'none' },
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.9)',
                  boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.3)',
                },
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default Header;
