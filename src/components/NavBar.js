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
  position: absolute;  
  top: 0;
  width: 100%;
`
const Menu = styled.nav`
width: 100%;
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
  vertical-align: middle;
`
const MenuIcon = styled.i`
  font-size: 26px;
  color: white;
  margin-right: 8px;
    @media (min-width: 768px) {
      font-size: 48px;
    }
    @media (min-width: 1025px) {
      font-size: 42px;
    }
`
const MenuList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
    @media (min-width: 768px) {
    }
    @media (min-width: 1025px) {
    }
`
const ListItem = styled.li`
  display: inline-block;
`
const NavLink = styled(Link)`
width: 100%;
height: 100%;
`
const Icon = styled.i`
  font-size: 22px;
  color: white;
  border: dashed 1px #ffffff;
  border-radius: 5px;
  margin: 0 8px;
  padding: 5px;
  box-shadow: 4px 4px 6px rgba(33,33,33,.7);
    @media (min-width: 768px) {
      font-size: 36px;
      border: dashed 2px #ffffff;
      margin: 0 0 0 35px;
      padding: 8px;
      box-shadow: 5px 5px 7px rgba(33,33,33,.7);
    }
`
