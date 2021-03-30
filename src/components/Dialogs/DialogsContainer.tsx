import React from 'react'
import {
    ActionsType,
    SendMessageActionCreator,
    UpdateNewMessageTextActionCreator,
} from '../../redux/store';
import Dialogs from "./Dialogs";
import {RootReduxStateType} from "../../redux/redux-store";

type DialogsContainerPropsType = {
    state: RootReduxStateType
    dispatch: (action: ActionsType) => void
}

function DialogsContainer(props: DialogsContainerPropsType) {

    let onSendMessageClick = () => {
        props.dispatch(SendMessageActionCreator(props.state.dialogsPage.newMessageText))
    }

    let onNewMessageChange = (body: string) => {
        props.dispatch(UpdateNewMessageTextActionCreator(body))
    }

    return (
        <Dialogs
            state={props.state}
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
        />
    )
}

export default DialogsContainer;