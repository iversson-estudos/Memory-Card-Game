import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import getRandomCard from './utils/getRandomCard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <p>GG</p>
  </StrictMode>
)

getRandomCard();