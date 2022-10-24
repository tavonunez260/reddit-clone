import React from 'react'
import { Icon } from 'components'
import { ButtonProps } from 'interfaces'
import { Link } from 'react-router-dom'
import styles from './button.module.scss'

export const Button: React.FC<ButtonProps> = ({ label, link, icon, selected }): JSX.Element => {
  return (
    <Link to={link}>
      <div className={styles.buttonContainer}>
        <div className={styles.iconContainer}>
          <Icon src={icon!} fillPath className={styles.svgIcons} />
        </div>
        <p className={styles.text}>{label}</p>
      </div>
    </Link>
  )
}
