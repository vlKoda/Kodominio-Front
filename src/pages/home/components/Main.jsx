import React from "react";
import { Typography , Box} from "@mui/material";
import Cards from "./Cards";

function Main (){
    return (
        <><><Box sx={{
            display: 'inline-flex',
            alignItems: 'center', 
            marginTop: '35px',
        }}>
            <Typography sx={{
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: "-.75px",
                fontSize: { xs: "2rem", lg: "4rem" },
                marginRight: { xs: '5px', lg: '15px' },
                fontWeight: '200',
            }}>
                Somos
            </Typography>

            <Typography sx={{
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: "-.75px",
                fontSize: { xs: "2rem", lg: "4rem" },
                marginLeft: '10px',
                marginRight: '20px',
                fontWeight: '400',
               
            }}>
                Piola.
            </Typography>
        </Box><Box>
                <Typography sx={{
                    fontFamily: "'Poppins', sans-serif",
                    letterSpacing: "-.75px",
                    marginTop: '20px',
                    marginBotton: '20px',
                }}>
                   Um sistema de ocorrências para condôminios com intuito de facilitar a sua vivência.

                </Typography>
                <Typography sx={{
                    fontFamily: "'Poppins', sans-serif",
                    letterSpacing: "-.75px",
                    marginTop: '5px',
                }}>
                    Conheça nosso planos e veja o que mais se encaixa no seu negócio!
                </Typography>

            </Box></><Box        >
                <Cards />
            </Box></>

      );
    }
export default Main;