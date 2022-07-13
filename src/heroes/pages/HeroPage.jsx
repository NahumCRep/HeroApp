import { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../helpers'
import 'animate.css';


const HeroPage = () => {
  const {id} = useParams()
  const hero = useMemo(() => getHeroById(id), [id]) 

  const navigate = useNavigate()

  const onNavigateBack = () => {
    navigate(-1)
  }

  if( !hero ){
    return <Navigate to='/marvel' />
  } 

  console.log(hero)
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__backInLeft"
        />
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Alter Ego: </b> {hero.alter_ego} </li>
          <li className="list-group-item"> <b>Publisher: </b> {hero.publisher} </li>
          <li className="list-group-item"> <b>First Appearance: </b> {hero.first_appearance} </li>
        </ul>

        <h4 className="mt-3">Characters</h4>
        <p>{hero.characters}</p>

        <button 
          className="btn btn-outline-primary"
          onClick={onNavigateBack}
        >
          Go Back
        </button>
      </div>
    </div>
  )
}

export default HeroPage