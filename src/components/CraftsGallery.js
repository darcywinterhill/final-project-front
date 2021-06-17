import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import sanityClient from '../client.js'
import { useParams } from 'react-router'

import Loading from '../components/Loading'

const CraftsGallery = () => {
const [category, setCategory] = useState(null)
const [title, setTitle] = useState(null)

const { id } = useParams()

  useEffect(() => {
    sanityClient
    .fetch(
      `*[ _type == 'post' && references($id)] | order(order asc) {
        title,
        mainImage{
          asset->{
          _id,
          url
          }
        },
      }`,
      {id}
    )
    .then((data) => setCategory(data))

  sanityClient
  .fetch(
    `*[ _type == 'category' && _id ==($id)]{
      title
    }`,
    {id}
  )
  .then((data) => setTitle(data))
}, [id])

  return (
    <>
      {!title && !category ?
      <Loading /> : (
      <GalleryContainer>

      {title?.map((item) => (
        <Heading
          key={item.title}
        >
        {item.title}
      </Heading>
      ))}

      <CollectionContainer>
      {category?.map((item) => (
        <ItemContainer
          key={item.mainImage.asset._id}
        >
          <ImageContainer>
          <Image
            src={item.mainImage.asset.url}
            alt={item.slug}/>
          <Name>
            {item.title}
          </Name>
          </ImageContainer>
        </ItemContainer>
      ))}
      </CollectionContainer>
      
      </GalleryContainer>
      )}
    </>
  )
}

export default CraftsGallery

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
const CollectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
    @media (min-width: 768px) {
      flex: 0 0 50%;
      &:not(:nth-child(2n+1)) {
        margin-left: calc( (100% - (50% * 2)) / 1);
      }
    }
    @media (min-width: 1025px) {
      flex: 0 0 25%;
      &:not(:nth-child(4n+1)) {
        margin-left: calc( (100% - (25% * 4)) / 3);
    }
`
const ItemContainer = styled.div`
  margin-bottom: 10px;
  padding: 5px;

    @media (min-width: 768px) {
      margin-bottom: 25px;
      width: 50%;
    }
    @media (min-width: 1025px) {
      padding: 10px;
      width: 25%;
    }
`
const Heading = styled.h2`
  font-family: 'Lato', sans-serif;
  font-weight: 200;
  font-size: 22px;
  color: #fff;
  padding: 10px;
  text-transform: uppercase;
    @media (min-width: 768px) {
      font-size: 34px;
      padding: 20px;
    }
    @media (min-width: 1025px) {
      font-size: 38px;
    }
`
const ImageContainer = styled.div`
  background-color: #fff;
  padding: 10px;
  width: 100%;
`
const Image = styled.img`
  width: 100%;
  height: auto;
`
const Name = styled.h4`
  font-size: 14px;
  padding: 5px 0;
    @media (min-width: 768px) {
      font-size: 16px;
    }
`