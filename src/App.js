import NavHome from'./components/NavHome';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import MoviePage from './pages/MoviePage';
import LoginPage from './pages/LoginPage';
import { useEffect, useState } from 'react';
import getTheme from './Theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import AddMovie from './components/AddMovie';
function App() {
    const [language, setLanguage] = useState(localStorage.getItem('Language') || 'English');

    useEffect(() => {
      localStorage.setItem('Language', language);
    }, [language]);
    const theme =getTheme(language)
  return (
    <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
            <NavHome language={language} setLanguage={setLanguage}  />
            <Routes>
                    <Route path="/" element={<HomePage language={language} />} />
                    <Route path="/login" element={<LoginPage language={language} />} />
                    <Route path="/:title" element={<MoviePage language={language} />} /> 
                    <Route path="/addmovie" element={<AddMovie language={language} />} /> 

            </Routes>
            <Footer language={language} />
        </BrowserRouter>
            </ThemeProvider>

        
        )
}

export default App;
