import './resultdisplay.css';
import React from 'react'

class resultdisplay extends React.Component{
  constructor(props){
    super(props);
    console.log("props"+this.props.operand1);
  }
  render(){
    return (
        <div className="output">
          <p>{this.props.operand1}{this.props.operator}{this.props.operand2}</p>
          {this.props.result?<p>={this.props.result}</p>:<p></p>}
        </div>
    );

  }
 
}

export default resultdisplay;
