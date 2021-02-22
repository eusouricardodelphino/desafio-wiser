import React from 'react'
import { AppProps } from 'next/app'

import AppProvider from '../hooks'
import GlobalStyles from '../styles/global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
      <GlobalStyles />
    </>
  )
}

export default MyApp
