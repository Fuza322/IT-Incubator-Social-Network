import React, {ChangeEvent, useState, useEffect, useCallback} from "react"
import styles from "./ProfileInfo.module.css"

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileStatusWithHooks = React.memo((props: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = useCallback(() => {
        setEditMode(true)
    }, [])

    const deactivateEditMode = useCallback(() => {
        setEditMode(false)
        props.updateUserStatus(status)
    }, [props, status])

    const onStatusChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }, [])

    return (
        <div className={styles.profileInfoStatus}>
            <span className={styles.title}>Status:</span>
            {!editMode
            && <div>
                <span onDoubleClick={activateEditMode}>{props.status || "No status"}</span>
            </div>}
            {editMode
            && <div>
                <input value={status}
                       autoFocus={true}
                       onBlur={deactivateEditMode}
                       onChange={onStatusChange}
                />
            </div>}
        </div>
    )
})