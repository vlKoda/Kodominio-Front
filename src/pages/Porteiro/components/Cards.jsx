import React from "react";
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import config from "../../../config";
import { useState } from "react";
import { useEffect } from "react";

function Cards() {

  const token = localStorage.getItem('token')
  const decodedToken = jwtDecode(token);
  const id_usuario = decodedToken.id

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

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

  const handleExcluirOcorrencia = async (id_ocorrencia) => {
    try {
      const response = await axios.delete(config.apiUrl + '/ocorrencia/' + id_ocorrencia,
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

            <Typography variant="body1" fontSize="1.1rem" marginBottom="10px" >
              Status: {ocorrencia.status}
            </Typography>
            <Typography variant="body1" fontSize="1.1rem" marginBottom="10px" >
              Data: {formatDate(ocorrencia.datahora)}
            </Typography>
            <Box display="flex" justifyContent="center">
              <Button
                onClick={() => handleExcluirOcorrencia(ocorrencia.id)}
                variant="contained"
                color="secondary"
                sx={{
                  marginTop: '20px',
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

export default Cards;
