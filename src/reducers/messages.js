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
    setErrors: (store, action) => {
      store.errors = action.payload
    } 
  }
})

export default messages

export const fetchMessageList = () => {
  return (dispatch) => {
    fetch(`${MESSAGE_API}?per_page=8&page=1`) //the page nr needs to be a slug
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
  }
}