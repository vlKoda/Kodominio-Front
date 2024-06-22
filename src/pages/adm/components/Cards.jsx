import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import CheckIcon from '@mui/icons-material/Check';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import { RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { jwtDecode } from 'jwt-decode';
import config from "../../../config";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


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

function Ocor() {
  const token = localStorage.getItem('token')
  const decodedToken = jwtDecode(token);
  const id_condominio = decodedToken.condominio

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedGrau, setSelectedGrau] = useState('grau2');

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(config.apiUrl + '/ocorrencia/listar/condominio/' + id_condominio,
          { headers: { 'Authorization': `Bearer ${token}` } });
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  const handleRejeitar = async (id) => {
    try {
      await axios.put(`${config.apiUrl}/ocorrencia/editar/${id}?aprovacao=Reprovado&status=Reprovado`, {}, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      window.location.reload();
    } catch (error) {
      setError(error);
    }
  };

  const handleAceitar = async (id, grau) => {
    try {
      await axios.put(`${config.apiUrl}/ocorrencia/editar/${id}?aprovacao=Aprovado&status=Em avaliação&prioridade=${grau}`, {}, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      window.location.reload();
    } catch (error) {
      setError(error);
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };
  const handleGrauChange = (event, index) => {
    const { value } = event.target;
    setSelectedGrau((prev) => ({
      ...prev,
      [index]: value,
    }));
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Alinha os itens no centro da tela verticalmente
        marginTop: '40px',
      }}
    >{data.filter(ocorrencia => ocorrencia.aprovacao === 'Pendente').map((ocorrencia, index) => (
      <Box
        key={index}
        sx={{
          width: '1000px',
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
            Ocorrência {index + 1}
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: "'Poppins', sans-serif" }}>
            Identificação: {ocorrencia.usuario.apartamento}
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: "'Poppins', sans-serif" }}>
            Descrição: {ocorrencia.bocorrencia}
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: "'Poppins', sans-serif" }}>
            Data: {formatDate(ocorrencia.datahora)}
          </Typography>
          <ButtonGroup>
            <IconButton onClick={() => handleAceitar(ocorrencia.id, selectedGrau[index] || 'Grau 3')}>
              <CheckIcon sx={{
                color: 'black',
                marginRight: '20px',
                marginLeft: '20px',

                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',

                  boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.3)',
                },
              }} />
            </IconButton>
            <IconButton onClick={() => handleRejeitar(ocorrencia.id)}>
              <DoDisturbIcon sx={{
                color: 'black',
                marginLeft: '20px',
                marginRight: '20px',


                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',

                  boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.3)',
                },
              }} />
            </IconButton>
          </ButtonGroup>
          <RadioGroup
            row
            aria-label="grau"
            name={`grau${index}`}
            value={selectedGrau[index]}
            onChange={(event) => handleGrauChange(event, index)}
            sx={{
              marginLeft: '15%',
            }}
          >
            <FormControlLabel value="grau1" control={<Radio />} label="Grau 1" />
            <FormControlLabel value="grau2" control={<Radio />} label="Grau 2" />
            <FormControlLabel value="grau3" control={<Radio />} label="Grau 3" />
          </RadioGroup>

        </StyledDiv>

      </Box>
    ))
      }
    </Box >
  );
}

export default Ocor;
