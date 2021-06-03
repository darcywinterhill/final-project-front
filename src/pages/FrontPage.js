import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

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
            sevärt
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
  width: 100vw;
`
const HeaderTitle = styled.h1`
  font-family: 'Noto Serif SC', serif;
  font-size: 48px;
  border-bottom: dashed white 2px;
  border-right: dashed white 2px;
  margin: 0;
  padding: 0 10px;
    @media (min-width: 768px) {
      font-size: 66px;
      border-bottom: dashed #ffffff 3px;
      border-right: dashed #ffffff 3px;
      padding: 0 15px;
    }
    @media (min-width: 1025px) {
      font-size: 72px;
    }
`
const MenuContainer = styled.div`
  border-left: dashed #ffffff 2px;
    @media (min-width: 768px) {
      border-left: dashed #ffffff 3px;
    }
`
const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 10px;
  list-style-type: none;
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
  font-family: 'Lato', sans-serif;
  color: #ffffff;
  font-size: 22px;
  text-decoration: none;
  text-transform: uppercase;
  display: block;  
  position: relative;
  padding: 4px 0;
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