import React from 'react'
import "./index.scss";
import SectionTitle from '../../components/SectionTitle'
import { AddForm } from '../../components/AddForm';

const Add = () => {
  return (
    <>
    <section id='add_page'>
        <div className='add_container'>
            <SectionTitle text="Add Element"  head="Add Services" />
            <AddForm/>
        </div>
    </section>
    </>
  )
}

export default Add