import React from 'react'

const Title = props => {
    const { details } = props

    return (
        <div>
            <h1>NASA photo of the day!</h1>
            <h2>{details.title}</h2>
            <h4>Date: {details.date}</h4>

        </div>
    )
}

export default Title