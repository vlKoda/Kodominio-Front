import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import CheckIcon from '@mui/icons-material/Check';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../config';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)({
  height: 'auto',
  width: '400px',
  overflow: 'hidden',
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
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.2)',
  },
  '&:focus': {
    outline: 'none', // Remove o outline azul ao focar
  },
   '&:visited': {
    color: 'inherit', // Mantém a cor do texto inalterada após a visita
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


function Condominios() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(config.apiUrl + '/condominio/listar',
        { headers: {'Authorization': `Bearer ${token}` } });
        setData(response.data);
        setLoading(false);  
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Typography variant="body1">Carregando...</Typography>;
  }

  if (error) {
    return <Typography variant="body1">Erro ao carregar os dados: {error.message}</Typography>;
  }

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

        {data.map((condominio, index) => (
          <StyledLink key={index} component={Link} to={`/owner/condominio/${condominio.id}`}>
            <Typography variant="subtitle1" sx={{ fontFamily: "'Poppins', sans-serif" }}>
              {condominio.nome}
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "'Poppins', sans-serif" }}>
              Estado: {condominio.estado}
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "'Poppins', sans-serif" }}>
              Cidade: {condominio.cidade}
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "'Poppins', sans-serif" }}>
              Bairro: {condominio.bairro}
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "'Poppins', sans-serif" }}>
              Rua: {condominio.rua}
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "'Poppins', sans-serif" }}>
              Numero: {condominio.numero}
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "'Poppins', sans-serif" }}>
             CEP: {condominio.cep}
            </Typography>
          </StyledLink>
        ))}



      </Box>
    </Box>
  );
}

export default Condominios;
