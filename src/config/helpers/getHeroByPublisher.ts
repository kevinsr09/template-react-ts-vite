import { heroes } from '../data/heros'

export interface Hero {
  id: string
  superhero: string
  publisher: string
  alter_ego: string
  first_appearance: string
  characters: string
}

export type Publisher = 'DC Comics' | 'Marvel Comics'

export const getHeroByPublisher = (publisher: Publisher): Hero[] => {
  return heroes.filter((hero) => hero.publisher === publisher)
}
