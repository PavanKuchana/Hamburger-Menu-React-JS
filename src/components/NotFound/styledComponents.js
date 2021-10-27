import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const NotFoundContentContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    align-items: flex-start;
    margin-top: 60px;
  }
`

export const NotFoundResponsiveContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 1110px;
  @media screen and (max-width: 768px) {
    margin-top: 60px;
    max-width: 458px;
  }
`

export const Image = styled.img`
  width: 328px;
  @media screen and (min-width: 768px) {
    width: 475px;
  }
`

export const Heading = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  margin: 0px;
  margin-top: 32px;

  @media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 36px;
    line-height: 1.22;
  }
`

export const Description = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 1.75;
  margin-top: 16px;

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 12px;
    line-height: 1.33;
    width: 241px;
    margin-top: 6px;
  }
`
