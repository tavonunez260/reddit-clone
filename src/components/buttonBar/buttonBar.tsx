import React from 'react'
import { Button } from 'components'
import { ButtonBarProps, Icons } from 'interfaces'
import styles from './buttonBar.module.scss'

export const ButtonBar: React.FC<ButtonBarProps> = ({ selected }): JSX.Element => {
  return (
    <div className={styles.buttonBar}>
      <Button icon={Icons.hot} label="Hot" link="/hot" selected={selected} />
      <Button icon={Icons.new} label="New" link="/new" selected={selected} />
      <Button icon={Icons.rising} label="Rising" link="/rising" selected={selected} />
    </div>
  )
}
