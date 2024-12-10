import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import './ApplicationForm.scss';

const ApplicationForm = () => {
    return (
        <Box className="application-form">
            <Typography variant="h4">Заявка на покупку</Typography>
            <form>
                <TextField label="Имя" fullWidth variant="outlined" margin="normal" />
                <TextField label="Телефон" fullWidth variant="outlined" margin="normal" />
                <Button variant="contained" color="primary" fullWidth>
                    Отправить
                </Button>
            </form>
        </Box>
    );
};

export default ApplicationForm;
