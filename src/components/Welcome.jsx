import React from 'react';
import { Box, Button, Container,  Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import background   from '../assets/Wallpaper.png'
import Subscription from './Subscription';
import bear from '../assets/bear.gif';
import shape8 from '../assets/shape8.png';
import flowers from '../assets/flowers.gif'

const useStyles = makeStyles({
    welcomeContainer: {
        width:'100%',
        maxWidth:'100% !important',
        minWidth:'100%',
        backgroundImage: `url(${background})`,
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    welcomeContent: {
        textAlign: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        zIndex: '999',

    },
    colorfulText: {
        '& span': {
            display: 'inline-block',
            fontSize: 'inherit',
        },
        '& span:nth-of-type(1)': { color: '#60BFF5' },
        '& span:nth-of-type(2)': { color: '#2E63A4' },
        '& span:nth-of-type(3)': { color: '#AF6528' },
        '& span:nth-of-type(4)': { color: '#FFCE00' },
    },
    loginButton: {
        marginTop: '20px',
        width: '100% !important',
    },
    shape8:{
        position: 'absolute',
        bottom: '-104px',
        right: '0px',
        transform: 'rotateX(-124deg)'
    },
    flowers:{
        position: 'absolute',
        bottom: '10px',
        right: '0',
        width: '100%',
        height: 'auto',
        
    },
     
});

const Welcome = ({language}) => {
    const classes = useStyles({language});


    return (
        
            <Container
        
        sx={{
            display:'flex',
            width: {
                xs: '100%', 
                sm: '75%', 
                md: '75%',  
                lg: '33%',  
            },
            
             }}
          className={classes.welcomeContainer}>
            <Box   className={classes.welcomeContent}
            sx={{
                width: {
                    xs: '100%', 
                    sm: '75%', 
                    md: '75%',  
                    lg: '33%',  
                },
            }}
            >
                <Typography variant="h3" gutterBottom className={classes.colorfulText}>
                    <span>W</span><span>E</span><span>K</span><span>A</span>
                </Typography>
                <Typography variant="h6" gutterBottom >
                    {
                        language==='Arabic'?' اكتشف عالمًا من المرح والمغامرة مع مجموعة أفلام الرسوم المتحركة لدينا. استمتع بالكلاسيكيات الخالدة والمفضلات الجديدة مع عائلتك وأصدقائك':'Discover a world of fun and adventure with our collection of animated movies. Enjoy timeless classics and new favorites with your family and friends.'
                    }
                </Typography>
                <img  style={{width:'100px' ,height:'100px',position:'absolute',top:'-90px' ,right:'0'}} src={bear} alt="background"  />
                <Subscription language={language}/>
                <Button  size="large" sx={{marginTop:"9px" ,backgroundColor:'#60BFF5',color:'white'}} variant="contained" color="primary">
                    {
                        language==='Arabic'?'استمتع الآن':'Enjoy Now'
                    }
                </Button>
                
            </Box>
            <Box

            >
                <img className={classes.flowers} src={flowers} alt='flowers'/>
                <img className={classes.shape8} src={shape8} alt="shape8" />

            </Box>
            
            
        </Container>

        
    );
};

export default Welcome;