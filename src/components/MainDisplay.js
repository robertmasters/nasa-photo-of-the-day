import React from 'react'

const MainDisplay = props => {
    const { details } = props

    return (
        <div>
            
        <img src={details.url} alt = 'random space'/>
        <h3>{details.explanation}</h3>

        </div>
    )
}

export default MainDisplay