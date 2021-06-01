import React from 'react'
import styled from 'styled-components/macro'

import messageimg from '../../assets/profilebg.jpg'

const MessageForm = () => {

  return (
    <FormContainer>
      <Form>
        <Label htmlFor='name'>
          Namn:
        </Label>
        <NameInput
          id='name'
          type='text'
          minLength='2'
          maxLength='30'
          required
          /* value */
          onChange
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
          /* value */
          onChange
        />

        <Button type='submit'>
          SKICKA MEDDELANDE
          <Icon className="far fa-paper-plane"></Icon>
        </Button>

      </Form>
    </FormContainer>
  )
}

export default MessageForm

const FormContainer = styled.div`
  width: 85vw;
  padding: 15px;
  background-image: url(${messageimg});
  background-size: cover;
  overflow: hidden;
  border-radius: 12px;
  border: dashed 2px #ffffff;
  margin-bottom: 15px;
   @media (min-width: 1025px) {
     width: 60vw;
   }
   @media (min-width: 1025px) {
    width: 20vw;
    margin-right: 20px;
  }
`
const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
`
const Label = styled.label`
font-family: Lato, sans-serif;
color: #2a2522;
font-size: 18px;
font-weight: bolder;
`
const NameInput = styled.input`
font-family: Lato, sans-serif;
padding: 5px;
border-radius: 5px;
margin-bottom: 10px;
`
const MessageInput = styled.textarea`
font-family: Lato, sans-serif;
padding: 5px;
height: 70px;
border-radius: 5px;
resize: none;
`
const Button = styled.button`
font-family: Lato, sans-serif;
margin-top: 10px;
width: 100%;
height: 50px;
background-color: #bc0a1e;
border: dashed 2px #ffffff;
border-radius: 10px;
color: #ffffff;
@media (min-width: 768px) {
  width: 30%;
  align-self: flex-end;
}
@media (min-width: 1025px) {
  width: 100%;
}

`
const Icon = styled.i`
margin-left: 10px;
`