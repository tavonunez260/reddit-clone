import React from 'react'
import { Button } from 'components'
import { ButtonBarProps, Icons } from 'interfaces'
import { RootState } from 'store'
import clsx from 'clsx'
import { useSelector } from 'react-redux'

export const ButtonBar: React.FC<ButtonBarProps> = ({ selected }): JSX.Element => {
  const { darkMode } = useSelector((state: RootState) => state.ui)
  return (
    <div
      className={clsx(
        'flex flex-col md:flex-row justify-center items-center gap-6 w-full px-4 py-2 rounded-[20px]',
        [darkMode ? 'bg-transparent md:bg-grayColor4' : 'bg-transparent md:bg-whiteColor']
      )}>
      <Button icon={Icons.hot} label="Hot" link="/hot" selected={selected} />
      <Button icon={Icons.new} label="New" link="/new" selected={selected} />
      <Button icon={Icons.rising} label="Rising" link="/rising" selected={selected} />
    </div>
  )
}
