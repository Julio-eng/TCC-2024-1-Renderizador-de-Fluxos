import React from 'react'
import { Item } from '@/types/formTypes'

interface Props {
  item: Item | undefined;
}

const InformationCard = ({ item }: Props) => {
  return (
    <div className='w-11/12 min-h-60 p-4 flex flex-col items-center rounded-xl gap-10 bg-cinnabar'>
      <p className='w-3/4 text-justify text-xl text-white-smoke font-medium'>{item?.description}</p>
    </div>
  )
}

export default InformationCard