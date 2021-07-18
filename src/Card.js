import React from 'react';
import ReactCardFlip from 'react-card-flip';
import back from './back.png';

class Card extends React.Component {
  constructor() {
    super();
    this.state = { isFlipped: false };
  }

  componentWillReceiveProps() {
    this.setState({ isFlipped: false });
  }

  handleClick = (e) => {
    e.preventDefault();
      this.setState({ isFlipped: true });
  }

  getCardPath() {
    return process.env.PUBLIC_URL + '/cards/' + this.props.cardNumber + '.png'
  }

  render() {
    return (
    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
      <div>
        <img 
          src={back}
          alt="card back"
          width="253"
          height="353"
          onClick={this.handleClick}
        />
      </div>
      <div>
        <img
          src={this.getCardPath()}
          alt="card front"
          width="253"
          height="353"
          onClick={this.handleClick}
        />
      </div>  
    </ReactCardFlip>
    )
  }
}

export default Card;