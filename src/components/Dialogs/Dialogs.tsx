import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {RootReduxStateType} from "../../redux/redux-store";

type DialogPropsType = {
    state: RootReduxStateType
    updateNewMessageBody: (value: string) => void
    sendMessage: () => void
}

function Dialogs(props: DialogPropsType) {

    let dialogsElements = props.state.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = props.state.dialogsPage.messages.map(d => <Message id={d.id} message={d.message}/>)
    let newMessageText = props.state.dialogsPage.newMessageText

    let newMessage = React.createRef<HTMLTextAreaElement>()

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.updateNewMessageBody(newText)
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
                        <textarea value={newMessageText}
                                  onChange={onNewMessageChange}
                                  ref={newMessage}
                                  placeholder='Enter your message'>
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

export default Dialogs;