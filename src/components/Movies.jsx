import Grid from '@mui/material/Grid2';
import * as React from 'react';
import {  styled } from '@mui/material/styles';
import { Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import background from '../assets/Wallpaper.png'
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../store/slices/MoviesSlice";
const StyledCard = styled(Card)(({ theme }) => ({
    margin: 'auto',
    height: '300px',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: '0.1s',
    backgroundImage:`url(${background})`,
    "&:hover": {
        transform: 'scale(1.1)',
        },

    
    
}));

function Movies({language}) {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [page, setPage] = useState(1);
    const cartoons = useSelector((state) => state.movies.movies);
    const dispatch = useDispatch();
    useEffect(() => {
        axios.get('http://localhost:7000/cartoons')
        .then((response) => {
            dispatch(setMovies(response.data));
        }).catch((error) => {
            console.error('Error fetching data: ', error);
        });
    }, [dispatch]);
    const filteredCartoons = cartoons.slice((page - 1) * 6, page * 6);
    const arabicPage={
        '1':'الصفحة الأولى',
        '2':'الصفحة الثانية',
        '3':'الصفحة الثالثة',
        '4':'الصفحة الرابعة',
        '5':'الصفحة الخامسة',
        '6':'الصفحة السادسة',
        '7':'الصفحة السابعة',
        '8':'الصفحة الثامنة',
        '9':'الصفحة التاسعة',
        '10':'الصفحة العاشرة',
        '11':'الصفحة الحادية عشر',
        '12':'الصفحة الثانية عشر',
    }

 
   
  const handleChange = (event, value) => {
    setPage(value);
    console.log(value);
  };

  return (
    <>
    <Grid container spacing={4}>
    {filteredCartoons.map((cartoon, index) => (
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
                                    transition: '0.1s ease-in-out',
                                    
                                


                                }}
                            />
                          
                            </>     
                               
                            )
                        }
                        {hoveredIndex === index && (
                            <>
                                <CardContent
                                sx={{
                                    height:'100%',
                                    
                                }}
                                >
                                    <Typography  variant="h6" >
                                    {cartoon.title[language]}
                                    </Typography>
                                    <Typography variant="body2" sx={{ maxHeight: '10em', overflow: 'hidden', textOverflow: 'ellipsis' }} color="textSecondary" component="p">
                                    {cartoon.description[language]}
                                    </Typography>
                                    <Link to={`/${cartoon.title[language]}`}  style={{ textDecoration: 'none' }}>
                                    <Button size="large" color="primary" >
                                        {language === 'Arabic' ? 'شاهد الفيلم' : 'Watch Movie'}
                                    </Button>
                                    </Link>
                                    

                                </CardContent>

                                
                            </>
                        )}
                    </StyledCard>
        </Grid>
    ))}
</Grid>
   <Grid Container >
        <Grid item size={12}>
                <Stack spacing={2}
                 sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    direction: language === 'Arabic' ? 'rtl' : 'ltr',
                }}>
                        <Typography variant="h6">{
                            language === 'Arabic' ? (

                             arabicPage[page]           

                            ): (
                                `Page ${page}`
                            )
                            }</Typography>
                        <Pagination count={12} page={page} onChange={handleChange} />
                </Stack>
        </Grid>
    </Grid>
    </>
    
    
  );
}

export default Movies;
