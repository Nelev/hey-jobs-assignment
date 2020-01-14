import React from "react";
import { FormattedMessage } from "react-intl";

import "./style.css";

const Header = () => {

    return (
        <div className="c-Header">
            <span className="c-HeaderTitle">
                <FormattedMessage id="app.title" />
            </span>
        </div>
    );
};

export default Header;