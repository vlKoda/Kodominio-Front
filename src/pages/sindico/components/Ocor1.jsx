import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import CheckIcon from '@mui/icons-material/Check';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';



const StyledDiv = styled('div')({
  width: 'calc(45% - 20px)', // Reduzindo a largura dos boxes para ocupar 35% da largura da tela com margens
  padding: '10px',
  paddingTop: '20px',
  paddingBottom: '20px',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  textAlign: 'center',
  transition: 'box-shadow 0.3s ease',
  backgroundColor: '#e1e1e1',
  marginBottom: '3%',
  marginRight: '10px',
  marginLeft: '10px',
  '&:hover': {
    boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.2)',
  },
  '@media (max-width: 600px)': { // Ajuste para o breakpoint 'xs'
    width: 'calc(70% - 20px)', // Reduzindo a largura dos boxes para ocupar 70% da largura da tela com margens
  },
});

const ButtonGroup = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '15px',
});

function Ocor1() {

  const handleGrauChange = (event, index) => {

    console.log(event.target.value);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Alinha os itens no centro da tela verticalmente
        marginTop: '40px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap', // Isso faz com que os itens sejam quebrados em várias linhas
          justifyContent: 'center', // Centraliza os itens horizontalmente
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
          alignItems: {
            xs: 'center', // Centraliza os itens verticalmente no breakpoint xs
          },
        }}
      >
        <StyledDiv>
          <Typography variant="subtitle1" sx={{ fontFamily: "'Poppins', sans-serif" }}>
            Ocorrência 1
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: "'Poppins', sans-serif" }}>
            Identificação: Jonh torre 2 apartamento 4
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: "'Poppins', sans-serif" }}>
            Problema: meu gato ama lasanha
          </Typography>
          <ButtonGroup>

        <CheckIcon sx={{
                  color: 'black',
                  marginRight: '40px',
                
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
            
                    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.3)',
                  },

                  
                }} /> 
                
        <DoDisturbIcon sx={{
                  color: 'black',
               
                
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
            
                    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.3)',
                  },
                }} />

          </ButtonGroup>
        
        </StyledDiv>


        <StyledDiv>
        <Typography variant="subtitle1" sx={{ fontFamily: "'Poppins', sans-serif" }}>
            Ocorrência 2
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: "'Poppins', sans-serif" }}>
            Identificação: Maria torre 5 apartamento 243
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: "'Poppins', sans-serif" }}>
            Problema: Meu cachorro tá passando mal
          </Typography>
          <ButtonGroup>
          <CheckIcon sx={{
                  color: 'black',
                  marginRight: '40px',
                
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
            
                    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.3)',
                  },
                }} /> 
        <DoDisturbIcon sx={{
                  color: 'black',
               
                
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
            
                    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.3)',
                  },
                }} />

          </ButtonGroup>
        
        </StyledDiv>

        <StyledDiv>
          <Typography variant="subtitle1" sx={{ fontFamily: "'Poppins', sans-serif" }}>
           Ocorrência 3
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: "'Poppins', sans-serif" }}>
          Identificação:
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: "'Poppins', sans-serif" }}>
          Problema:
          </Typography>
          <ButtonGroup>
          <CheckIcon sx={{
                  color: 'black',
                  marginRight: '40px',
                
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
            
                    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.3)',
                  },
                }} /> 
        <DoDisturbIcon sx={{
                  color: 'black',
               
                
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
            
                    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.3)',
                  },
                }} />
          </ButtonGroup>
        
          
        </StyledDiv>

        <StyledDiv>
          <Typography variant="subtitle1" sx={{ fontFamily: "'Poppins', sans-serif" }}>
           Ocorrência 4
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: "'Poppins', sans-serif" }}>
          Identificação:
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: "'Poppins', sans-serif" }}>
          Problema:
          </Typography>
          <ButtonGroup>
          <CheckIcon sx={{
                  color: 'black',
                  marginRight: '40px',
                
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
            
                    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.3)',
                  },
                }} /> 
        <DoDisturbIcon sx={{
                  color: 'black',
               
                
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
            
                    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.3)',
                  },
                }} />
          </ButtonGroup>
        
          
        </StyledDiv>
      </Box>
    </Box>
  );
}

export default Ocor1;
