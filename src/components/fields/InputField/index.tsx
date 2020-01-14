import React, { ReactChildren } from "react";
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles";

interface IProps {
    input: ReactChildren
}

const useStyles = makeStyles({
    textfield: {
        backgroundColor: "white"
    },
    title: {
        fontSize: 14,
    }
});

// wrapper for form fields
const InputField: React.FC<IProps> = ({ input }) => {
    const classes = useStyles()
    return <TextField {...input} color="primary" className={classes.textfield} />;
};

export default InputField;