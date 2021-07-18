import React from 'react';
import Card from '../Card.js'

class SwordAndChalice extends React.Component {
  render() {
    return (
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="m-5">
                <Card></Card>
                </div>
                <div className="text-center m-5">Sword</div>
            </div>
            <div className="col-md-6">
                <div className="m-5">
                <Card></Card>
                </div>
                <div className="text-center m-5">Chalice</div>
            </div>
       </div>
    </div>
    )
  }
}
export default SwordAndChalice;