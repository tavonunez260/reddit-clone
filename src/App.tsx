import React, { useEffect } from 'react'
import { ButtonBar, Loader, SearchBar } from 'components'
import { useAuth } from 'hooks'
import { HotPage, NewPage, RisingPage } from 'pages'
import { RootState } from 'store'
import clsx from 'clsx'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

const App = (): JSX.Element => {
  const { darkMode, loading } = useSelector((state: RootState) => state.ui)
  const { signIn } = useAuth()
  const { pathname } = useLocation()
  useEffect(() => {
    signIn().then()
  }, [])
  return (
    <div
      className={clsx(
        'flex flex-col items-center w-[100vw] min-h-[100vh] pt-[8rem] pb-[4rem] md:py-[4rem] px-[3rem] lg:px-[0]',
        [darkMode ? 'bg-grayColor7' : 'bg-grayColor5']
      )}>
      {loading && <Loader />}
      <SearchBar />
      <div className={clsx('w-full flex justify-center gap-6 w-full lg:max-w-[40rem]')}>
        <div className="flex flex-col gap-6 w-full pt-8">
          <ButtonBar selected={pathname} />
          <Routes>
            <Route path="/hot" element={<HotPage />} />
            <Route path="/new" element={<NewPage />} />
            <Route path="/rising" element={<RisingPage />} />
            <Route path="/*" element={<Navigate to="/hot" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
