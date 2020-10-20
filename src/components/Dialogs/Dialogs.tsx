import React from 'react'
import s from './Dialogs.module.css'
import {DialogPageType} from '../../redux/state';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

function Dialogs(props: DialogPageType) {

    let dialogsElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name} />)
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