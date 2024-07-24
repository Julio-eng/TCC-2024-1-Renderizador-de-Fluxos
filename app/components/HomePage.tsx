import Link from 'next/link'
import React from 'react'
import DropdownMenu from './DropdownMenu'

interface Occupation {
  name: string;
  endpoint: string;
}

const getOcupations = async (): Promise<Occupation[]> => {
  const res = await fetch("http://localhost:4000/ocupations")

  if(!res.ok){
    throw new Error ("Failed to fetch data")
  }

  return res.json()
}

const HomePage = async () => {
  const occupations: Occupation[] = await getOcupations()

  return (
    <div className='relative h-full flex flex-col items-center justify-center gap-10'>
      <div className='absolute top-4 right-4'>
        <DropdownMenu />
      </div>
      <p className='text-lg font-medium'>Escolha sua profissão</p>
      <div className='flex flex-col gap-3'>
        {occupations.map((occupation) => (
          <Link className='btn btn-wide' key={occupation.endpoint} href={`/flow?endpointId=${occupation.endpoint}`}>
            {occupation.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HomePage