import React from 'react';
import ReactCardFlip from 'react-card-flip';
import back from './back.png';

class App extends React.Component {
  constructor() {
    super();
      this.state = { isFlipped: false };
      this.handleClick = this.handleClick.bind(this);
      const random = Math.floor(Math.random() * 44) + 1;
      this.state = { card: process.env.PUBLIC_URL + '/cards/' + random + '.png' };
  }

  handleClick(e) {
    e.preventDefault();
    if (!this.state.isFlipped) {
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
  }

  render() {
    return (
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
            <div>
                <img src={back} alt="card back" width="253" height="353" onClick={this.handleClick}/>
            </div>
            <div>
                <img src={this.state.card} alt="card front" width="253" height="353" onClick={this.handleClick}/>
            </div>  
        </ReactCardFlip>
    )
  }
}

export default App;