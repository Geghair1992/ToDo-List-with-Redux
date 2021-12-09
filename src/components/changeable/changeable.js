import React from 'react'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'

const StyledDiv = styled.div`
  position: relative;
  left: 40%;
`


const Changeable = () => {
    
    return (
        <StyledDiv>
            <input type="text" placeholder="Edit"/>
            <Button>change</Button>
            <Button>Go Back</Button>
        </StyledDiv>
    )
}

export default Changeable;
