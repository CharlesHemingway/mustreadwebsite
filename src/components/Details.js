import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'
import styled from 'styled-components'
import Product from './Product';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {
          (value)=>{
            const {id, author, img, info, price, title, inCart} = 
            value.detailProduct;

            return (
              <Wrapper>

                  <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                        <img src={img} className="img-fluid" alt="product"/>
                    </div>                
                    <div className="col-10 mx-auto col-md-6 my-3">
                      <h2>{title}</h2>
                      <h4 className="text-blue mt-3 mb-2">
                        by <span>{author}</span>
                      </h4>
                      <h4 className="text-blue">
                        <strong>
                          price: <span>$</span> {price}
                        </strong>
                      </h4>
                      <p className="font-weight-bold mt-3 mb-0">
                          description:
                      </p>
                      <p className="text-muted lead">
                        {info}
                      </p>
                      <div>
                        <Link to="/">
                          <ButtonContainer>
                            back to products
                          </ButtonContainer>
                        </Link>
                          <ButtonContainer 
                            disabled={inCart?true:false}
                            onClick={()=>{
                              value.addToCart(id);
                              value.openModal(id);
                            }}
                          >
                            {inCart ? "inCart":"add to cart"}
                          </ButtonContainer>
                      </div>
                    </div>
                  </div>
                </Wrapper>
            );

          }
        }
      </ProductConsumer>
    )
  }
}

const Wrapper = styled.div`
background:transparent;
padding:3em;

`;

test-ossiel-landingpage-site.surge.sh