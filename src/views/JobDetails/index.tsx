import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import { fetchJob } from "../../actions/jobs"
import { useQuery } from "../../hooks/hooks"
import { IJob } from '../../model/IJob';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
        },
    }),
);

const JobDetails: React.FC = () => {
    const dispatch = useDispatch()
    const query = useQuery();
    const classes = useStyles();

    //get the jobId from the url
    const jobId = query.get("jobId")

    const job: IJob | null = useSelector(
        (state: any) => state.jobs.job
    );

    React.useEffect(() => {
        // is we had a page reload, fetch the correct job
        (!job && jobId) && dispatch(fetchJob(jobId));
    }, [dispatch, job, jobId]);

    return (
        <>
            <div className={classes.root}>
                <Paper variant="outlined" >
                    <span></span>
                </Paper >
            </div>
        </>);
}

export default JobDetails;