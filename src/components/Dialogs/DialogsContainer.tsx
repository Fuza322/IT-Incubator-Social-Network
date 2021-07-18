import {connect} from "react-redux"
import {Dispatch} from "redux"
import {RootStateType} from "../../redux/redux-store"
import {updateNewMessageTextAC, sendMessageAC, DialogPageType} from "../../redux/dialogs-reducer"
import Dialogs from "./Dialogs"

type MapStateToPropsType = {
    dialogs: DialogPageType
    isAuth: boolean
}

type MapDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageTextAC(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer