import { heroes } from "../data/heroes"


export const getHeroesByName = (heroName = '') => {

    heroName = heroName.toLocaleLowerCase().trim()
    if(heroName.length === 0) return []
    
    return heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().includes(heroName)
    )
}
