import QuestionOption from './QuestionOption';
import { Item } from '@/types/formTypes'
import Image from 'next/image';
import QuestionHelp from './QuestionHelp';

interface Props {
  item: Item | undefined;
  updateContent: (contentId: string) => void;
}

const QuestionCard = ({ item, updateContent }: Props) => {

  return (
    <>
      <div className='w-full max-w-lg p-4 flex flex-col items-center rounded-xl gap-6 bg-white'>
        {item?.image && (
          <>
            <Image
              src={item.image}
              width={500}
              height={500}
              alt="Context Image"
              className='rounded-xl'
            />
            <div className="divider"></div>
          </>
        )}
        {item?.description && (
          <div className='w-full flex justify-end'>
            <QuestionHelp text={item?.description} />
          </div>
        )}
        <div className='bg-ebony text-white-smoke px-5 py-12 w-full rounded-xl'>
          <p className='text-lg md:text-xl font-medium text-center'>{item?.text}</p>
        </div>
        <ul className='flex flex-col items-center justify-center gap-2 w-full rounded-xl'>
          {item?.options?.map((option) => <QuestionOption key={option.value} optionData={option} updateContent={updateContent} />)}
        </ul>
      </div>
      <div className="divider"></div>
    </>
  )
}

export default QuestionCard