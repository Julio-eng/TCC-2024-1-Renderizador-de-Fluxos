import Link from 'next/link'
import React from 'react'
import DropdownMenu from './DropdownMenu'

interface Occupation {
  id: string;
  name: string;
}

const getOcupations = async (): Promise<Occupation[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}?type=listForms`, { next: { revalidate: 10 } })

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
      <p className='text-lg font-medium'>Escolha sua profissão</p>
      <div className='flex flex-col gap-3'>
        {occupations.map((occupation) => (
          <Link className='btn btn-wide' key={occupation.id} href={`/FormFlow?endpointId=${occupation.id}`}>
            {occupation.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HomePage