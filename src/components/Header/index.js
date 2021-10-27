import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

import {
  NavHeader,
  NavContent,
  WebsiteLogo,
  HamburgerIconButton,
  ModalContainer,
  CloseButton,
  NavLinksList,
  NavLinkItem,
  NavLink,
  NavLinkContent,
} from './styledComponents'

const Header = () => (
  <NavHeader>
    <NavContent>
      <Link to="/">
        <WebsiteLogo
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <HamburgerIconButton data-testid="hamburgerIconButton">
            <GiHamburgerMenu size="30" />
          </HamburgerIconButton>
        }
        className="popup-content"
      >
        {close => (
          <ModalContainer>
            <CloseButton
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size="30" color="#616e7c" />
            </CloseButton>
            <NavLinksList>
              <NavLinkItem>
                <NavLink to="/" onClick={() => close()}>
                  <AiFillHome size="36" />
                  <NavLinkContent>Home</NavLinkContent>
                </NavLink>
              </NavLinkItem>
              <NavLinkItem>
                <NavLink to="/about" onClick={() => close()}>
                  <BsInfoCircleFill size="32" />
                  <NavLinkContent>About</NavLinkContent>
                </NavLink>
              </NavLinkItem>
            </NavLinksList>
          </ModalContainer>
        )}
      </Popup>
    </NavContent>
  </NavHeader>
)

export default withRouter(Header)
