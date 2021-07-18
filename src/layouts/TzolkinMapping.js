import React from "react";
import Card from "../Card.js";

class SwordAndChalice extends React.Component {
  render() {
    return (
      <div className="m-5 d-flex justify-content-around">
        <div>
          <Card
            cardNumber={this.props.pickedCards.glyphs[0]}
            pickedCards={this.props.pickedCards}
          ></Card>
          <div className="text-center m-5">Star-glyph</div>
        </div>
        <div>
          <Card
            cardNumber={this.props.pickedCards.numerals[0]}
            pickedCards={this.props.pickedCards}
          ></Card>
          <div className="text-center m-5">Resonance</div>
        </div>
      </div>
    );
  }
}
export default SwordAndChalice;
