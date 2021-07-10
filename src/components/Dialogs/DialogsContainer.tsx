import {connect} from "react-redux"
import {RootStateType} from "../../redux/redux-store"
import {UpdateNewMessageTextActionCreator, SendMessageActionCreator} from "../../redux/dialogs-reducer"
import Dialogs from "./Dialogs"

let mapStateToProps = (state: RootStateType) => {
    return {
        dialogs: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(UpdateNewMessageTextActionCreator(body))
        },
        sendMessage: () => {
            dispatch(SendMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer