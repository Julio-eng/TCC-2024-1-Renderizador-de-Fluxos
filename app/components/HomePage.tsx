import Link from 'next/link'
import React from 'react'
import DropdownMenu from './DropdownMenu'
import OccupationSearch from './OccupationSearch';

interface Occupation {
  id: string;
  name: string;
}

const getOcupations = async (): Promise<Occupation[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}listForms`, { next: { revalidate: 10 } })

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

const HomePage = async () => {
  const occupations: Occupation[] = await getOcupations()

  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-10 bg-white'>
      <div className='absolute top-4 right-4'>
        <DropdownMenu />
      </div>
      <p className='text-lg font-medium'>Em qual área jurídica está a sua dúvida?</p>
      <OccupationSearch occupations={occupations} />
    </div>
  )
}

export default HomePage