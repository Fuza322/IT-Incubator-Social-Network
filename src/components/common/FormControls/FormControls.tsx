import React, {InputHTMLAttributes} from "react"
import {WrappedFieldProps} from "redux-form"
import style from "./FormControls.module.css"

export const FormControls = (Element: string) => ({input, meta, ...props}: WrappedFieldProps & InputHTMLAttributes<HTMLInputElement>) => {

    const hasError = meta.touched && meta.error

    return (
        <div>
            <Element className={meta.touched && meta.error ? style.error : ""} {...input} {...props}/>
            {hasError && <p className={style.spanError}>{meta.error}</p>}
        </div>
    )
}

export const FormElementInput = FormControls("input")
export const FormElementTextArea = FormControls("textarea")