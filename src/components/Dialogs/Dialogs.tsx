import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogItemPropsType = {
    id: string
    name: string
}

function DialogItem(props: DialogItemPropsType) {
    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    id: string
    message: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

function Dialogs() {

    let dialogsData = [
        {id: '1', name: 'Dimych'},
        {id: '2', name: 'Andrey'},
        {id: '3', name: 'Sveta'},
        {id: '4', name: 'Sasha'},
        {id: '5', name: 'Victor'},
        {id: '6', name: 'Valera'}
    ]

    let messagesData = [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How is your it-kamasutra?'},
        {id: '3', message: 'Yo'},
        {id: '4', message: 'Yo'},
        {id: '5', message: 'Yo'},
        {id: '6', message: 'Yo'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map(d => {return (<DialogItem id={d.id} name={d.name}/>)})}

            </div>
            <div className={s.messages}>
                {messagesData.map(d => {return (<Message id={d.id} message={d.message}/>)})}
            </div>
        </div>
    )
}

export default Dialogs;