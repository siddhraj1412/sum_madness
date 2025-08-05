import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Sum from './Sum.jsx'
import App from './App.jsx'
import Hookdemo from './Hookdemo.jsx'
import Sumdemo from './Sumdemo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)