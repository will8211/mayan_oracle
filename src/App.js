import React from 'react';
import Layout from './Layout.js'
import './App.css'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      layoutName: '',
      selection: ''
    };
  }

  draw = () => {
    this.setState({
      layoutName: this.state.selection,
      pickedCards: this.getPickedCards()
    });
  }

  handleChange = (event) => {
    this.setState({selection: event.target.value});
  }

  getPickedCards = () => {
    return {
      mixed: this.getSequence('mixed'),
      glyphs: this.getSequence('glyphs'),
      numerals: this.getSequence('numerals'),
      lenses: this.getSequence('lenses')
    }
  }

  getSequence(cardType) {

    let range;
    switch(cardType) {
      case 'glyphs':
        range = [1, 20];
        break;
      case 'numerals':
        range = [21, 33];
        break;
      case 'lenses':
        range = [34, 44];
        break;
      default:
        range = [1, 44];
    }

    let picked = [];
    while (picked.length < 7) {
      let card = this.getRandom(range[0], range[1]);
      if (!picked.some(e => e === card)) {
        picked.push(card);
      }
    }
    console.log(picked)
    return picked;
  }

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>

            <div className="input-group m-5">
              <select className="form-select" value={this.state.selection} onChange={this.handleChange}>
                <option value=''>Pick a spread...</option>
                <option value="oneCard">One card consultation</option>
                <option value="swordAndChalice">Sword and chalice</option>
                <option value="tzolkinMapping">Tzolkin mapping</option>
              </select>
              <button className="btn btn-primary" type="button" onClick={this.draw}>Draw Cards</button>
            </div>

          </div>
        </div>
        <div className='row'>
          <Layout
            layoutName={this.state.layoutName}
            pickedCards={this.state.pickedCards}
          ></Layout>
        </div>
      </div>
    )
  }
}
export default App;