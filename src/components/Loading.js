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
        autoplay>
      </lottie-player>
    </LottieContainer>
  )
}

export default Loading

const LottieContainer = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #2a2522;
  z-index: 999;
`