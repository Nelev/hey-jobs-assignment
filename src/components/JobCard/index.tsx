import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Avatar, CardHeader, Theme, Tooltip, createStyles } from '@material-ui/core';
import InfoSharp from "@material-ui/icons/InfoSharp"
import Skeleton from '@material-ui/lab/Skeleton';

import { fetchJob } from "../../actions/jobs"
import { IJob } from "../../model/IJob"
import { makeAvatar, makeRandomColor } from "../../common/mock-data"

interface IProps {
    loading: boolean;
    job?: IJob;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            width: 350,
            height: 200,
        },
        title: {
            fontSize: 14,
        },
        icon: {
            float: "right",
            bottom: 0
        },
        cardContent: {
            maxHeight: 60,
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden"
        }
    }
    ));;

const JobCard: React.FC<IProps> = ({ loading, job }) => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSelectProject = (job: IJob) => {
        dispatch(fetchJob(job.id))
        history.push(`/jobs?jobId=${job.id}`)

    }

    // rendering skeleton cards while in loading state
    return loading ? (
        <Card className={classes.card} variant="outlined">
            <CardContent>
                <>
                    <Skeleton variant="circle" width={40} height={40} />
                    <Skeleton height={40} />
                    <Skeleton height={40} />
                    <Skeleton height={40} />
                </>
            </CardContent>
        </Card >) : job ? (<Card className={classes.card} variant="outlined">
            <CardHeader
                avatar={
                    // using style attribute only to have a different dummycolor for each avatar, dont hate me <3
                    <Avatar aria-label="recipe" style={{ background: makeRandomColor() }}>
                        {makeAvatar()}
                    </Avatar>
                }
                title={<b>{job.title}</b>}
            />
            <CardContent className={classes.cardContent}>
                {job.description}
            </CardContent>
            <Tooltip title="See more">
                <InfoSharp className={classes.icon} color="primary" onClick={() => { handleSelectProject(job) }} />
            </Tooltip>
        </Card>) : null;
}

export default JobCard;