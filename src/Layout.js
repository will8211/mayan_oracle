import React from 'react';
import OneCard from './layouts/OneCard.js'
import SwordAndChalice from './layouts/SwordAndChalice.js';

class Layout extends React.Component {
  render() {
    if (this.props.name === 'swordAndChalice') {
      return (
        <SwordAndChalice></SwordAndChalice>
      )
    } else {
      return (
        <OneCard></OneCard>
      )
    }
  }
}
export default Layout;