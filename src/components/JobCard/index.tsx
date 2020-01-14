import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Skeleton from '@material-ui/lab/Skeleton';
import { Button, CardActions, CardHeader, Avatar } from '@material-ui/core';

import { makeAvatar, makeRandomColor } from "../../common/mock-data"

interface IProps {
    loading: boolean
    job?: any
}

const useStyles = makeStyles({
    card: {
        width: 350,
        height: 200,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    }
});

const JobCard: React.FC<IProps> = ({ loading, job }) => {
    const classes = useStyles();

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
        </Card >) : (<Card className={classes.card} variant="outlined">
            <CardHeader
                avatar={
                    // using style attribute only to get a different dummycolor for each avatar, dont hate me <3
                    <Avatar aria-label="recipe" style={{ background: makeRandomColor() }}>
                        {makeAvatar()}
                    </Avatar>
                }
                title={<b>{job.title}</b>}
            />
            <CardContent>
                {job.description}
            </CardContent>
            <CardActions>
                <Button size="small" variant="contained"
                    color="primary" >More info</Button>
            </CardActions>
        </Card>);
}

export default JobCard;