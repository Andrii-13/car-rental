import React from 'react'
import { TitleStyle } from './Title.styled'

export const Title = ({children}) => {
  return (
    <TitleStyle>{children}</TitleStyle>
  )
}
