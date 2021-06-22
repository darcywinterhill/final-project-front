import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import ScrollToTop from '../UI/ScrollToTop'

const NavLinks = () => {
  return (
    <NavBar>
      <ContentContainer>
      <ScrollToTop />
      <NavLink to='/category/f7729ff6-0926-4cf8-8109-5edec479bbf6'>
        grannlåtsbroderi
      </NavLink>
      <NavLink to='/category/99f6299b-d73d-46e6-a3b4-5566b9c607c6'>
        trådslöjd
      </NavLink>
      <NavLink to='/category/55879e1b-2df3-4ec0-ba59-41fda5d3e621'>
        cementgjutning
      </NavLink>
      <NavLink to='/category/9640773c-73c6-47dd-b9d9-b8b63a93e2d1'>
        fritt broderi
      </NavLink>
      <NavLink to='/category/46de1a3e-b774-4de0-9a07-0110ef0fdc36'>
        skinn/läder
      </NavLink>
      <NavLink to='/category/bfba4621-5177-49b9-af53-4483371f12d9'>
        tenntrådsbroderi
      </NavLink>
      <NavLink to='/category/9957652e-b9f6-4c48-89e3-5e70362499cb'>
        skapa med färg
      </NavLink>
      <NavLink to='/category/45141845-0597-4154-8428-af9431bb86cd'>
        vävning
      </NavLink>
      <NavLink to='/category/e232887b-8932-464a-b705-ff43bf7051dc'>
        ullprojekt
      </NavLink>
      </ContentContainer>
    </NavBar>
  )
}

export default NavLinks

const NavLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  margin: 2.5px 10px;
  color: #fff;
  font-size: 14px;
    @media (min-width: 768px) {
      margin: 2.5px 10px 5px 10px;
      font-size: 16px;
    }
    @media (min-width: 1025px) {
      font-size: 14px;
      margin: 2.5px 5px;
    }
`
const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: #581314;
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.75);
  align-items: center;
  padding: 10px 0;
    @media (min-width: 768px) {
      padding: 10px 2.5px;
    }
    @media (min-width: 1025px) {
      justify-content: space-between;
    }
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
    @media (min-width: 768px) {
      width: 90%;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
    @media (min-width: 1025px) {
      width: 90%;
      justify-content: space-evenly;
    }
`