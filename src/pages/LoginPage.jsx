import { Button, Container, TextField, Typography, FormHelperText } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import Grid from '@mui/material/Grid2';
import { useSnackbar } from 'notistack';
import { Form, Formik } from 'formik';
import * as yup from 'yup';

const email = (text) => /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(text);

const password = (text) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(text);

const getValidationSchema = (language) => {
  const commonValidation = yup
    .string()
    .required(language === 'English' ? 'This field is required' : 'هذا الحقل مطلوب');
  return yup.object().shape({
    Email: language === 'English' 
      ? commonValidation.test('is-email', 'This field should be in email format', (value) => email(value))
        .label('Enter email') 
      : commonValidation.test('is-email', 'هذا الحقل يجب أن يكون بالبريد الإلكتروني', (value) => email(value))
        .label('أدخل البريد الإلكتروني'),
    Password: language === 'English' 
      ? commonValidation.test('is-password', 'Password must be at least 8 characters long and contain a lowercase letter, an uppercase letter, a number, and a special character', (value) => password(value))
        .label('Enter password') 
      : commonValidation.test('is-password', 'كلمة المرور يجب أن تكون على الأقل 8 أحرف وأن تحتوي على حرف صغير،حرف كبير،رقم،ورمز خاص', (value) => password(value))
        .label('أدخل كلمة المرور'),
  });
};

function LoginPage({language}) {
    const validationSchema = getValidationSchema(language);
    const formikRef = useRef(null);
    const { enqueueSnackbar } = useSnackbar();
    const handleClickVariant = () =>  {
        console.log('clicked');
        enqueueSnackbar(language === 'English' ? 'Login successfully' : 'تم التسجيل بنجاح', { variant: 'success', autoHideDuration: 2000 });
    };

    useEffect(() => {
        if (formikRef.current) {
            formikRef.current.resetForm();
        }
    }, [language]);

    return (
        <>
        <Container
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop:'12vh',
            height:'80vh',
        }}
        >
            <Typography variant="h1">{language === 'English' ? 'Login' : 'أضافة الفيلم'}</Typography>
            <Formik 
            innerRef={formikRef}
            initialValues={{
                Email: '',
                Password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                handleClickVariant();
                resetForm();
            }}>
                {({ errors, touched, values, handleChange }) => (
                    <Form>
                        <Grid container spacing={2}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Grid item size={{xs:12, sm:12, md:8,lg:8}}>
                                <TextField
                                    fullWidth
                                    id="Email"
                                    name="Email"
                                    label={language === 'English' ? 'Email' : 'البريد الإلكتروني'}
                                    value={values.Email}
                                    onChange={handleChange}
                                    error={touched.Email && Boolean(errors.Email)}
                                    sx={{ 
                                        '& .MuiInputBase-root': { height: '56px' }, // Ensures fixed height
                                    }}
                                />
                                {touched.Email && errors.Email && (
                                    <FormHelperText error sx={{ marginTop: '5px' }}>{errors.Email}</FormHelperText>
                                )}
                            </Grid>
                            <Grid item size={{xs:12, sm:12, md:8,lg:8}}>
                                <TextField
                                    fullWidth
                                    id="Password"
                                    name="Password"
                                    label={language === 'English' ? 'Password' : 'كلمة المرور'}
                                    value={values.Password}
                                    onChange={handleChange}
                                    error={touched.Password && Boolean(errors.Password)}
                                    sx={{
                                        '& .MuiInputBase-root': { height: '56px' }, // Ensures fixed height
                                    }}
                                />
                                {touched.Password && errors.Password && (
                                    <FormHelperText error sx={{ marginTop: '5px' }}>{errors.Password}</FormHelperText>
                                )}
                            </Grid>
                            <Grid item size={{xs:12, sm:12, md:8,lg:8}}>
                                <Button fullWidth sx={{marginTop:'7px'}} type="submit" variant="contained" color="primary">
                                    {language === 'English' ? 'Submit' : 'إرسال'}
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </Container>
        </>
    );
};

export default LoginPage;
