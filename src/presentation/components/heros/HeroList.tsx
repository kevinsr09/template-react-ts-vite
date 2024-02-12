import { useNavigate } from 'react-router-dom'
import { getHeroByPublisher, type Publisher } from '../../../config/helpers/getHeroByPublisher'
import { useMemo } from 'react'

export interface HeroListProps {
  publisher: Publisher
}

export const HeroList = ({ publisher }: HeroListProps): JSX.Element => {
  const heros = useMemo(() => getHeroByPublisher(publisher), [publisher]) // getHeroByPublisher(publisher)
  const navigate = useNavigate()
  const handleGoToHero = (id: string): void => {
    navigate(`/hero/${id}`)
  }

  return (
    <>
      <h1>HeroList</h1>

      <section className="flex w-[80%] gap-5 m-auto">
        {heros.map((hero) => (
          <article key={hero.id}>
            <img src={'/assets/heroes/' + hero.id + '.jpg'} alt={hero.superhero} />
            <h3>{hero.superhero}</h3>
            <p>{hero.alter_ego}</p>
            <button
              className="bg-cyan-500"
              onClick={() => {
                handleGoToHero(hero.id)
              }}>
              Ver más
            </button>
          </article>
        ))}
      </section>
    </>
  )
}
