// main.jsx — Entry point aplikasi
// File ini bertugas "menyuntikkan" App ke dalam HTML (div#root)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'  // import global CSS (Tailwind)
import App from './App.jsx'

// createRoot adalah cara modern React 18 untuk merender aplikasi
createRoot(document.getElementById('root')).render(
  // StrictMode membantu mendeteksi potensi masalah saat development
  <StrictMode>
    <App />
  </StrictMode>,
)
