import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import headerimg from '../assets/fabric-mobile.jpg'

const FrontPage = () => {
  return (
    <Main>

      <HeaderTitle>
        TANTVERK
      </HeaderTitle>

      <MenuContainer>
        <Menu>

          <SectionLink to='/collage'>
          <ListItem>
          <Icon className="fas fa-palette">
          </Icon>
            hantverk
          </ListItem>
          </SectionLink>

          <SectionLink to='/about'>
          <ListItem>
          <Icon className='far fa-user'>
          </Icon>
            om
          </ListItem>
          </SectionLink>

          <SectionLink to='/events'>
          <ListItem>
          <Icon className='far fa-calendar-alt'>
          </Icon>
            events
          </ListItem>
          </SectionLink>

          <SectionLink to='/bulletin'>
          <ListItem>
          <Icon className='far fa-comment-alt'>
          </Icon>
            anslagstavla
          </ListItem>
          </SectionLink>

        </Menu>
      </MenuContainer>

    </Main>
  )
}

export default FrontPage

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${headerimg});
  background-size: cover;
  overflow: hidden;
`
const HeaderTitle = styled.h1`
  font-family: 'Noto Serif SC', serif;
  font-size: 48px;
  color: #ffffff;
  margin: 0;
  padding: 0 10px;
  border-bottom: dashed white 2px;
  border-right: dashed white 2px;
    @media (min-width: 768px) {
      font-size: 66px;
      padding: 0 15px;
      border-bottom: dashed white 3px;
      border-right: dashed white 3px;
    }
    @media (min-width: 1025px) {
      font-size: 72px;
    }
`
const MenuContainer = styled.div`
  border-left: dashed white 2px;
    @media (min-width: 768px) {
      border-left: dashed white 3px;
    }
`
const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  list-style-type: none;
  padding-left: 10px;
`
const ListItem = styled.li`
  padding: 6px 0;
`
const Icon = styled.i`
  padding-right: 10px;
   @media (min-width: 768px) {
    padding-right: 20px;
   }
`
const SectionLink = styled(Link)`
  position: relative;
  display: block;
  padding: 4px 0;
  font-family: Lato, sans-serif;
  color: #ffffff;
  font-size: 22px;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
    &::after {
      position: absolute;
      content: '';
      top: 100%;
      left: 0;
      width: 100%;
      height: 2px;
      background: #d6c667;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.5s;
    }
    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
    @media (min-width: 768px) {
      font-size: 30px;
    }
`