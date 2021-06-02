import React from 'react'
import styled from 'styled-components'

import NavBar from '../components/NavBar'
import Title from '../components/Title'
import Backdrop from '../components/Backdrop'
import MessageForm from '../components/bulletin/MessageForm'
import Messages from '../components/bulletin/Messages'

import headerimg from '../assets/fabric-mobile.jpg'

const BulletinPage = () => {

  return (
    <Main>
      <NavBar/>
      <Title
        title='ANSLAGSTAVLA'
      />
      <BulletinContainer>
        <MessageForm />
        <Backdrop
          width='40vw'>
        <Messages />
        </Backdrop>
      </BulletinContainer>
    </Main>
  )
}

export default BulletinPage

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-image: url(${headerimg});
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
  min-height: 100vh;
  max-width: 100vw;
  padding: 80px 0 30px 0;
    @media (min-width: 768px) {
      padding: 120px 0 30px 0;
    }
`
const BulletinContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
    @media (min-width: 1025px) {
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
    }
`