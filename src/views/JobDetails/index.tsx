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

    const job: IJob | null = useSelector(
        (state: any) => state.jobs.job
    );

    const jobId = query.get("jobId")

    React.useEffect(() => {
        !job && jobId && dispatch(fetchJob(jobId));
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