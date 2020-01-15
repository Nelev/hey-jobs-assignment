import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../../components/Header";
import Jobs from "../Jobs";
import JobDetails from "../JobDetails";


const Root: React.FC = () => {
    const user: string = useSelector((state: any) => state.user.user);

    return (
        <>
            <Header user={user} />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Jobs} />
                    <Route exact path="/:id" component={JobDetails} />
                </Switch>
            </BrowserRouter>
        </>
    );

}

export default Root;