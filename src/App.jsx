import { useState } from 'react'
import './App.css'
//Imports para rutas
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes} from './routes'

function App() {

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App
