import React from "react"
import {reduxForm, Field, InjectedFormProps} from "redux-form"
import {required, maxLenghtCreator} from "../../utils/validators/validators"
import {FormElementInput} from "../common/FormControls/FormControls"

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const maxLength10 = maxLenghtCreator(10)

const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={"login"}
                    placeholder={"Login"}
                    component={FormElementInput}
                    validate={[required, maxLength10]}
                />
            </div>
            <div>
                <Field
                    name={"password"}
                    placeholder={"Password"}
                    component={FormElementInput}
                    validate={[required, maxLength10]}
                />
            </div>
            <div>
                <Field
                    type={"checkbox"}
                    name={"rememberMe"}
                    component={"input"}
                /> Remember me
            </div>
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
}

type LoginPropsType = {}

const LoginReduxForm = reduxForm<FormDataType>({form: "LoginForm"})(LoginForm)

export const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}