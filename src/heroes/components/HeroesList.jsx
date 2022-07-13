import { useMemo } from 'react'
import PropTypes from 'prop-types'
import { getHeroesByPublisher } from '../helpers'
import HeroCard from './HeroCard'

const HeroesList = ({ publisher }) => {
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]) 

    return (
        <div className='row rows-col-1 row-cols-md-3 g-3'>
            {
                heroes.map(hero => (
                    <HeroCard 
                        key={hero.id}  
                        { ...hero }
                    />
                ))
            }
        </div>
    )
}

HeroesList.propTypes = {
    publisher: PropTypes.string.isRequired
}

export default HeroesList