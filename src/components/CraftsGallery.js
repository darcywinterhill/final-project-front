import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import sanityClient from '../client.js'

/* import { useParams } from 'react-router' */

import Loading from '../components/Loading'

//grannlåtsbroderi: f7729ff6-0926-4cf8-8109-5edec479bbf6
//ullprojekt: e232887b-8932-464a-b705-ff43bf7051dc
//fritt broderi: 9640773c-73c6-47dd-b9d9-b8b63a93e2d1
//bildvävning: 45141845-0597-4154-8428-af9431bb86cd
//hälsomålning: 9957652e-b9f6-4c48-89e3-5e70362499cb
//tenntrådsbroderi: bfba4621-5177-49b9-af53-4483371f12d9
//skinn/läder: 46de1a3e-b774-4de0-9a07-0110ef0fdc36
//trådslöjd: 99f6299b-d73d-46e6-a3b4-5566b9c607c6
//cementgjutning: 55879e1b-2df3-4ec0-ba59-41fda5d3e621

const CraftsGallery = ({ id }) => {
const [category, setCategory] = useState(null)
const [title, setTitle] = useState(null)

/* const { id } = useParams() */

//hard coded id for both fetches
useEffect(() => {
  sanityClient
  .fetch(
    `*[ _type == 'post' && references('f7729ff6-0926-4cf8-8109-5edec479bbf6')] | order(order asc) {
      title,
      mainImage{
        asset->{
        _id,
        url
        }
      },
    }`
  )
  .then((data) => setCategory(data))

  sanityClient
  .fetch(
    `*[ _type == 'category' && _id =='f7729ff6-0926-4cf8-8109-5edec479bbf6']{
      title
    }`
  )
  .then((data) => setTitle(data))
}, [])

  return (
    <>
    {!title && !category ?
    <Loading /> : (
    <GalleryContainer>

    {title?.map((item) => (
      <Heading key={item.title}>
      {item.title}
    </Heading>
    ))}

    <CollectionContainer>
    {category?.map((item) => (
      <ItemContainer key={item.mainImage.asset._id}>
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
`
const CollectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
    &>* {
      flex: flex: 0 0 33.3333%;
    }
`
const ItemContainer = styled.div`
  margin-bottom: 10px;
  padding: 5px;
    @media (min-width: 768px) {
      margin-bottom: 25px;
    }
    @media (min-width: 1025px) {
      padding: 10px;
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
`
const Image = styled.img`
  width:200px;
  height:200px;
    @media (min-width: 360px) {
      width:250px;
      height:250px;
    }
    @media (min-width: 400px) {
      width:300px;
      height:300px;
    }
    @media (min-width: 768px) {
      width:250px;
      height:250px;
    }
    @media (min-width: 1025px) {
      width:300px;
      height:300px;
  }
`
const Name = styled.h4`
  font-size: 14px;
  padding: 5px 0;
    @media (min-width: 768px) {
      font-size: 16px;
    }
`