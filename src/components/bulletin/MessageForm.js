import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'

import messages, { fetchMessageList } from 'reducers/messages'

import { MESSAGE_API } from 'reusable/urls'

import messageimg from '../../assets/profilebg.jpg'

const MessageForm = () => {
  const [messageInput, setMessageInput] = useState('')
  const [nameInput, setNameInput] = useState('')

  const dispatch = useDispatch()

  const onFormSubmit = (e) => {
    e.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: messageInput,
        name: nameInput,
      })
    }

    fetch(MESSAGE_API, options)
      .then(res => res.json())
      .then((res) => {
        if (res) {
          fetchMessageList()
        } else {
          dispatch(messages.actions.setErrors())
        }
      })
      setMessageInput('')
      setNameInput('')
    }

  return (
    <FormContainer>
      <Form onSubmit={onFormSubmit}>
        <Label htmlFor='name'>
          Namn:
        </Label>
        <NameInput
          id='name'
          type='text'
          minLength='2'
          maxLength='30'
          required
          value={nameInput}
          onChange={event => setNameInput(event.target.value)}
        />

        <Label htmlFor='newMessage'>
          Meddelande:
        </Label>
        <MessageInput
          id='newMessage'
          type='text'
          minLength='3'
          maxLength='140'
          required
          value={messageInput}
          onChange={event => setMessageInput(event.target.value)}
        />

        <Button
          type='submit'
        >
          SKICKA MEDDELANDE
          <Icon className="far fa-paper-plane"></Icon>
        </Button>

      </Form>
    </FormContainer>
  )
}

export default MessageForm

const FormContainer = styled.div`
  display: flex;
  width: 100%;
  background-image: url(${messageimg});
  background-size: cover;
  overflow: hidden;
  border: dashed 2px #ffffff;
  border-radius: 12px;
  margin-bottom: 15px;
  padding: 15px;
  @media (min-width: 768px) {
    justify-content: flex-end;
  }
   @media (min-width: 1025px) {
    width: 20vw;
    margin-right: 20px;
  }
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
    @media (min-width: 768px) {
      width: 50%;
    }
    @media (min-width: 1025px) {
      width: 100%;
    }
`
const Label = styled.label`
  font-family: Lato, sans-serif;
  font-size: 18px;
  font-weight: bolder;
  color: #2a2522;
    @media (min-width: 768px) {
      color: #ffffff;
    }
    @media (min-width: 1025px) {
      color: #2a2522;
    }
`
const NameInput = styled.input`
  font-family: Lato, sans-serif;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 5px;
`
const MessageInput = styled.textarea`
  height: 70px;
  font-family: Lato, sans-serif;
  border-radius: 5px;
  padding: 5px;
  resize: none;
`
const Button = styled.button`
  width: 100%;
  height: 50px;
  background-color: #bc0a1e;
  font-family: Lato, sans-serif;
  color: #ffffff;
  border: dashed 2px #ffffff;
  border-radius: 10px;
  margin-top: 10px;
`
const Icon = styled.i`
  margin-left: 10px;
`