import { classNames } from '@/lib/classNames';
import cls from './LoginPage.module.scss';
import {LoginForm} from "@/components/LoginForm";

interface LoginPageProps {
    className?: string;
}

export const LoginPage = (props: LoginPageProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.LoginPage, {}, [className])}>
            <LoginForm/>
        </div>
    )
};
