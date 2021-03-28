import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import {
    DialogItemType,
    MessageType, SendMessageActionCreator,
    UpdateNewMessageTextActionCreator,
} from '../../redux/store';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {DialogsActionsType} from '../../redux/dialogs-reducer';

type DialogPropsType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    newMessageText: string
    dispatch: (action: DialogsActionsType) => void
}

function Dialogs(props: DialogPropsType) {

    let dialogsElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = props.messages.map(d => <Message id={d.id} message={d.message}/>)
    let newMessageText = props.newMessageText

    let newMessage = React.createRef<HTMLTextAreaElement>()

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.dispatch(UpdateNewMessageTextActionCreator(newText))
    }

    let sendMessageClick = () => {
        let text = newMessage.current?.value
        if (text) {
            props.dispatch(SendMessageActionCreator(text))
        }
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
                        <button onClick={sendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;