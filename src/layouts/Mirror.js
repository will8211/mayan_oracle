import React from "react";
import Card from "../Card.js";

class Mirror extends React.Component {
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
            <h5 className="text-center mt-4 mb-5">(3) Through the Mirror</h5>
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
            <h5 className="text-center mt-4 mb-5">(1) Smoky Mirror</h5>
          </div>
          <div>
            <Card
              pickedCards={this.props.pickedCards}
              type="glyphs"
              index={1}
              waitBeforeShow={400}
            />
            <h5 className="text-center mt-4 mb-5">(2) Clear Mirror</h5>
          </div>
        </div>
      </div>
    );
  }
}
export default Mirror;
