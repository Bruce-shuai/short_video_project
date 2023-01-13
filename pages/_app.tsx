import { GoogleOAuthProvider } from '@react-oauth/google';
import '../styles/globals.css'
import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app'

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import Head from 'next/head'


export default function App({ Component, pageProps }: AppProps) {
  const [isSSR, setIsSSR] = useState(true);


  // 检测SSR渲染时机
  useEffect(() => {
    setIsSSR(false);
  }, [])

  if (isSSR) return null;

  return (
    <GoogleOAuthProvider clientId='XXX'>
      <Head>
        <title>短视频-记录美好生活</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className='flex gap-6 md:gap-20'>
        <div className="h-[calc(100vh-66px)] overflow-hidden xl:hover:overflow-auto">
          <Sidebar />
        </div>
        <div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1">
          <Component {...pageProps} />
        </div>
      </div>
    </GoogleOAuthProvider>
  )
}
