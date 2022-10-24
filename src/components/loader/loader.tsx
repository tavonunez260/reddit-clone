import React from 'react'
import { ClipLoader } from 'react-spinners'
import clsx from 'clsx'
import 'animate.css'
import styles from './loader.module.scss'

export const Loader = (): JSX.Element => {
  return (
    <div className={clsx('animate__animated animate__fadeIn', styles.loader)}>
      <ClipLoader color="#FF5414" />
    </div>
  )
}
