import React, { useEffect, useState }  from 'react'
import { useDispatch, useSelector, batch} from 'react-redux'
import moment from 'moment'
import styled from 'styled-components/macro'

import messages from 'reducers/messages'

import { MESSAGE_API } from 'reusable/urls'

const Messages = () => {
  const messageItems = useSelector(store => store.messages.messages)
  
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(MESSAGE_API)
      .then(res => res.json())
      .then(data => {
        if (data) {
          batch(() => {
            dispatch(messages.actions.setMessages(data));
            dispatch(messages.actions.setErrors(null));
          })
        } else {
          dispatch(messages.actions.setErrors(data));
        }
      })
  }, [])

 /*  useEffect(() => {
    fetchMessageList()
  }, [])
    
  const fetchMessageList = () => {
    fetch(MESSAGE_API)
      .then(res => res.json())
      .then(data => setMessageList(data))
      .catch(err => console.error(err))
  } */

  return (
    <MessageContainer>
    {messageItems.map((message) => (
      <MessageNote key={message._id}>
        <ContentContainer>
          <MessageText>{message.message}</MessageText>
          <MessageName>/ {message.name}</MessageName>
        </ContentContainer>
        <MessageCreatedAt>{moment(message.createdAt).fromNow()}</MessageCreatedAt>
      </MessageNote>
    ))}
    </MessageContainer>

  )
}

export default Messages

//trouble with the flex when testing on really big screen
const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 4px 4px 6px rgba(33,33,33,.7);
  margin: 10px 5px;
  padding: 12px;
    @media (min-width: 768px) {
      width: 45%;
      margin: 15px 15px;
    }
    @media (min-width: 1025px) {
      width: 40%;
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
  color: #2a2522;
  padding: 12px 0;
`
const MessageName = styled.p`
  color: #2a2522;
  align-self: flex-end;
  font-style: italic;
  padding-bottom: 12px;
`
const MessageCreatedAt = styled.p`
  color: #2a2522;
`