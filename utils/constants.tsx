import { BsCode } from 'react-icons/bs';
import { GiCakeSlice, GiGalaxy, GiLipstick } from 'react-icons/gi';
import { IoLogoGameControllerB } from 'react-icons/io';
import { SiHappycow } from 'react-icons/si';
import { MdOutlineSportsBasketball } from 'react-icons/md';
import { GiJumpingDog } from 'react-icons/gi';


export const topics = [
  {
    route: 'development',
    name: '程序',
    // 组件也可以被当做数组元素的
    icon: <BsCode />,
  },
  {
    route: 'comedy',
    name: '喜剧',
    icon: <SiHappycow />,
  },
  {
    route: 'gaming',
    name: '游戏',
    icon: <IoLogoGameControllerB />,
  },
  {
    route: 'food',
    name: '美食',
    icon: <GiCakeSlice />,
  },
  {
    route: 'dance',
    name: '舞蹈',
    icon: <GiGalaxy />,
  },
  {
    route: 'beauty',
    name: '时尚',
    icon: <GiLipstick />,
  },
  {
    route: 'animals',
    name: '动物',
    icon: <GiJumpingDog />,
  },
  {
    route: 'sports',
    name: '运动',
    icon: <MdOutlineSportsBasketball />,
  },
];

export const footerInfo = [
  '2023 © 短视频',
  '作者：xxx'
]