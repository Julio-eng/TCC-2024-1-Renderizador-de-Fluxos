import React from 'react'
import { Item } from '@/types/formTypes'

interface Props {
  item: Item | undefined;
}

const InformationCard = ({ item }: Props) => {
  return (
    <div className='w-11/12 md:w-3/4 lg:w-1/2 min-h-60 p-6 flex flex-col items-center rounded-xl gap-6 bg-cinnabar shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl'>
      <p className='w-full text-justify text-lg text-white-smoke font-medium leading-relaxed'>
        {item?.description}
      </p>
    </div>
  )
}

export default InformationCard
