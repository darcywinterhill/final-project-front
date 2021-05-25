import React from 'react'
import styled from 'styled-components'

const BackButton = () => {
  return (
    <BackLink
      className="fas fa-arrow-alt-circle-left">
    </BackLink>
  )
}

export default BackButton

const BackLink = styled.i`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 0;
  font-size: 24px;
  color: white;
`