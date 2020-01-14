import React from "react";
import { useSelector } from "react-redux";

import Header from "../../components/Header/index";

import "./style.css";

const Jobs = () => {
    const user: string = useSelector((state: any) => state.user.user);

    return (
        <div className="v-Container">
            <>
                <Header user={user} />
                <div
                    className="v-ContentArea"
                >
                </div>
            </>
        </div>
    );
};
export default Jobs;