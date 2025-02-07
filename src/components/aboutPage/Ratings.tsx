import React from 'react'
import RatingProp from './RatingProp'

export default function Ratings() {
  return (
    <section className='py-[145px] w-[241px] lg:w-[70vw] lg:flex-row mx-auto flex flex-col gap-[100px]'>
        <RatingProp h='15k' p='Happy Customer'/>
        <RatingProp h='150k' p='Monthly Visitors'/>
        <RatingProp h='15' p='Countries Worldwide'/>
        <RatingProp h='100+' p='Top Partners'/>
    </section>
  )
}
