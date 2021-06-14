import { createSlice } from '@reduxjs/toolkit'
import { batch } from 'react-redux'

import { MESSAGE_API } from 'reusable/urls'

const messages = createSlice({

  name: 'messages',
  initialState: {
    messages: [],
    errors: null
  },
  reducers: {
    setMessages: (store, action) => {
      store.messages = action.payload
    },
    setSingleMessage: (store, action) => {
      store.messages = [action.payload, ...store.messages]
    },
    setErrors: (store, action) => {
      store.errors = action.payload
    }
  }
})

export default messages

export const fetchMessageList = () => {
  return (dispatch) => {
    fetch(MESSAGE_API)
    .then(res => res.json())
    .then(data => {
      batch(() => {
        dispatch(messages.actions.setMessages(data));
        dispatch(messages.actions.setErrors(null));
      })
    })
    .catch((error) => dispatch(messages.actions.setErrors(error.message)))
  }
}
