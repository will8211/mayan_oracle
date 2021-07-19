import React from "react";
import Card from "../Card.js";

class ThreeCard extends React.Component {
  render() {
    return (
      <div>
        <div className="d-flex flex-wrap justify-content-around">
          <div>
            <Card
              pickedCards={this.props.pickedCards}
              type="glyphs"
              index={2}
              waitBeforeShow={600}
            />
            <h5 className="text-center mt-4 mb-5">Branches</h5>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-around">
          <div>
            <Card
              pickedCards={this.props.pickedCards}
              type="glyphs"
              index={1}
              waitBeforeShow={400}
            />
            <h5 className="text-center mt-4 mb-5">Trunk</h5>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-around">
          <div>
            <Card
              pickedCards={this.props.pickedCards}
              type="glyphs"
              index={0}
              waitBeforeShow={200}
            />
            <h5 className="text-center mt-4 mb-5">Roots</h5>
          </div>
        </div>
      </div>
    );
  }
}
export default ThreeCard;
