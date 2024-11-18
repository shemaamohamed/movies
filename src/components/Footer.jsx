import React from 'react';
import { AppBar, Avatar, Box, CssBaseline, ThemeProvider, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';
import logo from '../assets/WEKAa.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import { makeStyles } from '@mui/styles';
import shape8 from '../assets/shape8.png';
import background   from '../assets/Wallpaper.png'
import getTheme from '../Theme';

const useStyles = makeStyles({
   AppBar:{
    width: '100%',
    height: '30vh',
    marginTop: '20px',
    position: 'relative !important',
    backgroundImage: `url(${background}) !important` ,
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat', 
    backgroundPosition: 'center',
    border:'none !important',
    boxShadow: 'none !important',
    alignItems: 'center',
    justifyContent: 'end',
   },
   
   Box: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
  },
   Box2:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: '2px',
        
   },
    shape8:{
        position: 'absolute',
        width: '100%',
        height: '100%',
        right: '0px',
        bottom: '1px',
        transform: 'rotateX(-37de)'
    },
    avatar:{
        margin:'0 10px',
        width: '30px',
        height:'30px',
        borderRadius:'50%',
        "&:hover": {
            backgroundColor: '#60BFF5',
    },
}
});

const Footer = ({language}) => {
    const classes = useStyles({language});
    const theme = getTheme(language);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar className={classes.AppBar} position="static" >
            <img src={shape8} alt="shape8" className={classes.shape8} />
            <Grid container 
                 >
                   <Grid item
                     size={{ xs: 12, md: 12,alignItems:'center' }}
                   >
                         <Box className={classes.Box}>
                        {/* <img src={logo}  alt="logo" style={{ height: '30px',zIndex:'992'}}  /> */}
                        <Typography variant="h6" align="center">
                            {language==='Arabic' ?'اكتشف عالمًا من المرح والمغامرة':'Discover a world of fun '}
                        </Typography>
                        
                    </Box>
                    
                    
                    <Box className={classes.Box2}>
                                    <a href="https://www.facebook.com/profile.php?id=100003970352047" target="_blank" rel="noopener noreferrer">
                                        <Avatar className={classes.avatar} sx={{ backgroundColor: 'blue' }}>
                                            <FacebookIcon />
                                        </Avatar>
                                    </a>
                                    <a href="https://www.linkedin.com/in/shimaa-eldakhakhny-2b1b8b234/" target="_blank" rel="noopener noreferrer">
                                        <Avatar className={classes.avatar} sx={{ backgroundColor: '#0077B5' }}>
                                            <LinkedInIcon />
                                        </Avatar>
                                    </a>
                                    <a href="https://github.com/shemaamohamed" target="_blank" rel="noopener noreferrer">
                                        <Avatar className={classes.avatar} sx={{ backgroundColor: 'black' }}>
                                            <GitHubIcon />
                                        </Avatar>
                                    </a>
                    </Box>
                    
                        <Box className={classes.Box}>
                                    <Typography
                                    variant="h6"
                                    align='center'
                                    >
                                {language==='Arabic'?'جميع الحقوق محفوظة © شيماء':'2024 © Shimaa All Rights reserved'}

                                    </Typography>

                        </Box>
                       
                    </Grid>
                    
                      
                    
                     
                </Grid>

        </AppBar>
        </ThemeProvider>

        
    );
};

export default Footer;