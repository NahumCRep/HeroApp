import React from 'react'
import HeroesList from '../components/HeroesList'

const DcPage = () => {
  return (
    <>
      <h1>Dc Heroes</h1>
      <hr />
      <HeroesList publisher={'DC Comics'} />
    </>
  )
}

export default DcPage