'use client'
import React, { useEffect, useRef, useState } from 'react'
import data from '../../data/form_adaptado.json'
import Link from 'next/link';
import { Section } from '@/types/formTypes'
import InformationCard from '../components/InformationCard';
import QuestionCard from '../components/QuestionCard'
import CloseIcon from '../components/icons/CloseIcon'
import BackIcon from '../components/icons/BackIcon'

const Domestica = () => {
  // const [formData, setFormData] = useState<Form>(data)
  const [sectionData, setSectionData] = useState<Section>(data.sections[0])
  const sectionIdStack = useRef<string[]>([sectionData.sectionId])

  const updateSection = (sectionId: string): void => {
    const newSectionData: Section = data.sections.find(section => section["sectionId"] === sectionId)
    if (newSectionData) {
      setSectionData(newSectionData)
      sectionIdStack.current.push(sectionId)
    }
  }

  const goToPreviousSection = () => {
    sectionIdStack.current.pop();
    const sectionId = sectionIdStack.current[sectionIdStack.current.length - 1]
    const newSectionData: Section = data.sections.find(section => section["sectionId"] === sectionId)
    newSectionData && setSectionData(newSectionData)
  }

  useEffect(() => {
    console.log("Recarregou")
  })

  return (
    <div className='w-full h-full flex flex-col'>
      <div className='flex justify-between items-start p-4'>
        <div className="flex items-center gap-4">
          {
            sectionIdStack.current[sectionIdStack.current.length - 1] !== data.sections[0].sectionId ?
              <button onClick={goToPreviousSection}>
                <BackIcon />
              </button>
              :
              <Link href="/">
                <BackIcon />
              </Link>
          }
          <p className="text-sm font-semibold">Empregado Doméstico</p>
        </div>
        <Link href="/domestica?showModal=y" as="/domestica">
          <CloseIcon />
        </Link>
      </div>
      {
        sectionData?.items.length !== 0 ?
          <QuestionCard itemData={sectionData.items[0]} updateContent={updateSection} />
          :
          <InformationCard sectionData={sectionData} />
      }
    </div>
  )
}

export default Domestica