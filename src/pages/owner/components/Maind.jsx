import React, { useState, useEffect } from "react";
import { Typography, Box, Button } from "@mui/material";
import config from "../../../config";
import axios from 'axios';
import { useParams } from 'react-router-dom';


function Maind() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(config.apiUrl + '/condominio/listar/' + id,
          { headers: { 'Authorization': `Bearer ${token}` } });
        setData(response.data);
      } catch (error) {
        // Tratar erros aqui, se necessário
      }
    };

    fetchData();
  }, [id]);

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
          {data.nome}
        </Typography>



      </Box>

    </Box>


  );
}

export default Maind;
