import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const LoginPage = ({language}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here
    };

    const texts = {
        English: {
            login: 'Login',
            email: 'Email',
            password: 'Password',
            loginButton: 'Login',
        },
        Arabic: {
            login: 'تسجيل الدخول',
            email: 'البريد الألكترني',
            password: 'كلمة السر',
            loginButton: 'تسجيل الدخول',
        },
    };

    return (
        <Container
        sx={{
            width: {
                xs: '100%', 
                sm: '50%', 
                md: '50%',  
                lg: '33%',  
            },
            marginTop: '120px',
            height:'52vh ',
            textAlign: 'center !important',
        }}
        >
            <Box >
                <Typography variant="h4" component="h1" gutterBottom>
                    {texts[language].login}
                </Typography>
                <TextField
                    label={texts[language].email}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label={texts[language].password}
                    type="password"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleLogin}
                >
                    {texts[language].loginButton}
                </Button>
                
            </Box>
        </Container>
    );
};

export default LoginPage;