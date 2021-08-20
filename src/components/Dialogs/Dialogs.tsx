import React, {useCallback} from "react"
import {reduxForm, Field, InjectedFormProps} from "redux-form"
import {DialogPageType} from "../../redux/dialogs-reducer"
import {required, maxLenghtCreator} from "../../utils/validators/validators"
import {FormElementTextArea} from "../common/FormControls/FormControls"
import {Message} from "./Message/Message"
import {DialogItem} from "./DialogItem/DialogItem"
import style from "./Dialogs.module.css"

type MessageFormDataType = {
    newMessageBody: string
}

const maxLenght30 = maxLenghtCreator(30)

const AddMessageForm = React.memo((props: InjectedFormProps<MessageFormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={"newMessageBody"}
                    placeholder="Enter your message"
                    component={FormElementTextArea}
                    validate={[required, maxLenght30]}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
})

type DialogPropsType = {
    dialogs: DialogPageType
    sendMessage: (newMessageBody: string) => void
}

const AddMessageFormRedux = reduxForm<MessageFormDataType>({form: "dialogAddMessageForm"})(AddMessageForm)

export const Dialogs = React.memo((props: DialogPropsType) => {

    const dialogsElements = props.dialogs.dialogs.map(d => <DialogItem id={d.id} key={d.id} name={d.name}/>)
    const messagesElements = props.dialogs.messages.map(d => <Message id={d.id} key={d.id} message={d.message}/>)

    const addNewMessage = useCallback((values: MessageFormDataType) => {
        props.sendMessage(values.newMessageBody)
    }, [props])

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
})