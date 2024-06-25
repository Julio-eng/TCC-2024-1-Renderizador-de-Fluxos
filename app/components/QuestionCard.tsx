'use client'
import React from 'react'
import QuestionOption from './QuestionOption';
import { Item } from '@/types/formTypes'

interface Props {
  itemData: Item | undefined;
  updateContent: (contentId: string) => void;
}

const QuestionCard = ({itemData, updateContent}: Props) => {
  
  return (
    <div className='flex-1 flex flex-col items-center justify-center gap-20 p-2'>
        <div className='flex items-center'>
            <p className='text-center text-lg font-medium'>{itemData?.text}</p>
        </div>
        <ul className='flex flex-col items-center gap-2'>
            {itemData?.options?.map((option, index) => <QuestionOption key={index} optionData={option} updateContent={updateContent}/>)}
        </ul>
    </div>
  )
}

export default QuestionCard