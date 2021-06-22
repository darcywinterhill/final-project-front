import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

const BackButton = () => {
  return (
    <NavLink to='/collage'>
      <BackLink className='fas fa-arrow-alt-circle-left'>
      </BackLink>
    </NavLink>
  )
}

export default BackButton

const BackLink = styled.i`
  font-size: 40px;
  color: #fff;
  margin: 20px 0 40px 20%;
  width: fit-content;
  cursor: pointer;
    @media (min-width: 768px) {
      font-size: 50px;
      margin: 40px 0 60px 10%;
    }
    @media (min-width: 1025px) {
      font-size: 50px;
      margin-left: 7%;
    }
`
const NavLink = styled(Link)`
  text-decoration: none;
`