import React from 'react'
import styled from 'styled-components/macro'

import MiniDrawer from '../components/MiniDrawer'
import Title from '../components/Title'
import Backdrop from '../components/Backdrop'
import MessageForm from '../components/bulletin/MessageForm'
import Messages from '../components/bulletin/Messages'

const BulletinPage = () => {

  return (
    <Main>
      <MiniDrawer>
      <Title
        title='ANSLAGSTAVLA'
      />
      <Container>

      <BulletinContainer>
        <MessageForm />
        <Backdrop
          width='40vw'>
        <Messages />
        </Backdrop>
      </BulletinContainer>
      </Container>
      </MiniDrawer>
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
  width: 100%;
  padding-bottom: 50px;
`
const Container = styled.div`
  width: 100%;
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