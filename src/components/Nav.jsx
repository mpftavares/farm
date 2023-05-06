import React from 'react'

export default function Nav() {
  return (
    <nav>
    <Link to='/home'>Home</Link>
    <Link to='/services'>Serviços</Link>
    <Link to='/sales'>Promoções</Link>
    <Link to='/adress'>Localização</Link>
    <Link to='/contacts'>Contactos</Link>
  </nav>
  )
}
