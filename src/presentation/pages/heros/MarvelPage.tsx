import { HeroList } from '../../components/heros/HeroList'

export const MarvelPage = (): JSX.Element => {
  return (
    <>
      <h1>Marvel</h1>

      <HeroList publisher="Marvel Comics" />
    </>
  )
}
