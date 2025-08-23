import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { lazy } from 'react'
import AdminPage from './pages/Admin';

const AppLayout = lazy(() => import("./layouts/AppLayout")); 
const ServerSetupPage = lazy(() => import("./pages/ServerSetup"));
const RootHandler = lazy(() => import("./components/RootHandler"));
const LoginPage = lazy(() => import("./pages/Login"));
const RegisterPage = lazy(() => import("./pages/Register"));
const HomePage = lazy(() => import("./pages/Home"));
const ProtectedRoute = lazy(() => import("./layouts/ProtectedRoute"));
const AdminRoute = lazy(() => import("./layouts/AdminRoute"));

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <AppLayout /> }>
          <Route index element={ <RootHandler /> } />
          <Route path="server-setup" element={ <ServerSetupPage /> } />
          <Route path="login" element={ <LoginPage /> } />
          <Route path="register" element={ <RegisterPage /> } />
          <Route path="home" element={ <ProtectedRoute /> }>
            <Route index element={ <HomePage /> } />
          </Route>
          <Route path="admin" element={ <AdminRoute /> }>
            <Route index element={ <AdminPage /> } />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
