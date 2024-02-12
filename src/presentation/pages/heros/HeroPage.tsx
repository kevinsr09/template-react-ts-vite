import { useParams } from 'react-router-dom'
import { getHeroById } from '../../../config/helpers/getHeroById'
import { useMemo } from 'react'

export const HeroPage = (): JSX.Element => {
  const params = useParams()
  const { id } = params

  if (id == null) {
    return <>Hero not found</>
  }

  const hero = useMemo(() => getHeroById(id), [id]) // getHeroById(id)
  return (
    <>
      <h1>HeroPage</h1>
      {hero != null && (
        <section>
          <article>
            <img src={'/assets/heroes/' + hero.id + '.jpg'} alt={hero.superhero} />
            <h3>{hero.superhero}</h3>
            <p>{hero.alter_ego}</p>
          </article>
        </section>
      )}
    </>
  )
}
