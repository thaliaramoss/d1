import { Blog, Container, Input, Logo, Search, Section, Top } from "./styles";
import {BsSearch} from 'react-icons/bs'

export function Header() {
  return(
    <Section>
      <Container>
      <Top>
        <Logo>Codelândia</Logo>
        <Blog>blog</Blog>
      </Top>
      <Search>
        <BsSearch size={20}/>
        <Input placeholder="Pesquisar no Blog"/>
      </Search>
      </Container>
    </Section>
  )
}