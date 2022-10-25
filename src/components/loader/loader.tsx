import React from 'react'
import { ClipLoader } from 'react-spinners'
import clsx from 'clsx'
import 'animate.css'

export const Loader = (): JSX.Element => {
  return (
    <div
      className={clsx(
        'animate__animated animate__fadeIn',
        'fixed top-0 z-10 w-[100vw] h-[100vh] flex justify-center items-center bg-[rgba(0,_0,_0,_0.4)]'
      )}>
      <ClipLoader color="#FF5414" />
    </div>
  )
}
