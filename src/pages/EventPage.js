import React from 'react'
import styled from 'styled-components'

import NavBar from '../components/NavBar'
import Backdrop from '../components/Backdrop'
import PostIt from '../components/PostIt'

import headerimg from '../assets/fabric-mobile.jpg'

const EventPage = () => {
  return (
    <Main>
      <NavBar />
      <Backdrop
      flex='row'
      justify='space-evenly'
      align='center'>
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
justify-content: flex-start;
align-items: center;
  position: relative;
  padding: 15vh 0 5vh 0;
  min-height: 100vh;
  width: 100vw;
  background-image: url(${headerimg});
  background-size: cover;
  overflow: hidden;
`