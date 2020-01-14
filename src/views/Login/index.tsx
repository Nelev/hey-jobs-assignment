import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import Favorite from "@material-ui/icons/Favorite"

import { login } from "../../actions/login";
import LoginForm from "../../components/LoginForm/index";

import "./style.css";

interface IProps {
    children: ReactElement;
}

interface ILoginValues {
    name?: string;
}

const Root: React.FC<IProps> = ({ children }) => {
    const logged: boolean = useSelector((state: any) => state.user.logged);
    const dispatch = useDispatch();

    const handleSubmit = (formValues: ILoginValues) => {
        dispatch(login(formValues));
    };

    const Footer: React.FC = () => {
        return (
            <div className="c-Login-Footer">
                © 2020
                <a
                    href="https://github.com/Nelev"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Nelev
                </a>
                , made with
                <Favorite fontSize="small" />
                in Berlin
            </div>
        );
    };

    const Title: React.FC = () => {
        return <div className="c-Login-Title">HeyJobs!</div>;
    };

    return logged === false ? (
        <div className="v-Login">
            <Title />
            <LoginForm onSubmit={handleSubmit} />
            <Footer />
        </div>
    ) : (
            children
        );
};

export default Root;