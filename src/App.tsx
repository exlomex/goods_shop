import { classNames } from '@/lib/classNames';
import cls from './App.module.scss';
import {AppRouter} from "@/components/AppRouter/AppRouter";

export const App = () => {
    return (
        <div className={classNames(cls.App, {}, ['wrapper'])}>
            <p>{String(process.env.NODE_ENV)}</p>
            <AppRouter/>
        </div>
    )
};
