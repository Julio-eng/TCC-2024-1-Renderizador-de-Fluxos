'use client'
import React from 'react'
import BackIcon from './icons/BackIcon'
import Link from 'next/link'
import BackQuestion from './icons/BackQuestion'

interface Props {
  breadCrumbText: string | undefined
  showConfirmationModal?: boolean
}

const TopNavBar = ({ breadCrumbText }: Props) => {

  return (
    <div className='navbar sticky top-0 bg-white'>
      <div className="flex items-center gap-4">
        <Link href="/">
          <BackQuestion />
        </Link>
        <p className="text-sm font-semibold">{breadCrumbText}</p>
      </div>
    </div>
  )
}

export default TopNavBar