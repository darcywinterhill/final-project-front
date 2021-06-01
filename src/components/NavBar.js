import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <NavContainer> 
      <Menu>
        <Label
          htmlFor='id-show-menu'
          className='show-menu'
        >
        <NavDiv>
          <MenuIcon className='fa fa-navicon'>  
          </MenuIcon>
        </NavDiv>
        </Label>
        <input
          type='checkbox'
          id='id-show-menu'
          className='checkbox-menu'
          role='button'
        />
        <div className='menu-block'>
          <MenuList>
            <ListItem>
              <NavLink to='/'>
              <Icon className='fas fa-home nav'>
              </Icon>
              </NavLink>
            </ListItem>
            
            <ListItem>
              <NavLink to='/collage'>
              <Icon className='fas fa-palette nav'>
              </Icon>
              </NavLink>
            </ListItem>
            
            <ListItem>
              <NavLink to='/about'>
              <Icon className='far fa-user nav'>
              </Icon>
              </NavLink>
            </ListItem>
            
            <ListItem>
              <NavLink to='/events'>
              <Icon className='far fa-calendar-alt nav'>
              </Icon>
              </NavLink>
            </ListItem>
            
            <ListItem>
              <NavLink to='/bulletin'>
              <Icon className='far fa-comment-alt nav'>
              </Icon>
              </NavLink>
            </ListItem>
          </MenuList>
        </div>
      </Menu>
    </NavContainer>
  )
}

export default NavBar

const NavContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
`
const Menu = styled.nav`
  padding-top: 20px;
  @media (min-width: 768px) {
    padding-top: 30px;
  }
`
const Label = styled.label`
  cursor: pointer;
`
const NavDiv = styled.div`
  display: inline-block;
  padding: 0 15px;
  vertical-align: middle;
   @media (min-width: 768px) {
    padding: 0 20px;
   }
`
const MenuIcon = styled.i`
  color: white;
  font-size: 26px;
    @media (min-width: 768px) {
      font-size: 48px;
    }
    @media (min-width: 1025px) {
      font-size: 42px;
    }
`
const MenuList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 80vw;
  @media (min-width: 768px) {
    justify-content: flex-end;
  }
  @media (min-width: 1025px) {
    width: 85vw;
  }
`
const ListItem = styled.li`
  display: inline-block;
`
const NavLink = styled(Link)`
`
const Icon = styled.i`
  color: white;
  font-size: 22px;
  padding: 10px;
  border-radius: 5px;
  border: dashed 1px #ffffff;
    @media (min-width: 768px) {
      font-size: 36px;
      margin: 0 0 0 35px;
      border: dashed 2px #ffffff;
    }
`
