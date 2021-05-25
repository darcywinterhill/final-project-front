import { createSlice } from '@reduxjs/toolkit'

const messages = createSlice({
  name: 'messages',
  initialState: {
    messages: []
  },
  reducers: {
    addMessage: (store, action) => {
      store.messages = [...store.messages, action.payload]
    } 
  }
})

export default messages