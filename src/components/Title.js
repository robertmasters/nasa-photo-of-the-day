import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
    color: white;
    background-color: maroon;
    opacity: 0.8;
    box-shadow: 0 0 10px #fff;
    padding: 2px;
    margin: 20px;
    width: 100%;
    margin: 0 auto;
`;

const Title = props => {
    const { details } = props

    return (
        <StyledHeader>
            <h1>NASA photo of the day!</h1>
            <h2>{details.title}</h2>
            <h4>Date: {details.date}</h4>

        </StyledHeader>
    )
}

export default Title