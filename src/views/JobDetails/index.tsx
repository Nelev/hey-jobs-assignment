import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import { fetchJob } from "../../actions/jobs";
import { useQuery } from "../../hooks/hooks";
import { IJob } from '../../model/IJob';
import { dummyJobs } from "../../common/mock-data";
import Skeleton from '@material-ui/lab/Skeleton';

const jobTypeMap = {
    fullTime: "full_time",
    partTime: "part_time"
}

interface IJobType {
    jobType: string
}


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

    const JobType: React.FC<IJobType> = ({ jobType }) => {
        switch (jobType) {
            case jobTypeMap.fullTime:
                return <FormattedMessage id='jobDetails.fullTime' />;
            case jobTypeMap.partTime:
                return <FormattedMessage id='jobDetails.partTime' />;
            default:
                return null;
        }
    }

    const Title: React.FC = () => {
        return job && <h2>Details of {job.id} </h2>
    }

    const JobSheet: React.FC = () => {
        return job ? (<>
            <Title />
            <h3><FormattedMessage id='jobDetails.title' /></h3>{job.title}
            <h3><FormattedMessage id='jobDetails.description' /></h3><p>{job.description}</p>
            <h3><FormattedMessage id='jobDetails.type' /> </h3><p><JobType jobType={job.workTime} /></p>
            <h3><FormattedMessage id='jobDetails.company' /></h3><p>{job.company}</p>
            <h3><FormattedMessage id='jobDetails.location' /></h3><p>{job.address}</p>
            <h3><FormattedMessage id='jobDetails.salary' /></h3><p>{job.salary}</p>
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