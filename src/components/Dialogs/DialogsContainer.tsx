import {connect} from "react-redux"
import {Dispatch} from "redux"
import {RootStateType} from "../../redux/redux-store"
import {updateNewMessageTextAC, sendMessageAC, DialogPageType} from "../../redux/dialogs-reducer"
import Dialogs from "./Dialogs"
import {withAuthRedirect} from "../../hoc/withAuthRedirect"

type MapStateToPropsType = {
    dialogs: DialogPageType
}

type MapDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

type DialogsContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage,
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

const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))

export default DialogsContainer