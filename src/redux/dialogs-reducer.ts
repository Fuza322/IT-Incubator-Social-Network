import {DialogItemType} from "../components/Dialogs/DialogItem/DialogItem"
import {MessageType} from "../components/Dialogs/Message/Message"
import {ActionsType} from "./profile-reducer"

export const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
export const SEND_MESSAGE = "SEND-MESSAGE"

export type DialogPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    newMessageBody: string
}

let initialState: DialogPageType = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Victor"},
        {id: 6, name: "Valera"}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
        {id: 6, message: "Yo"}
    ],
    newMessageBody: ""
}

export const dialogsReducer = (state: DialogPageType = initialState, action: ActionsType): DialogPageType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageBody: action.body
            }
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, {id: 7, message: body}]
            }
        }
        default:
            return state
    }
}

export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE
    } as const
}

export const updateNewMessageTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        body: newText
    } as const
}

export type DialogsActionsType =
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>