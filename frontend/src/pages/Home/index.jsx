import React from 'react'
import Services from '../../components/Services'
import BestServices from '../../components/BestServices'
import Featured from '../../components/Featured'
import SliderSection from '../../components/SliderSection'

const Home = () => {
  return (
    <>
      <SliderSection />
      <Services />
      <BestServices />
      <Featured />
    </>
  )
}

export default Home