import React from "react"
import preloader from "../../../assets/images/preloader.gif"

type PreloaderPropsType = {

}

export const Preloader = (props: PreloaderPropsType) => {
    return (
        <div>
            <img src={preloader} alt="preloaderGif"/>
        </div>
    )
}