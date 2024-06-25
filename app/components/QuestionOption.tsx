'use client'
import React from 'react'
import { Option } from '@/types/formTypes'

interface Props {
  optionData: Option
  updateContent: (contentId: string) => void
}

const QuestionOption = ({optionData, updateContent}: Props) => {

  return (
    <li>
        <button className='btn btn-wide' onClick={() => {updateContent(optionData.goToSectionId)}}>{optionData.value}</button>
    </li>
  )
}

export default QuestionOption