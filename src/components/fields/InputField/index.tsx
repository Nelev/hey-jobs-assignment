import React from "react";
import Input from "@material-ui/core/Input"

interface IProps {
    input: any
}

const InputField: React.FC<IProps> = ({ input }) => {
    return <Input {...input} />;
};

export default InputField;