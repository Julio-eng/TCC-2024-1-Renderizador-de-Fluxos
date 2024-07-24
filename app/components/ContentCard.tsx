import React from 'react'
import TopNavBar from './TopNavBar';

interface Props {
  // Icon: React.ComponentType<any>;
  title: string;
  text: string
  breadCrumbText: string
}

const ContentCard = ({ title, text, breadCrumbText }: Props) => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-10'>
      <TopNavBar breadCrumbText={breadCrumbText} />
      <p>{title}</p>
      <p className='w-[70%] text-center'>{text}</p>
    </div>
  )
}

export default ContentCard