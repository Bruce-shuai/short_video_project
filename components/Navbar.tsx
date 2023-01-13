import React from 'react'
// Next 提供了最优的图片组件(懒加载、图片尺寸等性能优化，以及强制一些图片规范)
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';

import Logo from '../utils/video-logo.svg';

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
      <Link href="/">
        <div className='w-[30px] md:w-[50px]'>
          <Image 
            className='cursor-pointer'
            src={Logo}
            alt="short-video"
            layout='responsive'
          />
        </div>
      </Link>
    </div>
  )
}

export default Navbar