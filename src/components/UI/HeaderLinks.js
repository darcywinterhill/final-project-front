/* import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderLinks = ({ backLink, linkOne, linkTwo, linkThree }) => {
  return (
    <LinkContainer>
    <Link to='/'>
    <PageLink>
      {backLink}
    </PageLink>
    </Link>
    <PageLink>
      {linkOne}
    </PageLink>
    <PageLink>
      {linkTwo}
    </PageLink>
    <PageLink>
      {linkThree}
    </PageLink>
  </LinkContainer>
  )
}

export default HeaderLinks

const LinkContainer = styled.div`
display: flex;
justify-content: space-between;
position: absolute;
left: 0;
top: 0;
width: 100%;
`
const PageLink = styled.h4`
` */