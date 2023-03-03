import React from 'react'
import styled from 'styled-components'

const Container = styled.div `
  height: 30px;
  background-color: blue;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
        Super deal! Free Shipping for Order's over 300Rs
    </Container>
  )
}

export default Announcement;