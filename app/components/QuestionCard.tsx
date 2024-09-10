'use client'
import React, { useEffect, useState } from 'react'
import QuestionOption from './QuestionOption';
import { Item } from '@/types/formTypes'
import Image from 'next/image';
import QuestionMarkIcon from './icons/QuestionMarkIcon';
import QuestionHelp from './QuestionHelp';

interface Props {
  item: Item[] | undefined;
  description: string | null
  updateContent: (contentId: string) => void;
}

const QuestionCard = ({ item, description, updateContent }: Props) => {

  if (!item) return null;

  const [isQuestionOpen, setIsQuestionOpen] = useState<boolean>(true);

  const questionItem = item.find(i => i.type !== 'textItem');
  const infoItem = item.find(i => i.type === 'textItem');

  const goToQuestion = () => {
    setIsQuestionOpen(true)
  }

  useEffect(() => {
    infoItem && setIsQuestionOpen(false)
  }, [])

  return (
    <div className='w-11/12 p-4 flex flex-col items-center rounded-xl gap-10 bg-white'>
      {questionItem?.image && (
        <Image
          src={questionItem.image}
          width={500}
          height={500}
          alt="Context Image"
          className='rounded-xl'
        />

      )}
      {
        infoItem && !isQuestionOpen && (
          <div>
            <p>Contexto para a próxima pergunta</p>
            <p>{infoItem.text}</p>
            <p>{infoItem.description}</p>
            <p>teste</p>
            <button className='btn' onClick={goToQuestion}>Ir para pergunta</button>
          </div>
        )
      }
      {isQuestionOpen && (
        <>
          <div className='w-full flex justify-end'>
            <QuestionHelp text={description} />
          </div>
          <div className='bg-ebony text-white-smoke px-5 py-12 w-full rounded-xl'>
            <p className='text-xl font-medium text-center'>{questionItem?.text}</p>
          </div>
          <ul className='flex flex-col items-center justify-center gap-2 w-full rounded-xl'>
            {questionItem?.options?.map((option, index) => <QuestionOption key={index} optionData={option} updateContent={updateContent} />)}
          </ul>
        </>)
      }
    </div>
  )
}

export default QuestionCard