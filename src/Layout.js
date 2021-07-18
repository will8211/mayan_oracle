import React from 'react';
import OneCard from './layouts/OneCard.js'
import SwordAndChalice from './layouts/SwordAndChalice.js';
import TzolkinMapping from './layouts/TzolkinMapping.js';


class Layout extends React.Component {

  getLayout(layoutName) {
    let layout;

    switch(layoutName) {
      case 'swordAndChalice':
        layout = (
          <SwordAndChalice 
            pickedCards={this.props.pickedCards}
          ></SwordAndChalice>
          )
        break;
      case 'tzolkinMapping':
        layout = (
          <TzolkinMapping 
            pickedCards={this.props.pickedCards}
          ></TzolkinMapping>
        )
        break;
      case 'oneCard':
        layout = (
          <OneCard 
            pickedCards={this.props.pickedCards}
          ></OneCard>
        )
        break;
      default:
        layout = null;
    }
  return layout;
  }

  render() {
    return this.getLayout(this.props.layoutName)
  }
}

export default Layout;