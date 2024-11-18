import { Mail } from '@mui/icons-material';
import { Button, CircularProgress, FormControl, FormHelperText, Input, InputAdornment } from '@mui/material';
import * as React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    title: {
        color: '#2E63A4',
        fontFamily: 'El Messiri, sans-serif !important' ,
        fontSize: '20px !important',
        fontStyle: 'normal !important',
        fontOpticalSizing: 'auto    !important',
        fontWeight: '500 !important',
        lineHeight: '24px !important',
        letterSpacing: '0.1em !important',
        zIndex: '999 !important',
        direction: 'rtl !important',  
        textAlign: 'right !important',
     


   

    },
});

function Subscription({language}) {
    const classes = useStyles();
    const [data, setData] = React.useState({
        email: '',
        status: 'initial',
    });


    const handleSubmit = (event) => {
        event.preventDefault();
        setData((current) => ({ ...current, status: 'loading' }));
        try {

            setTimeout(() => {
                setData((current) => ({ ...current, status: 'success' }));
            }, 2000);
            console.log(data.status);
            
        } catch (error) {
            console.error(error);
            setData((current) => ({ ...current, status: 'failure' }));
        }
    };

    return (
        <form onSubmit={handleSubmit} id="demo">
            <FormControl>
                <Input
                    label="Outlined start adornment"
                    placeholder="user@gmail.com"
                    type="email"
                    required
                    value={data.email}
                    onChange={(event) =>
                        setData({ email: event.target.value, status: 'initial' })
                    }
                    error={data.status === 'failure'}
                    startAdornment={
                        <InputAdornment position="start">
                            <Mail sx={{ color: "white" }} />
                        </InputAdornment>
                    }
                    endAdornment={
                        <InputAdornment position="end">
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                sx={{ borderRadius: 0 ,backgroundColor:'#60BFF5',color:'white',zIndex:999,border:'none',marginBottom:'5px'}}
                                disabled={data.status === 'loading'}
                                className={classes.title}
                            >
                                {data.status === 'loading' ? <CircularProgress size={24} /> : language==='Arabic'? 'اشتراك':'Subscribe'}
                            </Button>
                        </InputAdornment>
                    }
                />
                {data.status === 'failure' && (
                    <FormHelperText
                        sx={(theme) => ({ color: theme.palette.error.main })}
                    >
                        Oops! something went wrong, please try again later.
                    </FormHelperText>
                )}
            </FormControl>
        </form>
    );
}

export default Subscription;