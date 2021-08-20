import React from "react"
import preloader from "../../../assets/images/preloader.gif"

export const Preloader = React.memo(() => {
    return (
        <div>
            <img src={preloader} alt="preloaderGif"/>
        </div>
    )
})