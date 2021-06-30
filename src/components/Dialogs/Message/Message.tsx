import React from "react"
import s from "./../Dialogs.module.css"

export type MessageType = {
    id: number
    message: string
}

function Message(props: MessageType) {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export default Message