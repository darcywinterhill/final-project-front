import { createSlice } from '@reduxjs/toolkit'

const sections = createSlice({
  name: 'sections',
  initialState: {
    container: {
      backgroundColor: '',
      flex: ''
    },
    text: {
      text: ''
    }
  }
})

export default sections