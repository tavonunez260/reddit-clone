import React, { useEffect } from 'react'
import { ButtonBar, Loader, SearchBar } from 'components'
import { useAuth } from 'hooks'
import { HotPage, NewPage, RisingPage } from 'pages'
import { RootState } from 'store'
import clsx from 'clsx'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from './App.module.scss'

const App = (): JSX.Element => {
  const { darkMode, loading } = useSelector((state: RootState) => state.ui)
  const { signIn } = useAuth()
  const { pathname } = useLocation()
  useEffect(() => {
    signIn().then()
  }, [])
  return (
    <div
      className={clsx(styles.container, [darkMode ? styles.containerDark : styles.containerLight])}>
      {loading && <Loader />}
      <SearchBar />
      <div className={clsx(styles.contentContainer)}>
        <ButtonBar selected={pathname} />
        <Routes>
          <Route path="/hot" element={<HotPage />} />
          <Route path="/new" element={<NewPage />} />
          <Route path="/rising" element={<RisingPage />} />
          <Route path="/*" element={<Navigate to="/hot" replace />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
