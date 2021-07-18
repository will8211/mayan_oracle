import React from 'react';
import ReactCardFlip from 'react-card-flip';
import back from './back.png';
import './App.css'

class App extends React.Component {
  constructor() {
    super();
      this.state = { isFlipped: false };
      this.handleClick = this.handleClick.bind(this);
      const random = Math.floor(Math.random() * 4) + 1;
      this.state = { card: process.env.PUBLIC_URL + '/cards/' + random + '.png' };
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    console.log(this.state.card);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="m-5">
              <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                <div>
                  <img src={back} alt="card back" width="253" height="353" onClick={this.handleClick}/>
                </div>
                <div>
                  <img src={this.state.card} alt="card front" width="253" height="353" onClick={this.handleClick}/>
                </div>  
              </ReactCardFlip>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;