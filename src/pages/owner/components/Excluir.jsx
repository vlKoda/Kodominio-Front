import React from "react";
import { Button, Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import config from "../../../config";
import axios from "axios";


function Excluir() {
  
  const { id } = useParams();
  const navigate = useNavigate()

  const handleClick = async () => {
    try {
      const token = localStorage.getItem('token');

      const response = await axios.delete(config.apiUrl + '/condominio/' + id,
        { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` } }
      );
      navigate('/owner');
    } catch (error) {
      console.error('Erro ao excluir condomínio:', error);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

      }}
    >

      <Button
        onClick={handleClick}
        variant="contained"
        color="secondary"
        sx={{
          marginTop: '20px',
          fontFamily: "'Poppins', sans-serif", backgroundColor: '#ec3c21',
          color: 'white',
          '&:hover': {
            backgroundColor: '#6c140d',
          },
        }}

      >
        Excluir
      </Button>



    </Box>

  );
}

export default Excluir;
