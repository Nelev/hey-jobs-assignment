import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, makeStyles, createStyles, Theme } from "@material-ui/core";

import JobCard from "../../components/JobCard"
import { fetchJobs } from "../../actions/jobs"
import { IJob } from "../../model/IJob"

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

    // selectors for redux store
    const isFetchingJobs: boolean = useSelector((state: any) => state.jobs.isFetchingJobs);
    const jobs: Array<IJob> = useSelector((state: any) => state.jobs.jobs);

    // fetch jobs
    useEffect(() => {
        dispatch(fetchJobs());
    }, [dispatch]);

    return (
        <>
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid container item xs={12} spacing={3}>
                        {isFetchingJobs ? dummyJobs.map((i: number) => {
                            return <Grid key={i} item><JobCard loading={true} key={i} /></Grid>
                        }) : jobs.map((job: IJob, index: number) => {
                            return <Grid key={index} item><JobCard loading={false} job={job} key={index} /></Grid>
                        })}
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default Jobs;