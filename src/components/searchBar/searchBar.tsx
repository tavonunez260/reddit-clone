import React, { useState } from 'react'
import { Icon } from 'components'
import { useSearch } from 'hooks'
import { Icons } from 'interfaces'
import { RootState, uiSlice } from 'store'
import { useDispatch, useSelector } from 'react-redux'
import clsx from 'clsx'

export const SearchBar = (): JSX.Element => {
  const { darkMode } = useSelector((state: RootState) => state.ui)
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const { performSearch } = useSearch()

  return (
    <div
      className={clsx(
        'fixed top-0 flex justify-between md:justify-center items-center flex-wrap md:flex-nowrap gap-8 w-[100vw] h-max p-4 md:p-2 border-y-[1px] border-solid border-grayColor2',
        [darkMode ? 'bg-grayColor4' : 'bg-whiteColor']
      )}>
      <div className="w-[7rem] h-min order-[1]">
        <Icon src={darkMode ? Icons.redditLogo : Icons.redditLogoDark} />
      </div>
      <div
        className={clsx(
          'flex justify-between items-center gap-4 order-[3] md:order-[2] basis-[100%] md:basis-[unset] h-[2.25rem] px-[2rem] py-[0.125rem] bg-grayColor1 rounded-[20px] border-[1px] border-solid border-grayColor2',
          [
            darkMode
              ? 'bg-grayColor6 hover:bg-grayColor4 hover:border-whiteColor'
              : 'bg-grayColor1 hover:bg-whiteColor hover:border-secondaryColor'
          ]
        )}>
        <div className="flex gap-3">
          <div className="w-6 h-6">
            <Icon src={Icons.search} fillPath className="text-grayColor2" />
          </div>
          <input
            className={clsx('border-none outline-none bg-transparent', [
              darkMode ? 'text-whiteColor' : 'text-darkColor'
            ])}
            placeholder="Search here"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </div>
        {value !== '' && (
          <div aria-hidden className="w-6 h-6 cursor-pointer" onClick={() => setValue('')}>
            <Icon src={Icons.close} fillPath className="text-grayColor2" />
          </div>
        )}
      </div>
      <div className="flex justify-end md:justify-start items-center gap-8 order-[2] md:order-[3] basis-[40%] md:basis-[unset]">
        <button
          className={clsx(
            'h-[2.25rem] px-8 py-[0.125rem] border-none bg-primaryColor rounded-[20px] font-bold',
            [darkMode ? 'text-blackColor' : 'text-whiteColor']
          )}
          onClick={() => {
            if (value !== '') {
              performSearch(value).then()
            }
          }}>
          Go!
        </button>
        <div
          aria-hidden
          className="w-6 h-6 cursor-pointer"
          onClick={() => {
            dispatch(uiSlice.actions.setDarkMode(!darkMode))
          }}>
          <Icon
            src={darkMode ? Icons.darkModeOnFill : Icons.darkModeOff}
            fillPath
            className={darkMode ? 'text-secondaryColor' : 'text-grayColor2'}
          />
        </div>
      </div>
    </div>
  )
}
