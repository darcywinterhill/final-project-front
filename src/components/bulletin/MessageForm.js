import React from 'react'
import styled from 'styled-components/macro'

import messages from'../../reducers/messages'

import { MESSAGE_API } from '../../reusable/urls'

const MessageForm = () => {

  const onFormSubmit = (e) => {
    e.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message,
        name
      })
    }

    fetch(MESSAGE_API, options)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          batch(() => {
            dispatch(user.actions.setMessage(data.message))
            dispatch(user.actions.setName(data.name))
            dispatch(user.actions.setErrors(null))
          })
          } else {
            dispatch(user.actions.setErrors(data))
          }
      })
      .catch()
    }


  return (
    <FormContainer>
      <Form onSubmit={onFormSubmit}>
      <label htmlFor='newMessage'>
          Text
        </label>
        <TextArea
          id='newMessage'
          type='text'
          minLength='3'
          maxLength='140'
          required
          value={newMessage}
          onChange={onNewMessageChange}>
        </TextArea>

        <button type='submit'>

        </button>

      </Form>
    </FormContainer>
  )
}

export default MessageForm

const FormContainer = styled.div`

`
const Form = styled.form`
`
const TextArea = styled.textarea`
`