import React, { useState, useEffect } from "react";
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import config from '../../../config';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Integrantes() {

  const { id } = useParams();
  const [data, setData] = useState([]);
  let role;
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(config.apiUrl + '/usuario/listar/condominio/' + id,
          { headers: { 'Authorization': `Bearer ${token}` } });
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []); 

  const handleExcluirUsuario = async (id_usuario) => {
    try {
      const response = await axios.delete(config.apiUrl + '/usuario/' + id_usuario,
        { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` } }
      );
    } catch (error) {
      console.error('Erro ao excluir usuario:', error);
    }
  };

  return (
    <Box
    display="flex"
    flexDirection="row"
    justifyContent="center"
    flexWrap="wrap"
    marginTop={{ xs: '30px', sm: '30px', md: '70px' }}
    >

      {data.map((usuario) => (
        <Card
          key={usuario.id}
          sx={{
            width: '200px',
            backgroundColor: '#e1e1e1',
            padding: '30px 40px',
            borderRadius: '10px',
            marginRight: '10px',
            marginLeft: '10px',
            marginBottom: '30px',
            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s, box-shadow 0.3s',
            cursor: 'pointer',
            minWidth: '250px',
          }}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0px 12px 20px rgba(0, 0, 0, 0.2)'}
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 0.1)'}
        >
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant="body1" fontSize="1.2rem" marginBottom="10px">
             Nome: {usuario.nome}
            </Typography>
            <Typography variant="body1" fontSize="1.2rem" marginBottom="20px">
             Função: {usuario.role}
            </Typography>
            <Box display="flex" justifyContent="center">
              <Button
                onClick={() => handleExcluirUsuario(usuario.id)}
                variant="contained"
                color="secondary"
                sx={{
                  marginTop: '20px',
                  fontFamily: "'Poppins', sans-serif",
                  backgroundColor: '#ec3c21',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#6c140d',
                  },
                }}
              >
                Excluir
              </Button>
            </Box>
          </CardContent>
        </Card>
      ))}

    </Box>
  );
}

export default Integrantes;
