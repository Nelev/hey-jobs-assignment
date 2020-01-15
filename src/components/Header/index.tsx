import React from "react";
import { makeStyles } from "@material-ui/core/styles";

interface IProps {
    user: string;
}

const useStyles = makeStyles({
    header: {
        height: 60,
        backgroundColor: "#aa00ff",
        color: "white",
        width: "100%",
        position: "sticky",
        animation: "fadein 2s",
        textAlign: "center"
    },
    title: {
        color: "white",
        fontSize: "150%",
        userSelect: "none"
    }
});

const Header: React.FC<IProps> = ({ user }) => {
    const classes = useStyles()

    return (
        <div className={classes.header}>
            <span className={classes.title}>
                Hey <b>{user}</b>, let´s find the job of your dreams!
            </span>
        </div>
    );
};

export default Header;