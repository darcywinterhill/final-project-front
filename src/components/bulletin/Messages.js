  
import React, { useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import styled from 'styled-components/macro'

import { fetchMessageList } from 'reducers/messages'

const Messages = () => {
  const messageItems = useSelector(store => store.messages.messages)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMessageList())
  }, [dispatch])

  return (
    <MessageContainer>
    {messageItems.map((message) => (
      <MessageNote key={message._id}>
        <MessageText>
          {message.message}
        </MessageText>
        <ContentContainer>
          <MessageName>
            / {message.name}
          </MessageName>
          <MessageCreatedAt>
            {moment(message.createdAt).fromNow()}
          </MessageCreatedAt>
        </ContentContainer>
      </MessageNote>
    ))}
    </MessageContainer>
  )
}


export default Messages

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
    @media (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: stretch;
      justify-content: space-evenly;
    }
`
const MessageNote = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
  background-color: #faefa5;
  background-image: url('https://www.transparenttextures.com/patterns/cardboard-flat.png');
  margin: 10px 5px;
    @media (min-width: 768px) {
      width: 40%;
      max-width: 250px;
      margin: 15px 15px;
    }
    @media (min-width: 1025px) {
      width: 28%;
      max-width: 250px;
    }
    @media (min-width: 2000px) {
      width: 30%;
      margin: 15px 15px;
    }
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const MessageText = styled.p`
  font-family: 'Shadows Into Light Two', cursive;
  color: #2a2522;
  padding: 12px 0;
  font-size: 16px;
  @media (min-width: 1025px) {
    font-size: 18px;
  }
`
const MessageName = styled.p`
  font-family: 'Shadows Into Light Two', cursive;
  color: #2a2522;
  font-style: italic;
  padding-bottom: 12px;
  font-size: 16px;
  @media (min-width: 1025px) {
    font-size: 18px;
  }
`
const MessageCreatedAt = styled.p`
  color: grey;
  font-size: 12px;
  @media (min-width: 1025px) {
    font-size: 14px;
  }
`