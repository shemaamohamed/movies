import React from 'react';
import { Container } from '@mui/material';
import Movies from '../components/Movies';
import Welcome from '../components/Welcome';


const HomePage = ({language}) => {
    return (
        <>
           <Welcome language={language}/>
           <Container  sx={{marginTop:'70px' }}>
               <Movies language={language}/> 
           </Container>
        </>
           
    );
};

export default HomePage;