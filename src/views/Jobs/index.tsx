import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, makeStyles, createStyles, Theme } from "@material-ui/core";


import Header from "../../components/Header/index";
import JobCard from "../../components/JobCard"
import { fetchJobs } from "../../actions/jobs"

import { dummyJobs } from "../../common/mock-data"
import "./style.css";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
    }),
);

const Jobs = () => {
    const classes = useStyles()
    const dispatch = useDispatch();
    const fetchingJobs: boolean = useSelector((state: any) => state.jobs.isFetchingJobs);
    const jobs: Array<any> = useSelector((state: any) => state.jobs.jobs);
    const user: string = useSelector((state: any) => state.user.user);

    useEffect(() => {
        dispatch(fetchJobs());
    }, [dispatch]);

    return (
        <div className="v-Container">
            <>
                <Header user={user} />
                <div className={classes.root}>
                    <Grid container spacing={1}>
                        <Grid container item xs={12} spacing={3}>
                            {fetchingJobs ? dummyJobs.map((i: number) => {
                                return <JobCard loading={true} key={i} />
                            }) : jobs.map((job: any, index: number) => {
                                return <JobCard loading={false} job={job} key={index} />
                            })}
                        </Grid>
                    </Grid>
                </div>
            </>
        </div>
    );
};
export default Jobs;