import { Route, Routes } from 'react-router-dom';
import {MainPage} from "@/pages/MainPage";
import {LoginPage} from "@/pages/LoginPage";
import {RequireGuest} from "@/components/RequireGuest";
import {GoodPage} from "@/pages/GoodPage";
import {RegisterPage} from "@/pages/RegisterPage";

export const AppRouter = () => (
        <Routes>
            <Route path="/" element={
                <MainPage/>
            }/>
            <Route path="/login" element={
                <RequireGuest>
                    <LoginPage/>
                </RequireGuest>
            }/>
            <Route path="/goods/:id" element={
                <GoodPage/>
            }/>
            <Route path="/register" element={
                <RequireGuest>
                    <RegisterPage/>
                </RequireGuest>
            }/>
        </Routes>
);
