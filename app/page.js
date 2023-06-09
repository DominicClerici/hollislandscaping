import About from "@components/home/About/About"
import Contact from "@components/home/Contact/Contact"
import Hello from "@components/home/HelloSection/Hello"
import Projects from "@components/home/Projects/Projects"
import Services from "@components/home/Services/Services"

export default function Home() {
  return (
    <div>
      <Hello></Hello>
      <Services></Services>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
    </div>
  )
}
