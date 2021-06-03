import React from 'react'
import styled from 'styled-components'

import NavBar from '../components/NavBar'
import Title from '../components/Title'
import Backdrop from '../components/Backdrop'
import MessageForm from '../components/bulletin/MessageForm'
import Messages from '../components/bulletin/Messages'

const BulletinPage = () => {

  return (
    <Main>
      <Container>
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
      </Container>
    </Main>
  )
}

export default BulletinPage

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  width: 100vw;
  padding: 80px 0 30px 0;
    @media (min-width: 768px) {
      padding: 120px 0 30px 0;
    }
`
const Container = styled.div`
  width: 85vw;
    @media (min-width: 1025px) {
      width: 60vw;
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