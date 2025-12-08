import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import List from './List.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  
   <React.StrictMode>
    <ThemeContext>
        <BrowserRouter>
        </BrowserRouter>
        <App/>
    </ThemeContext>
   </React.StrictMode>
    
  
)
