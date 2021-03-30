import {ActionsType, SendMessageActionCreator, UpdateNewMessageTextActionCreator} from "./store";
import {DialogItemType} from "../components/Dialogs/DialogItem/DialogItem";
import {MessageType} from "../components/Dialogs/Message/Message";

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

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'}
    ],
    newMessageText: ''
}

export const dialogsReducer = (state: DialogPageType = initialState, action: ActionsType): DialogPageType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state
        case SEND_MESSAGE:
            let newText = state.newMessageText = action.newText
            state.newMessageText = ''
            state.messages.push({id: 7, message: newText})
            return state
        default:
            return state
    }
}