import React from 'react'
import s from './Dialogs.module.css'
import DialogItem, {DialogItemType} from './DialogItem/DialogItem';
import Message, {MessageType} from './Message/Message';

export type DialogsPageType = {
    dialogItems: Array<DialogItemType>
    messages: Array<MessageType>
}

function Dialogs(props: DialogsPageType) {

    let dialogsElements = props.dialogItems.map(d => <DialogItem id={d.id} name={d.name} />)
    let messagesElements = props.messages.map(d => <Message id={d.id} message={d.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;