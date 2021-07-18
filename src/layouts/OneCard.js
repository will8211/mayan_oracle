import React from "react";
import Card from "../Card.js";

class OneCard extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="m-5">
              <Card
                cardNumber={this.props.pickedCards.mixed[0]}
                pickedCards={this.props.pickedCards}
              ></Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default OneCard;
