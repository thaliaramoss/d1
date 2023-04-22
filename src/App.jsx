import { Card } from "./components/Card"
import { Header } from "./components/Header"

function App() {
  return (
    <div>
    <Header/>
    <Card 
    date="02 de jul, 2021"
    title="Agora é oficial: o Windows 11 está vindo"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis."
    />
    <Card 
    date="02 de jul, 2021"
    title="Tim Berners-Lee vai leiloar código-fonte da web"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero."
    />
    <Card 
    date="02 de jul, 2021"
    title="Tem Firefox novo no pedaço e você vai querer migrar"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est."
    />
    <Card 
    date="02 de jul, 2021"
    title="John McAfee, criador do antivírus McAfee, morre"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero."
    />
    </div>

  )
}

export default App
