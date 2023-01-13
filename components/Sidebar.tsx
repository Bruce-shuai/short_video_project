import React, { useState} from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link';

import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import Discover from './Discover'; 
import Footer from './Footer';
import SuggestedAccounts from './SuggestedAccounts';

import { GoogleLogin } from '@react-oauth/google';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const userProfile = false;


  const normalLink = 'flex items-center gap-3 hover:bg-primary p-1 cursor-pointer rounded text-violet-500 justify-center xl:justify-start font-semibold';
  

  return (
    <div className='flex flex-col h-full'>
      <div
        className='block xl:hidden ml-4 mt-3 text-xl'
        onClick={() => setShowSidebar(prev => !prev)}
      >
        {
          showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />
        }
      </div>
      {showSidebar && (
        <div className='xl:w-400 grow w-26 flex flex-col justify-start border-r-2 border-gray-100 xl:border-0 p-1'>
          <div className='xl:border-b-2 border-gray-200 xl:pb-4'>
            <Link href="/">
              <div className={normalLink}>
                <p className='text-2xl'>
                  <AiFillHome />
                </p>
                <span className='text-lg '>
                  我的
                </span>
              </div>
            </Link>
          </div>
          {!userProfile && (
            <div className='px-2 py-4 hidden xl:block'>
              <p className='text-gray-400 font-light text-sm'>登录之后可评论短视频~</p>
              <div className='pr-4'>
                <GoogleLogin 
                  onSuccess={() => {}}
                  onError={() => {}}
                />
              </div>
            </div>
          )}
          <Discover />
          <SuggestedAccounts />
          <Footer />
        </div>
      )}
    </div>
  )
}

export default Sidebar