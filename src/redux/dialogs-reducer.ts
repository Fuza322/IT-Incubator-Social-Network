import {DialogItemType} from "../components/Dialogs/DialogItem/DialogItem"
import {MessageType} from "../components/Dialogs/Message/Message"
import {ActionsType} from "./profile-reducer"

export const SEND_MESSAGE = "SEND-MESSAGE"

export type DialogPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
}

const initialState: DialogPageType = {
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
    ]
}

export const dialogsReducer = (state: DialogPageType = initialState, action: ActionsType): DialogPageType => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: body}]
            }
        }
        default:
            return state
    }
}

export const sendMessageAC = (newMessageBody: string) => {
    return {type: SEND_MESSAGE, newMessageBody: newMessageBody} as const
}

export type DialogsActionsType =
    ReturnType<typeof sendMessageAC>