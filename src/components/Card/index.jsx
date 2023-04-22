import { Container, Desc, Icon, Info, Section, Title } from "./styles";

export function Card({date, title, description} ) {
  return(
    <Section>
    <Container>
      <Info>
        {date}
        <Icon/>
      </Info>
      <Title>{title}</Title>
      <Desc>{description}</Desc>
    </Container>
    </Section>
  )
}