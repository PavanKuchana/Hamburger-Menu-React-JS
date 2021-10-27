import Header from '../Header'

import {
  HomeContainer,
  HomeImageContainer,
  MobileHomeImage,
  DesktopHomeImage,
} from './styledComponents'

const Home = () => (
  <HomeContainer>
    <Header />
    <HomeImageContainer>
      <MobileHomeImage
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
      />
      <DesktopHomeImage
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
      />
    </HomeImageContainer>
  </HomeContainer>
)

export default Home
