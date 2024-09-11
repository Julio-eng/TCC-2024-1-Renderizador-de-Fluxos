import QuestionOption from './QuestionOption';
import { Item } from '@/types/formTypes'
import Image from 'next/image';
import QuestionHelp from './QuestionHelp';

interface Props {
  item: Item | undefined;
  description: string | null
  updateContent: (contentId: string) => void;
}

const QuestionCard = ({ item, description, updateContent }: Props) => {

  return (
    <div className='w-11/12 p-4 flex flex-col items-center rounded-xl gap-10 bg-white'>
      {item?.image && (
        <Image
          src={item.image}
          width={500}
          height={500}
          alt="Context Image"
          className='rounded-xl'
        />

      )}

      <div className='w-full flex justify-end'>
        <QuestionHelp text={description} />
      </div>
      <div className='bg-ebony text-white-smoke px-5 py-12 w-full rounded-xl'>
        <p className='text-xl font-medium text-center'>{item?.text}</p>
      </div>
      <ul className='flex flex-col items-center justify-center gap-2 w-full rounded-xl'>
        {item?.options?.map((option) => <QuestionOption key={option.goToSectionId} optionData={option} updateContent={updateContent} />)}
      </ul>

    </div>
  )
}

export default QuestionCard