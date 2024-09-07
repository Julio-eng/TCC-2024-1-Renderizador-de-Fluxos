import React from 'react'
import TopNavBar from './TopNavBar';

interface Props {
  title: string;
  text: string
  breadCrumbText: string
}

const ContentCard = ({ title, text, breadCrumbText }: Props) => {
  return (
    <div className='h-full flex flex-col bg-white'>
      <TopNavBar breadCrumbText={breadCrumbText} />
      <div className='flex flex-col items-center justify-center flex-grow'>
        <div className='w-11/12 p-4 flex flex-col gap-5 items-center justify-center rounded-xl bg-zomp text-white-smoke'>
          <p className='font-semibold text-xl'>{title}</p>
          <p className='text-justify text-lg'>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default ContentCard