
import React from "react";
import { Typography , Box} from "@mui/material";

function Main (){

    return(

<Box sx={{
            display: 'inline-flex',
            alignItems: 'center', 
            marginTop: '20px',
        }}>
            <Typography sx={{
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: "-.75px",
                fontSize: { xs: "1rem", lg: "2rem" },
                marginRight: { xs: '5px', lg: '10px' },
                fontWeight: '200',
                marginLeft: { xs: '18px', lg: '10px' },
            }}>
              Fazer
            </Typography>

            <Typography sx={{
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: "-.75px",
                fontSize: { xs: "1rem", lg: "2rem" },
               
                marginRight: '20px',
                fontWeight: '400',
               
            }}>
               ocorrência
            </Typography>
            </Box>
        )
}

export default Main