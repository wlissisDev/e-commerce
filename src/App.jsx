import styled from 'styled-components'
import { Announcement } from './components/Announcement'
import { Categories } from './components/Categories';
import { Navbar } from './components/Navbar'
import { NewsLetter } from './components/NewsLetter';
import { Products } from './components/Products';
import { Slider } from './components/Slider'

const Container = styled.body`
font-family: 'Roboto', sans-serif;
margin: 0;
padding: 0;
`;


function App() {

  return (
      <div>
        <Announcement />
        <Navbar />
        <Slider />
        <Categories/>
        <Products/>
        <NewsLetter/>
      </div>
  )
}

export default App
