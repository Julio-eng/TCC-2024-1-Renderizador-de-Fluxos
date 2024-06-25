import Link from 'next/link'
import React from 'react'
import OverflowIcon from './icons/OverflowIcon'
import DropdownMenu from './DropdownMenu'

const HomePage = () => {
  return (
    <div className='relative h-full flex flex-col items-center justify-center gap-10'>
      <div className='absolute top-4 right-4'>
        <DropdownMenu />
      </div>
      <p className='text-lg font-medium'>Escolha sua profissão</p>
      <div className='flex flex-col gap-3'>
        <Link className='btn btn-wide' href="/domestica">Empregado Doméstico</Link>
      </div>
    </div>
  )
}

export default HomePage