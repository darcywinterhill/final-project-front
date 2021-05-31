import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <NavContainer> 
      <Menu>
  <Label htmlFor="id-show-menu" class="show-menu">
    <div className='nav-icon'>
      <i class="fa fa-navicon"></i>
    </div>
  </Label>
  <input type="checkbox" id="id-show-menu" className="checkbox-menu" role="button" />
  {/* <MenuBlock> */}
  <div className='menu-block'>
    <MenuList>
      
      <ListItem><NavLink to='/'>HEM</NavLink></ListItem>
      
      
      <ListItem><NavLink to='/collage'>HANTVERK</NavLink></ListItem>
      
      
      <ListItem><NavLink to='/about'>OM</NavLink></ListItem>
      
      
      <ListItem><NavLink to='/events'>EVENTS</NavLink></ListItem>
      
      
      <ListItem><NavLink to='/bulletin'>ANSLAGSTAVLA</NavLink></ListItem>
      
    </MenuList>
    </div>
  {/* </MenuBlock> */}
</Menu>

{/*       <NavLink to='/'>
      <PageLink>
        HEM
      </PageLink>
      </NavLink>

      <NavLink to='/collage'>
      <PageLink>
        HANTVERK
      </PageLink>
      </NavLink>

      <NavLink to='/about'>
      <PageLink>
        OM
      </PageLink>
      </NavLink>

      <NavLink to='/events'>
      <PageLink>
        EVENTS
      </PageLink>
      </NavLink>

      <NavLink to='/bulletin'>
      <PageLink>
        ANSLAGSTAVLA
      </PageLink>
      </NavLink>
 */}
    </NavContainer>
  )
}

export default NavBar

const NavContainer = styled.div`
  width: 100%;
  height: 30px;
  position: absolute;
  top: 0;

`
const Menu = styled.nav`
`
const Label = styled.label`
cursor: pointer;
`
const NavIcon = styled.div`
display: inline-block;
font-size: 1.5em;
padding: 0.5em;
vertical-align: middle;
`
const MenuList = styled.ul`
list-style: none;
margin: 0;
padding: 0;
width:85vw;
`
const ListItem = styled.li`
display: inline-block;
padding: 0px 5px;
`
const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  color: #999999;
  display: block;
  padding: 3px;
   &:hover {
    color: #000000;
    text-decoration: none;
   }
`
const PageLink = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  color: white;
`
