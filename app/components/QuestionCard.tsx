'use client'
import React from 'react'
import QuestionOption from './QuestionOption';
import { Item } from '@/types/formTypes'

interface Props {
  itemData: Item | undefined;
  updateContent: (contentId: string) => void;
}

const QuestionCard = ({ itemData, updateContent }: Props) => {

  return (
    <div className='w-11/12 p-4 flex flex-col items-center rounded-xl gap-10 bg-white'>
      <div className='bg-ebony text-white-smoke px-5 py-12 w-full rounded-xl'>
        <p className='text-xl font-medium text-center'>{itemData?.text}</p>
      </div>
      <ul className='flex flex-col items-center justify-center gap-2 w-full rounded-xl'>
        {itemData?.options?.map((option, index) => <QuestionOption key={index} optionData={option} updateContent={updateContent} />)}
      </ul>
    </div>
  )
}

export default QuestionCard