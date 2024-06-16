import React from "react";
import {  Button, Box } from "@mui/material";


function Excluir() {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
  
        }}
      >

           <Button
           variant="contained"
           color="secondary"
           sx={{
             marginTop: '20px',
             fontFamily: "'Poppins', sans-serif",  backgroundColor: 'darkred',  
             color: 'white',  
             '&:hover': {
               backgroundColor: '#6c140d',  
             },
           }}
           onClick={() => {
             console.log("Excluir clicado!");
           }}
         >
           Excluir
         </Button>
  
  
    
        </Box>
     
 
  
      
    );
  }
  
  export default Excluir;
  