import { createSlice } from '@reduxjs/toolkit'

const messages = createSlice({
  name: 'messages',
  initialState: {
    messages: [],
    errors: null
  },
  reducers: {
    setMessages: (store, action) => {
      store.messages = action.payload/* [...store.messages, action.payload] */
    },
    setNewMessage: (store, action) => {
      store.messages = action.payload
    },
    setErrors: (store, action) => {
      store.errors = action.payload
    } 
  }
})

export default messages
