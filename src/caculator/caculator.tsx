import React from 'react';

export interface TypeSave {
  typeContent: string;
}
export class Caculator extends React.Component<{}, TypeSave> {
  constructor(props: TypeSave) {
    super(props);
    this.state = {
      typeContent: '0',
    };
  }

  renderButton = (i: string) => {
    return <button>{i}</button>;
  };

  handleType(i: string) {
    this.setState({
      typeContent: this.state.typeContent + i,
    });
  }

  render() {
    return (
      <div id="main">
        <div id="type-show">
          <input value={this.state.typeContent} />
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
