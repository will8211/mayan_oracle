import React from 'react';
import Card from '../Card.js'

class SwordAndChalice extends React.Component {
  render() {
    return (
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="m-5">
                <Card
                  cardNumber={this.props.pickedCards.glyphs[0]}
                ></Card>
                </div>
                <div className="text-center m-5">Star-glyph</div>
            </div>
            <div className="col-md-6">
                <div className="m-5">
                <Card
                  cardNumber={this.props.pickedCards.numerals[0]}
                ></Card>
                </div>
                <div className="text-center m-5">Resonance</div>
            </div>
       </div>
    </div>
    )
  }
}
export default SwordAndChalice;