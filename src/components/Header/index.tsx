import React from "react";
import { FormattedMessage } from "react-intl";

import "./style.css";

interface IProps {
    user: string;
}

const Header: React.FC<IProps> = ({ user }) => {

    return (
        <div className="c-Header">
            <span className="c-HeaderTitle">
                Hey {user}, <FormattedMessage id="app.title" />
            </span>
        </div>
    );
};

export default Header;