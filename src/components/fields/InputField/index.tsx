import React from "react";
import Button from "@material-ui/core/Input"

interface IProps {
    input: any
}

const InputField: React.FC<IProps> = ({ input }) => {
    return <Button {...input} color="primary" />;
};

export default InputField;