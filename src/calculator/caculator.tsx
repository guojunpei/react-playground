import React from 'react';
import './calculator.scss';

export interface TypeSave {
  typeContent: string;
}
export class Calculator extends React.Component<{}, TypeSave> {
  constructor(props: {}) {
    super(props);
    this.state = {
      typeContent: '0',
    };
    this.handleType = this.handleType.bind(this);
  }

  handleType(i: string) {
    this.setState((prev) => ({
      typeContent: prev.typeContent + i,
    }));
  }

  renderButton = (i: string) => {
    return (
      <button type="button" onClick={() => this.handleType(i)}>
        {i}
      </button>
    );
  };

  render() {
    const { typeContent } = this.state;
    return (
      <div id="main">
        <div id="type-show">
          <div>{typeContent}</div>
        </div>
        <div id="type-board">
          <div className="board-row">
            {this.renderButton('c')}
            {this.renderButton('back')}
            {this.renderButton('%')}
            {this.renderButton('/')}
          </div>
          <div className="board-row">
            {this.renderButton('7')}
            {this.renderButton('8')}
            {this.renderButton('9')}
            {this.renderButton('X')}
          </div>
          <div className="board-row">
            {this.renderButton('4')}
            {this.renderButton('5')}
            {this.renderButton('6')}
            {this.renderButton('-')}
          </div>
          <div className="board-row">
            {this.renderButton('1')}
            {this.renderButton('2')}
            {this.renderButton('3')}
            {this.renderButton('+')}
          </div>
          <div className="board-row">
            {this.renderButton('0')}
            {this.renderButton('.')}
            {this.renderButton('=')}
          </div>
        </div>
      </div>
    );
  }
}
