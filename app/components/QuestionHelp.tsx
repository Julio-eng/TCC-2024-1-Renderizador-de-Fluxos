'use client'

import { useEffect, useRef, useState } from "react"
import QuestionMarkIcon from "./icons/QuestionMarkIcon"

interface Props {
  text: string | null
}

const QuestionHelp = ({ text } : Props) => {

  if(!text) return null;

  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={ref} className="bg-white">
      <button onClick={toggleMenu}>
        <QuestionMarkIcon size="size-7" />
      </button>
      {isOpen && (
        <div tabIndex={0} className="absolute right-0 z-[1] menu p-2 shadow bg-base-100 rounded-box w-64 bg-white">
         {text}
        </div>
      )}
    </div>
  )
}

export default QuestionHelp