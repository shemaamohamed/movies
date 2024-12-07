import { createTheme } from '@mui/material/styles';

const getTheme = (language) =>
  createTheme({
   
    direction: language === 'Arabic' ? 'rtl' : 'ltr', 
    typography: {
      fontFamily: language === 'Arabic' ? 'El Messiri, sans-serif' : 'Poppins',
      h1: {
        color: '#2E63A4',
        fontSize: '2rem',
        fontWeight: 500,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.5,
      },
      h6: {
        color: '#2E63A4',
        zIndex: 999,
        fontSize: '1.1rem',
      },
    },
    palette: {
      primary: {
        main: '#2E63A4',
      },
      secondary: {
        main: '#60BFF5',
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            direction: language === 'Arabic' ? 'rtl' : 'ltr', // RTL or LTR support
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',

          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 0,
            backgroundColor: '#60BFF5',
            "&:hover": {
              backgroundColor: '#FFCE00',
              color: '#FFFFFF',
            },
          },
        },
      },
      
    },
  });

export default getTheme;
