import React from "react";
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import config from "../../../config";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Cards() {

  const token = localStorage.getItem('token')
  const decodedToken = jwtDecode(token);
  const id_usuario = decodedToken.id

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(config.apiUrl + '/ocorrencia/listar/usuario/' + id_usuario,
          { headers: { 'Authorization': `Bearer ${token}` } });
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };


  return (

    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      flexWrap="wrap"
      marginTop={{ xs: '30px', sm: '30px', md: '70px' }}
    >
      {data.map((ocorrencia, index) => (
        <Card
          key={index}
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
          <CardContent>
            <Typography
              fontFamily="'Poppins', sans-serif"
              variant="body1"
              fontSize="1.2rem"
              marginBottom="10px"
              sx={{
                wordWrap: 'break-word',
                wordBreak: 'break-all',
                whiteSpace: 'normal',
              }}
            >
              {ocorrencia.bocorrencia}
            </Typography>

            <Typography variant="body1" fontSize="1.1rem" marginBottom="10px" fontFamily="'Poppins', sans-serif">
              Status: {ocorrencia.status}
            </Typography>
            <Typography variant="body1" fontSize="1.1rem" marginBottom="10px" fontFamily="'Poppins', sans-serif">
              Data: {formatDate(ocorrencia.datahora)}
            </Typography>
            <Box display="flex" justifyContent="center">
            </Box>
          </CardContent>
        </Card>
      ))}

    </Box>
  );
}

export default Cards;
