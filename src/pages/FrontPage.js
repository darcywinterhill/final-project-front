import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import PaletteIcon from '@material-ui/icons/Palette'
import PersonIcon from '@material-ui/icons/Person'
import EventIcon from '@material-ui/icons/Event'
import MessageIcon from '@material-ui/icons/Message'

import bgimage from '../assets/fabric-mobile.jpg'

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
            <PaletteIcon
              style={{
                fontSize: '35px',
                marginRight: '15px'
              }}
            />
              hantverk
          </ListItem>
          </SectionLink>

          <SectionLink to='/about'>
          <ListItem>
            <PersonIcon
              style={{
                fontSize: '35px',
                marginRight: '15px'
              }}
            />
              om
          </ListItem>
          </SectionLink>

          <SectionLink to='/events'>
          <ListItem>
            <EventIcon
              style={{
                fontSize: '35px',
                marginRight: '15px'
              }}
            />
              sevärt
          </ListItem>
          </SectionLink>

          <SectionLink to='/bulletin'>
          <ListItem>
            <MessageIcon
              style={{
                fontSize: '35px',
                marginRight: '15px'
              }}
            />
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-image: url(${bgimage});
  background-size: cover;
  overflow: hidden;
`
const HeaderTitle = styled.h1`
  font-family: 'Noto Serif SC', serif;
  color: #fff;
  font-size: 48px;
  border-bottom: dashed white 2px;
  border-right: dashed white 2px;
  margin: 0;
  padding: 0 10px;
    @media (min-width: 768px) {
      font-size: 66px;
      border-bottom: dashed #fff 3px;
      border-right: dashed #fff 3px;
      padding: 0 15px;
    }
    @media (min-width: 1025px) {
      font-size: 72px;
    }
`
const MenuContainer = styled.div`
  border-left: dashed #fff 2px;
  padding-bottom: 30px;
    @media (min-width: 768px) {
      border-left: dashed #fff 3px;
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
  display: flex;
  align-items: center;
  padding: 6px 0;
`
const SectionLink = styled(Link)`
  font-family: 'Lato', sans-serif;
  color: #fff;
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
      background: #fff;
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