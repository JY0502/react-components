
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    // `state` is just an object literal
    this.state = {
      done: false
    };
  }

  // When a list item is clicked, we will toggle the `done`
  // boolean, and our component's `render` method will run again
  onGroceryListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    // Making the style conditional on our `state` lets us
    // update it based on user interactions.
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    // You can pass inline styles using React's `style` attribute to any component
    // snake-cased css properties become camelCased this this object
    return (
      <li style={style} onClick={this.onGroceryListItemClick.bind(this)}>{this.props.item}</li>
    );
  }
}
var GroceryList = (props) => (

  // Because we used curly braces with this arrow function
  // we have to write an explicit `return` statement

  <ul>
    {
      props.items.map( item =>
        <GroceryListItem item = {item} />
      )}
  </ul>
);


var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={['kale', 'cucumber', 'spinach']}/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));