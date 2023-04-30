import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Components/Routes/Route.jsx'
import ContexProvider from './Components/AuthProvider/ContexProvider'






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContexProvider>
      <RouterProvider router={router}></RouterProvider>
    </ContexProvider>
  </React.StrictMode>,
)
