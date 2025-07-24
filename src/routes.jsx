import { Routes, Route} from 'react-router-dom';
import {AuthLayout} from './components/AuthLayout';
import { PublicLayout } from './components/PublicLayout';
import Home from './pages/Home';

import Perfil from './pages/Perfil';
import DashBoard from './pages/DashBoard';

import Login from './pages/Login';
import Registro from './pages/Registro';

import NotFound from './pages/NotFound';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AuthLayout />}>
                <Route index element={<Home />}/>
                <Route path="/Perfil" element={<Perfil />} />
                <Route path="/DashBoard" element={<DashBoard />} />
            </Route>

            <Route path="/" element={<PublicLayout />}>
                <Route index element={<Home />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Registro />} />
            </Route>

            <Route path="*" element={<NotFound />} />

        </Routes>
    );
}