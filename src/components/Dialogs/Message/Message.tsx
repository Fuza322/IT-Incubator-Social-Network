import React from "react"
import style from "./../Dialogs.module.css"

export type MessageType = {
    id: number
    message: string
}

export const Message = React.memo((props: MessageType) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
})