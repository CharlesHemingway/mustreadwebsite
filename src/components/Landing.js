import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import styled from "styled-components"
import demo from '../demo.png'
import logo from '../logo.svg'

import {ButtonContainer} from './Button'

export default class Landing extends Component {
    render() {
        return (

            <Container>
              <div className="left">
                <img src={logo} className="brand"/>
                <img src={demo} className="img"/> 
              </div>
              <div className="right">
                <div className="card text-center">
                  <h1 className="title font-weight-bold">Join the <strong className="text-bright">intellectual</strong> revolution!</h1>
                    <h3 className="content">
                    From the brilliant mind of the only person ever to be censored at the Oxford Union. 
                    For the first time in seven years, a book is about to be released by the internationally
                    acclaimed activist and philosopher Heather Marsh. If it wasn't exciting enough
                    this is the first in a series of 12 books dissecting every aspect of our society, institutions, and you.
                   </h3>
                   <h2><strong className="text-capitalize text-bright">preorder your copy now!</strong></h2>
                   <a  to href="http://a.co/gm5RgDN" target="_blank">
                     <ButtonContainer className="bt-bk">
                        <span className="mr-2">
                           <i className="fas fa-cart-plus "></i>
                           </span>
                           Pre Order Now
                   </ButtonContainer> 
                   </a>
                   <br></br>
                   <Link to="/books">
                   <ButtonContainer className="bt-enter">
                        <span className="mr-2">
                           <i className="fas fa-door-open"></i>
                           </span>
                           Proceed to main site...
                   </ButtonContainer> 
                   </Link>
                   
             
                </div>
              </div>

            </Container>

                 
        )
    }
}

const Container = styled.div`
background:transparent;
height:90%vh;
width:100%;

.bt-bk{
  background:red;
  color:white;
}

.bt-enter{
  border-color:transparent;
  font-size: 1rem !important;
}

.card {
  border-color: transparent;
  background: transparent;
  padding:2em;
}

.left{
  background: linear-gradient(188deg, rgba(51,102,153,1) 0%, rgba(0,159,253,1) 100%);
  position: fixed;
  height:100vh;
  width:50vw;
  top:0;
  left:0;
  bottom:0;}

.right{
  background: var(--mainWhite);
  color:var(--lightPink);
  position:fixed;
  height:100vh;
  width:50vw;
  top:10;
  right:0;
  bottom:0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.img{
  position: fixed;
  width:60vw;
  left: 0;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  display: flex;
  box-sizing: border-box;
}

.brand{
  top:0;
  left:0;
  right:0;
  bottom:0;
  padding:1.2em;
  height:14vh;
}

@media screen and (max-width: 950px) {

// .left{
// height:60vh;
// font-size: 16px;
// background:var(--mainBlue);
// margin-right: inherit;
// z-index: 1;

// }

.card{
  height:95vh;
  top:0;
  bottom:0;

}
.content{
  font-size:18px;
  padding-bottom:1em;
}
.title{
  font-size:26px;
  padding-bottom:1em;
}


.img {
width: 70vw;
height: 70vh;
padding-top:2em;
padding-right:2em;
left:0;
position: inherit;
z-index: 1;
  } 
}
`;

