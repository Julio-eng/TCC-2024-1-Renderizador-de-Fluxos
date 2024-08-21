'use client'
import React from 'react'
import BackIcon from './icons/BackIcon'
import Link from 'next/link'

interface Props {
  breadCrumbText: string
  showConfirmationModal?: boolean
}

const TopNavBar = ({ breadCrumbText }: Props) => {

  return (
    <div className='flex justify-between items-start p-2 absolute top-0 left-0 w-full'>
      <div className="flex items-center gap-4">
        <Link href="/">
          <BackIcon />
        </Link>
        <p className="text-sm font-semibold">{breadCrumbText}</p>
      </div>
    </div>
  )
}

export default TopNavBar