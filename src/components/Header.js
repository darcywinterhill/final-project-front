import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

/* import HeaderLinks from '../UI/HeaderLinks' */

import img from '../assets/headerimg.jpg'

const Header = ({
  title,
  backLink,
  linkOne,
  linkTwo,
  linkThree,
  backLinkRoute,
  linkOneRoute,
  linkTwoRoute,
  linkThreeRoute
}) => {

  return (
    <HeaderContainer>
      <LinkContainer>
        <Link to={backLinkRoute}>
        <PageLink>
          {backLink}
        </PageLink>
        </Link>
        <Link to={linkOneRoute}>
        <PageLink>
          {linkOne}
        </PageLink>
        </Link>
        <Link to={linkTwoRoute}>
        <PageLink>
          {linkTwo}
        </PageLink>
        </Link>
        <Link to={linkThreeRoute}>
        <PageLink>
          {linkThree}
        </PageLink>
        </Link>
      </LinkContainer>
      <HeaderTitle>
        {title}
      </HeaderTitle>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  height: 20%;
  margin-bottom: 10px;
`
const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
`
const PageLink = styled.h4`
`
const HeaderTitle = styled.h1`
  color: #ffffff;
  margin: 0;
`
