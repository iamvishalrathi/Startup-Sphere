import Mission from '../components/home/Mission'
import PositionStructure from '../components/home/PositionStructure'
import Highlights from '../components/home/Highlights'
import Achievements from '../components/home/Achievements'
import Alumni from '../components/home/Alumni'
import ContactForm from '../components/home/ContactForm'

const Home = () => {
  return (
    <div>
      <Mission />
      <PositionStructure />
      <Highlights />
      <Achievements />
      <Alumni />
      <ContactForm />
    </div>
  )
}

export default Home