class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
  }



  render() {
    var style = {
      'fontWeight': this.state.hover ? 'bold' : 'normal'
    };

    return (
      <li style = {style} onMouseOver={this.onListItemMouseOver.bind(this)}>{this.props.item}</li>
    );
  }

  onListItemMouseOver() {
    this.setState({hover: !this.state.hover})
    console.log('working');
  }

}

var GroceryList = () => (
 <ul>
   <GroceryListItem item={'kale'} />
   <GroceryListItem item={'turnip'} />
   <GroceryListItem item={'radish'} />
 </ul>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));

// return (
//       <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
//     );