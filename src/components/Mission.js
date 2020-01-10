
import React, { Component } from 'react'
import styled from 'styled-components'

export default class Mission extends Component {
    render() {
        return (
               
            <Wrapper>
                
                <div className="card">
                    <h3 className="title font-weight-bold">Our Mission</h3>
                    <p>
                    MustRead Incorporated is the top open creative commons publisher of high-quality books.
                    Our mission is to make works freely available to readers worldwide.
                    </p>
                    <br></br>
                </div>
            </Wrapper>

        )
    }
}


const Wrapper = styled.div`
padding:10em;
.card {
    border-color: transparent;
    padding:5em;
  }


`;