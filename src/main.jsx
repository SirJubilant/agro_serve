import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const colors = {
  grun: {
    main: "#00A74f",
    footer: "#215c0c",
    star: "#FF0505"
  }
}

const fonts ={
  body: 'Montserrat',
  heading: 'Montserrat',
  brand: 'jsMath-cmbx10',
  rale: 'Raleway'
}

const theme = extendTheme({ colors, fonts });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>

    <App />
    </ChakraProvider>
  </React.StrictMode>,
)
