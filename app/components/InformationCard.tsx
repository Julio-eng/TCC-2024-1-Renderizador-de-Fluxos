import React from 'react'
import { Section } from '@/types/formTypes'

interface Props {
  sectionData: Section;
}

const InformationCard = ({ sectionData } : Props) => {
  return (
    <div className='p-3 h-full flex flex-col items-center justify-center'>
        <p className='w-3/4 text-center text-xl font-medium'>{sectionData?.title}</p>
    </div>
  )
}

export default InformationCard