// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react'
import { IconProps } from 'interfaces'
import SVG from 'react-inlinesvg'
import clsx from 'clsx'
import styles from './icon.module.scss'

export const Icon: React.FC<IconProps> = ({
  src,
  className,
  fillPath,
  fillCircle,
  fillLine,
  fillRect
}): JSX.Element => {
  return (
    <SVG
      src={src}
      className={clsx(
        styles.icon,
        className,
        [fillPath && styles.svgFillPath],
        [fillCircle && styles.svgFillCircle],
        [fillLine && styles.svgFillLine],
        [fillRect && styles.svgFillRectfillRect]
      )}
    />
  )
}
