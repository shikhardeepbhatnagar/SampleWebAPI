import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Product } from '../models/products';
import Catalog from '../../features/catalog/Catalog';
import { Container, CssBaseline, Typography } from '@mui/material';
import Header from './Header';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { Route } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ContactPage from '../../features/contact/ContactPage';
import AboutPage from '../../features/about/AboutPage';
import ProductDetails from '../../features/catalog/ProductDetails';

// products will store what's inside state
function App() {
  
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light'
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? "#eaeaea" : "#121212"
      }
    }
  })

  function handleThemeChange(){
    setDarkMode(!darkMode);
  }

  return (
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/catalog' component={Catalog}/>
        <Route path='/catalog/:id' component={ProductDetails}/>
        <Route path='/about' component={AboutPage}/>
        <Route path='/contact' component={ContactPage}/>
      </Container>
      </ThemeProvider>
  );
}

// CssBaseLine is For Margin and Padding fir to browser
// const [products, setProducts] = useState(
  //   [
  //     {name: 'product1', price: 100.00},
  //     {name: 'product2', price: 200.00},
  //   ]
  // );
export default App;
