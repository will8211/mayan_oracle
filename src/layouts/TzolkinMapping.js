import React from "react";
import Card from "../Card.js";

class SwordAndChalice extends React.Component {
  render() {
    return (
      <div className="m-5 d-flex justify-content-around">
        <div>
          <Card
            pickedCards={this.props.pickedCards}
            type="glyphs"
            index={0}
          />
          <div className="text-center m-5">Star-glyph</div>
        </div>
        <div>
          <Card
            pickedCards={this.props.pickedCards}
            type="numerals"
            index={0}
          />
          <div className="text-center m-5">Resonance</div>
        </div>
      </div>
    );
  }
}
export default SwordAndChalice;
