import React from "react";
import { Field, reduxForm } from "redux-form";
import Button from "@material-ui/core/Button"

import InputField from "../../components/fields/InputField/index";

import "./style.css";

interface IProps {
    pristine: boolean,
    submitting: boolean,
    handleSubmit: (values: any) => void;
}

const LoginForm: React.FC<IProps> = ({ pristine, submitting, handleSubmit }) => {
    return (
        <div className="c-Login-Form">
            <form onSubmit={handleSubmit}>
                <div>
                    <label style={{ color: "white" }}>Username</label>
                    <div>
                        <Field
                            name="username"
                            component={InputField}
                            type="text"
                            placeholder="User Name"
                        />
                    </div>
                </div>
                <div>
                    <Button
                        className="c-loginButton"
                        type="submit"
                        disabled={pristine || submitting}
                    >
                        Enter
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default reduxForm({
    form: "login"
})(LoginForm);