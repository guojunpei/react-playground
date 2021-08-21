/* eslint-disable react/prefer-stateless-function */
import React from 'react';

export interface SquareProps {
  value: number;
}
export class Square extends React.Component<SquareProps, {}> {
  //TODO: remove the constructor
  constructor(props:SquareProps){
    super(props);
    this.state = {
      value: null,
    }
  }

  render() {
    // TODO: use onClick={this.props.onClick}
    // TODO: replace this.state.value with this.props.value
    const { value } = this.props;
    return (
      <button type="button" className="square" onClick={()=>{console.log(`state:${value}`),this.setState({value: `x`})}}>
        {value}
      </button>
    );
  }
}
