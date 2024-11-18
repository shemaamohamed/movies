import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
function Rate() {
    const [value, setValue] = React.useState(2);

  return (
    <Box sx={{ '& > legend': { mt: 2 } ,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    }}>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      
    </Box>
  )
}

export default Rate
