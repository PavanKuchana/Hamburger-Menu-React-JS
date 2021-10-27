import Header from '../Header'

import {
  NotFoundContainer,
  NotFoundContentContainer,
  NotFoundResponsiveContainer,
  Image,
  Heading,
  Description,
} from './styledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <Header />
    <NotFoundContentContainer>
      <NotFoundResponsiveContainer>
        <Image
          src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
          alt="not found"
        />
        <Heading>Lost Your Way?</Heading>
        <Description>
          Sorry, we cannot find that page. You will find lots to explore on the
          home page
        </Description>
      </NotFoundResponsiveContainer>
    </NotFoundContentContainer>
  </NotFoundContainer>
)

export default NotFound
