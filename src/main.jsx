import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProvider from './provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='pt-5 px-1 lg:p-10 bg-gradient-to-r from-black via-purple-400 to-black '>
    <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
  </div>
)
