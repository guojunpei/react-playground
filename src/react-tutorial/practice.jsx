//
//ReactDOM.render(<h1>hello,word!</h1>, document.getElementById('root'));

class welcome extends React.Component{
    render(){
        return <h1>hello,{this.props.name}</h1>
    }
}
