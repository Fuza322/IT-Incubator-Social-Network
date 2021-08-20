import React from "react"
import {NavLink} from "react-router-dom"
import style from "./Header.module.css"

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logoutUser: () => void
}

export const Header = React.memo((props: HeaderPropsType) => {
    return (
        <header className={style.header}>
            <img
                src="https://w7.pngwing.com/pngs/1024/211/png-transparent-social-media-name-tag-social-web-social-media-angle-logo-social-media.png"
                alt="HeaderLogo"/>
            <div className={style.loginBlock}>
                {props.isAuth
                    ? <div>{props.login}
                        <button onClick={props.logoutUser}>Logout</button>
                    </div>
                    : <NavLink to={"/login"}>Login</NavLink>
                }
            </div>
        </header>
    )
})