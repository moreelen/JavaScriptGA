// Where to insert the
const mountNode = document.getElementById('root');

// This is the cookie cutter.
// class MyComponent extends React.Component {
//   render(){
//     return (<p>Hello World</p>);
//   }
// }

// Write it into the page. Pass two arguments: 1. the component writen as HTML. 2. what to do with it.
// ReactDOM.render(<MyComponent />, mountNode);

// Give it a state when it first builds.
class MyComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this); // Bind the increment function to this instance
  }
  increment(){
    const newCount = this.state.count + 1;
    this.setState({ count: newCount });
  }
  render(){
    return(
      <div>
      Hello {this.state.count} // Prints out the state.
      <button onClick = {this.increment}>+</button>
      </div>
    )
  }
}

// Prints out the James property from the name.
// class MyComponent extends React.Component {
//   render(){
//     return (<p>Hello {this.props.name}</p>);
//   }
// }

// Adds a James property.
ReactDOM.render(<MyComponent name="James" />, mountNode);

// Multiple components.
// ReactDOM.render(<div>
//   <MyComponent name="James" />
//   <MyComponent name="Pedro" />
//   </div>, mountNode);
