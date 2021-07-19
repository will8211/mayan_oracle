import React from "react";
import Card from "../Card.js";

class OneCard extends React.Component {
  render() {
    return (
      <div className="d-flex flex-wrap justify-content-around">
        <div>
          <Card
            pickedCards={this.props.pickedCards}
            type="mixed"
            index={0}
          />
        </div>
      </div>
    );
  }
}
export default OneCard;
