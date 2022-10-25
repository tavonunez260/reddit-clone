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

export interface SearchQueryResultProps {
  title: string
  description: string
  tag: string
  author: string
  url: string
}
