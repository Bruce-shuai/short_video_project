import React from 'react'

import { footerInfo  } from '../utils/constants'

const Footer = () => {
  return (
    <div className='grow flex flex-col justify-end items-left ml-2 mb-2'>
      {footerInfo.map(
        (item) => (
          <div key={item} className="text-xs font-extralight">{item}</div>
        )
      )}
    </div>
  )
}

export default Footer