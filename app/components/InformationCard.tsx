import React from 'react'
import { Item } from '@/types/formTypes'

interface Props {
  item: Item | undefined;
}

const InformationCard = ({ item }: Props) => {
  return (
    <>
      <div className='w-full md:w-3/4 lg:w-1/2 min-h-60 p-6 flex flex-col items-center rounded-xl gap-6 bg-eggplant shadow-lg'>
        <h2 className='text-xl md:text-2xl font-semibold text-white mb-4 text-center'>
          {item?.text}
        </h2>
        <p className='w-full text-justify text-base md:text-lg text-white-smoke leading-relaxed'>
          {item?.description}
        </p>
      </div>
      <div className="divider"></div>
    </>
  )
}

export default InformationCard
