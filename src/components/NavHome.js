import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { styled} from '@mui/material/styles';
import Logo from '../assets/WEKAa.png'
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import { LanguageOutlined } from '@mui/icons-material';
const useStyles = makeStyles({
  StyledIconButton: { 
    marginRight: '2rem',
    color: '#2E63A4 !important',
  },
  StyledButton: {
    color: '#2E63A4 !important',
    display: 'block',
    "&:hover": {
      backgroundColor: '#60BFF5',
      color:'white !important',
},
  },

});




const StyledImg = styled('img')({
    height: '30px',
    margin: 'auto', 
});

const pages = {
  Arabic: ['الصفحة الرئيسية', 'من نحن ؟', 'تواصل معنا'],
  English: ['Home', 'AboutUs', 'ContactUs'],
};
const settings = ['Profile', 'Logout'];

function ResponsiveAppBar({ language, setLanguage }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

 

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    const routes = {
      Home: '/',
      AboutUs: '/about',
      ContactUs: '/contact',
      'الصفحة الرئيسية': '/',
      'من نحن ؟': '/about',
      'تواصل معنا': '/contact',
    };
    navigate(routes[page]);
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (settings) => {
    if(settings==='Logout'){
      navigate('/login')
    }
    setAnchorElUser(null);
  };
  const classes=useStyles();
  const navigate  =useNavigate();


  return (
   
      <AppBar sx={{background: 'transparent'}} position="fixed"  >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              className={classes.StyledIconButton}
              size="large"
              aria-label="account of current user"
              onClick={handleOpenNavMenu}

            >
              <MenuIcon />
            </IconButton>
          
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
        
              sx={{ display: { xs: 'block', md: 'none' },
                '& .MuiPaper-root': {width: '100%', maxWidth: '100%', minWidth: '100%'},
            }}
              
            >
               {pages[language].map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                  <Typography  textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box  sx={{flexGrow: 1,display: { xs: 'block', md: 'none' } }}>
          <StyledImg src={Logo} alt="Logo" />
          </Box>
          <StyledImg src={Logo} alt="Logo"  sx={{display: { xs: 'none', md: 'block' }}}/>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages[language].map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{ color: '#2E63A4', mx: 1 ,backgroundColor:'transparent'}}
                className={classes.StyledButton}
                
              >
                {page}
              </Button>
            ))}
            
          </Box>
            <Tooltip>
               <Avatar onClick={()=>{setLanguage(language==='Arabic'?'English':'Arabic')}}  sx={{ backgroundColor: 'black' ,margin:'0px 3px' }}  >
                 <LanguageOutlined sx={{ backgroundColor: 'black' }} />
               </Avatar>
            </Tooltip>
             <Tooltip >
             <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="شيماء" src="/static/images/avatar/2.jpg" />
              </IconButton>
             </Tooltip>  
            <Menu
              sx={{ mt: '45px' }}
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={()=>{handleCloseUserMenu(setting)}}>
                  <Typography  sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
        </Toolbar>
      </Container>
    </AppBar>

    
  );
}
export default ResponsiveAppBar;