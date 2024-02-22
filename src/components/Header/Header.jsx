import React from 'react'
import { HeaderStyled, Link } from './Header.styled'

export const Header = () => {
  return (
    <HeaderStyled>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
      </HeaderStyled>
  )
}
