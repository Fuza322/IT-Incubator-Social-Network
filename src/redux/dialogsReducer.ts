import {
    DialogItemType,
    MessageType,
    ActionsType,
    SendMessageActionCreator,
    UpdateNewMessageTextActionCreator
} from "./state";

export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
export const SEND_MESSAGE = 'SEND-MESSAGE'

export type DialogPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    newMessageText: string
}

export type DialogsActionsType =
    | ReturnType<typeof SendMessageActionCreator>
    | ReturnType<typeof UpdateNewMessageTextActionCreator>

const dialogsReducer = (state: DialogPageType, action: ActionsType): DialogPageType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state
        case SEND_MESSAGE:
            let newText = state.newMessageText = action.newText
            state.newMessageText = ''
            state.messages.push({id: 6, message: newText})
            return state
        default:
            return state
    }
}

export default dialogsReducer