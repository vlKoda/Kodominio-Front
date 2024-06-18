import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../config';
import { jwtDecode } from 'jwt-decode';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';

function Mains() {
  
  const token = localStorage.getItem('token')
  const decodedToken = jwtDecode(token);
  const id_usuario = decodedToken.id

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.get(config.apiUrl + '/ocorrencia/listar/usuario/' + id_usuario,
        { headers: {'Authorization': `Bearer ${token}` } });
        setData(response.data); 
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  const handleGrauChange = (event, index) => {

    console.log(event.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
       
      }}
    >
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          marginTop: '40px',
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "-.75px",
            fontSize: { xs: "1rem", lg: "2rem" },
            marginRight: { xs: '5px', lg: '10px' },
            fontWeight: '200',
            marginLeft: { xs: '18px', lg: '10px' },
          }}
        >
          Suas 
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "-.75px",
            fontSize: { xs: "1rem", lg: "2rem" },
            marginRight: '20px',
            fontWeight: '400',
          }}
        >
          Ocorrências.
        </Typography>
      </Box>
    </Box>
  );
}

export default Mains;
