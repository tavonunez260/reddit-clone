import React from 'react'
import { Card } from 'components'
import { RootState } from 'store'
import clsx from 'clsx'
import { useSelector } from 'react-redux'

export const NewPage = (): JSX.Element => {
  const { newResults } = useSelector((state: RootState) => state.app)
  return (
    <div
      className={clsx('flex flex-col justify-center gap-6 w-full rounded-[20px] bg-transparent')}>
      {newResults?.map((result, index) => {
        return (
          <Card
            key={`newResult${index + 1}`}
            author={result.author}
            description={result.description}
            tag={result.tag}
            title={result.title}
            url={result.url}
          />
        )
      })}
    </div>
  )
}
