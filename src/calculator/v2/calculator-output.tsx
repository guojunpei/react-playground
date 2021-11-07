import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export class CalculatorOutput extends React.Component<{ output: string }, {}> {
  render() {
    const { output } = this.props;
    return <div className="output">{output}</div>;
  }
}
