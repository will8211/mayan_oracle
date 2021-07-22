import React from "react";
import Card from "../Card.js";

const cardDelay = process.env.REACT_APP_CARD_DELAY;

class SwordAndChalice extends React.Component {
  render() {
    return (
      <div className="d-flex flex-wrap justify-content-around">
        <div>
          <Card
            pickedCards={this.props.pickedCards}
            type={this.props.types[0]}
            index={this.props.indexes[0]}
            waitBeforeShow={cardDelay}
          />
          <h5 className="text-center m-5">{this.props.meanings[0]}</h5>
        </div>
        <div>
          <Card
            pickedCards={this.props.pickedCards}
            type={this.props.types[1]}
            index={this.props.indexes[1]}
            waitBeforeShow={cardDelay * 2}
          />
          <h5 className="text-center m-5">{this.props.meanings[1]}</h5>
        </div>
      </div>
    );
  }
}
export default SwordAndChalice;
