import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import { fetchJob } from "../../actions/jobs";
import { useQuery } from "../../hooks/hooks";
import { IJob } from '../../model/IJob';
import { dummyJobs } from "../../common/mock-data";
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            textAlign: "center"
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

    const isFetchingJob: boolean = useSelector(
        (state: any) => state.jobs.isFetchingJob
    );

    React.useEffect(() => {
        // is we had a page reload, fetch the correct job
        (!job && jobId) && dispatch(fetchJob(jobId));
    }, [dispatch, job, jobId]);

    const Title: React.FC = () => {
        return job && <h2>Details of {job.id} </h2>
    }

    const JobSheet: React.FC = () => {
        return job ? (<>
            <Title />
            <h3>Title: </h3>{job.title}
            <h3>Descritpion: </h3><p>{job.description}</p>
            <h3>Employment type: </h3><p>{job.workTime}</p>
            <h3>Company: </h3><p>{job.company}</p>
            <h3>Location: </h3><p>{job.address}</p>
            <h3>Salary: </h3><p>{job.salary}</p>
        </>) : null
    }

    const SkeletonSheet: React.FC = () => {
        return (<>{dummyJobs.map((i: number) => {
            return <Skeleton height={40} key={i} />
        })}
        </>)
    }

    return (
        <>
            <div className={classes.root}>
                <Paper variant="outlined" className={classes.root} >
                    {isFetchingJob ? <SkeletonSheet /> : <JobSheet />}
                </Paper >
            </div>
        </>);
}

export default JobDetails;