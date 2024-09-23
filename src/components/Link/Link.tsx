import { classNames } from '@/lib/classNames';
import cls from './Link.module.scss';
import {Link} from "react-router-dom";
import {ReactNode} from "react";

interface LinkProps {
    className?: string;
    to: string,
    children: ReactNode;
}

export const StyledLink = (props: LinkProps) => {
    const { className, to, children } = props;
    return (
        <Link className={classNames(cls.Link, {}, [className])} to={to}>
            {children}
        </Link>
    )
};
