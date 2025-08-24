import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { lazy, Suspense } from 'react';
import { Spinner } from './components/ui/shadcn-io/spinner';

const AppLayout = lazy(() => import("./layouts/AppLayout")); 
const ServerSetupPage = lazy(() => import("./pages/ServerSetup"));
const RootHandler = lazy(() => import("./components/RootHandler"));
const LoginPage = lazy(() => import("./pages/Login"));
const RegisterPage = lazy(() => import("./pages/Register"));
const HomePage = lazy(() => import("./pages/Home"));
const ProtectedRoute = lazy(() => import("./layouts/ProtectedRoute"));

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={ <Spinner className='text-[#e0e6e8]' size={32} /> }>
        <Routes>
          <Route path="/" element={ <AppLayout /> }>
            <Route index element={ <RootHandler /> } />
            <Route path="server-setup" element={ <ServerSetupPage /> } />
            <Route path="login" element={ <LoginPage /> } />
            <Route path="register" element={ <RegisterPage /> } />
            <Route path="home" element={ <ProtectedRoute /> }>
              <Route index element={ <HomePage /> } />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
