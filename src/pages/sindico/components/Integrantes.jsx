import React from 'react';
import { Box, Card } from '@mui/material';

function Integrantes() {
  return (
    <Box 
      display="flex" 
      flexDirection={{ xs: 'column', sm: 'column', md: 'row' }} // Alinhe verticalmente em telas pequenas (sm)
      justifyContent={{ xs: 'center', sm: 'center', md: 'center' }} // Centralize horizontalmente
      alignItems="center" // Centralize verticalmente
      marginTop={{ xs: '30px', sm: '30px', md: '70px' }} // Adicione margem superior apenas em xs e md
    > 
      <Card
        style={{ 
          background: '#e1e1e1', 
          padding: '70px 100px', 
          marginRight:'30px', 
          marginLeft: '10px', 
          borderRadius: '10px', 
          marginBottom: '30px', 
          border: 'none',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s, box-shadow 0.3s', 
          cursor: 'pointer',
          fontFamily: "'Poppins', sans-serif",
        }}
 
        onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0px 12px 20px rgba(0, 0, 0, 0.2)'}
        onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 0.1)'}
      >
         Nome:  <br/> 
        Função:
      </Card>
      
      <Card
        style={{ 
          background: '#e1e1e1', 
          padding: '70px 100px', 
          borderRadius: '10px', 
          marginBottom: '30px',
          border: 'none',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s, box-shadow 0.3s', 
          cursor: 'pointer' ,
          fontFamily: "'Poppins', sans-serif",
        }}
  
        onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0px 12px 20px rgba(0, 0, 0, 0.2)'}
        onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 0.1)'}
      >
        Nome:  <br/> 
        Função:
      </Card>

      <Card
        style={{ 
          background: '#e1e1e1', 
          padding: '70px 100px', 
          marginRight:'10px', 
          marginLeft: '30px', 
          borderRadius: '10px', 
          marginBottom: '30px', 
          border: 'none',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s, box-shadow 0.3s', 
          cursor: 'pointer',
          fontFamily: "'Poppins', sans-serif",
        }}
    
        onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0px 12px 20px rgba(0, 0, 0, 0.2)'}
        onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 0.1)'}
      >
         Nome:  <br/> 
        Função:
      </Card>
      
    </Box>
  );
}

export default Integrantes