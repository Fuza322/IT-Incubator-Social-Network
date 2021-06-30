import React, {ChangeEvent} from "react"
import Message from "./Message/Message"
import DialogItem from "./DialogItem/DialogItem"
import {DialogPageType} from "../../redux/dialogs-reducer"
import s from "./Dialogs.module.css"

type DialogPropsType = {
    dialogs: DialogPageType
    updateNewMessageBody: (value: string) => void
    sendMessage: () => void
}


function Dialogs(props: DialogPropsType) {

    let dialogsElements = props.dialogs.dialogs.map(d => <DialogItem id={d.id} key={d.id} name={d.name}/>)
    let messagesElements = props.dialogs.messages.map(d => <Message id={d.id} key={d.id} message={d.message}/>)
    let newMessageBody = props.dialogs.newMessageBody

    let newMessage = React.createRef<HTMLTextAreaElement>()

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.updateNewMessageBody(body)
    }

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                  onChange={onNewMessageChange}
                                  ref={newMessage}
                                  placeholder="Enter your message">
                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs