import React from 'react'
import styled from 'styled-components/macro'

import MiniDrawer from '../components/MiniDrawer'
import Backdrop from '../components/Backdrop'
import MessageForm from '../components/bulletin/MessageForm'
import Messages from '../components/bulletin/Messages'

const BulletinPage = () => {

  return (  
    <Main>
      <MiniDrawer>
        <Container>
          <BulletinContainer>
            <MessageForm />
            <Backdrop
              width='100%'
              flex='column'
              align='center'
            >
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
  background-color: #2a2522;
  padding-top: 30px;
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
`
const BulletinContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75vw;
  @media (min-width: 1025px) {
    width: 60vw;
    align-items: flex-start;
    justify-content: center;
  }
`