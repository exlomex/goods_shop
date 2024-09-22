import { Route, Routes } from 'react-router-dom';
import {MainPage} from "@/pages/MainPage";
import {LoginPage} from "@/pages/LoginPage";

export const AppRouter = () => (
        <Routes>
            <Route path="/" element={
                <MainPage/>
            }/>
            <Route path="/login" element={
                <LoginPage/>
            }/>
        </Routes>
);
