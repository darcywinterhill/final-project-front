import React from 'react'
/* import { Link } from 'react-router-dom' */
import styled from 'styled-components/macro'

const TopButton = () => {
  return (
    <Button
      href='#top'>
      <i class="fas fa-arrow-circle-up"></i>
    </Button>
  )
}

export default TopButton

const Button = styled.a`
color: #ffffff;
  width: 50px;
  height: 50px;
`