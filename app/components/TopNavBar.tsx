'use client'
import React, { useState } from 'react'
import BackIcon from './icons/BackIcon'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface Props {
  breadCrumbText: string
  showConfirmationModal?: boolean
}

const TopNavBar = ({ breadCrumbText, showConfirmationModal = false }: Props) => {
  const [showConfirmationMessage, setShowConfirmationMessage] = useState(false);
  const router = useRouter()

  const handleContinue = () => {
    setShowConfirmationMessage(false)
  }

  const handleExit = () => {
    router.push("/")
    setShowConfirmationMessage(false)
  }

  return (
    <div className='flex justify-between items-start p-2 absolute top-0 left-0 w-full'>
      <div className="flex items-center gap-4">
        {
          showConfirmationModal ?
            <button onClick={() => { setShowConfirmationMessage(true) }}>
              <BackIcon />
            </button>
            :
            <Link href="/">
              <BackIcon />
            </Link>
        }
        <p className="text-sm font-semibold">{breadCrumbText}</p>
      </div>
      {showConfirmationMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-4 rounded-lg shadow-lg w-[80%]">
            <p className="mb-4">Ao sair todo o seu progresso será perdido.</p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleContinue}>Continuar</button>
              <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md" onClick={handleExit}>Sair</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TopNavBar