import Header from '../Header'

import {
  AboutContainer,
  AboutImageContainer,
  MobileAboutImage,
  DesktopAboutImage,
} from './styledComponents'

const About = () => (
  <AboutContainer>
    <Header />
    <AboutImageContainer>
      <MobileAboutImage
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="About"
      />
      <DesktopAboutImage
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="About"
      />
    </AboutImageContainer>
  </AboutContainer>
)

export default About
