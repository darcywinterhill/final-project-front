import React from 'react'
import styled from 'styled-components/macro'

import MiniDrawer from '../components/MiniDrawer'
import Backdrop from '../components/Backdrop'
import MessageForm from '../components/bulletin/MessageForm'
import Messages from '../components/bulletin/Messages'
/* import Stepper from '../components/UI/Stepper' */

const BulletinPage = () => {

  return (
    <Main>
      <MiniDrawer>
        <Container>
          <BulletinContainer>
            <MessageForm />
            <Backdrop
              width='40vw'
              flex='column'
              align='center'>
              <Messages />
              {/* <Stepper /> */}
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