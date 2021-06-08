import React from 'react'
import styled from 'styled-components/macro'

import MiniDrawer from '../components/MiniDrawer'
import Backdrop from '../components/Backdrop'
import SimpleAccordion from '../components/SimpleAccordion'
import PostIt from '../components/PostIt'
import ReadMoreButton from '../components/UI/ReadMoreButton'

const EventPage = () => {
  return (
    <Main>
      <MiniDrawer>
        <Container>
          <Backdrop
            flex='row'
            justify='space-evenly'
            align='stretch'
            width='60vw'
          >
            <PostIt
              type='Utställning'
              place='Lorem ipsum'
              date='23/11 - 1/12 2021'
              text='Chocolate apple pie donut apple pie. Croissant marzipan bonbon. Sweet jelly-o apple pie. Jelly beans jelly beans icing jelly beans.'
            >
              <Link
                href='https://google.com'
                target='_blank'
                rel='noopener noreferrer'
              >
               <ReadMoreButton/>
              </Link>
            </PostIt>

            <PostIt
              type='Utställning'
              place='Lorem ipsum'
              date='10/10 - 11/11 2021'
              text='Cotton candy lollipop marzipan chocolate cake macaroon candy cookie gummies.'
            />

            <PostIt
              type='Försäljning'
              place='Lorem ipsum'
              date='8/8 - 18/8 2021'
              text='Sesame snaps fruitcake muffin. Marzipan cookie jelly biscuit brownie caramels cheesecake. '
            />

            <SimpleAccordion>
              <PostIt
                type='Slöjdfestival'
                place='Granö'
                date='17/7 - 18/7 2020'
                text='Trä och trådslöjd. Det var här jag upptäckte
                glädjen med att göra träd. Jag är
                förtjust i träd i alla varianter.'
              />

              <PostIt
                type='Försäljning'
                place='Wadköping Örebro'
                date='24/6 - 4/7 2020'
                text='Fulfåglar i cement, luffarslöjd – blommor och insekter, träänglar, väskor m.m.'
              />

              <PostIt
                type='Utställning'
                place='Örebro Konsthall'
                date='13/6 - 30/8 2020'
                text='Trådspår – porträtt av min man.'
              />

              <PostIt
                type='Utställning'
                place='Hållstugan i Örebro'
                date='28/2 - 7/5 2020'
                text='Fantasifåglar, väska, klacktäcke m.m.'
              />
            </SimpleAccordion> 
                              
          </Backdrop>
        </Container>
      </MiniDrawer>
    </Main>
  )
}

export default EventPage

const Main = styled.main`
  background-color: #2a2522;
  padding-top: 30px;
  min-height: 100vh;
  width: 100%;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Container = styled.div`
  width: 100%;
`
const Link = styled.a`
  text-decoration: none;
  align-self: center;
  margin: 20px;
`