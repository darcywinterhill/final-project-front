import React from 'react'
import styled from 'styled-components/macro'

const PostIt = ({ type, place, date, text }) => {
  return (
    <PostItContainer>
      <TypeText>
        {type}
      </TypeText>
      <PlaceText>
        {place}
      </PlaceText>
      <Date>
        {date}
      </Date>
      <AboutText>
        {text}
      </AboutText>

    </PostItContainer>
  )
}

export default PostIt

const PostItContainer = styled.div`
  width: 90%;
  min-height: 150px;
  background-color: #d6c667;
  padding: 10px;
  margin: 0 15px 15px 15px;
  border-radius: 5px;
  box-shadow: 4px 4px 6px rgba(33,33,33,.7);
    @media (min-width: 768px) {
      width: 44%;
      min-height: 250px;
    }
    @media (min-width: 1025px) {
      width: 28%;
      min-height: 250px;
    }
`
const TypeText = styled.h3`

`
const PlaceText = styled.h4`

`
const Date = styled.h5`
`
const AboutText = styled.p`
`