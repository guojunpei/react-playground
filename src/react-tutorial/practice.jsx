//
//ReactDOM.render(<h1>hello,word!</h1>, document.getElementById('root'));

class welcome extends React.Component{
    render(){
        return <h1>hello,{this.props.name}</h1>
    }
}

function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }

const element = <div tabIndex="0"></div>;

const element = <img src={user.avatarUrl}></img>;
const element = <img src={user.avatarUrl} />;

const element = (
    <h1 className="greeting">
      Hello, world!
    </h1>
  );

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);

const element = {
    type: 'h1',
    props: {
      className: 'greeting',
      children: 'Hello, world!'
    }
  };

<div id="root"></div>

const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));

function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
  }
  
  setInterval(tick, 1000);
  
