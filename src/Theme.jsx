import { createTheme } from '@mui/material/styles';

const getTheme = (language) =>
  createTheme({
    direction: language === 'Arabic' ? 'rtl' : 'ltr', 
    typography: {
      fontFamily: language === 'Arabic' ? 'El Messiri, sans-serif' : 'Poppins',
      h1: {
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
            boxShadow: 'none',
            direction: language === 'Arabic' ? 'rtl' : 'ltr', // RTL or LTR support

          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 0,
            backgroundColor: '#60BFF5',
          },
        },
      },
    },
  });

export default getTheme;
