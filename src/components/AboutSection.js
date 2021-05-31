import React from 'react'
import SectionTemplate from 'components/sections/SectionTemplate'
import SectionText from 'components/sections/SectionText'

//SectionText is not passed into the component

const AboutSection = () => {

  return (
    <SectionTemplate
      backgroundColor='black'
      flex='column'
    >
      <SectionText
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      />
    </SectionTemplate>
  )
}

export default AboutSection