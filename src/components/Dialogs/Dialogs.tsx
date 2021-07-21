import React from "react"
import {reduxForm, Field, InjectedFormProps} from "redux-form"
import {DialogPageType} from "../../redux/dialogs-reducer"
import Message from "./Message/Message"
import DialogItem from "./DialogItem/DialogItem"
import style from "./Dialogs.module.css"

type MessageFormDataType = {
    newMessageBody: string
}

const AddMessageForm = (props: InjectedFormProps<MessageFormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newMessageBody"} placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

type DialogPropsType = {
    dialogs: DialogPageType
    sendMessage: (newMessageBody: string) => void
}

const AddMessageFormRedux = reduxForm<MessageFormDataType>({form: "dialogAddMessageForm"})(AddMessageForm)

function Dialogs(props: DialogPropsType) {

    let dialogsElements = props.dialogs.dialogs.map(d => <DialogItem id={d.id} key={d.id} name={d.name}/>)
    let messagesElements = props.dialogs.messages.map(d => <Message id={d.id} key={d.id} message={d.message}/>)

    const addNewMessage = (values: MessageFormDataType) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

export default Dialogs