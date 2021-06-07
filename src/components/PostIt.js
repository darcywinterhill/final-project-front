import React from 'react'
import styled from 'styled-components/macro'

const PostIt = ({ type, place, date, text, children }) => {
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
      {children}
    </PostItContainer>
  )
}

export default PostIt

const PostItContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  min-height: 150px;
  background-color: #d6c667;
  padding: 10px;
  margin: 0 15px 15px 15px;
  border-radius: 5px;
  box-shadow: 4px 4px 6px rgba(33,33,33,.7);
    @media (min-width: 768px) {
      flex: 0 0 44%;
      min-height: 200px;
    }
    @media (min-width: 1025px) {
      flex: 0 0 28%;
      min-height: 250px;
    }
`
const TypeText = styled.h3`
  font-size: 16px;
`
const PlaceText = styled.h4`
  font-size: 14px;
`
const Date = styled.h5`
  font-size: 12px;
  padding-top: 5px;
`
const AboutText = styled.p`
  padding-top: 10px;
`