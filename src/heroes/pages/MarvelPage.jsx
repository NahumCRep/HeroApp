import React from 'react'
import HeroesList from '../components/HeroesList'

const MarvelPage = () => {
  return (
    <>
      <h1>Marvel Heroes</h1>
      <hr />
      <HeroesList publisher={'Marvel Comics'} />
    </>
  )
}

export default MarvelPage