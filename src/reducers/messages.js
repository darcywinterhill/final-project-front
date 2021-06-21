import { createSlice } from '@reduxjs/toolkit'

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
