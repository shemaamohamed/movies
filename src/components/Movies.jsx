import Grid from '@mui/material/Grid2';
import {  styled } from '@mui/material/styles';
import { Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import { useState } from 'react';
import background from '../assets/Wallpaper.png'
import { Link } from 'react-router-dom';
import cartoons from '../cartoons.json'
const StyledCard = styled(Card)(({ theme }) => ({
    margin: 'auto',
    height: '300px',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: '0.7s',
    backgroundImage:`url(${background})`,

    
    
}));

function Movies({language}) {
    const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    
    <Grid container spacing={4}>
    {cartoons.map((cartoon, index) => (
        <Grid item key={index} size={{xs:12, sm:6, md:2}}>
                   <StyledCard
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {
                            hoveredIndex !== index && (<>
                            <CardMedia
                                component="img"
                                alt={cartoon.title[language]}
                                image={cartoon.image}
                                title={cartoon.title[language]}
                                sx={{
                                    height: '100%', 
                                    width: '100%', 
                                    objectFit: 'contain',


                                }}
                            />
                          
                            </>     
                               
                            )
                        }
                        {hoveredIndex === index && (
                            <>
                                <CardContent
                                sx={{
                                    height:'100%'
                                }}
                                > 
                                    <Typography   height='10' gutterBottom variant="h6" component="div">
                                    {cartoon.title[language]}
                                    </Typography>
                                    <Typography variant="body2" height='60' sx={{ textOverflow: 'ellipsis' }} color="textSecondary" component="p">
                                    {cartoon.description[language]}
                                    </Typography>
                                    <Link to={`/${cartoon.title[language]}`} style={{ textDecoration: 'none' }}>
                                        <Button size="large" color="primary">
                                           { language==='Arabic'?'شاهد الفيلم':'Watch Movie'}
                                        </Button>
                                    </Link>
                                    

                                </CardContent>

                                
                            </>
                        )}
                    </StyledCard>
        </Grid>
    ))}
</Grid>
  );
}

export default Movies;
