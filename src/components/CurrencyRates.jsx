import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Typography, Box } from '@mui/material';
import './CurrencyRates.scss';  
const CurrencyRates = () => {
    const [amount, setAmount] = useState('');
    const [convertedAmount, setConvertedAmount] = useState(null);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('KZT');
    const [rates, setRates] = useState({});

    useEffect(() => {
        fetch('https://api.exchangerate-api.com/v4/latest/USD')
            .then((response) => response.json())
            .then((data) => {
                setRates(data.rates);
            });
    }, []);

    const handleConvert = () => {
        if (amount && fromCurrency && toCurrency) {
            const result = (amount * rates[toCurrency]) / rates[fromCurrency];
            setConvertedAmount(result.toFixed(2));
        }
    };

    return (
        <Box className="currency-rates" sx={{ my: 4 }}>
            <Typography className="currency-header" variant="h5">
                Конвертер валют
            </Typography>
            <Grid container spacing={2} justifyContent="center" className="currency-converter">
                <Grid item>
                    <TextField
                        label="Сумма"
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        variant="outlined"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        select
                        label="Из валюты"
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}
                        SelectProps={{
                            native: true,
                        }}
                        variant="outlined"
                    >
                        {Object.keys(rates).map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </TextField>
                </Grid>
                <Grid item>
                    <TextField
                        select
                        label="В валюту"
                        value={toCurrency}
                        onChange={(e) => setToCurrency(e.target.value)}
                        SelectProps={{
                            native: true,
                        }}
                        variant="outlined"
                    >
                        {Object.keys(rates).map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </TextField>
                </Grid>
                <Grid item>
                    <Button variant="contained" onClick={handleConvert}>
                        Конвертировать
                    </Button>
                </Grid>
            </Grid>

            {convertedAmount !== null && (
                <Typography className="currency-result" variant="h6">
                    {amount} {fromCurrency} = {convertedAmount} {toCurrency}
                </Typography>
            )}
        </Box>
    );
};

export default CurrencyRates;
