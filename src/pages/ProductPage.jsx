import React from 'react';
import { Box, Typography ,Card, CardMedia, CardContent, Link } from '@mui/material';
import Grid from '@mui/material/Grid2';


const ProductPage = () => {
  return (
    <Box sx={{ p: 4, bgcolor: '#f9f9f9' }}>
      {/* Header */}
      <Box sx={{ bgcolor: '#ffc107', color: '#fff', p: 3, textAlign: 'center' }}>
        <Typography variant="h4" component="h1">Talbina with Saffron</Typography>
        <Typography variant="subtitle1">Made with Love in Kuwait</Typography>
      </Box>

      {/* Main Content */}
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {/* Product Image */}
        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 500, mx: 'auto' }}>
            <CardMedia
              component="img"
              height="300"
              image="path/to/image.jpg" // Replace with your product image path
              alt="Talbina with Saffron"
            />
          </Card>
        </Grid>

        {/* Product Details */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Product Details
              </Typography>
              <Typography variant="body1">
                <strong>Ingredients:</strong> Saffron, Pure Barley
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                <strong>Benefits:</strong>
              </Typography>
              <ul>
                <li>Rich in Fiber</li>
                <li>Rich in Minerals</li>
                <li>Source of Lithium</li>
                <li>Helps Prevent Sadness</li>
              </ul>
              <Typography variant="body1" sx={{ mt: 2 }}>
                <strong>Uses:</strong> Can be used to make dishes similar to Mahlabiya or as a thickening agent in soups.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Footer */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="body1">
          Visit us at{' '}
          <Link href="http://www.bamboo.com.kw" target="_blank" rel="noopener">
            www.bamboo.com.kw
          </Link>
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
          &copy; 2024 Bamboo, All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductPage;
