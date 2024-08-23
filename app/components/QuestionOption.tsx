'use client'
import React from 'react'
import { Option } from '@/types/formTypes'

interface Props {
  optionData: Option
  updateContent: (contentId: string) => void
}

const QuestionOption = ({ optionData, updateContent }: Props) => {

  return (
    <li className='w-full'>
      <button className='btn w-full' onClick={() => { updateContent(optionData.goToSectionId) }}>{optionData.value}</button>
    </li>
  )
}

export default QuestionOption