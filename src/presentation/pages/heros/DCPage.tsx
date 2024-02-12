import { HeroList } from '../../components/heros/HeroList'

export const DCPage = (): JSX.Element => {
  return (
    <>
      <h1>DC</h1>

      <HeroList publisher="DC Comics" />
    </>
  )
}
