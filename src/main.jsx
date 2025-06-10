import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Sidebar from './Sidebar.jsx'
import Page from './page.jsx'
import Dashboard from './Dashboard/dashboard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Sidebar/> */}
    {/* <Page/> */}
    <Dashboard/>
  </StrictMode>,
)
