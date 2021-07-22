import React from "react";
import Card from "../Card.js";

class FiveCard extends React.Component {
  render() {
    return (
      <div>
        <div className="d-flex flex-wrap justify-content-around">
          <div>
            <Card
              pickedCards={this.props.pickedCards}
              type="mixed"
              index={this.props.indexes[0]}
              waitBeforeShow={this.props.waitTimes[0]}
            />
            <h5 className="text-center mt-4">{this.props.meanings[0]}</h5>
            <h6 className="text-center mb-5">{this.props.subMeanings[0]}</h6>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-around">
          <div>
            <Card
              pickedCards={this.props.pickedCards}
              type="mixed"
              index={this.props.indexes[1]}
              waitBeforeShow={this.props.waitTimes[1]}
            />
            <h5 className="text-center mt-4">{this.props.meanings[1]}</h5>
            <h6 className="text-center mb-5">{this.props.subMeanings[1]}</h6>          </div>
          <div>
            <Card
              pickedCards={this.props.pickedCards}
              type="mixed"
              index={this.props.indexes[2]}
              waitBeforeShow={this.props.waitTimes[2]}
            />
            <h5 className="text-center mt-4">{this.props.meanings[2]}</h5>
            <h6 className="text-center mb-5">{this.props.subMeanings[2]}</h6>          </div>
          <div>
            <Card
              pickedCards={this.props.pickedCards}
              type="mixed"
              index={this.props.indexes[3]}
              waitBeforeShow={this.props.waitTimes[3]}
            />
            <h5 className="text-center mt-4">{this.props.meanings[3]}</h5>
            <h6 className="text-center mb-5">{this.props.subMeanings[3]}</h6>          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-around">
          <div>
            <Card
              pickedCards={this.props.pickedCards}
              type="mixed"
              index={this.props.indexes[4]}
              waitBeforeShow={this.props.waitTimes[4]}
            />
            <h5 className="text-center mt-4">{this.props.meanings[4]}</h5>
            <h6 className="text-center mb-5">{this.props.subMeanings[4]}</h6>          </div>
        </div>
      </div>
    );
  }
}
export default FiveCard;
