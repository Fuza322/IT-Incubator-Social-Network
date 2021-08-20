import React from "react"
import {NavLink} from "react-router-dom"
import s from "./../Dialogs.module.css"

export type DialogItemType = {
    id: number
    name: string
}

export const DialogItem = React.memo((props: DialogItemType) => {
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
})