import { Button, Container,  TextField , Typography} from '@mui/material';
import React, { useEffect, useRef } from 'react';
import Grid from '@mui/material/Grid2';
import {  useSnackbar } from 'notistack';



import { Form, Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';


const isArabic = (text) => /[\u0600-\u06FF]/.test(text); 
const isEnglish = (text) => /^[A-Za-z\s.,]+$/.test(text);


const getValidationSchema = (language) => {
  const commonValidation = yup
    .string()
    .required(language === 'English' ? 'This field is required' : 'هذا الحقل مطلوب');

return yup.object().shape({
    EnglishTitle: language === 'English' 
    ? commonValidation.test('is-english', 'This field should be in English', (value) => isEnglish(value)) 
    : commonValidation.test('is-english', 'هذا الحقل يجب أن يكون بالأنجليزية', (value) => isEnglish(value)),
    
  ArabicTitle: language === 'Arabic' 
    ? commonValidation.test('is-arabic', 'هذا الحقل يجب أن يكون بالعربية', (value) => isArabic(value))
    : commonValidation.test('is-arabic', 'This field should be in Arabic', (value) => isArabic(value)),
    
  EnglishDescription: language === 'English'
    ? commonValidation.min(8, 'Description should be of minimum 8 characters length').test('is-english', 'This field should be in English', (value) => isEnglish(value))
    : commonValidation.min(8, 'الوصف يجب أن يكون بطول 8 أحرف على الأقل').test('is-english', 'هذا الحقل يجب أن يكون بالأنجليزية', (value) => isEnglish(value)),
    
  ArabicDescription: language === 'Arabic'
    ? commonValidation.min(8, 'الوصف يجب أن يكون بطول 8 أحرف على الأقل').test('is-arabic', 'هذا الحقل يجب أن يكون بالعربية', (value) => isArabic(value))
    : commonValidation.min(8, 'Description should be of minimum 8 characters length').test('is-arabic', 'This field should be in Arabic', (value) => isArabic(value)),
        
    image: commonValidation.label(language === 'English' ? 'Enter movie image URL' : 'أدخل رابط صورة الفيلم'),
    
    video: commonValidation.label(language === 'English' ? 'Enter movie video URL' : 'أدخل رابط فيديو الفيلم'),
});
};


function AddMovie({language}) {
    const validationSchema = getValidationSchema(language);
    const formikRef = useRef(null);
    const { enqueueSnackbar } = useSnackbar();
    const handleClickVariant = () =>  {
        console.log('clicked');
        enqueueSnackbar(language === 'English' ? 'Movie added successfully' : 'تمت إضافة الفيلم بنجاح', { variant: 'success' ,autoHideDuration: 2000});
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
        height:'80vh',
      
        marginTop:'12vh'
    }}
    >
        <Typography variant="h1">{language === 'English' ? 'Add Movie' : 'إضافة فيلم'}</Typography>
        <Formik 
        innerRef={formikRef}
        initialValues={{
            EnglishTitle: '',
            ArabicTitle: '',
            EnglishDescription: '',
            ArabicDescription: '',
            image: '',
            video: '',

        }}
        validationSchema={validationSchema}
        onSubmit={(values,{ resetForm }) => {
          const { EnglishTitle, ArabicTitle, EnglishDescription, ArabicDescription, image, video } = values;
          const movie= {
                tittle:{
                    English: EnglishTitle,
                    Arabic: ArabicTitle
                },
                description:{
                   English:EnglishDescription,
                   Arabic: ArabicDescription
                },
                image: image,
                video: video,
                



          }

            axios.post('http://localhost:7000/cartoons', movie,
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((response) => {
                handleClickVariant();
                resetForm();
                console.log(response);
            }).catch((error) => {
                console.log(error);
            }
            )    
        }
        
    }>

        {({ errors, touched, values, handleChange }) => {
           
            return (
                <Form>
            <Grid container spacing={2}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                
            }}
            >
                <Grid item  size={{xs:12, sm:12, md:7}}>
                    <TextField
                        fullWidth
                        id="EnglishTitle"
                        name="EnglishTitle"
                        label={language === 'English' ? ' Movie English Title' : ' عنوان الفيلم بالأنجليزية'}
                        value={values.EnglishTitle}
                        onChange={handleChange}
                        error={touched.EnglishTitle && Boolean(errors.EnglishTitle)}
                        helperText={touched.EnglishTitle && errors.EnglishTitle}
                        width="100%"
                        
                    />
                </Grid>
                <Grid item size={{xs:12, sm:12, md:7}}>
                        <TextField
                            fullWidth
                            id="ArabicTitle"
                            name="ArabicTitle"
                            label={language === 'English' ? ' Movie Arabic Title' : ' عنوان الفيلم بالعربي'}
                            value={values.ArabicTitle}
                            onChange={handleChange}
                            error={touched.ArabicTitle && Boolean(errors.ArabicTitle)}
                            helperText={touched.ArabicTitle && errors.ArabicTitle}
                        />
                </Grid>
                <Grid item size={{xs:12, sm:12, md:7}}>
                        <TextField
                                fullWidth
                                id="EnglishDescription"
                                name="EnglishDescription"
                                label={language === 'English' ? ' Movie English Description' :' وصف الفيلم بالأنجليزية'}
                                value={values.EnglishDescription}
                                onChange={handleChange}
                                error={touched.EnglishDescription && Boolean(errors.EnglishDescription)}
                                helperText={touched.EnglishDescription && errors.EnglishDescription}
                        />
                </Grid>
                <Grid item size={{xs:12, sm:12, md:7}}>
                        <TextField
                            fullWidth
                            id="ArabicDescription"
                            name="ArabicDescription"
                            label={language === 'English' ? ' Movie Arabic Description' : ' وصف الفيلم بالعربي'}
                            value={values.ArabicDescription}
                            onChange={handleChange}
                            error={touched.ArabicDescription && Boolean(errors.ArabicDescription)}
                            helperText={touched.ArabicDescription && errors.ArabicDescription}
                        />
                </Grid>
                <Grid item size={{xs:12, sm:12, md:7}}>
                    <TextField
                        fullWidth
                        id="image"
                        name="image"
                        label={language === 'English' ? ' Movie image URL' : ' رابط صورة الفيلم'}
                        value={values.image}
                        onChange={handleChange}
                        error={touched.image && Boolean(errors.image)}
                        helperText={touched.image && errors.image}
                    />

                </Grid>
                <Grid item size={{xs:12, sm:12, md:7}}>
                        <TextField
                                fullWidth
                                id="video"
                                name="video"
                                label={language === 'English' ? ' Movie video URL' : ' رابط فيديو الفيلم'}
                                value={values.video}
                                onChange={handleChange}
                                error={touched.video && Boolean(errors.video)}
                                helperText={touched.video && errors.video}
                        />

                </Grid>
                <Grid item size={{xs:12, sm:12, md:7}}>
                        <Button fullWidth sx={{marginTop:'7px'}} type="submit" variant="contained" color="primary">
                                 {language === 'English' ? 'Submit' : 'إرسال'}
                        </Button>
                        

                </Grid>

                
            </Grid >
           
        </Form>

              );
            
        
    }} 
        </Formik>

    </Container>
    
    

    </>

  );
};

export default AddMovie