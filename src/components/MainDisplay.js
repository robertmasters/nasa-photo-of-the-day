import React from 'react'
import styled from 'styled-components'

const StyledExplanation = styled.div`
  background-color: maroon;
  color: white;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  box-shadow: 0 0 10px #fff;
  opacity: 0.9;
`;

const StyledImage = styled.div`
margin: 20px;
background-color: maroon;
border-radius: 40% 12%;
box-shadow:
        inset 0 0 50px #fff,      /* inner white */
        inset 20px 0 80px #0ff,   /* inner left cyan short */
        inset -20px 0 80px #0ff,  /* inner right cyan short */
        inset 20px 0 300px #0ff,  /* inner left cyan broad */
        inset -20px 0 300px #0ff, /* inner right cyan broad */
        0 0 10px #fff,            /* outer white */
        -10px 0 20px #0ff,        /* outer left cyan */
        10px 0 20px #0ff;         /* outer right cyan */

`;

const MainDisplay = props => {
    const { details } = props

    return (
        <div>
            
            <StyledImage><img src={details.url} alt = 'collection of pixels used to display a desired piece of content relevant to the page'/></StyledImage>
            <StyledExplanation>{details.explanation}</StyledExplanation>

        </div>
    )
}

export default MainDisplay