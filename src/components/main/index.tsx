import * as styles from './styles'

export default function Main() {
  return (
    <styles.Wrapper>
      <styles.Logo
        src="/img/logo.svg"
        alt="Logo com um átomo na cor branca com fundo rosa ao lado do texto React Avançado"
      />
      <styles.Title>Boilerplate</styles.Title>
      <styles.Description>
        Typescript, ReactJS, NextJS e Styled Components
      </styles.Description>
      <styles.Illustration
        src="/img/hero-illustration.svg"
        alt="Imagem de um desenvolvedor de frente para a tela com código"
      />
    </styles.Wrapper>
  )
}
