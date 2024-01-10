import React from 'react'
import "./index.scss";
import SectionTitle from '../SectionTitle'
import FeaturedCards from '../FeaturedCards'

const Featured = () => {
  return (
    <>
    <section id='featured'>
        <div className='featured_container'>
            <div className='featured_content'>
                <SectionTitle text="OUR PORTFOLIOS OF CASES" head="Featured Case Study"/>
                <FeaturedCards/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Featured