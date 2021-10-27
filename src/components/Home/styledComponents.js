import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const HomeImageContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6px;
`

export const MobileHomeImage = styled.img`
  width: 80%;
  max-width: 468px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const DesktopHomeImage = styled.img`
  width: 100%;
  max-width: 1110px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
