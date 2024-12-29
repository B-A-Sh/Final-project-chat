import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Chatbox message="adele"></Chatbox> */}
    <HomePage></HomePage>
  </StrictMode>,
)
