import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../../components/Header/index";
import { fetchJobs } from "../../actions/jobs"

import "./style.css";

const Jobs = () => {
    const dispatch = useDispatch();
    const user: string = useSelector((state: any) => state.user.user);

    useEffect(() => {
        dispatch(fetchJobs());
    }, [dispatch]);


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