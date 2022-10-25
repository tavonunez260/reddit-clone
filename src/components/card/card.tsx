import React from 'react'
import { SearchQueryResultProps } from 'interfaces'
import { RootState } from 'store'
import clsx from 'clsx'
import { useSelector } from 'react-redux'

export const Card: React.FC<SearchQueryResultProps> = ({
  author,
  description,
  tag,
  title,
  url
}): JSX.Element => {
  const { darkMode } = useSelector((state: RootState) => state.ui)
  return (
    <div
      className={clsx('flex flex-col justify-center gap-4 px-4 py-2 rounded-[20px] bg-whiteColor', [
        darkMode ? 'bg-grayColor4' : 'bg-whiteColor'
      ])}>
      <p
        className={clsx(
          'decoration-none no-underline text-[12px] font-regular leading-[16px] break-words',
          [darkMode ? 'text-authorColorDark' : 'text-authorColorLight']
        )}>
        Posted by{' '}
        <a href={`https://www.reddit.com/user/${author}/`} target="_blank" rel="noreferrer">
          {author}
        </a>
      </p>
      <h1
        className={clsx('text-[20px] font-bold leading-[24px] break-words', [
          darkMode ? 'text-titleColorDark' : 'text-titleColorLight'
        ])}>
        {title}
      </h1>
      <div
        className={clsx('w-min px-2 rounded-[5px] break-words', [
          [darkMode ? 'bg-bgTagColorDark' : 'bg-bgTagColorLight']
        ])}>
        <span
          className={clsx('text-[12px] font-bold', [
            darkMode ? 'text-tagColorDark' : 'text-tagColorLight'
          ])}>
          {tag}
        </span>
      </div>
      <p
        className={clsx('text-[14px] leading-[20px] font-regular break-words', [
          darkMode ? 'text-textColorDark' : 'text-textColorLight'
        ])}>
        {description}
      </p>
      <a
        href={url}
        className={clsx('text-[14px] leading-[20px] font-bold break-words', [
          darkMode ? 'text-linkColorDark' : 'text-linkColorLight'
        ])}
        rel="noreferrer"
        target="_blank">
        Link to topic
      </a>
    </div>
  )
}
