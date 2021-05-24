import React from 'react'
import styled from 'styled-components'

import img from '../assets/headerimg.jpg'

const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <HeaderTitle>
        {title}
      </HeaderTitle>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  height: 20%;
  margin-bottom: 10px;
`
const HeaderTitle = styled.h1`
  color: #ffffff;
  margin: 0;
`