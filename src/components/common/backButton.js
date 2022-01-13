import React from 'react'
// import { useHistory } from 'react-router-dom'
import "./backButton.css"

const BackButton = props => {
    // const history = useHistory()

    const goBack = () => {
        // history.goBack()
    }

    return (
        <div className="backButton" >
            <img src="/assets/svg/back-arrow.svg"/>
            <p onClick={goBack} className="back-label">Back</p>
        </div>
    )
}

export default BackButton
