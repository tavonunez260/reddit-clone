import React, { useState } from 'react'
import { Icon } from 'components'
import { Icons } from 'interfaces'
import { RootState, uiSlice } from 'store'
import { useDispatch, useSelector } from 'react-redux'
import styles from './searchBar.module.scss'
import clsx from 'clsx'

export const SearchBar = (): JSX.Element => {
  const [value, setValue] = useState('')
  const { darkMode } = useSelector((state: RootState) => state.ui)
  const dispatch = useDispatch()
  return (
    <div
      className={clsx(styles.navbarContainer, [
        darkMode ? styles.navbarContainerDark : styles.navbarContainerLight
      ])}>
      <div className={styles.navbarIcon}>
        <Icon src={darkMode ? Icons.redditLogoLight : Icons.redditLogoDark} />
      </div>
      <div
        className={clsx(styles.searchBarContainer, [
          darkMode ? styles.searchBarContainerDark : styles.searchBarContainerLight
        ])}>
        <div className={styles.inputContainer}>
          <div className={styles.iconContainer}>
            <Icon src={Icons.search} fillPath className={styles.svgIcons} />
          </div>
          <input
            className={styles.input}
            placeholder="Search here"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </div>
        {value !== '' && (
          <div aria-hidden className={styles.iconContainer} onClick={() => setValue('')}>
            <Icon src={Icons.close} fillPath className={styles.svgIcons} />
          </div>
        )}
      </div>
      <button
        className={clsx(styles.searchButton, [
          darkMode ? styles.darkColor : styles.searchButtonLight
        ])}>
        Go!
      </button>
      <div
        aria-hidden
        className={styles.iconContainer}
        onClick={() => {
          dispatch(uiSlice.actions.setDarkMode(!darkMode))
        }}>
        <Icon
          src={darkMode ? Icons.darkModeOnFill : Icons.darkModeOff}
          fillPath
          className={darkMode ? styles.darkButton : styles.svgIcons}
        />
      </div>
    </div>
  )
}
