import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { lazy } from 'react'

const AppLayout = lazy(() => import("./layout/AppLayout")); 
const ServerSetup = lazy(() => import("./pages/ServerSetup"));
const RootHandler = lazy(() => import("./components/RootHandler"));

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <AppLayout /> }>
          <Route index element={ <RootHandler /> } />
          <Route path="server-setup" element={ <ServerSetup /> }>
            
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
