import React from 'react';
import { AppBar, Toolbar, Typography, Container, CssBaseline, Box, IconButton, Avatar } from '@mui/material';
import { WhatsApp, Telegram, Email } from '@mui/icons-material';
import Gallery from './components/Gallery';
import ApplicationForm from './components/ApplicationForm';
import SurveyForm from './components/SurveyForm';
import CurrencyRates from './components/CurrencyRates';
import YouTubeVideo from './components/YouTubeVideo';
import NewsBlock from './components/NewsBlock';
import Contacts from './components/Contacts';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from './img/logo.jpg';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Avatar alt="Logo" src={logo} sx={{ width: 40, height: 40, marginRight: 2 }} />
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Мой сайт
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            <IconButton color="inherit" href="https://wa.me/yourwhatsappnumber" target="_blank">
              <WhatsApp />
            </IconButton>
            <IconButton color="inherit" href="https://t.me/yourtelegramhandle" target="_blank">
              <Telegram />
            </IconButton>
            <IconButton color="inherit" href="mailto:youremail@example.com">
              <Email />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', minHeight: '100vh' }}>
        <Container sx={{ marginBottom: 10 }}>
          <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
            <YouTubeVideo />
          </Box>

          <Gallery
            images={[
              { url: './src/photo/image1.jpg', title: 'Кирпичи', alt: 'Image 1' },
              { url: './src/photo/image2.jpg', title: 'Краска', alt: 'Image 2' },
              { url: './src/photo/image3.jpg', title: 'Инструменты', alt: 'Image 3' }
            ]}
          />
          <ApplicationForm />
          <SurveyForm />
          <CurrencyRates />

          <Box sx={{ textAlign: 'center', marginTop: 4 }}>
            <NewsBlock />
          </Box>
        </Container>

        <Box sx={{ padding: 2, textAlign: 'center', backgroundColor: '#333' }}>
          <Contacts />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
