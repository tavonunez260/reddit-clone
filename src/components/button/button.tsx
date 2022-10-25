import React from 'react'
import { Icon } from 'components'
import { ButtonProps } from 'interfaces'
import { RootState } from 'store'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Button: React.FC<ButtonProps> = ({ label, link, icon, selected }): JSX.Element => {
  const { darkMode } = useSelector((state: RootState) => state.ui)

  const divColorNoSelected = (): string => {
    let className = ''
    if (darkMode) {
      className = 'text-grayColor6'
    } else {
      className = 'bg-transparent'
    }
    return className
  }

  const divColorSelected = (): string => {
    let className = ''
    if (darkMode) {
      className = 'text-grayColor11'
    } else {
      className = 'bg-transparent'
    }
    return className
  }

  const textColorNoSelected = (): string => {
    let className = ''
    if (darkMode) {
      className = 'text-grayColor10'
    } else {
      className = 'text-secondaryColor'
    }
    return className
  }

  const textColorSelected = (): string => {
    let className = ''
    if (darkMode) {
      className = 'text-grayColor11'
    } else {
      className = 'text-grayColor2'
    }
    return className
  }

  return (
    <Link to={link}>
      <div
        className={clsx(
          'flex justify-center items-center gap-4 w-[14rem] md:w-[8rem] px-4 py-1 rounded-[20px] no-underline bg-whiteColor md:bg-transparent',
          [darkMode ? 'hover:bg-grayColor12' : 'hover:bg-grayColor8'],
          [selected === link ? divColorNoSelected() : divColorSelected()]
        )}>
        <div className="w-6 h-6">
          <Icon
            src={icon as string}
            fillPath
            className={clsx(selected === link ? textColorNoSelected() : textColorSelected())}
          />
        </div>
        <p
          className={clsx('no-underline font-bold', [
            selected === link ? textColorNoSelected() : textColorSelected()
          ])}>
          {label}
        </p>
      </div>
    </Link>
  )
}
