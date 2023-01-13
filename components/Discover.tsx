import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

import { topics } from '../utils/constants';

const Discover = () => {
  const topicStyle = 'flex items-center gap-3 hover:bg-primary p-1 cursor-pointer rounded text-violet-500 hover:text-violet-700 hover:scale-105 justify-center xl:justify-start font-semibold xl:rounded-full xl:border-2 xl:px-3';

  return (
    <div className='xl:border-b-2 xl:border-gray-200 pd-6 border-t xl:border-t-2 pt-1'>
      <div className='flex gap-1 flex-col xl:flex-row xl:flex-wrap xl:gap-3 xl:p-3'>
        {topics.map((item) => (
          <Link href={`/?topic=${item.route}`} key={item.name}>
            <div className={topicStyle}>
              <span className='font-bold text-2xl xl:text-md'>
                {item.icon}
              </span>
              <span className='font-medium text-lg xl:text-sm'>{item.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Discover