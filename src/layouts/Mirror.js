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
            />
            <h5 className="text-center mt-4 mb-5">Through the Mirror</h5>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-around">
          <div>
            <Card
              pickedCards={this.props.pickedCards}
              type="glyphs"
              index={0}
            />
            <h5 className="text-center mt-4 mb-5">Smoky Mirror</h5>
          </div>
          <div>
            <Card
              pickedCards={this.props.pickedCards}
              type="glyphs"
              index={1}
            />
            <h5 className="text-center mt-4 mb-5">Clear Mirror</h5>
          </div>
        </div>
      </div>
    );
  }
}
export default Mirror;
