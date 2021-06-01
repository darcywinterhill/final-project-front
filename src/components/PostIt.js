import React from 'react'
import styled from 'styled-components/macro'

const PostIt = ({ title, date/* , backgroundImage */ }) => {
  return (
    <PostItContainer>
      <Title>
        {title}
      </Title>
      <Date>
        {date}
      </Date>
      {/* <Image backgroundImage={backgroundImage} /> */}
    </PostItContainer>
  )
}

export default PostIt

const PostItContainer = styled.div`
  width: 250px;
  height: 250px;
  background-color: #ffffff;
  padding: 10px;
  margin-bottom: 10px;
    @media (min-width: 1025px) {
      width: 450px;
      height: 450px;
    }
}
`
const Title = styled.h3`
`
const Date = styled.h4`
`
/* const Image = styled.div`
  background-image: url(${backgroundImage});
  width: 250px;
  height: auto;
` */