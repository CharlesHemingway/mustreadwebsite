import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
//import {ButtonContainer} from './Button'
import styled from 'styled-components'

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand logo"/>
        </Link>

        <ul className="navbar-nav align-items-center">
        {/* <li className="nav-item ml-4">
             <Link to="/home" className="nav-link">
              Home
             </Link>
          </li> */}
          <li className="nav-item ml-4">
             <Link to="/mission" className="nav-link">
              Mission
             </Link>
          </li>
          <li className="nav-item ml-4">
             <Link to="/books" className="nav-link">
              Books
             </Link>
          </li>
        </ul>
          
       
        {/* <Link className="ml-auto " to="/cart">
            <ButtonContainer>
              <span className="mr-2">
                <i className="fas fa-cart-plus"></i>
              </span>
              my cart
            </ButtonContainer> 
        </Link> */}
        <Link className="ml-auto nav-link" to="/">
              <span className="mr-2">
                <i className="fab fa-facebook"></i>
              </span>
        </Link>
        <Link className="ml-1 nav-link" to="/">
              <span className="mr-2">
                <i className="fab fa-twitter"></i>
              </span>
        </Link>
        <Link className="ml-1 nav-link" to="/">
              <span className="mr-2">
                <i className="fab fa-goodreads"></i>
              </span>
        </Link>
      
      

      </NavWrapper>
    )
  }
}


const NavWrapper = styled.nav`
background: linear-gradient(188deg, rgba(51,102,153,1) 0%, rgba(0,159,253,1) 100%);
  
    .nav-link {
      color: var(--mainWhite) !important;
      font-size: 1.3rem;
      text-transform: capitalize;
    }
`;

const ButtonContainer = styled.nav`
    text-transform: capitalize;
    font-size: 1.4rem;
    background:transparent;
    border: 0.05rem solid var(--mainYellow);
    color:var(--mainYellow);
    // border-radius: 05rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover{
    background:var(--mainBlue);
    color: var(--mainWhite);
    }
    &:focus{
    outline: none; 
    }
    @media screen and (max-width: 950px) {
      font-size: 1.0rem;
    }
`;