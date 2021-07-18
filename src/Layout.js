import React from 'react';
import OneCard from './layouts/OneCard.js'
import SwordAndChalice from './layouts/SwordAndChalice.js';
import TzolkinMapping from './layouts/TzolkinMapping.js';


class Layout extends React.Component {

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
    return picked;
  }

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getLayout(layoutName) {
    let layout;

    switch(layoutName) {
      case 'swordAndChalice':
        layout = (
          <SwordAndChalice 
            pickedCards={this.getPickedCards()}
          ></SwordAndChalice>
          )
        break;
      case 'tzolkinMapping':
        layout = (
          <TzolkinMapping 
            pickedCards={this.getPickedCards()}
          ></TzolkinMapping>
        )
        break;
      default:
        layout = (
          <OneCard 
            pickedCards={this.getPickedCards()}
          ></OneCard>
        )
    }
  return layout;
  }

  render() {
      return this.getLayout(this.props.layoutName)
    }
  }

  export default Layout;