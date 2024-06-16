import { Box, Typography } from '@mui/material';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import EmergencyShareIcon from '@mui/icons-material/EmergencyShare';
import { styled } from '@mui/system';

const StyledDiv = styled('div')({
  width: {
xs:'40%',
sm:'40%',
} ,
  padding: '10px',
  paddingTop: '20px',
  paddingBottom: '20px',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  textAlign: 'center',
  transition: 'box-shadow 0.3s ease',
  margin: '10px',
backgroundColor: '#e1e1e1',
marginBottom:'12.5%',
  '&:hover': {
    boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.2)',
  },
});

function Cards (){
    return (
        <Box sx={{ 
            display: 'flex',
            flexDirection:{
                xs:'column',
              sm : 'row',
            },
             marginTop: '50px', }}>
          <StyledDiv>
            <PsychologyAltIcon />
            <Typography variant="subtitle1" sx={{   fontFamily: "'Poppins', sans-serif"}}>Quem somos?</Typography>
            <Typography variant="body2"sx={{   fontFamily: "'Poppins', sans-serif"}}>
              Somos um sistema de gerenciamento das ocorrências de um condominio.
            </Typography>
          </StyledDiv>
    
          <StyledDiv>
            <WbIncandescentIcon/>
            <Typography variant="subtitle1"sx={{   fontFamily: "'Poppins', sans-serif"}}>O que fazemos?</Typography>
            <Typography variant="body2"sx={{   fontFamily: "'Poppins', sans-serif"}}>
              Facilitamos o processo desde o registro até a resolução das eventualidades.
            </Typography>
          </StyledDiv>
    
          <StyledDiv>
            <EmergencyShareIcon />
            <Typography variant="subtitle1"sx={{   fontFamily: "'Poppins', sans-serif"}}>Faça parte!</Typography>
            <Typography variant="body2"sx={{   fontFamily: "'Poppins', sans-serif"}}>
              Venha você também facilitar seu negócio fazendo parte da família Piola.
            </Typography>
          </StyledDiv>
        </Box>
      );
    }
export default Cards