import React from 'react'
import styled from 'styled-components'

import NavBar from '../components/NavBar'
import Title from '../components/Title'
import Backdrop from '../components/Backdrop'
import PostIt from '../components/PostIt'

import headerimg from '../assets/fabric-mobile.jpg'

const EventPage = () => {
  return (
    <Main>
      <NavBar />
      <Title
        title='EVENTS'
      />
      <Backdrop
      flex='row'
      justify='space-evenly'
      align='center'
      width='60vw'>
      <PostIt
        title='Utställning X'
        date='2021-07-18'
        /* backgroundImage={headerimg} *//>
              <PostIt
        title='Utställning Y'
        date='2021-04-15'
        /* backgroundImage={headerimg} *//>
                      <PostIt
        title='Utställning Z'
        date='2021-02-17'
        /* backgroundImage={headerimg} *//>
                      <PostIt
        title='Utställning XY'
        date='2020-08-15'
        /* backgroundImage={headerimg} *//>
                              <PostIt
        title='Utställning XY'
        date='2020-08-15'
        /* backgroundImage={headerimg} *//>
        </Backdrop>
    </Main>
  )
}

export default EventPage

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
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