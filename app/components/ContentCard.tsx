import React from 'react'
import TopNavBar from './TopNavBar'

interface Props {
  title: string
  text: string
  breadCrumbText: string
}

const ContentCard = ({ title, text, breadCrumbText }: Props) => {
  return (
    <div className='h-full flex flex-col bg-white'>
      <TopNavBar breadCrumbText={breadCrumbText} />
      <div className='flex flex-col items-center justify-center flex-grow p-4'>
        <div className='w-full max-w-2xl p-6 flex flex-col gap-5 items-center justify-center rounded-xl bg-zomp text-white-smoke shadow-lg'>
          <p className='font-semibold text-2xl text-center'>{title}</p>
          <p className='text-lg text-justify leading-relaxed'>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default ContentCard
