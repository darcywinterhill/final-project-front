import React from 'react'
import styled from 'styled-components/macro'

const Loading = () => {
  return (
    <LottieContainer>
      <lottie-player
        src='https://assets5.lottiefiles.com/packages/lf20_YMim6w.json'
        background='transparent' 
        speed='1'
        style={{
          width: '200px',
          height: '200px',
          margin: 'auto'
        }} 
        loop
        autoplay
      >
      </lottie-player>
    </LottieContainer>
  )
}


export default Loading

const LottieContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
`