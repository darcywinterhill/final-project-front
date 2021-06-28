import React, { useEffect, useState }  from 'react'
import { useDispatch, useSelector, batch } from 'react-redux'
import moment from 'moment'
import styled from 'styled-components/macro'

import { MESSAGE_API } from '../../reusable/urls'

import messages from '../../reducers/messages'

import Loading from '../Loading'

const Messages = () => {
  const messageItems = useSelector(store => store.messages.messages)

  const [totalPages, setTotalPages] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(`${MESSAGE_API}?page=${currentPage}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          batch(() => {
            dispatch(messages.actions.setMessages(data.messages))
            dispatch(messages.actions.setErrors(null))

            const totalPages = data.totalPages
            setTotalPages(totalPages)
            const currentPage = data.currentPage
            setCurrentPage(currentPage)
          })
        } 
      })
    .catch((error) => dispatch(messages.actions.setErrors(error.message)))
  }, [currentPage, dispatch])

  const nextPage = () => {
    setCurrentPage(parseInt(currentPage) + 1)
  }
  
  const previousPage = () => {
    setCurrentPage(parseInt(currentPage) - 1)
  }

  return (
    <>
      {!messageItems.length ?
        <Loading /> : (
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
      )}

      <PageContainer>
        <PageText>
          Sida {currentPage} / {totalPages}
        </PageText>
        <ButtonContainer>
          <PageButton
            type='button'
            onClick={previousPage}
            disabled={parseInt(currentPage) === 1}>
            <Icon className='fas fa-arrow-left'>
            </Icon>
          </PageButton>
          <PageButton
            type='button'
            onClick={nextPage}
            disabled={parseInt(currentPage) === totalPages}>
            <Icon className='fas fa-arrow-right'>
            </Icon>
          </PageButton>
        </ButtonContainer>
      </PageContainer>

    </>
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
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-top: 25px;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const PageText = styled.p`
`
const PageButton = styled.button`
  cursor: pointer;
  width: 35px;
  height: 35px;
  border-radius: 50%;
    &:disabled {
      cursor: context-menu;
    }
    @media (min-width: 768px) {
      width: 40px;
      height: 40px;
    }
`
const Icon = styled.i`
  font-size: 14px;
    @media (min-width: 768px) {
      font-size: 18px;
    }
`