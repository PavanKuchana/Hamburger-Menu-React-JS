import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavHeader = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 0px 0px 0px 1px #dcdcdc;
`

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  padding-top: 18px;
  padding-bottom: 18px;
  max-width: 458px;
  @media screen and (min-width: 768px) {
    padding-top: 26px;
    padding-bottom: 26px;
    max-width: 1110px;
  }
`

export const WebsiteLogo = styled.img`
  width: 38px;
  height: 38px;
  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`

export const HamburgerIconButton = styled.button`
  background-color: transparent;
  width: 42px;
  height: 35px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const ModalContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 458px;
  @media screen and (min-width: 768px) {
    max-width: 1110px;
  }
`

export const CloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: none;
  margin-top: 32px;
  outline: none;
  cursor: pointer;
`

export const NavLinksList = styled.ul`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 0;
`

export const NavLinkItem = styled.li`
  list-style-type: none;
`

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1e293b;
  text-decoration: none;
  margin-bottom: 32px;
`

export const NavLinkContent = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 32px;
  line-height: 1.2;
  margin: 0px;
  margin-left: 8px;
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`
