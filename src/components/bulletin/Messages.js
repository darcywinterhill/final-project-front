import React, { useEffect, useState }  from 'react'
import moment from 'moment'
import styled from 'styled-components/macro'
/* import messages from 'reducers/messages' */

import { MESSAGE_API } from 'reusable/urls'

const Messages = () => {
  const [messageList, setMessageList] = useState([])
 
  useEffect(() => {
    fetchMessageList()
  }, [])

  const fetchMessageList = () => {
    fetch(MESSAGE_API)
      .then(res => res.json())
      .then(messages => setMessageList(messages))
      .catch(err => console.error(err))
  }

  return (
    <MessageContainer>
    {messageList.map((message) => (
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
      align-items: center;
      justify-content: space-evenly;
    }
`

const MessageNote = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 210px;
  height: 210px;
  background-color: #ffffff;
  margin: 10px 5px;
  padding: 12px;
    @media (min-width: 768px) {
      width: 250px;
      height: 250px;
      margin: 15px 15px;
    }
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const MessageText = styled.p`
  padding: 12px 0;
`
const MessageName = styled.p`
  align-self: flex-end;
  font-style: italic;
`
const MessageCreatedAt = styled.p`
`