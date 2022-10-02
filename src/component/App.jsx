import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Container } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Container>
      <div>
        <h1>Hello World</h1>
        { /*
        <div>
          Under Construction
        </div>
        */ }
      </div>
    </Container>
  </ThemeProvider>
);

export default App;
