import React from 'react'
import { CarBrandSelect, PriceSelect } from '..'
import { Filterstyle } from './Filters.styled'

export const Filter = () => {
  return (
    <Filterstyle>
        <CarBrandSelect/>
        <PriceSelect/>
        <input type="text" />
    </Filterstyle>
  )
}
