import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Button, Box, Typography } from '@mui/material';
import './SurveyForm.scss'; 

const SurveyForm = () => {
    return (
        <Box className="survey-form">
            <Typography variant="h4" className="form-title">Опрос клиентов</Typography>
            <form>
                <FormControl fullWidth className="form-control">
                    <InputLabel>Оцените наш сервис</InputLabel>
                    <Select defaultValue="" label="Оцените наш сервис">
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" color="primary" fullWidth className="submit-button">
                    Отправить
                </Button>
            </form>
        </Box>
    );
};

export default SurveyForm;
