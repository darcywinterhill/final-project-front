import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

const NavBar = ({ collage, about, events, bulletin }) => {
  return (
    <NavContainer>  
      <NavLink to='/collage'>

      <PageLink>
        {collage}
      </PageLink>
      </NavLink>

      <NavLink to='/about'>
      <PageLink>
        {about}
      </PageLink>
      </NavLink>

      <NavLink to='/events'>
      <PageLink>
        {events}
      </PageLink>
      </NavLink>

      <NavLink to='/bulletin'>
      <PageLink>
        {bulletin}
      </PageLink>
      </NavLink>
      
    </NavContainer>
  )
}

export default NavBar

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 5vh;
`
const NavLink = styled(Link)`
  text-decoration: none;
`
const PageLink = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  color: white;
`
