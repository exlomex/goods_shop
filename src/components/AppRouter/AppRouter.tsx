import { Route, Routes } from 'react-router-dom';
import {MainPage} from "@/pages/MainPage";
import {LoginPage} from "@/pages/LoginPage";
import {RequireGuest} from "@/components/RequireGuest";
import {GoodPage} from "@/pages/GoodPage";

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
        </Routes>
);
