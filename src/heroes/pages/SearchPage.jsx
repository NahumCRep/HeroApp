import { useNavigate, useLocation } from 'react-router-dom'
import HeroCard from '../components/HeroCard'
import AlertBox from '../components/AlertBox'
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../helpers'

const SearchPage = () => {

  const { searchText, onInputChange, onResetForm } = useForm({ searchText: '' })
  const navigate = useNavigate()
  const location = useLocation()

  const { q } = queryString.parse(location.search)
  const heroes = getHeroesByName(q)

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    // if(searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero..."
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-primary mt-2">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <AlertBox query={q} dataLength={heroes.length} />

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default SearchPage