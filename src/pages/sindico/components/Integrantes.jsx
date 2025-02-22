import React, { useState, useEffect } from "react";
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import config from '../../../config';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

function Integrantes() {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');
  const decodedToken = jwtDecode(token);
  const id_condominio = decodedToken.condominio;
  const navigate = useNavigate();

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(config.apiUrl + '/usuario/listar/condominio/' + id_condominio,
          { headers: { 'Authorization': `Bearer ${token}` } });
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      flexWrap="wrap"
      marginTop={{ xs: '30px', sm: '30px', md: '70px' }}
    >

      {data.filter(usuario => usuario.role === 'MORADOR' || usuario.role === 'PORTEIRO').map((usuario, index) => (
        <Card
          key={usuario.id}
          sx={{
            width: '300px',
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
            <Typography variant="body1" fontSize="1.2rem" marginBottom="20px" fontFamily = "'Poppins', sans-serif">
              Nome: {usuario.nome}
            </Typography>
            <Typography variant="body1" fontSize="1.2rem" marginBottom="20px" fontFamily = "'Poppins', sans-serif">
              Identificação: {usuario.apartamento ? usuario.apartamento : 'Portaria'}
            </Typography>
            <Typography variant="body1" fontSize="1.2rem" marginBottom="20px" fontFamily = "'Poppins', sans-serif">
              Telefone: {usuario.telefone}
            </Typography>
          </CardContent>
        </Card>
      ))}

    </Box>
  );
}

export default Integrantes;
