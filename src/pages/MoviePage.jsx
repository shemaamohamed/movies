import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import cartoons from '../cartoons.json'; // Ensure the path is correct

const useStyles = makeStyles({
    Box: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
});

const MoviePage = ({ language }) => {
    const { title } = useParams();
    const classes = useStyles();
    const movie = cartoons.find(cartoon => cartoon.title.English === title || cartoon.title.Arabic === title);

    if (!movie) {
        return <Typography variant="h6">Movie not found</Typography>;
    }

    return (
        <Container>
            <Box my={15} className={classes.Box}>
                <Typography  variant="h4" component="h1" gutterBottom>
                {movie.title[language]}
                </Typography>
                
                <ReactPlayer 
                    url={movie.video}
                    width="100%"
                    height="40vh"
                    controls
                />
                <Typography variant="body1" component="p" gutterBottom>
                    {movie.description[language]}
                </Typography>
            </Box>
        </Container>
    );
};

export default MoviePage;