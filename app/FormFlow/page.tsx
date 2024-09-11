'use client'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Item, Section } from '@/types/formTypes'
import InformationCard from '../components/InformationCard';
import QuestionCard from '../components/QuestionCard'
import BackQuestion from '../components/icons/BackQuestion';
import TopNavBar from '../components/TopNavBar';
import { useSearchParams } from 'next/navigation';
import { Form, Occupation } from '../../types/formTypes'
import StartOverModal from '../components/StartOverModal';

const Flow = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState<Occupation | undefined>()
  const [section, setSection] = useState<Section | undefined>()
  const [loading, setLoading] = useState(true);
  const sectionIdStack = useRef<string[]>([])
  const searchParams = useSearchParams()
  const endpointId = searchParams.get('endpointId')

  useEffect(() => {
    const getOccupationForm = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/FormFlow/api?id=${endpointId}`);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }

        const occupationForm: Form = await res.json();
        setForm(occupationForm.occupation);

        const savedSectionId = localStorage.getItem('savedSectionId');
        if (savedSectionId) {
          setIsModalOpen(true);
        } else {
          normalStart(occupationForm);
        }
      } catch (error) {
        console.error('Failed to fetch occupation form:', error);
      } finally {
        setLoading(false);
      }
    };

    getOccupationForm()
  }, [endpointId]);

  // Refatorar esse método
  const normalStart = (occupationForm?: Form) => {
    if (occupationForm && occupationForm.occupation.sections.length > 0) {
      const initialSection = occupationForm.occupation.sections[0];
      setSection(initialSection);
      sectionIdStack.current.push(initialSection.sectionId);
      localStorage.setItem('savedSectionId', initialSection.sectionId)
      return
    }

    if (form) {
      const initialSection = form.sections[0];
      setSection(initialSection);
      sectionIdStack.current.push(initialSection.sectionId);
      localStorage.setItem('savedSectionId', initialSection.sectionId)
    }
  };

  const handleContinue = () => {
    const savedSectionId = localStorage.getItem('savedSectionId');

    if (form && savedSectionId) {
      const savedSection = form.sections.find(section => section.sectionId === savedSectionId);
      if (savedSection) {
        setSection(savedSection);
        sectionIdStack.current.push(savedSection.sectionId);
      }
    }
    setIsModalOpen(false);
  };

  const handleStartOver = () => {
    localStorage.removeItem('savedSectionId');
    normalStart();
    setIsModalOpen(false);
  };

  const updateSection = (sectionId: string): void => {
    if (form) {
      const newSection: Section | undefined = form.sections.find(section => section["sectionId"] === sectionId)
      if (newSection) {
        setSection(newSection)
        sectionIdStack.current.push(sectionId)
        localStorage.setItem('savedSectionId', sectionId)
      }
    }
  }

  const goToPreviousSection = () => {
    sectionIdStack.current.pop();
    if (sectionIdStack.current.length > 0 && form) {
      const sectionId = sectionIdStack.current[sectionIdStack.current.length - 1]
      const newSection: Section | undefined = form.sections.find(section => section["sectionId"] === sectionId)
      if (newSection) {
        setSection(newSection)
        localStorage.setItem('savedSectionId', sectionId)
      }
    }
  }

  return (
    <div className='h-full flex flex-col bg-white'>
      <TopNavBar breadCrumbText={form?.title} />
      <StartOverModal
        isOpen={isModalOpen}
        onContinue={handleContinue}
        onStartOver={handleStartOver}
      />
      {loading ? (
        <div className='flex justify-center items-center flex-grow'>
          <span className="loading loading-spinner loading-lg text-gray-500"></span>
        </div>
      ) : (
        !isModalOpen && (
          <div className='flex flex-col justify-center items-center gap-10 flex-grow p-4'>
            <div className='w-full max-w-4xl flex flex-col items-center bg-gray-100 rounded-lg shadow-lg p-6'>
              {
                section?.items.map((item: Item) => (
                  item.type === 'textItem' ?
                    (<InformationCard item={item} key={item.itemId} />) :
                    (<QuestionCard item={item} updateContent={updateSection} key={item.itemId} />)
                ))
              }
            </div>
            {
              section && sectionIdStack.current.length > 1 &&
              (<button className='w-full max-w-xs flex justify-center items-center space-x-2 p-3 rounded bg-blue-500 text-white hover:bg-blue-600 active:scale-95 transition-transform duration-150 shadow-lg' onClick={goToPreviousSection}>
                <BackQuestion />
                <span className='text-xs'>Seção anterior</span>
              </button>)
            }
          </div>
        )
      )}
    </div>
  );


}

const FlowPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Flow />
    </Suspense>
  )
}

export default FlowPage