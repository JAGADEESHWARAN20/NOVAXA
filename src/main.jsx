import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "aos/dist/aos.css";
import "remixicon/fonts/remixicon.css";
import 'boxicons'
import { inject } from '@vercel/analytics';
 

inject();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
