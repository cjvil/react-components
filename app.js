// var GroceryList = (item) => (
//   <ul>
//     <GroceryListItem />
//   </ul>
// );

// // var GroceryList = () => (
// //   <ul>
// //     <GroceryListItem />
// //     <Kale />
// //   </ul>
// // );

// // var Cucumbers = () => <li>Cucumbers</li>;
// // var Kale = () => <li>Kale</li>;

// var GroceryListItem = (props.item) => (
//   <li>{props.item}</li>
// )

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>{this.props.item}</li>
    );
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