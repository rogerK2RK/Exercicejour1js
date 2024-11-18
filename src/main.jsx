import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Title from './exercice/Title'
import Paragraph from './exercice/Paragraph'
import Image from './exercice/Image'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Title />
    <Paragraph />
    <Image />
  </StrictMode>,
)
