import React, { Component } from 'react';
import './index.css';

class Card extends Component {
  render() {


    return (
      <div className="card">
        <div className="front">
          Front
        </div>
        <div className="back">
          Back
        </div>
      </div>
    );
  }
}

export default Card;
