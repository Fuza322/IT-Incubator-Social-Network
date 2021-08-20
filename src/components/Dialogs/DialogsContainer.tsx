import React from "react"
import {connect} from "react-redux"
import {compose, Dispatch} from "redux"
import {RootStateType} from "../../redux/redux-store"
import {sendMessageAC, DialogPageType} from "../../redux/dialogs-reducer"
import {withAuthRedirect} from "../../hoc/withAuthRedirect"
import {Dialogs} from "./Dialogs"

type MapStateToPropsType = {
    dialogs: DialogPageType
}

type MapDispatchToPropsType = {
    sendMessage: (newMessageBody: string) => void
}

type DialogsContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageAC(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)