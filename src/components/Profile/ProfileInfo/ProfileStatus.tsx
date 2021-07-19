import React, {ChangeEvent} from "react"

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

type ProfileStatusStateType = {
    editMode: boolean
    status: string
}


class ProfileStatus extends React.Component<ProfileStatusPropsType, ProfileStatusStateType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<ProfileStatusStateType>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "-----"}</span>
                    </div>
                    : <div>
                        <input
                            type="text"
                            value={this.state.status}
                            onChange={this.onStatusChange}
                            autoFocus onBlur={this.deactivateEditMode}
                        />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus