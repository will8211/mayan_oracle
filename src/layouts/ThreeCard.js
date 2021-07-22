import React from "react";
import Card from "../Card.js";

const cardDelay = process.env.REACT_APP_CARD_DELAY;

class ThreeCard extends React.Component {
  render() {
    return (
      <div className="d-flex flex-wrap justify-content-around">
        <div>
          <Card
            pickedCards={this.props.pickedCards}
            type="mixed"
            index={0}
            waitBeforeShow={cardDelay}
          />
          <h5 className="text-center m-5">{this.props.meanings[0]}</h5>
        </div>
        <div>
          <Card
            pickedCards={this.props.pickedCards}
            type="mixed"
            index={1}
            waitBeforeShow={cardDelay * 2}
          />
          <h5 className="text-center m-5">{this.props.meanings[1]}</h5>
        </div>
        <div>
          <Card
            pickedCards={this.props.pickedCards}
            type="mixed"
            index={2}
            waitBeforeShow={cardDelay * 3}
          />
          <h5 className="text-center m-5">{this.props.meanings[2]}</h5>
        </div>
      </div>
    );
  }
}
export default ThreeCard;
