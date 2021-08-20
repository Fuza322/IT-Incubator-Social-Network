import React, {useCallback} from "react"
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"
import {reduxForm, Field, InjectedFormProps} from "redux-form"
import {RootStateType} from "../../redux/redux-store"
import {loginUserTC} from "../../redux/auth-reducer"
import {required, maxLenghtCreator} from "../../utils/validators/validators"
import {FormElementInput} from "../common/FormControls/FormControls"
import style from "./Login.module.css"

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const maxLength40 = maxLenghtCreator(40)

const LoginForm = React.memo((props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    type={"text"}
                    name={"email"}
                    placeholder={"E-mail"}
                    component={FormElementInput}
                    validate={[required, maxLength40]}
                />
            </div>
            <div>
                <Field
                    type={"password"}
                    name={"password"}
                    placeholder={"Password"}
                    component={FormElementInput}
                    validate={[required, maxLength40]}
                />
            </div>
            <div>
                <Field
                    type={"checkbox"}
                    name={"rememberMe"}
                    component={"input"}
                />Remember me
            </div>
            {props.error &&
            <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
})

const LoginReduxForm = reduxForm<FormDataType>({form: "LoginForm"})(LoginForm)

type MapStateToPropsType = {
    isAuth: boolean
}

type LoginPropsType = {
    isAuth: boolean
    loginUser: (email: string, password: string, rememberMe: boolean) => void
}

const Login = React.memo((props: LoginPropsType) => {

    const onSubmit = useCallback((formData: FormDataType) => {
        props.loginUser(formData.email, formData.password, formData.rememberMe)
    }, [props])

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
})

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {
    loginUser: loginUserTC
})(Login)