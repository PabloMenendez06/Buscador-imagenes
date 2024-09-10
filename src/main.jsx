import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BuscadorImagenesApp} from './component/BuscadorImagenesApp'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './estilos/style.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BuscadorImagenesApp />
  </StrictMode>,
)
