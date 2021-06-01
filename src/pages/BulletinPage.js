import React from 'react'
import styled from 'styled-components'

import NavBar from '../components/NavBar'
import Backdrop from '../components/Backdrop'
import MessageForm from '../components/bulletin/MessageForm'
/* import Messages from '../components/bulletin/Messages' */
import headerimg from '../assets/fabric-mobile.jpg'

const BulletinPage = () => {

  return (
    <Main>
      <NavBar/>
      <MessageForm />
      <Backdrop>
      {/* <Messages /> */}
      </Backdrop>
    </Main>
  )
}

export default BulletinPage

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  min-height: 100vh;
  width: 100vw;
  padding: 15vh 0 5vh 0;
  background-image: url(${headerimg});
  background-size: cover;
  overflow: hidden;
    @media (min-width: 1025px) {
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
    }
`