import React from "react";
import Card from "../Card.js";

const cardDelay = process.env.REACT_APP_CARD_DELAY;

class OneCard extends React.Component {
  render() {
    return (
      <div className="d-flex flex-wrap justify-content-around">
        <div>
          <Card
            pickedCards={this.props.pickedCards}
            type={this.props.types[0]}
            index={0}
            waitBeforeShow={cardDelay}
          />
        </div>
      </div>
    );
  }
}
export default OneCard;
