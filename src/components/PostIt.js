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
  min-height: 200px;
  background-color: #d6c667;
  padding: 10px;
  margin-bottom: 15px;
}
`
const Title = styled.h3`
  color: black;
`
const Date = styled.h4`
`
/* const Image = styled.div`
  background-image: url(${backgroundImage});
  width: 250px;
  height: auto;
` */