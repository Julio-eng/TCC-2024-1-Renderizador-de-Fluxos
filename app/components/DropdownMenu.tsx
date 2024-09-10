'use client'

import { useEffect, useRef, useState } from "react"
import OverflowIcon from "./icons/OverflowIcon"
import Link from "next/link"
import InfoIcon from "./icons/InfoIcon"
import QuestionMarkIcon from "./icons/QuestionMarkIcon"

const DropdownMenu = () => {

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
        <OverflowIcon />
      </button>
      {isOpen && (
        <ul tabIndex={0} className="absolute right-0 z-[1] menu p-2 shadow bg-base-100 rounded-box w-44 bg-white">
          <li>
            <Link href="/about">
              <InfoIcon />
              Sobre
            </Link>
          </li>
          <li>
            <Link href="/help">
              <QuestionMarkIcon size="size-5" />
              Ajuda
            </Link>
          </li>
        </ul>
      )}
    </div>
  )
}

export default DropdownMenu