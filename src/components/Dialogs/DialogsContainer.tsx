import React from 'react'
import {SendMessageActionCreator, UpdateNewMessageTextActionCreator,
} from '../../redux/store';
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

type DialogsContainerPropsType = {

}

function DialogsContainer(props: DialogsContainerPropsType) {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState()
                let onSendMessageClick = () => {
                    store.dispatch(SendMessageActionCreator(state.dialogsPage.newMessageText))
                }

                let onNewMessageChange = (body: string) => {
                    store.dispatch(UpdateNewMessageTextActionCreator(body))
                }

                return (
                    <Dialogs
                        state={state}
                        updateNewMessageBody={onNewMessageChange}
                        sendMessage={onSendMessageClick}
                    />)
            }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;