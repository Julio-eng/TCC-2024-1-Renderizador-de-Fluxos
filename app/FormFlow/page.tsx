'use client'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Section } from '@/types/formTypes'
import InformationCard from '../components/InformationCard';
import QuestionCard from '../components/QuestionCard'
import BackQuestion from '../components/icons/BackQuestion';
import TopNavBar from '../components/TopNavBar';
import { useSearchParams } from 'next/navigation';
import { Form, Occupation } from '../../types/formTypes'

const Flow = () => {
  const [form, setForm] = useState<Occupation | undefined>()
  const [section, setSection] = useState<Section | undefined>()
  const sectionIdStack = useRef<string[]>([])
  const searchParams = useSearchParams()
  const endpointId = searchParams.get('endpointId')

  const updateSection = (sectionId: string): void => {
    if (form) {
      const newSection: Section | undefined = form.sections.find(section => section["sectionId"] === sectionId)
      if (newSection) {
        setSection(newSection)
        sectionIdStack.current.push(sectionId)
      }
    }
  }

  const goToPreviousSection = () => {
    sectionIdStack.current.pop();
    if (sectionIdStack.current.length > 0 && form) {
      const sectionId = sectionIdStack.current[sectionIdStack.current.length - 1]
      const newSection: Section | undefined = form.sections.find(section => section["sectionId"] === sectionId)
      newSection && setSection(newSection)
    }
  }

  useEffect(() => {
    const getOccupationForm = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/FormFlow/api?id=${endpointId}`)
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }

        const occupationForm: Form = await res.json();
        setForm(occupationForm.occupation);

        if (occupationForm.occupation.sections.length > 0) {
          const initialSection = occupationForm.occupation.sections[0];
          setSection(initialSection);
          sectionIdStack.current.push(initialSection.sectionId);
        }
      } catch (error) {
        console.error('Failed to fetch occupation form:', error);
      }
    }

    getOccupationForm()
  }, [endpointId])

  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-5'>
      <TopNavBar breadCrumbText='Empregado Doméstico' showConfirmationModal={true} />
      {
        section && section.items.length !== 0 ?
          <QuestionCard itemData={section.items[0]} updateContent={updateSection} />
          :
          <InformationCard section={section} />
      }
      {
        //Olhar por quê sectionIdStack.current.length está como 2 na primeira renderização (Em prod não ocorre esse problema)
        section && sectionIdStack.current.length > 1 && (<button className='flex justify-center items-center space-x-2 p-2 rounded' onClick={goToPreviousSection}>
          <BackQuestion />
          <span className='text-xs'>Pergunta anterior</span>
        </button>)
      }
    </div>
  )
}

const FlowPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Flow />
    </Suspense>
  )
}

export default FlowPage