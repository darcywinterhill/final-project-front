import React from 'react'
import SectionTemplate from 'components/SectionTemplate'
import SectionText from 'components/SectionText'

//SectionText is not passed into the component

const AboutSection = () => {

  return (
    <SectionTemplate
      backgroundColor='black'
      flex='column'
    >
      <SectionText
        text='exempeltext'
      />
    </SectionTemplate>
  )
}

export default AboutSection