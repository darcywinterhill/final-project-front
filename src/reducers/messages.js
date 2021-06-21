import { createSlice } from '@reduxjs/toolkit'
/* import { batch } from 'react-redux'

import { MESSAGE_API } from 'reusable/urls' */

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

/* export const fetchMessageList = (currentPage) => {

  return (dispatch) => {
    fetch(`${MESSAGE_API}?per_page=8&page=${currentPage}`)
    .then(res => res.json())
    .then(data => {
      batch(() => {
        dispatch(messages.actions.setMessages(data))
        dispatch(messages.actions.setErrors(null))
      })
    })
    .catch((error) => dispatch(messages.actions.setErrors(error.message)))
  }
} */
