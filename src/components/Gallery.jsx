import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import './Gallery.scss'; 

const Gallery = ({ images }) => {
    return (
        <Grid container spacing={2} className="gallery">
            {images.map((image, index) => (
                <Grid item xs={12} sm={4} key={index}>
                    <Card className="gallery-card">
                        <CardMedia
                            className="gallery-image"
                            component="img"
                            alt={image.alt}
                            image={image.url}
                        />
                        <CardContent>
                            <Typography className="gallery-title" variant="h6">
                                {image.title}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Gallery;
