import { createSlice } from '@reduxjs/toolkit'

const messages = createSlice({
  name: 'messages',
  initialState: {
    messages: [
      {
        _id: '',
        name: '',
        message: '',
        createdAt: ''
      }
    ],
    errors: null
  },
  reducers: {
    setMessages: (store, action) => {
      store.messages = [...store.messages, action.payload]
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