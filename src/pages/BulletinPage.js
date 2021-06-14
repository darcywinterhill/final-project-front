import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'

import MiniDrawer from '../components/MiniDrawer'
import Backdrop from '../components/Backdrop'
import MessageForm from '../components/bulletin/MessageForm'
import Messages from '../components/bulletin/Messages'
import Loading from '../components/Loading'

/* import Stepper from '../components/UI/Stepper' */

const BulletinPage = () => {
  const messageItems = useSelector(store => store.messages.messages)

  return (  
    <>
      {!messageItems ?
      <Loading /> : (
        <Main>
          <MiniDrawer>
            <Container>
              <BulletinContainer>
                <MessageForm />
                <Backdrop
                  width='60vw'
                  flex='column'
                  align='center'
                >
                  <Messages />
                  {/* <Stepper /> */}
                </Backdrop>
              </BulletinContainer>
            </Container>
          </MiniDrawer>
        </Main>
      )}
    </>
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
   
    align-items: flex-start;
    justify-content: center;
  }
`