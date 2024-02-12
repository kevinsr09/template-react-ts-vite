import { heroes } from '../data/heros'
import { type Hero } from './getHeroByPublisher'

export const getHeroById = (id: string): Hero | undefined => {
  return heroes.find((hero) => hero.id === id)
}
