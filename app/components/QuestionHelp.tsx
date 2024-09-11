'use client'

import { useEffect, useRef, useState } from "react"
import QuestionMarkIcon from "./icons/QuestionMarkIcon"

interface Props {
  text: string | undefined
}

const QuestionHelp = ({ text }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleMouseDown = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleMouseDown)
    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [])

  if (!text) return null

  return (
    <div ref={ref} className="relative inline-block text-left">
      <button
        onClick={toggleMenu}
        className="p-2 rounded-full focus:outline-none active:scale-90 transition-transform duration-150"
        aria-label="Help"
      >
        <QuestionMarkIcon size="size-6" />
      </button>
      {isOpen && (
        <div
          tabIndex={0}
          className="absolute right-0 z-10 mt-2 p-3 w-64 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform ease-out duration-200"
        >
          <p className="text-sm text-gray-700 leading-snug">
            {text}
          </p>
        </div>
      )}
    </div>
  )
}

export default QuestionHelp
