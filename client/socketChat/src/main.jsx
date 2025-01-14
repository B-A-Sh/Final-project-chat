import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ChatHomePage from './pages/ChatHomePage'
import RockPaperScissorsMain from './pages/RockPaperScissors/RockPaperScissorsMain.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ChatHomePage />} />
        <Route path='/game/RPS' element={<RockPaperScissorsMain gameMode="multi" />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
