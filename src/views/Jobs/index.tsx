import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, makeStyles, createStyles, Theme } from "@material-ui/core";


import Header from "../../components/Header/index";
import JobCard from "../../components/JobCard"
import { fetchJobs } from "../../actions/jobs"

import { dummyJobs } from "../../common/mock-data"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            marginTop: 30
        },
    }),
);

const Jobs: React.FC = () => {
    const classes = useStyles()
    const dispatch = useDispatch();
    const isFetchingJobs: boolean = useSelector((state: any) => state.jobs.isFetchingJobs);
    const jobs: Array<any> = useSelector((state: any) => state.jobs.jobs);
    const user: string = useSelector((state: any) => state.user.user);

    useEffect(() => {
        dispatch(fetchJobs());
    }, [dispatch]);

    return (
        <>
            <Header user={user} />
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid container item xs={12} spacing={3}>
                        {isFetchingJobs ? dummyJobs.map((i: number) => {
                            return <JobCard loading={true} key={i} />
                        }) : jobs.map((job: any, index: number) => {
                            return <Grid key={index} item><JobCard loading={false} job={job} key={index} /></Grid>
                        })}
                    </Grid>
                </Grid>
            </div>
        </>
    );
};
export default Jobs;