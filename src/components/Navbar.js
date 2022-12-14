import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import Menu from './Login/Menu';

export default class Navbar extends Component {
  state = {
    showMenu: false
  }

  handleMenu = () => {
    this.setState(state => ({
      showMenu: !state.showMenu
    }))
  }
    render() {
        return (
            <NavWrapper className="navbar nav-bar-expand-sm navbar-dark px-sm-5 position-relative">
               <Link to='/'>
                  <img src={logo} alt="store" className="navbar-brand" />
               </Link> 
               <ul className="navbar-nav align-items-center">
                 <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                       Products
                    </Link>
                 </li>
               </ul>
               <Link to="/cart" className="ml-auto">
                  <ButtonContainer>
                      <i className="fas fa-cart-plus">my cart</i>
                  </ButtonContainer>
               </Link>
              <ButtonContainer onClick={this.handleMenu}>
                  <i className="fas fa-bars"></i>
                  <i className="fas fa-user"></i>
              </ButtonContainer>
              {this.state.showMenu && <Menu handleMenu={this.handleMenu} handleLogin={this.props.handleLogin} />}
            </NavWrapper>
        )
    }
}
const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3 rem;
    text-transform:capitalize;
}
`;
