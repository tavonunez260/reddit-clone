export interface IconProps {
  src: string
  className?: string
  fillPath?: boolean
  fillLine?: boolean
  fillCircle?: boolean
  fillRect?: boolean
}

export interface ButtonBarProps {
  selected: string
}

export interface ButtonProps {
  label: string
  link: string
  icon?: string
  selected: string
}
